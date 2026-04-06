// Stitch code.html 구조 그대로 — React 변환
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import DiscountHighlight from "@/components/DiscountHighlight";
import FeatureBanner from "@/components/FeatureBanner";
import ProductSection from "@/components/ProductSection";
import ReelsSection from "@/components/ReelsSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-background font-body text-on-surface">
      <Header />
      <main className="pt-20">
        <HeroBanner />
        <ProductSection />
        <DiscountHighlight />
        <FeatureBanner />
        <ReelsSection />
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}
