import HeroSection from '@/components/home/HeroSection';
import FeaturedEvents from '@/components/home/FeaturedEvents';
import HowItWorks from '@/components/home/HowItWorks';
import Testimonials from '@/components/home/Testimonials';
import FAQ from '@/components/home/FAQ';

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <FeaturedEvents />
      <HowItWorks />
      <Testimonials />
      <FAQ />
    </div>
  );
}