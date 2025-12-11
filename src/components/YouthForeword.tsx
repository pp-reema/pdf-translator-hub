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

export const YouthForeword = () => {
  return (
    <section id="youth-foreword" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-8">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Youth Foreword
            </h2>
          </div>

          {/* Youth Foreword authored by - 6 Logos */}
          <div className="mb-12">
            <p className="text-center text-muted-foreground text-sm mb-6">Youth Foreword authored by</p>
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
              <div className="bg-primary text-primary-foreground p-6 rounded-xl">
                <p className="font-display text-xl md:text-2xl font-semibold leading-relaxed tracking-tight">
 

                  "As young people, we often look to our elders for guidance. From you, we develop our values, our ethics, and our worldview. We owe you our opportunities and privileges. We share your values of security, prosperity, and opportunity.
                </p>
              </div>

              {/* Main Content */}
              <div className="space-y-4 text-foreground leading-relaxed">
                <p>
                  But it's a strange time to be young. "Go to school, get a job, work towards your future". We wonder, what will our futures look like?
                </p>
                
                <p>
                  The 1.5°C threshold is passing, 2.0°C is fast approaching. We call on you to follow through on the climate goals that you set, to be transparent and accountable. Our futures are at stake.
                </p>
                
                <p>
                  Human well-being depends on planetary health. Indigenous wisdoms have maintained for millennia the belief that humanity and the natural world are intimately connected. Our futures depend upon combining these ancient wisdoms with modern day technological capabilities, environmental stewardship, and a decisive political will.
                </p>
                
                <p>
                  The science is clear. The technologies exist. The challenge that remains is a lack of implementation. The IMF estimates there is an astounding $7.1 trillion per annum in fossil fuel subsidies. We need new economic structures and incentives to scale global solutions, and we need to act now. This is no longer a distant warning, we are living in the age of consequence.
                </p>
                
                <p>
                  The International Court of Justice is on our side, affirming what young people across the globe have been saying for years: our governments have a legal obligation to act on climate change. As the current leaders and policymakers, we require your brave and authentic leadership to navigate this age of complexity and uncertainty, to chart a sustainable path forward.
                </p>
                
                <p>
                  This must be done together, across disciplines, countries, genders, and generations.
                </p>
                
                <p>
                  One concrete step parties can take to align international commitments with intergenerational justice is to adopt the Universal Youth Clause into their updated Nationally Determined Contributions. We call on all governments to honour our right to a healthy environment and a climate just future for generations to come.
                </p>
                
                <p>
                  As young people, we often look to our elders for guidance. Do they know that they can look to us, too?
                </p>
                
                <p className="text-sm text-muted-foreground font-semibold">
                  Endorsers of the Youth Foreword can be found on page 26.
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
                  <p className="font-semibold text-foreground">Scan for more info</p>
                  <p className="text-sm text-muted-foreground">Learn more about the Youth Foreword and endorsers</p>
                </div>
              </div>
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
