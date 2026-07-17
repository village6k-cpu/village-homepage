// VILLAGE — PYXIS 6K 렌탈 시작 런칭 팝업 (센터 모달)
import { useEffect, useState } from "react";
import { Link } from "wouter";

const STORAGE_KEY = "village-popup-pyxis-launch-2026-07";

export default function PyxisLaunchPopup() {
  const [open, setOpen] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const hideUntil = localStorage.getItem(STORAGE_KEY);
    if (hideUntil && Number(hideUntil) > Date.now()) return;
    const t = setTimeout(() => {
      setOpen(true);
      requestAnimationFrame(() => setEntered(true));
    }, 900);
    return () => clearTimeout(t);
  }, []);

  const dismiss = (remember: boolean) => {
    if (remember) {
      localStorage.setItem(STORAGE_KEY, String(Date.now() + 24 * 60 * 60 * 1000));
    }
    setEntered(false);
    setTimeout(() => setOpen(false), 250);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center px-5"
      style={{
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(3px)",
        opacity: entered ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}
      onClick={() => dismiss(false)}
    >
      <div
        className="relative w-full max-w-[400px] bg-white rounded-3xl overflow-hidden shadow-2xl"
        style={{
          transform: entered ? "translateY(0) scale(1)" : "translateY(12px) scale(0.96)",
          opacity: entered ? 1 : 0,
          transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 */}
        <button
          onClick={() => dismiss(false)}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/30 hover:bg-black/50 transition-colors text-white text-lg leading-none"
          aria-label="닫기"
        >
          &times;
        </button>

        {/* 히어로 이미지 */}
        <div className="relative h-52 bg-bg-primary flex items-center justify-center overflow-hidden">
          <img
            src="/images/products/001.png"
            alt="PYXIS 6K 시네마 풀세트"
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(180deg, rgba(0,0,0,0) 55%, rgba(0,0,0,0.55) 100%)" }}
          />
          {/* NOW AVAILABLE 뱃지 */}
          <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-accent text-white text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            NOW AVAILABLE
          </div>
        </div>

        {/* 본문 */}
        <div className="px-6 pt-5 pb-6">
          <p className="text-[11px] font-bold text-accent tracking-widest uppercase mb-1.5">
            신규 입고
          </p>
          <h3 className="text-lg font-black text-text-primary leading-snug mb-2">
            PYXIS 6K 시네마 풀세트
          </h3>

          {/* 스펙 칩 */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {["EF · PL 마운트", "BRAW", "풀프레임"].map((t) => (
              <span
                key={t}
                className="text-[11px] font-medium text-text-secondary bg-bg-primary border border-divider rounded-full px-2.5 py-1"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="text-sm text-text-secondary leading-relaxed mb-4">
            픽시스 6K 렌탈이 시작되었습니다.
          </p>

          {/* 가격 */}
          <div className="flex items-baseline gap-1.5 mb-4">
            <span className="text-2xl font-black text-text-primary">100,000</span>
            <span className="text-sm text-text-muted">원 / 1일</span>
          </div>

          {/* CTA */}
          <Link
            href="/product/1"
            onClick={() => dismiss(true)}
            className="flex items-center justify-center gap-2 w-full h-12 bg-accent hover:bg-accent-dark text-white font-bold rounded-xl transition-colors"
          >
            구성품 보러가기
            <span className="text-lg leading-none">&rarr;</span>
          </Link>

          <button
            onClick={() => dismiss(true)}
            className="block mx-auto mt-3 text-[11px] text-text-muted hover:text-text-primary transition-colors underline underline-offset-2"
          >
            오늘 하루 보지 않기
          </button>
        </div>
      </div>
    </div>
  );
}
