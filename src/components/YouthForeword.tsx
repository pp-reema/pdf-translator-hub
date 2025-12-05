import youthAuthor from '@/assets/youth-foreword-author.jpg';
import youthImg2 from '@/assets/youth-foreword-img2.jpg';
import youthImg3 from '@/assets/youth-foreword-img3.jpg';
import youthImg4 from '@/assets/youth-foreword-img4.jpg';
import youthImg5 from '@/assets/youth-foreword-img5.jpg';
import youthLogo1 from '@/assets/youth-foreword-logo1.png';
import youthLogo2 from '@/assets/youth-foreword-logo2.png';
import youthQR from '@/assets/youth-foreword-qr.jpg';

export const YouthForeword = () => {
  return (
    <section id="youth-foreword" className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
              Youth Foreword
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              Youth Foreword
            </h2>
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 mb-8">
            <p className="text-muted-foreground text-sm">Youth Foreword authored by</p>
          </div>

          {/* Main Content Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Text Content */}
            <div className="space-y-6 text-foreground leading-relaxed">
              <p className="font-display text-2xl md:text-3xl italic text-foreground leading-relaxed">
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
              
              <p className="text-sm text-muted-foreground">
                Endorsers of the Youth Foreword can be found on page 26.
              </p>
            </div>

            {/* Right Column - Images */}
            <div className="space-y-4">
              <img 
                src={youthAuthor} 
                alt="Youth Foreword Author" 
                className="w-full rounded-2xl shadow-card"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={youthImg2} 
                  alt="Youth climate action" 
                  className="w-full rounded-xl shadow-card"
                />
                <img 
                  src={youthImg3} 
                  alt="Youth climate protest" 
                  className="w-full rounded-xl shadow-card"
                />
                <img 
                  src={youthImg4} 
                  alt="Youth environmental activism" 
                  className="w-full rounded-xl shadow-card"
                />
                <img 
                  src={youthImg5} 
                  alt="Youth climate movement" 
                  className="w-full rounded-xl shadow-card"
                />
              </div>
            </div>
          </div>

          {/* IMF Stat Highlight */}
          <div className="p-8 rounded-2xl bg-gradient-ocean text-primary-foreground text-center mb-12">
            <p className="text-lg opacity-90 mb-2">The IMF estimates</p>
            <p className="font-display text-4xl md:text-5xl font-bold mb-2">
              $7.1 trillion/year
            </p>
            <p className="text-lg opacity-90">in fossil fuel subsidies</p>
          </div>

          {/* Logos and QR Code */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <img 
              src={youthLogo1} 
              alt="Organization logo" 
              className="h-16 md:h-20 object-contain"
            />
            <img 
              src={youthLogo2} 
              alt="Organization logo" 
              className="h-16 md:h-20 object-contain"
            />
            <div className="flex flex-col items-center">
              <img 
                src={youthQR} 
                alt="QR Code for more information" 
                className="w-24 h-24 md:w-32 md:h-32 rounded-lg"
              />
              <p className="text-xs text-muted-foreground mt-2">Scan for more info</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
