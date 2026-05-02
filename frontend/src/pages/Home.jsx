import HeroSlider from '../components/HeroSlider';
import Introduction from '../components/Introduction';
import ServicesSection from '../components/ServicesSection';
import PriceTabs from '../components/PriceTabs';
import NewsSection from '../components/NewsSection';
import BranchSystem from '../components/BranchSystem';
import VideoSection from '../components/VideoSection';
import QuoteSection from '../components/QuoteSection';
import ContactSection from '../components/ContactSection';
import BrandLogos from '../components/BrandLogos';

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Introduction />
      <ServicesSection />
      <PriceTabs />
      <NewsSection />
      <BranchSystem />
      <VideoSection />
      <QuoteSection />
      <ContactSection />
      <BrandLogos />
    </main>
  );
}
