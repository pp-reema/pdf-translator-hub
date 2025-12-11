import youthAuthor from '@/assets/youth-foreword-author.jpg';
import youthImg2 from '@/assets/youth-foreword-img2.jpg';
import youthImg3 from '@/assets/youth-foreword-img3.jpg';
import youthImg4 from '@/assets/youth-foreword-img4.jpg';
import youthImg5 from '@/assets/youth-foreword-img5.jpg';
import logoVillars from '@/assets/villars.png';
import asu from '@/assets/asu.png';
import care from '@/assets/care.png';
import exeter from '@/assets/exeter.png';
import we from '@/assets/we.png';
import yna from '@/assets/yna.png';
import qr from '@/assets/qr.png';
import { useLanguage } from '@/contexts/LanguageContext';

export const YouthForeword = () => {
  const { t } = useLanguage();

  return (
    <section id="youth-foreword" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              {t('youth.title')}
            </h2>
          </div>

          {/* Youth Foreword authored by - 6 Logos */}
          <div className="mb-12">
            <p className="text-center text-muted-foreground text-sm mb-6">{t('youth.authoredBy')}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
              {/* ASU */}
              <div className="flex items-center justify-center p-4 bg-card rounded-xl shadow-sm h-24">
                <img 
                  src={asu} 
                  alt="ASU Julie Ann Wrigley Global Futures Laboratory" 
                  className="h-16 object-contain"
                />
              </div>
              
              {/* University of Exeter */}
              <div className="flex items-center justify-center p-4 bg-card rounded-xl shadow-sm h-24">
                <img 
                  src={exeter} 
                  alt="University of Exeter" 
                  className="h-16 object-contain"
                />
              </div>
              
              {/* Villars Institute */}
              <div className="flex items-center justify-center p-4 bg-card rounded-xl shadow-sm h-24">
                <img 
                  src={logoVillars} 
                  alt="Villars Institute" 
                  className="h-16 object-contain"
                />
              </div>
              
              {/* We */}
              <div className="flex items-center justify-center p-4 bg-card rounded-xl shadow-sm h-24">
                <img 
                  src={we} 
                  alt="We" 
                  className="h-16 object-contain"
                />
              </div>
              
              {/* Care About Climate */}
              <div className="flex items-center justify-center p-4 bg-card rounded-xl shadow-sm h-24">
                <img 
                  src={care} 
                  alt="Care About Climate" 
                  className="h-16 object-contain"
                />
              </div>
              
              {/* Youth Negotiators Academy */}
              <div className="flex items-center justify-center p-4 bg-card rounded-xl shadow-sm h-24">
                <img 
                  src={yna} 
                  alt="Youth Negotiators Academy" 
                  className="h-16 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Quote and Text */}
            <div className="space-y-6">
              {/* Large Quote */}
              <div className="bg-primary text-primary-foreground p-8 rounded-2xl">
                <p className="font-display text-xl md:text-2xl italic leading-relaxed">
                  "{t('youth.quote1')}"
                </p>
              </div>

              {/* Main Content */}
              <div className="space-y-4 text-foreground leading-relaxed">
                <p className="font-display text-xl md:text-2xl italic">
                  {t('youth.quote2')}
                </p>
                
                <p>
                  {t('youth.content1')}
                </p>
                
                <p>
                  {t('youth.content2')}
                </p>
                
                <p>
                  {t('youth.content3')}
                </p>
                
                <p>
                  {t('youth.content4')}
                </p>
                
                <p>
                  {t('youth.content5')}
                </p>
                
                <p>
                  {t('youth.content6')}
                </p>
                
                <p className="font-display text-xl italic">
                  {t('youth.closingQuote')}
                </p>
                
                <p className="text-sm text-muted-foreground font-semibold">
                  {t('youth.endorsersNote')}
                </p>
              </div>
            </div>

            {/* Right Column - Images and QR */}
            <div className="space-y-4">
              <img 
                src={youthAuthor} 
                alt="Youth climate activist planting" 
                className="w-full rounded-2xl shadow-card"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={youthImg4} 
                  alt="Youth at EXPO climate event" 
                  className="w-full rounded-xl shadow-card"
                />
                <img 
                  src={youthImg5} 
                  alt="Care About Climate youth group" 
                  className="w-full rounded-xl shadow-card"
                />
                <img 
                  src={youthImg3} 
                  alt="Youth climate advocate at UN" 
                  className="w-full rounded-xl shadow-card"
                />
                <img 
                  src={youthImg2} 
                  alt="UN Climate Change event with delegates" 
                  className="w-full rounded-xl shadow-card"
                />
              </div>

              {/* QR Code Section */}
              <div className="bg-card p-6 rounded-2xl shadow-card flex items-center gap-6">
                <img 
                  src={qr} 
                  alt="QR Code for Youth Foreword" 
                  className="w-24 h-24 object-contain rounded-lg"
                />
                <div>
                  <p className="font-semibold text-foreground">{t('youth.scanForMore')}</p>
                  <p className="text-sm text-muted-foreground">{t('youth.learnMore')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* IMF Stat Highlight */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-ocean text-primary-foreground text-center">
            <p className="text-lg opacity-90 mb-2">{t('youth.imfEstimates')}</p>
            <p className="font-display text-4xl md:text-5xl font-bold mb-2">
              {t('youth.imfAmount')}
            </p>
            <p className="text-lg opacity-90">{t('youth.imfSubsidies')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};