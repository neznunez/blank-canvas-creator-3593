import { useState } from 'react';
import { Menu, X, Leaf } from 'lucide-react';
import { motion } from 'framer-motion';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navLinks } from '@/data/bambu';
import { cn } from '@/lib/utils';

export function Header() {
  const { isScrolled } = useScrollPosition();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'glass shadow-soft py-2'
          : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group">
          <span
            className={cn(
              'inline-flex items-center justify-center size-9 rounded-full transition-colors',
              isScrolled ? 'bg-forest text-cream' : 'bg-white/20 text-white backdrop-blur-md'
            )}
          >
            <Leaf className="size-4 group-hover:rotate-12 transition-transform" />
          </span>
          <span
            className={cn(
              'font-serif text-xl tracking-tight transition-colors',
              isScrolled ? 'text-foreground' : 'text-white'
            )}
          >
            Bambu <span className="italic text-bamboo">do Sana</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                'text-sm tracking-wide transition-colors hover:opacity-80',
                isScrolled ? 'text-foreground/80' : 'text-white/90'
              )}
            >
              {l.name}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            asChild
            className="rounded-full bg-forest hover:bg-forest-deep text-cream px-5"
          >
            <a href="#contato">Visitar o Sana</a>
          </Button>
        </div>

        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  'rounded-full',
                  !isScrolled && 'text-white hover:bg-white/10'
                )}
                aria-label="Abrir menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-cream">
              <div className="flex items-center justify-between mb-8">
                <span className="font-serif text-xl">Bambu do Sana</span>
                <button onClick={() => setOpen(false)} aria-label="Fechar">
                  <X className="size-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-5">
                {navLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-lg font-serif text-foreground hover:text-bamboo transition-colors"
                  >
                    {l.name}
                  </a>
                ))}
                <a
                  href="#contato"
                  onClick={() => setOpen(false)}
                  className="mt-4 inline-flex justify-center rounded-full bg-forest text-cream py-3"
                >
                  Visitar o Sana
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
