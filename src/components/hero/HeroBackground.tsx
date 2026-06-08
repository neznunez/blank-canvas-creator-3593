import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { heroSlides } from '@/data/bambu';

const INTERVAL_MS = 6000;

interface HeroBackgroundProps {
  onIndexChange?: (index: number) => void;
}

export function HeroBackground({ onIndexChange }: HeroBackgroundProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    onIndexChange?.(index);
  }, [index, onIndexChange]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroSlides.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {heroSlides.map((slide, i) => {
        const isActive = i === index;
        return (
          <motion.img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            aria-hidden={!isActive}
            className="absolute inset-0 h-full w-full object-cover"
            initial={false}
            animate={{
              opacity: isActive ? 1 : 0,
              scale: isActive ? 1.06 : 1,
            }}
            transition={{
              opacity: { duration: 1.6, ease: 'easeInOut' },
              scale: { duration: INTERVAL_MS / 1000, ease: 'linear' },
            }}
          />
        );
      })}
    </>
  );
}

export function HeroSlideIndicators({ activeIndex }: { activeIndex: number }) {
  return (
    <div
      className="flex items-center gap-2"
      aria-label="Imagens do Sana em rotação"
    >
      {heroSlides.map((slide, i) => (
        <span
          key={slide.src}
          className={`h-1.5 rounded-full transition-all duration-500 ${
            i === activeIndex ? 'w-6 bg-bamboo' : 'w-1.5 bg-white/40'
          }`}
          title={slide.alt}
        />
      ))}
    </div>
  );
}
