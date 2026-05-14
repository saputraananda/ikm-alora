import { useEffect, useRef } from 'react';
import { Renderer, Program, Mesh, Color, Triangle, Vec2 } from 'ogl';

import './LightRays.css';

type RaysOrigin = 'top-left' | 'top-center' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

interface LightRaysProps {
  raysOrigin?: RaysOrigin;
  raysColor?: string;
  raysSpeed?: number;
  lightSpread?: number;
  rayLength?: number;
  followMouse?: boolean;
  className?: string;
}

const vertex = `
  attribute vec2 position;
  attribute vec2 uv;
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 0, 1);
  }
`;

const fragment = `
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform vec3 uColor;
  uniform float uSpread;
  uniform float uSpeed;
  uniform float uLength;
  uniform vec2 uOrigin;
  varying vec2 vUv;

  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
  }

  float noise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(hash(i + vec2(0.0, 0.0)), hash(i + vec2(1.0, 0.0)), u.x),
               mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
  }

  void main() {
    vec2 uv = vUv;
    vec2 p = uv - uOrigin;
    float angle = atan(p.y, p.x);
    float dist = length(p);

    float n = noise(vec2(angle * 10.0, dist * 0.5 - uTime * uSpeed));
    float beams = smoothstep(0.5 - uSpread, 0.5 + uSpread, n);
    beams *= smoothstep(uLength, 0.0, dist);

    vec3 finalColor = uColor * beams;
    gl_FragColor = vec4(finalColor, beams);
  }
`;

const DEFAULT_COLOR = '#ffffff';

export const LightRays: React.FC<LightRaysProps> = ({
  raysOrigin = 'top-center',
  raysColor = DEFAULT_COLOR,
  raysSpeed = 0.5,
  lightSpread = 0.3,
  rayLength = 1.0,
  followMouse = false,
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const renderer = new Renderer({ alpha: true, premultipliedAlpha: false });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);

    const getOriginCoords = (origin: RaysOrigin): [number, number] => {
      switch (origin) {
        case 'top-left': return [0, 1];
        case 'top-center': return [0.5, 1];
        case 'top-right': return [1, 1];
        case 'left': return [0, 0.5];
        case 'right': return [1, 0.5];
        case 'bottom-left': return [0, 0];
        case 'bottom-center': return [0.5, 0];
        case 'bottom-right': return [1, 0];
        default: return [0.5, 1];
      }
    };

    const geometry = new Triangle(gl);
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new Vec2() },
        uMouse: { value: new Vec2(0.5, 0.5) },
        uColor: { value: new Color(raysColor) },
        uSpread: { value: lightSpread },
        uSpeed: { value: raysSpeed },
        uLength: { value: rayLength },
        uOrigin: { value: new Vec2(...getOriginCoords(raysOrigin)) }
      },
      transparent: true
    });

    const mesh = new Mesh(gl, { geometry, program });

    function resize() {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      program.uniforms.uResolution.value.set(width, height);
    }

    window.addEventListener('resize', resize);
    resize();

    let animationId: number;
    function update(t: number) {
      animationId = requestAnimationFrame(update);
      program.uniforms.uTime.value = t * 0.001;
      
      if (followMouse) {
        program.uniforms.uOrigin.value.set(mouseRef.current.x, 1.0 - mouseRef.current.y);
      }
      
      renderer.render({ scene: mesh });
    }

    animationId = requestAnimationFrame(update);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseRef.current = { x, y };
    };

    if (followMouse) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      if (gl.canvas.parentNode) {
        container.removeChild(gl.canvas);
      }
    };
  }, [raysColor, raysOrigin, raysSpeed, lightSpread, rayLength, followMouse]);

  return <div ref={containerRef} className={`light-rays-container ${className}`.trim()} />;
};
