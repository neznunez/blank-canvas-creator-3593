import { motion } from 'framer-motion';
import {
  ArrowRight,
  Leaf,
  Sprout,
  Droplets,
  Mountain,
  Compass,
  MapPin,
  Calendar,
  Users,
  Sparkles,
} from 'lucide-react';
import { SEOHead } from '@/components/seo/SEOHead';
import { Button } from '@/components/ui/button';
import {
  projects,
  routes,
  mapCategories,
  events,
  directory,
  posts,
} from '@/data/bambu';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' as const },
  transition: { duration: 0.7 },
};

function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <motion.div
      {...fadeUp}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''} mb-12 md:mb-16`}
    >
      <div
        className={`inline-flex items-center gap-2 rounded-full bg-secondary/60 text-forest px-3 py-1 text-xs tracking-[0.2em] uppercase ${
          align === 'center' ? '' : ''
        }`}
      >
        <Sprout className="size-3.5" />
        {eyebrow}
      </div>
      <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl text-foreground text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default function Home() {
  return (
    <>
      <SEOHead
        title="Bambu do Sana"
        description="Portal de ecoturismo, sustentabilidade e cultura no Sana, Rio de Janeiro."
      />

      {/* HERO */}
      <section id="hero" className="relative min-h-[100svh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=80"
            alt="Floresta de Mata Atlântica no Sana"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-forest-deep/70 via-forest-deep/40 to-forest-deep/85" />
          <div className="absolute inset-0 bg-gradient-leaf mix-blend-soft-light" />
        </div>

        {/* Organic floating shapes */}
        <div className="absolute top-1/3 -left-20 size-72 rounded-full bg-bamboo/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-0 size-96 rounded-full bg-moss/30 blur-3xl animate-float-slow [animation-delay:-4s]" />

        <div className="relative z-10 flex min-h-[100svh] items-end pb-20 md:pb-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="max-w-3xl"
            >
              <span className="inline-flex items-center gap-2 rounded-full glass-dark px-4 py-1.5 text-xs tracking-[0.25em] uppercase text-cream">
                <Leaf className="size-3.5 text-bamboo animate-sway" />
                Sana • Rio de Janeiro • Brasil
              </span>
              <h1 className="mt-6 font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream leading-[1.02] text-balance">
                Bambu <span className="italic text-bamboo">do</span> Sana
              </h1>
              <p className="mt-6 font-serif italic text-xl md:text-2xl text-cream/90 max-w-2xl">
                Sustentabilidade, cultura e ecoturismo no coração do Sana.
              </p>
              <p className="mt-4 text-cream/80 max-w-xl leading-relaxed">
                Um portal vivo para explorar trilhas, cachoeiras, projetos
                regenerativos e a comunidade que mantém este vale pulsando.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-bamboo hover:bg-bamboo-light text-forest-deep px-7 h-12 text-base"
                >
                  <a href="#rotas">
                    Explorar o Sana
                    <ArrowRight className="ml-1 size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-forest-deep px-7 h-12 text-base"
                >
                  <a href="#projetos">Projetos Sustentáveis</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-cream/70 text-xs tracking-[0.3em] uppercase">
          <div className="flex flex-col items-center gap-2">
            <span>Role</span>
            <div className="h-10 w-px bg-cream/40 animate-pulse" />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="relative py-24 md:py-32 px-6 lg:px-10 overflow-hidden">
        <div className="absolute -top-32 right-0 size-[28rem] rounded-full bg-bamboo/10 blur-3xl" />
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <motion.div {...fadeUp} className="relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-organic">
              <img
                src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=1200&q=80"
                alt="Bambuzal no Sana"
                className="w-full h-[520px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 md:-right-8 glass rounded-2xl p-5 max-w-[240px] shadow-soft">
              <p className="font-serif italic text-foreground text-lg">
                "A floresta nos lembra de uma forma mais lenta de viver."
              </p>
            </div>
            <div className="absolute -top-6 -left-4 size-24 rounded-full bg-bamboo/30 blur-2xl" />
          </motion.div>

          <div>
            <SectionHeader
              eyebrow="Sobre o Sana"
              title="Um vale onde a floresta, a cultura e a comunidade caminham juntas."
              description="O Sana é um distrito serrano de Macaé, cercado pela Mata Atlântica, cachoeiras e tradições vivas. Bambu do Sana é a iniciativa que reúne moradores, projetos e visitantes em torno de uma missão: preservar, regenerar e celebrar este território."
            />
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: Leaf, label: 'Preservação ecológica' },
                { icon: Users, label: 'Cultura local' },
                { icon: Sparkles, label: 'Turismo regenerativo' },
              ].map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="rounded-2xl bg-card border border-border p-5 shadow-soft hover:-translate-y-1 transition-transform"
                >
                  <Icon className="size-5 text-bamboo" />
                  <p className="mt-3 font-serif text-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section
        id="projetos"
        className="relative py-24 md:py-32 px-6 lg:px-10 bg-secondary/40"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Projetos sustentáveis"
            title="Iniciativas que regeneram o vale"
            description="Ações comunitárias de reflorestamento, agrofloresta, educação ambiental e preservação das águas."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-organic transition-all hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-deep/60 to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full glass-dark px-3 py-1 text-[11px] tracking-wide text-cream"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-foreground">{p.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-1 text-sm text-bamboo font-medium hover:gap-2 transition-all"
                  >
                    Conhecer o projeto <ArrowRight className="size-4" />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ROTAS */}
      <section id="rotas" className="relative py-24 md:py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Rotas turísticas"
            title="Caminhos por cachoeiras, trilhas e sabores"
            description="Experiências que conectam visitantes ao território de forma respeitosa, lenta e profunda."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-organic transition-all"
              >
                <img
                  src={r.image}
                  alt={r.title}
                  className="h-[340px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-deep via-forest-deep/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-cream">
                  <span className="inline-flex items-center gap-1.5 rounded-full glass-dark px-3 py-1 text-[11px] tracking-wide">
                    <Compass className="size-3" /> {r.type}
                  </span>
                  <h3 className="mt-3 font-serif text-2xl">{r.title}</h3>
                  <p className="mt-1 text-sm text-cream/80">{r.description}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-bamboo">
                    {r.duration}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MAPA */}
      <section
        id="mapa"
        className="relative py-24 md:py-32 px-6 lg:px-10 bg-forest text-cream overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-forest opacity-90" />
        <div className="absolute -top-40 -left-20 size-[30rem] rounded-full bg-bamboo/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 right-0 size-[26rem] rounded-full bg-moss/40 blur-3xl animate-float-slow [animation-delay:-3s]" />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-2">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3 py-1 text-xs tracking-[0.2em] uppercase">
              <MapPin className="size-3.5 text-bamboo" /> Mapa interativo
            </span>
            <h2 className="mt-5 font-serif text-4xl md:text-5xl lg:text-6xl text-cream text-balance">
              Explore o Sana ponto a ponto.
            </h2>
            <p className="mt-5 text-cream/80 leading-relaxed max-w-md">
              Um mapa colaborativo para descobrir cachoeiras, trilhas,
              pousadas, restaurantes, mirantes e projetos sustentáveis do
              território. Em breve, totalmente interativo.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {mapCategories.map((c) => (
                <button
                  key={c}
                  className="rounded-full border border-cream/20 px-4 py-1.5 text-xs tracking-wide hover:bg-bamboo hover:text-forest-deep hover:border-bamboo transition-colors"
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="relative rounded-[2rem] overflow-hidden glass-dark p-2 shadow-organic">
              <div className="relative rounded-[1.6rem] overflow-hidden h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1600&q=80"
                  alt="Mapa do vale do Sana"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-forest-deep/40" />
                {/* Pin markers */}
                {[
                  { top: '30%', left: '25%', label: 'Cachoeira' },
                  { top: '55%', left: '52%', label: 'Trilha' },
                  { top: '40%', left: '70%', label: 'Pousada' },
                  { top: '70%', left: '35%', label: 'Projeto' },
                ].map((m) => (
                  <div
                    key={m.label}
                    className="absolute -translate-x-1/2 -translate-y-full flex flex-col items-center"
                    style={{ top: m.top, left: m.left }}
                  >
                    <div className="rounded-full glass-dark px-3 py-1 text-[11px] tracking-wide whitespace-nowrap">
                      {m.label}
                    </div>
                    <div className="mt-1 size-3 rounded-full bg-bamboo ring-4 ring-bamboo/30 animate-pulse" />
                  </div>
                ))}
                <div className="absolute bottom-4 left-4 rounded-full glass-dark px-4 py-2 text-xs">
                  Mapa interativo • em breve
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTOS */}
      <section id="eventos" className="relative py-24 md:py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Agenda"
            title="Eventos e encontros da comunidade"
            description="Mutirões, feiras, festivais e oficinas que celebram a vida no vale."
          />
          <div className="grid md:grid-cols-2 gap-5">
            {events.map((e, i) => (
              <motion.div
                key={e.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6 }}
                className="flex gap-5 rounded-3xl bg-card border border-border p-6 shadow-soft hover:shadow-organic hover:-translate-y-0.5 transition-all"
              >
                <div className="shrink-0 w-20 h-24 rounded-2xl bg-forest text-cream flex flex-col items-center justify-center font-serif">
                  <span className="text-2xl leading-none">
                    {e.date.split(' ')[0]}
                  </span>
                  <span className="text-xs uppercase tracking-widest mt-1 text-bamboo">
                    {e.date.split(' ')[1]}
                  </span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="size-3.5" /> {e.location}
                  </div>
                  <h3 className="mt-1 font-serif text-2xl text-foreground">
                    {e.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {e.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIRETÓRIO */}
      <section
        id="diretorio"
        className="relative py-24 md:py-32 px-6 lg:px-10 bg-secondary/40"
      >
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            eyebrow="Diretório local"
            title="Quem faz o Sana acontecer"
            description="Pousadas, restaurantes, artesãos, guias e negócios ecológicos da comunidade."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {directory.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group rounded-3xl overflow-hidden bg-card border border-border shadow-soft hover:shadow-organic transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={d.image}
                    alt={d.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-bamboo">
                    {d.category}
                  </span>
                  <h3 className="mt-1 font-serif text-xl text-foreground">
                    {d.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {d.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="relative py-24 md:py-32 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <SectionHeader
              eyebrow="Diário do Sana"
              title="Histórias, notícias e ensaios do vale"
            />
            <a
              href="#"
              className="inline-flex items-center gap-1 text-sm text-forest hover:text-bamboo transition-colors font-medium"
            >
              Ver todas as histórias <ArrowRight className="size-4" />
            </a>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {posts.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="group"
              >
                <div className="relative h-72 overflow-hidden rounded-3xl shadow-soft">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-bamboo">
                  <span>{p.category}</span>
                  <span className="size-1 rounded-full bg-bamboo" />
                  <span className="text-muted-foreground tracking-wide normal-case">
                    {p.date}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-2xl text-foreground group-hover:text-bamboo transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.excerpt}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-24 md:py-32 px-6 lg:px-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-forest animate-flow" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=2000&q=70')] bg-cover bg-center opacity-20 mix-blend-overlay" />
        <div className="relative max-w-4xl mx-auto text-center text-cream">
          <Droplets className="mx-auto size-8 text-bamboo animate-sway" />
          <h2 className="mt-6 font-serif text-4xl md:text-6xl text-balance">
            Venha conhecer o vale. <br />
            <span className="italic text-bamboo">Saia diferente.</span>
          </h2>
          <p className="mt-5 text-cream/85 max-w-xl mx-auto leading-relaxed">
            Sustentabilidade, comunidade, floresta e arte se encontram aqui.
            Planeje sua visita ou apoie um dos nossos projetos.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-bamboo hover:bg-bamboo-light text-forest-deep px-7 h-12 text-base"
            >
              <a href="#rotas">
                Planejar minha visita <Mountain className="ml-1 size-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full border-cream/40 bg-transparent text-cream hover:bg-cream hover:text-forest-deep px-7 h-12 text-base"
            >
              <a href="#contato">Apoiar a iniciativa</a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
