// Stitch code.html Section 1: Hero Slider — 그대로 React 변환
import { useState, useEffect, useCallback } from "react";
import { KAKAO_URL } from "@/lib/products";

const STITCH_HERO_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBQTuawf16Fto8MJrwGAmbcLt8I6joURexQd8-0rAW1bwQT08BhP8rhtt77zAEPkuCPVSbBZhQEvv8BwJMABUpNYVc1Y3DjGojP7nZw_YwYFy-Lq-5WPXv3r0YedDMm7ruXICuqEn1srVQrxZa7ecOM1yD3XrDnc5MSK9C-hUYtfgeAgkfSi3ezfEKka_GxLTXUPCQILlmZ3XoJrsmFvpA-aJgowrNozVLnAzhVYAR-uWu6HSw8nsFO8hnEcUyjVQTTbuzLSrvU4gY";

const slides = [
  { image: STITCH_HERO_IMAGE, title: "당신의 영상에\n최고의 장비를", subtitle: "학생 30% · 사업자 20% · 장기 최대 50%", cta: "클릭하여 대여 신청", link: KAKAO_URL, external: true },
  { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcX5m5KCGVrpd1XAhYx8cV8lWFhrVACRWWi7YsZYL32ikBGMaemXFvcK7-ual0gQi9j7EuSmNwFE0Vno4COKerP5PysaAROhOfEGsOB1ErGVQktkuhWlNjeI1s9sfdcyWT9oRpYIzMqGqIlY2N6iSa3gt4lOKGgOpe8wxqGAl3on3sktC8-sOq0iy-8tlc59ngSbykgs_i8t3IVK6pQX6cRxbtDlBHjfBOBpAUhylxuLL-CGp0TD0R0GKc8vryucckvzScv_y50qA", title: "DZOFILM · 삼양 XEEN\n시네마 렌즈 세트", subtitle: "전문 영상 제작을 위한 프리미엄 렌즈", cta: "장비 목록 보기", link: "#products", external: false },
  { image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVVML3NwhK6eLbxteBl9QnQCMb4iMZx67HMpO6322w5dAKgfOHhLqax15p1MV6aL8osKk9T_ijaSy856lpi_WTZqBzTmhWlzPcmWaYwLcRT8pAzwfxHJ2yS2iEod1JN9PwNGcmXSRkYj793AbZIsSxyJdNULyBhWTdwlPUL26Tq3ZZojWfm6arXHR16vyMz4po-Pa_YsSxA-v4A5wxOSVrV4oNFDYWKUYp67Rl394qyXCL0x5EwMKihj5VjPaKxT9IB5hR3hGUWSc", title: "할인은 전부\n중복 적용됩니다", subtitle: "배터리 + SD카드 무료 포함 (₩35,000 상당)", cta: "할인 계산해보기", link: "/discount", external: false },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((i: number) => {
    setFading(true);
    setTimeout(() => { setCurrent(i); setFading(false); }, 300);
  }, []);
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  useEffect(() => { const t = setInterval(next, 5500); return () => clearInterval(t); }, [next]);

  const slide = slides[current];

  const handleClick = (e: React.MouseEvent) => {
    if (!slide.external && slide.link.startsWith("#")) {
      e.preventDefault();
      document.getElementById(slide.link.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-[480px] md:h-[560px] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover opacity-80" src={slide.image} alt=""
          style={{ opacity: fading ? 0 : 0.8, transition: "opacity 0.3s ease" }} />
        <div className="absolute inset-0 hero-gradient" />
      </div>
      <div className="relative h-full flex flex-col justify-center px-8 md:px-20 max-w-7xl mx-auto"
        style={{ opacity: fading ? 0 : 1, transition: "opacity 0.3s ease" }}>
        <h1 className="font-headline font-black text-5xl md:text-7xl text-white mb-6 leading-tight tracking-tighter whitespace-pre-line">
          {slide.title}
        </h1>
        <p className="font-headline font-medium text-xl md:text-2xl text-primary-container mb-12 tracking-tight">
          {slide.subtitle}
        </p>
        <div>
          <a href={slide.link} target={slide.external ? "_blank" : undefined}
            rel={slide.external ? "noopener noreferrer" : undefined} onClick={handleClick}
            className="bg-secondary-container text-on-secondary-fixed px-10 py-5 font-black text-lg rounded-sm shadow-xl hover:opacity-90 transition-all inline-flex items-center gap-3">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
            {slide.cta}
          </a>
        </div>
      </div>
      {/* Slider Indicators — Stitch 그대로 */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`w-12 h-1 ${i === current ? "bg-white" : "bg-white/30"}`} />
        ))}
      </div>
    </section>
  );
}
