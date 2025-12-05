import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Lightbulb, Target } from 'lucide-react';
import { useLanguage, LanguageProvider } from '@/contexts/LanguageContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import climateFundamentals from '@/assets/climate-fundamentals.jpg';
import biodiversity from '@/assets/biodiversity.jpg';
import polesOceans from '@/assets/poles-oceans.jpg';
import adaptation from '@/assets/adaptation.jpg';

const chapterImages: Record<number, string> = {
  1: climateFundamentals,
  2: biodiversity,
  3: polesOceans,
  4: adaptation,
};

const chapterContent: Record<number, { keyFacts: string[]; actions: string[]; content: string[] }> = {
  1: {
    keyFacts: [
      'The greenhouse effect is  for life on Earth, maintaining temperatures 33°C warmer than without it.',
      'CO₂ levels have risen from 280 ppm pre-industrial to over 420 ppm today.',
      'The rate of change is unprecedented - current warming is 10 times faster than ice-age recovery.',
      'We are already experiencing 1.1°C of warming above pre-industrial levels.',
    ],
    actions: [
      'Support policies that reduce greenhouse gas emissions.',
      'Invest in renewable energy infrastructure.',
      'Promote energy efficiency standards.',
      'Implement carbon pricing mechanisms.',
    ],
    content: [
      'Climate change is driven by the enhanced greenhouse effect. Natural greenhouse gases like water vapor, carbon dioxide, and methane trap heat in our atmosphere, making Earth habitable. Human activities, primarily burning fossil fuels, have dramatically increased concentrations of these gases.',
      'The consequences are already visible: more extreme weather events, rising sea levels, melting ice caps, and shifting ecosystems. Without urgent action, we face irreversible tipping points that could trigger cascading effects across the planet.',
    ],
  },
  2: {
    keyFacts: [
      'One million species face extinction due to human activities.',
      'Biodiversity provides services worth $125-140 trillion per year globally.',
      '75% of food crops rely on animal pollinators.',
      'Deforestation accounts for 11% of global greenhouse gas emissions.',
    ],
    actions: [
      'Protect and restore natural habitats.',
      'Implement sustainable land use practices.',
      'Support indigenous land management.',
      'Create incentives for biodiversity conservation.',
    ],
    content: [
      'Biodiversity is not just about saving cute animals - it is the foundation of human civilization. Healthy ecosystems provide clean air and water, pollinate crops, regulate climate, and support livelihoods for billions of people.',
      'The current rate of species extinction is 1,000 times higher than natural background rates. This mass extinction threatens food security, economic stability, and human health. Nature-based solutions can address climate change while protecting biodiversity.',
    ],
  },
  3: {
    keyFacts: [
      'Arctic sea ice has declined by 40% since satellite records began in 1979.',
      'Oceans have absorbed 90% of excess heat from climate change.',
      'Sea levels could rise by 1 meter by 2100 under current trajectories.',
      'Ocean acidification has increased by 30% since the Industrial Revolution.',
    ],
    actions: [
      'Reduce emissions to slow polar ice loss.',
      'Protect marine ecosystems and establish marine protected areas.',
      'Support coastal communities adapting to sea level rise.',
      'Reduce ocean pollution and plastic waste.',
    ],
    content: [
      'The poles and oceans act as Earth\'s climate regulators. Ice reflects sunlight back to space, while oceans absorb and distribute heat around the planet. Both systems are under severe stress from climate change.',
      'Ocean acidification, warming, and deoxygenation represent a triple threat to marine life. Coral reefs, which support 25% of all marine species, are bleaching at unprecedented rates. Melting ice sheets threaten to raise sea levels dramatically, displacing hundreds of millions of people.',
    ],
  },
  4: {
    keyFacts: [
      'Climate adaptation could cost $140-300 billion per year by 2030.',
      'Every $1 invested in adaptation can yield $2-10 in benefits.',
      'Developing countries need 5-10 times more adaptation finance than they receive.',
      'Nature-based solutions can provide 37% of the mitigation needed by 2030.',
    ],
    actions: [
      'Develop climate-resilient infrastructure.',
      'Implement early warning systems for extreme weather.',
      'Support climate-smart agriculture.',
      'Ensure adaptation finance reaches vulnerable communities.',
    ],
    content: [
      'Even with ambitious emissions reductions, some climate impacts are now inevitable. Adaptation means preparing for and managing these changes to minimize harm and protect the most vulnerable.',
      'Effective adaptation requires local knowledge, community participation, and significant investment. It is not just about building sea walls - it encompasses everything from drought-resistant crops to mental health support for climate-affected communities.',
    ],
  },
  5: {
    keyFacts: [
      '$7.1 trillion is spent annually on fossil fuel subsidies.',
      'Climate finance flows need to increase 5-10 times to meet Paris goals.',
      'Clean energy investment reached $1.8 trillion in 2023.',
      'Green bonds have grown to over $500 billion annually.',
    ],
    actions: [
      'Phase out fossil fuel subsidies.',
      'Redirect finance to clean energy investments.',
      'Increase climate finance for developing nations.',
      'Implement green financial regulations.',
    ],
    content: [
      'The money exists - it is currently flowing in the wrong direction. Fossil fuel subsidies alone dwarf global climate finance. Redirecting these flows is essential for achieving climate goals.',
      'Climate finance is not charity - it is investment in a sustainable future. Countries that lead in clean energy are building competitive advantages in the industries of tomorrow.',
    ],
  },
  6: {
    keyFacts: [
      'Climate damages could reach 23% of global GDP by 2100.',
      'The social cost of carbon is estimated at $51-190 per tonne.',
      'Transitioning to clean energy could create 65 million jobs by 2030.',
      'Air pollution from fossil fuels costs $8.1 trillion per year in health impacts.',
    ],
    actions: [
      'Implement carbon pricing.',
      'Account for externalities in economic decision-making.',
      'Support just transition for affected workers.',
      'Reform economic indicators beyond GDP.',
    ],
    content: [
      'Traditional economics has failed to account for climate costs. When pollution is free, markets produce too much of it. Correcting this market failure requires putting a price on carbon and accounting for environmental externalities.',
      'The transition to a low-carbon economy is not a cost - it is an opportunity. Countries that move fastest will capture the economic benefits of clean energy leadership.',
    ],
  },
  7: {
    keyFacts: [
      'Energy production accounts for 73% of global emissions.',
      'Renewable energy is now the cheapest source of new electricity in most regions.',
      'Transport accounts for 16% of global emissions.',
      'Industry accounts for 21% of global emissions.',
    ],
    actions: [
      'Accelerate renewable energy deployment.',
      'Electrify transport and heating.',
      'Improve industrial energy efficiency.',
      'Support clean technology innovation.',
    ],
    content: [
      'The energy transition is not a future goal - it is happening now. Solar and wind are already cheaper than fossil fuels in most of the world. The question is how fast we can scale up deployment.',
      'Decarbonizing transport and industry is more challenging but essential. Electric vehicles, green hydrogen, and carbon capture all have roles to play in achieving net zero.',
    ],
  },
  8: {
    keyFacts: [
      'Food systems account for 26-34% of global emissions.',
      'Forests absorb 2.6 billion tonnes of CO₂ annually.',
      'One-third of fish stocks are overfished.',
      'Agriculture uses 70% of global freshwater.',
    ],
    actions: [
      'Reduce food waste (currently 30-40% of all food).',
      'Support sustainable agriculture practices.',
      'Halt deforestation and restore forests.',
      'Reform fisheries management.',
    ],
    content: [
      'How we produce and consume food is central to the climate crisis. Agriculture is both a major source of emissions and highly vulnerable to climate impacts. Transformation of food systems is essential.',
      'Forests and oceans are critical carbon sinks. Protecting and restoring these ecosystems can provide significant climate benefits while supporting biodiversity and livelihoods.',
    ],
  },
  9: {
    keyFacts: [
      '89% of people globally want stronger climate action.',
      'Climate misinformation is widespread on social media.',
      'Climate education is lacking in most school curricula.',
      'Public understanding strongly influences policy support.',
    ],
    actions: [
      'Strengthen climate education in schools.',
      'Combat climate misinformation.',
      'Engage constituents in climate conversations.',
      'Support transparent climate reporting.',
    ],
    content: [
      'The science is clear, but public understanding often lags behind. Misinformation and confusion can undermine support for necessary policies. Clear communication is essential.',
      'People care about climate change when they understand how it affects them. Connecting global science to local impacts helps build support for action.',
    ],
  },
  10: {
    keyFacts: [
      'Net zero requires removing 10 billion tonnes of CO₂ per year by 2050.',
      'Direct air capture currently costs $250-600 per tonne.',
      'Carbon markets grew to $909 billion in 2023.',
      'Natural carbon sinks remove about 12 billion tonnes of CO₂ annually.',
    ],
    actions: [
      'Invest in carbon capture R&D.',
      'Design robust carbon market regulations.',
      'Scale up natural carbon removal.',
      'Ensure carbon credits represent real reductions.',
    ],
    content: [
      'Even with rapid emissions reductions, we will need to remove carbon dioxide from the atmosphere to achieve net zero. Carbon capture technologies are developing rapidly but remain expensive.',
      'Carbon markets can help drive emissions reductions, but they must be carefully designed to ensure real impact. Weak rules and poor oversight can lead to greenwashing rather than genuine climate action.',
    ],
  },
};

