import youthAuthor from '@/assets/youth-foreword-author.jpg';
import youthImg2 from '@/assets/youth-foreword-img2.jpg';
import youthImg3 from '@/assets/youth-foreword-img3.jpg';
import youthImg4 from '@/assets/youth-foreword-img4.jpg';
import youthImg5 from '@/assets/youth-foreword-img5.jpg';
import logoVillars from '@/assets/logo-villars.png';
import logoCareAboutClimate from '@/assets/logo-care-about-climate.jpg';

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
              <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl shadow-sm">
                <span className="font-bold text-primary text-lg">ASU</span>
                <span className="text-xs text-muted-foreground mt-1">Julie Ann Wrigley<br/>Global Futures Laboratory</span>
                <span className="text-xs text-muted-foreground">Arizona State University</span>
              </div>
              
              {/* University of Exeter */}
              <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl shadow-sm">
                <span className="font-bold text-primary text-lg">University</span>
                <span className="font-bold text-primary text-lg">of Exeter</span>
              </div>
              
              {/* Villars Institute */}
              <div className="flex items-center justify-center p-4 bg-card rounded-xl shadow-sm">
                <img 
                  src={logoVillars} 
                  alt="Villars Institute" 
                  className="h-12 object-contain invert"
                />
              </div>
              
              {/* We */}
              <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl shadow-sm">
                <span className="font-bold text-primary text-3xl">we)</span>
              </div>
              
              {/* Care About Climate */}
              <div className="flex items-center justify-center p-4 bg-card rounded-xl shadow-sm">
                <img 
                  src={logoCareAboutClimate} 
                  alt="Care About Climate" 
                  className="h-10 object-contain"
                />
              </div>
              
              {/* Youth Negotiators Academy */}
              <div className="flex flex-col items-center text-center p-4 bg-card rounded-xl shadow-sm">
                <span className="font-bold text-accent text-2xl">'N.</span>
                <span className="text-xs text-muted-foreground">Youth Negotiators<br/>Academy</span>
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
                  "As young people, we often look to our elders for guidance. From you, we develop our values, our ethics, and our worldview. We owe you our opportunities and privileges. We share your values of security, prosperity, and opportunity.
                </p>
              </div>

              {/* Main Content */}
              <div className="space-y-4 text-foreground leading-relaxed">
                <p className="font-display text-xl md:text-2xl italic">
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
                
                <p className="font-display text-xl italic">
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
                <div className="w-24 h-24 bg-muted rounded-lg flex items-center justify-center border-2 border-primary">
                  <div className="text-center">
                    <div className="grid grid-cols-5 gap-0.5 w-16 h-16 mx-auto">
                      {/* QR Code Pattern */}
                      {[...Array(25)].map((_, i) => (
                        <div 
                          key={i} 
                          className={`w-3 h-3 ${
                            [0,1,2,4,5,6,10,12,14,15,16,18,19,20,21,22,24].includes(i) 
                              ? 'bg-foreground' 
                              : 'bg-transparent'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
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
