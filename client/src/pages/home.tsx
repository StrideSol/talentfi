import HeroCarousel from "@/components/home/hero-carousel";
import FeaturedContent from "@/components/home/featured-content";
import TopicsGrid from "@/components/home/topics-grid";
import LatestPublications from "@/components/home/latest-publications";
import EducationalResources from "@/components/home/educational-resources";
import NewsletterSignup from "@/components/home/newsletter-signup";
import UpcomingEvents from "@/components/home/upcoming-events";

export default function Home() {
  return (
    <div>
      <HeroCarousel />
      <FeaturedContent />
      <TopicsGrid />
      <LatestPublications />
      <EducationalResources />
      <NewsletterSignup />
      <UpcomingEvents />
    </div>
  );
}
