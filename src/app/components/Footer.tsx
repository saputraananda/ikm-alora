import Image from "next/image";
export default function Footer() {
  const logo = "/logo/logo-ikm.png";
  return (
    <footer
      id="contact"
      className="bg-primary-dark text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-48 px-4 py-14 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <Image
            src={logo}
            alt="IKM Laundry"
            width={64}
            height={64}
            className="h-14 w-auto brightness-0 invert"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/80">
            IKM Laundry adalah penyedia layanan laundry rumah sakit dan linen
            rental profesional.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">
            Informasi Kontak
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex items-start gap-2">
              <svg
                className="mt-0.5 h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>
                Jl. Pringgodani 8 No. 101, Harjamukti, Cimanggis, Depok
              </span>
            </li>
            <li>
              <a
                href="tel:08118871101"
                className="flex items-center gap-2 hover:text-white"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
                </svg>
                021 2217 9361 / 0811 8871 101
              </a>
            </li>
            <li>
              <a
                href="mailto:support@ikmlaundry.com"
                className="flex items-center gap-2 hover:text-white"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2Z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                support@ikmlaundry.com
              </a>
            </li>
            <li>
              <a
                href="https://ikmlaundry.com"
                className="flex items-center gap-2 hover:text-white"
              >
                <svg
                  className="h-4 w-4 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
                </svg>
                ikmlaundry.com
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/90">
            Layanan
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-white/80">
            <li>
              <a href="#services" className="hover:text-white">
                Full Service Solutions
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Linen Rental
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Laundry Services
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-white">
                Infection Prevention
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/70 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} IKM Laundry. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">
              Kebijakan Privasi
            </a>
            <span>·</span>
            <a href="#" className="hover:text-white">
              Syarat & Ketentuan
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white hover:text-primary-dark"
    >
      <SocialIcon name={icon} />
    </a>
  );
}

function SocialIcon({ name }: { name: string }) {
  const common = {
    className: "h-4 w-4",
    viewBox: "0 0 24 24",
    fill: "currentColor",
  } as const;
  if (name === "fb")
    return (
      <svg {...common}>
        <path d="M22 12a10 10 0 1 0-11.6 9.88v-6.99H8v-2.89h2.4V9.84c0-2.37 1.41-3.68 3.57-3.68 1.04 0 2.12.18 2.12.18v2.33h-1.2c-1.18 0-1.55.74-1.55 1.49v1.79h2.64l-.42 2.89H13.4v6.99A10 10 0 0 0 22 12Z" />
      </svg>
    );
  if (name === "ig")
    return (
      <svg {...common}>
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.81.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.81-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.81-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.81.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.34 4.14.63a5.99 5.99 0 0 0-2.17 1.41A5.99 5.99 0 0 0 .56 4.21C.27 4.97.06 5.85 0 7.12-.06 8.4 0 8.81 0 12s-.06 3.6 0 4.88c.06 1.27.27 2.15.56 2.91a5.99 5.99 0 0 0 1.41 2.17 5.99 5.99 0 0 0 2.17 1.41c.76.29 1.64.5 2.91.56C8.4 24.06 8.81 24 12 24s3.6-.06 4.88-.07c1.27-.06 2.15-.27 2.91-.56a5.99 5.99 0 0 0 2.17-1.41 5.99 5.99 0 0 0 1.41-2.17c.29-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.88s-.01-3.6-.07-4.88c-.06-1.27-.27-2.15-.56-2.91A5.99 5.99 0 0 0 22.04 2.04 5.99 5.99 0 0 0 19.86.63c-.76-.29-1.64-.5-2.91-.56C15.6.01 15.19 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16A4 4 0 1 1 12 8a4 4 0 0 1 0 8Zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88Z" />
      </svg>
    );
  if (name === "ln")
    return (
      <svg {...common}>
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.91 1.65-1.85 3.39-1.85 3.62 0 4.29 2.38 4.29 5.49v6.25ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.13C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.57A3 3 0 0 0 .5 6.2 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.13C4.5 20.5 12 20.5 12 20.5s7.5 0 9.4-.57a3 3 0 0 0 2.1-2.13c.34-1.91.5-3.84.5-5.8a31.6 31.6 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.4 3.6-6.4 3.6Z" />
    </svg>
  );
}
