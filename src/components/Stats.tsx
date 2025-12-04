import { useLanguage } from '@/contexts/LanguageContext';
import { Thermometer, DollarSign, Users } from 'lucide-react';

export const Stats = () => {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Thermometer,
      value: t('stat.temperature'),
      label: t('stat.temperature.label'),
      color: 'text-highlight',
    },
    {
      icon: DollarSign,
      value: t('stat.subsidies'),
      label: t('stat.subsidies.label'),
      color: 'text-destructive',
    },
    {
      icon: Users,
      value: t('stat.support'),
      label: t('stat.support.label'),
      color: 'text-accent',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-sky">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-card shadow-soft animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <div className={`stat-highlight ${stat.color}`}>{stat.value}</div>
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
