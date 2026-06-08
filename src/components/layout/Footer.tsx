import { Instagram, Linkedin, Mail, MapPin, Leaf } from 'lucide-react';
import { photographerInfo } from '@/data/photographer';
import { navLinks } from '@/data/bambu';

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contato" className="relative overflow-hidden bg-forest-deep text-white">
      <div className="absolute inset-0 opacity-30 bg-gradient-forest animate-flow" />
      <div className="absolute -top-32 -right-32 size-96 rounded-full bg-bamboo/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-moss/30 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-20 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 space-y-5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center size-10 rounded-full bg-bamboo/30">
              <Leaf className="size-5" />
            </span>
            <span className="font-display text-2xl">Bambu do Sana</span>
          </div>
          <p className="font-script text-2xl leading-snug max-w-md text-white/95">
            Um movimento ecológico, cultural e comunitário no coração da Mata Atlântica.
          </p>
          <p className="text-sm text-white/80 max-w-md">
            Receba histórias, eventos e novidades do vale do Sana diretamente no seu e-mail.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 rounded-full border border-white/15 bg-white/10 p-1.5 max-w-md"
          >
            <input
              type="email"
              required
              placeholder="seu@email.com"
              className="flex-1 bg-transparent px-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none"
            />
            <button className="rounded-full bg-bamboo px-5 py-2 text-sm font-medium text-forest-deep hover:bg-bamboo-light transition-colors">
              Assinar
            </button>
          </form>
        </div>

        <div>
          <h4 className="title-card text-lg mb-4">Navegar</h4>
          <ul className="space-y-2 text-sm text-white/85">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-bamboo transition-colors">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="title-card text-lg mb-4">Contato</h4>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex items-start gap-2">
              <MapPin className="size-4 mt-0.5 text-bamboo" />
              {photographerInfo.location}
            </li>
            <li className="flex items-start gap-2">
              <Mail className="size-4 mt-0.5 text-bamboo" />
              <a href={`mailto:${photographerInfo.email}`} className="hover:text-bamboo">
                {photographerInfo.email}
              </a>
            </li>
          </ul>
          <div className="flex gap-3 mt-5">
            <a
              href={photographerInfo.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="size-9 rounded-full border border-white/15 bg-white/10 inline-flex items-center justify-center hover:bg-bamboo hover:text-forest-deep transition-colors"
            >
              <Instagram className="size-4" />
            </a>
            <a
              href={photographerInfo.socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="size-9 rounded-full border border-white/15 bg-white/10 inline-flex items-center justify-center hover:bg-bamboo hover:text-forest-deep transition-colors"
            >
              <Linkedin className="size-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between gap-2 text-xs text-white/65">
          <p>© {year} Bambu do Sana. Feito com cuidado pela comunidade.</p>
          <p className="italic">Ecoturismo regenerativo • Sana, RJ • Brasil</p>
        </div>
      </div>
    </footer>
  );
}
