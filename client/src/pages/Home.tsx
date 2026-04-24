// VILLAGE Homepage
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import FeatureBanner from "@/components/FeatureBanner";
import ProductSection from "@/components/ProductSection";
import ReelsSection from "@/components/ReelsSection";
import Footer from "@/components/Footer";
import NoticePopup from "@/components/NoticePopup";

export default function Home() {
  return (
    <div className="bg-bg-primary text-text-primary">
      <Header />
      <main className="pt-20">
        <HeroBanner />
        <ProductSection />
        <FeatureBanner />
        <ReelsSection />
      </main>
      <Footer />
      <NoticePopup />
    </div>
  );
}
