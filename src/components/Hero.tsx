import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import heroCover from '@/assets/hero-cover.jpg';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToChapters = () => {
    const element = document.getElementById('chapters');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCover}
          alt="Climate change visual"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6 animate-slide-up">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            {t('hero.subtitle')}
          </p>
          <Button
            onClick={scrollToChapters}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-6 text-lg animate-slide-up animation-delay-300"
          >
            {t('hero.cta')}
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in animation-delay-500">
          <span className="text-white/70 text-sm">{t('hero.scroll')}</span>
          <ChevronDown className="w-6 h-6 text-white/70 animate-bounce" />
        </div>
      </div>
    </section>
  );
};
