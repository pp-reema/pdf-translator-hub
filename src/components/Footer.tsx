import { useLanguage } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-semibold text-lg">
                Climate Guide
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Essential knowledge for parliamentarians and policymakers navigating the climate crisis.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">{t('nav.chapters')}</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#chapters" className="hover:text-background transition-colors">{t('chapter1.title')}</a></li>
              <li><a href="#chapters" className="hover:text-background transition-colors">{t('chapter2.title')}</a></li>
              <li><a href="#chapters" className="hover:text-background transition-colors">{t('chapter3.title')}</a></li>
              <li><a href="#chapters" className="hover:text-background transition-colors">{t('chapter4.title')}</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">{t('footer.attribution')}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">{t('footer.endorsers')}</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Climate TRACE</a></li>
              <li><a href="#" className="hover:text-background transition-colors">IPCC Reports</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/60">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};
