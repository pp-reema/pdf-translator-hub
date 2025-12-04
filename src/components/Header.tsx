import { useState } from 'react';
import { Globe, Menu, X, Download } from 'lucide-react';
import { useLanguage, languageNames, Language } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-ocean flex items-center justify-center">
              <span className="text-primary-foreground font-display font-bold text-lg">P</span>
            </div>
            <span className="hidden sm:block font-display font-semibold text-foreground">
              Climate Guide
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('hero')} className="nav-link">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('chapters')} className="nav-link">
              {t('nav.chapters')}
            </button>
            <button onClick={() => scrollToSection('youth-foreword')} className="nav-link">
              {t('nav.about')}
            </button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="w-4 h-4" />
                  <span className="hidden sm:inline">{languageNames[language]}</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                {(Object.keys(languageNames) as Language[]).map((lang) => (
                  <DropdownMenuItem
                    key={lang}
                    onClick={() => setLanguage(lang)}
                    className={language === lang ? 'bg-muted' : ''}
                  >
                    {languageNames[lang]}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Download Button */}
            <Button variant="default" size="sm" className="hidden sm:flex gap-2">
              <Download className="w-4 h-4" />
              {t('nav.download')}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                {t('nav.home')}
              </button>
              <button
                onClick={() => scrollToSection('chapters')}
                className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                {t('nav.chapters')}
              </button>
              <button
                onClick={() => scrollToSection('youth-foreword')}
                className="text-left py-2 text-foreground/80 hover:text-foreground transition-colors"
              >
                {t('nav.about')}
              </button>
              <Button variant="default" size="sm" className="w-full mt-2 gap-2">
                <Download className="w-4 h-4" />
                {t('nav.download')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
