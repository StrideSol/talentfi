import HeroSection from "@/components/home/hero-section";
import FeaturedContent from "@/components/home/featured-content";
import TopicsGrid from "@/components/home/topics-grid";
import LatestPublications from "@/components/home/latest-publications";
import CustomerJourney from "@/components/home/customer-journey";
import TargetAudience from "@/components/home/target-audience";
import NewsletterSignup from "@/components/home/newsletter-signup";
import UpcomingEvents from "@/components/home/upcoming-events";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <TargetAudience />
      <CustomerJourney />
      <NewsletterSignup />
      <UpcomingEvents />
    </div>
  );
}
