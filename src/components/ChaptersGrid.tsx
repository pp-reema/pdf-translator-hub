import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { ChapterCard } from './ChapterCard';
import climateFundamentals from '@/assets/climate-fundamentals.jpg';
import biodiversity from '@/assets/biodiversity.jpg';
import polesOceans from '@/assets/poles-oceans.jpg';
import adaptation from '@/assets/adaptation.jpg';

const chapters = [
  { number: 1, titleKey: 'chapter1.title', descKey: 'chapter1.desc', image: climateFundamentals },
  { number: 2, titleKey: 'chapter2.title', descKey: 'chapter2.desc', image: biodiversity },
  { number: 3, titleKey: 'chapter3.title', descKey: 'chapter3.desc', image: polesOceans },
  { number: 4, titleKey: 'chapter4.title', descKey: 'chapter4.desc', image: adaptation },
  { number: 5, titleKey: 'chapter5.title', descKey: 'chapter5.desc' },
  { number: 6, titleKey: 'chapter6.title', descKey: 'chapter6.desc' },
  { number: 7, titleKey: 'chapter7.title', descKey: 'chapter7.desc' },
  { number: 8, titleKey: 'chapter8.title', descKey: 'chapter8.desc' },
  { number: 9, titleKey: 'chapter9.title', descKey: 'chapter9.desc' },
  { number: 10, titleKey: 'chapter10.title', descKey: 'chapter10.desc' },
];

export const ChaptersGrid = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  return (
    <section id="chapters" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-foreground mb-4">{t('chapters.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('chapters.subtitle')}
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {chapters.map((chapter, index) => (
            <div
              key={chapter.number}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ChapterCard 
                {...chapter} 
                onClick={() => navigate(`/chapter/${chapter.number}`)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
