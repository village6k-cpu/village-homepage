// VILLAGE — Hero Section (코랄 accent, Pretendard)
import { useState, useEffect, useCallback } from "react";
import { KAKAO_URL } from "@/lib/products";

const slides = [
  {
    type: "solid" as const,
    title: "할인은 중복 적용됩니다",
    badges: [
      { label: "학생 30%" },
      { label: "사업자 20%" },
      { label: "장기 최대 50%" },
      { label: "3/10 쿠폰" },
      { label: "소개 +5%" },
      { label: "히든 할인" },
    ],
    notice: "학생·사업자 중 택1 | 할인은 곱하기로 순차 적용됩니다",
    bottomNote: "배터리 + SD카드 무료 포함 · 보증금 없음 · 선결제 없음",
    cta: "내 할인 계산해보기",
    link: "/discount",
    external: false,
  },
  {
    type: "image" as const,
    image: "https://77snszqv.media.zestyio.com/FX3--ILME-FX3-_Low_Angle_R-Large-1920.jpg",
    title: "FX3 뮤비 촬영 세트\n10만원",
    subtitle: "학생 30% · 사업자 20% · 장기 최대 50%",
    cta: "카카오톡으로 예약하기",
    link: KAKAO_URL,
    external: true,
  },
  {
    type: "image" as const,
    image: "https://77snszqv.media.zestyio.com/sonycine-burano-camera-beauty-profile.jpg",
    imagePosition: "right center",
    title: "부라노도 최저가",
    subtitle: "하이엔드 시네마 카메라, 부담 없는 가격으로.",
    cta: "장비 목록 보기",
    link: "#products",
    external: false,
  },
];

