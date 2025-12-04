import { useLanguage } from '@/contexts/LanguageContext';
import { Quote } from 'lucide-react';

export const YouthForeword = () => {
  const { t } = useLanguage();

  return (
    <section id="youth-foreword" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              {t('youth.title')}
            </span>
          </div>

          {/* Quote Block */}
          <div className="relative bg-card rounded-3xl p-8 md:p-12 shadow-card">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />
            
            <blockquote className="relative z-10 pl-8 md:pl-12">
              <p className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground leading-relaxed italic mb-8">
                {t('youth.quote')}
              </p>
            </blockquote>

            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>{t('youth.content1')}</p>
              <p>{t('youth.content2')}</p>
              <p className="font-semibold text-foreground">{t('youth.content3')}</p>
            </div>
          </div>

          {/* IMF Stat Highlight */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-ocean text-primary-foreground text-center">
            <p className="text-lg opacity-90 mb-2">The IMF estimates</p>
            <p className="font-display text-4xl md:text-5xl font-bold mb-2">
              $7.1 trillion/year
            </p>
            <p className="text-lg opacity-90">in fossil fuel subsidies</p>
          </div>
        </div>
      </div>
    </section>
  );
};
