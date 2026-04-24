// VILLAGE — 공지 토스트 (필터 가격 인상 안내)
import { useEffect, useState } from "react";

const STORAGE_KEY = "village-notice-filter-price-2026-04";

export default function NoticePopup() {
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

  const closeToday = () => {
    localStorage.setItem(STORAGE_KEY, String(Date.now() + 24 * 60 * 60 * 1000));
    setEntered(false);
    setTimeout(() => setOpen(false), 250);
  };

  const close = () => {
    setEntered(false);
    setTimeout(() => setOpen(false), 250);
  };

  if (!open) return null;

  return (
    <div
      className="fixed z-50 left-4 right-4 bottom-24 md:left-auto md:right-6 md:bottom-6 md:w-[360px]"
      style={{
        transform: entered ? "translateY(0)" : "translateY(20px)",
        opacity: entered ? 1 : 0,
        transition: "transform 0.3s ease, opacity 0.3s ease",
      }}>
      <div className="relative bg-white rounded-xl shadow-lg border border-divider overflow-hidden">
        {/* 좌측 컬러 바 */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />

        {/* 닫기 */}
        <button onClick={close}
          className="absolute top-2.5 right-2.5 w-7 h-7 flex items-center justify-center rounded-full hover:bg-bg-primary transition-colors"
          aria-label="닫기">
          <span className="material-symbols-outlined text-text-muted" style={{ fontSize: "18px" }}>close</span>
        </button>

        <div className="pl-5 pr-9 pt-3.5 pb-3">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="text-[10px] font-semibold text-accent tracking-wider uppercase">Notice</span>
          </div>
          <p className="text-sm font-bold text-text-primary mb-1.5 leading-snug">
            필터류 가격 인상 안내
          </p>
          <p className="text-xs text-text-secondary leading-relaxed mb-2">
            원가 상승·파손 이슈로 필터 대여 가격을{" "}
            <span className="text-text-muted line-through">7,000원</span>
            {" → "}
            <span className="font-semibold text-accent">10,000원</span>으로 조정합니다.
          </p>
          <p className="text-xs text-text-secondary leading-relaxed mb-2">
            보다 안정적인 컨디션과 퀄리티 유지를 위한 조치이니, 너그러운 양해 부탁드립니다.
          </p>
          <p className="text-[11px] text-text-muted">
            — <span className="font-black tracking-tight text-text-primary">VILLAGE<span className="text-accent">.</span></span> 드림
          </p>

          <button onClick={closeToday}
            className="mt-2.5 text-[11px] text-text-muted hover:text-text-primary transition-colors underline underline-offset-2">
            오늘 하루 보지 않기
          </button>
        </div>
      </div>
    </div>
  );
}
