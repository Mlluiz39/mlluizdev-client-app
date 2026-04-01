import { env } from "@/lib/env";

export function Footer() {
  return (
    <footer className="bg-surface-container-low w-full rounded-t-[2rem] md:rounded-t-[3rem] mt-10 md:mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20 py-12 md:py-16 max-w-[1440px] mx-auto">
        <div className="space-y-6">
          <div className="font-headline font-bold text-lg text-heading">
            mlluizdevtech
          </div>
          <p className="font-body text-sm leading-relaxed text-secondary max-w-sm">
            © 2026 mlluizdevtech Gallery. All rights reserved. Curating digital
            excellence for brands that demand authority.
          </p>
        </div>
        <div className="flex flex-col md:items-end justify-center space-y-4">
          <div className="flex gap-8">
            <a
              className="text-secondary hover:text-heading-container transition-colors font-body text-sm"
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              className="text-secondary hover:text-heading-container transition-colors font-body text-sm"
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              className="text-secondary hover:text-heading-container transition-colors font-body text-sm"
              href={`https://wa.me/${env.NEXT_PUBLIC_WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