/* 할인 시뮬레이션 카드 */
function DiscountCalcCard() {
  const items = [
    { name: "학생 할인", pct: "30%", active: true },
    { name: "장기 할인 (5회차)", pct: "20%", active: true },
    { name: "소개 할인", pct: "5%", active: true },
    { name: "히든 할인", pct: "?%", active: false },
  ];

  return (
    <div style={{
      background: "rgba(255, 255, 255, 0.06)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "12px",
      padding: "20px",
      width: "100%",
    }}>
      <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "14px" }}>
        할인 시뮬레이션 (예시)
      </p>

      {items.map((item, i) => (
        <div key={item.name}>
          {i > 0 && (
            <div style={{ textAlign: "center", fontSize: "11px", color: "rgba(255,255,255,0.25)", margin: "2px 0" }}>
              x
            </div>
          )}
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 14px",
            borderRadius: "6px",
            background: item.active ? "rgba(232, 89, 60, 0.15)" : "rgba(255, 255, 255, 0.04)",
            border: item.active ? "1px solid rgba(232, 89, 60, 0.3)" : "1px solid rgba(255, 255, 255, 0.06)",
          }}>
            <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.7)" }}>{item.name}</span>
            <span style={{
              fontSize: "14px",
              fontWeight: 700,
              color: item.active ? "#E8593C" : "rgba(255,255,255,0.3)",
            }}>{item.pct}</span>
          </div>
        </div>
      ))}

      {/* 결과 */}
      <div style={{
        marginTop: "12px",
        padding: "14px",
        background: "rgba(232, 89, 60, 0.1)",
        border: "1px solid rgba(232, 89, 60, 0.3)",
        borderRadius: "8px",
        textAlign: "center",
      }}>
        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)", marginBottom: "4px" }}>예상 최종 할인율</p>
        <p style={{
          fontFamily: "'Impact', 'Arial Black', sans-serif",
          fontSize: "32px",
          color: "#E8593C",
          lineHeight: 1.2,
        }}>46.6%</p>
        <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginTop: "4px" }}>
          100,000원 → 53,400원
        </p>
      </div>
    </div>
  );
}

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((i: number) => {
    setFading(true);
    setTimeout(() => { setCurrent(i); setFading(false); }, 300);
  }, []);
  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);

  useEffect(() => { const t = setInterval(next, 5500); return () => clearInterval(t); }, [next]);

  const slide = slides[current] as any;
  const isSolid = slide.type === "solid";
  const isBurano = current === 2;

  const handleClick = (e: React.MouseEvent) => {
    if (!slide.external && slide.link.startsWith("#")) {
      e.preventDefault();
      document.getElementById(slide.link.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[480px] md:h-[560px] w-full overflow-hidden"
      style={{ background: isSolid ? "#2A2A2A" : "#000" }}>

      {/* 배경 이미지 (이미지 슬라이드만) */}
      {!isSolid && (
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={slide.image} alt=""
            style={{
              opacity: fading ? 0 : 1,
              transition: "opacity 0.3s ease",
              objectPosition: slide.imagePosition || "center",
            }} />
          <div className="absolute inset-0"
            style={{ background: isBurano ? "rgba(30, 30, 30, 0.35)" : "rgba(30, 30, 30, 0.55)" }} />
          <div className="absolute inset-0 hero-gradient" />
        </div>
      )}

      {/* 하단 페이드아웃 (이미지 슬라이드만) */}
      {!isSolid && (
        <div className="absolute bottom-0 left-0 right-0 h-[60px] pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, rgba(245, 243, 239, 0.3))", zIndex: 3 }} />
      )}

      {/* 콘텐츠 */}
      <div className="relative h-full flex items-center max-w-7xl mx-auto px-8 md:px-20"
        style={{ opacity: fading ? 0 : 1, transition: "opacity 0.3s ease", zIndex: 4 }}>

        {/* 1번 슬라이드: 좌우 2단 */}
        {isSolid ? (
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center w-full">
            {/* 왼쪽: 카피 + 태그 + CTA */}
            <div className="flex-1">
              <h1 className="text-white mb-5 leading-tight whitespace-pre-line text-3xl md:text-5xl"
                style={{ fontFamily: "'Impact', 'Arial Black', sans-serif", fontWeight: 400 }}>
                {slide.title}
              </h1>

              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {slide.badges.map((b: any) => (
                    <span key={b.label}
                      style={{
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "rgba(255, 255, 255, 0.7)",
                        background: "none",
                        padding: "5px 12px",
                        borderRadius: "4px",
                        fontSize: "12px",
                        fontWeight: 500,
                      }}>
                      {b.label}
                    </span>
                  ))}
                </div>
                {slide.notice && (
                  <p className="mb-3" style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)" }}>
                    {slide.notice}
                  </p>
                )}
                {slide.bottomNote && (
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>{slide.bottomNote}</p>
                )}
              </div>

              <a href={slide.link} onClick={handleClick}
                className="bg-accent text-white px-8 py-4 font-medium text-base rounded-lg hover:bg-accent-dark transition-colors inline-flex items-center gap-3">
                {slide.cta}
              </a>
            </div>

            {/* 오른쪽: 할인 시뮬레이션 카드 (모바일 숨김) */}
            <div className="hidden md:block md:w-[280px] flex-shrink-0">
              <DiscountCalcCard />
            </div>
          </div>
        ) : (
          /* 2번, 3번 슬라이드: 기존 좌정렬 */
          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-2xl md:text-6xl text-white mb-3 md:mb-5 leading-tight whitespace-pre-line">
              {slide.title}
            </h1>
            <p className="font-medium text-sm md:text-xl text-zinc-300 mb-6 md:mb-8">
              {slide.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a href={slide.link} target={slide.external ? "_blank" : undefined}
                rel={slide.external ? "noopener noreferrer" : undefined} onClick={handleClick}
                className="bg-accent text-white px-6 py-3 md:px-8 md:py-4 font-medium text-sm md:text-base rounded-lg hover:bg-accent-dark transition-colors inline-flex items-center justify-center gap-3">
                {slide.cta}
              </a>
              {slide.external && (
                <a href="#products" onClick={(e) => { e.preventDefault(); document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }); }}
                  className="border border-white/50 text-white px-6 py-3 md:px-8 md:py-4 font-medium text-sm md:text-base rounded-lg hover:bg-white/10 transition-colors text-center">
                  장비 목록 보기
                </a>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3" style={{ zIndex: 5 }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => goTo(i)}
            className={`w-12 h-1 rounded-full ${i === current ? "bg-white" : "bg-white/30"}`} />
        ))}
      </div>
    </section>
  );
}