const ChapterDetailContent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useLanguage();
  
  const chapterNum = parseInt(id || '1', 10);
  const chapter = chapterContent[chapterNum];
  const image = chapterImages[chapterNum];

  if (!chapter) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Chapter not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="h-64 md:h-96 relative overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={t(`chapter${chapterNum}.title`)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
            <div className="container mx-auto">
              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{t('nav.home')}</span>
              </button>
              <span className="chapter-number mb-4">{chapterNum}</span>
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mt-4">
                {t(`chapter${chapterNum}.title`)}
              </h1>
              <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
                {t(`chapter${chapterNum}.desc`)}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="prose prose-lg max-w-none">
                {chapter.content.map((paragraph, index) => (
                  <p key={index} className="text-foreground/90 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Facts */}
              <div className="bg-card rounded-xl p-6 md:p-8 border border-border">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    {t('common.keyFacts')}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {chapter.keyFacts.map((fact, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-accent/20 text-accent text-sm font-medium flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <span className="text-foreground/80">{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Actions Card */}
              <div className="bg-primary/5 rounded-xl p-6 border border-primary/20 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-primary" />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-foreground">
                    {t('common.takeAction')}
                  </h2>
                </div>
                <ul className="space-y-3">
                  {chapter.actions.map((action, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <BookOpen className="w-4 h-4 text-primary shrink-0 mt-1" />
                      <span className="text-foreground/80 text-sm">{action}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Navigation */}
              <div className="flex gap-4">
                {chapterNum > 1 && (
                  <button
                    onClick={() => navigate(`/chapter/${chapterNum - 1}`)}
                    className="flex-1 px-4 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-colors text-sm"
                  >
                    ← Chapter {chapterNum - 1}
                  </button>
                )}
                {chapterNum < 10 && (
                  <button
                    onClick={() => navigate(`/chapter/${chapterNum + 1}`)}
                    className="flex-1 px-4 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors text-sm"
                  >
                    Chapter {chapterNum + 1} →
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const ChapterDetail = () => (
  <LanguageProvider>
    <ChapterDetailContent />
  </LanguageProvider>
);

export default ChapterDetail;
