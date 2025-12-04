import { LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { ChaptersGrid } from '@/components/ChaptersGrid';
import { YouthForeword } from '@/components/YouthForeword';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <Stats />
          <ChaptersGrid />
          <YouthForeword />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
