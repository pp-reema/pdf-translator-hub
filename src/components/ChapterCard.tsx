import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ChapterCardProps {
  number: number;
  titleKey: string;
  descKey: string;
  image?: string;
  onClick?: () => void;
}

export const ChapterCard = ({ number, titleKey, descKey, image, onClick }: ChapterCardProps) => {
  const { t } = useLanguage();

  return (
    <article
      className="chapter-card group cursor-pointer"
      onClick={onClick}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={t(titleKey)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="chapter-number">{number}</span>
          </div>
        </div>
      )}
      <div className="p-6">
        {!image && (
          <span className="chapter-number mb-4">{number}</span>
        )}
        <h3 className="font-display text-xl font-semibold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {t(titleKey)}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {t(descKey)}
        </p>
        <div className="flex items-center gap-2 text-primary font-medium text-sm">
          <span>{t('common.readMore')}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </article>
  );
};
