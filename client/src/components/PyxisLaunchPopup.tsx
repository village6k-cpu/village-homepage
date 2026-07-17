// VILLAGE — PYXIS 6K 렌탈 시작 안내 (코너 카드, 화면 가리지 않음)
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
    }, 1200);
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
      className="fixed z-50 left-4 right-4 bottom-24 md:left-auto md:right-6 md:bottom-6 md:w-[340px]"
      style={{
        transform: entered ? "translateY(0)" : "translateY(20px)",
        opacity: entered ? 1 : 0,
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}
    >
      <div className="relative bg-white rounded-xl shadow-lg border border-divider overflow-hidden">
        {/* 좌측 컬러 바 */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

        {/* 닫기 */}
        <button
          onClick={() => dismiss(false)}
          className="absolute top-2.5 right-2.5 w-7 h-7 flex items-center justify-center rounded-full hover:bg-bg-primary transition-colors text-text-muted text-base leading-none"
          aria-label="닫기"
        >
          &times;
        </button>

        <div className="pl-5 pr-9 pt-3.5 pb-3">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[10px] font-semibold text-accent tracking-wider uppercase">신규 입고</span>
          </div>

          <div className="flex items-center gap-3">
            <img
              src="/images/products/001.png"
              alt="PYXIS 6K"
              className="w-14 h-14 rounded-lg object-cover bg-bg-primary flex-shrink-0"
            />
            <div className="min-w-0">
              <p className="text-sm font-bold text-text-primary leading-snug">
                PYXIS 6K 시네마 풀세트
              </p>
              <p className="text-xs text-text-secondary mt-0.5">
                렌탈 시작 · <span className="font-semibold text-text-primary">100,000원</span>/1일
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-2.5">
            <Link
              href="/product/1"
              onClick={() => dismiss(true)}
              className="text-xs font-semibold text-accent hover:text-accent-dark transition-colors"
            >
              구성품 보기 &rarr;
            </Link>
            <button
              onClick={() => dismiss(true)}
              className="text-[11px] text-text-muted hover:text-text-primary transition-colors underline underline-offset-2"
            >
              오늘 하루 보지 않기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
