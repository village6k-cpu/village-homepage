// VILLAGE — 공지 팝업 (필터 가격 인상 안내)
import { useEffect, useState } from "react";

const STORAGE_KEY = "village-notice-filter-price-2026-04";

export default function NoticePopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // 오늘 하루 보지 않기 체크
    const hideUntil = localStorage.getItem(STORAGE_KEY);
    if (hideUntil && Number(hideUntil) > Date.now()) return;
    // 살짝 딜레이 후 표시
    const t = setTimeout(() => setOpen(true), 600);
    return () => clearTimeout(t);
  }, []);

  const closeToday = () => {
    // 24시간 동안 숨김
    localStorage.setItem(STORAGE_KEY, String(Date.now() + 24 * 60 * 60 * 1000));
    setOpen(false);
  };

  const close = () => setOpen(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-5"
      style={{ background: "rgba(0, 0, 0, 0.55)" }}
      onClick={close}>
      <div className="relative w-full max-w-md bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}>

        {/* 상단 컬러 바 */}
        <div className="h-1.5 bg-accent" />

        {/* 본문 */}
        <div className="px-6 md:px-8 pt-7 pb-5">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-accent" style={{ fontSize: "22px" }}>campaign</span>
            <span className="text-xs font-semibold text-accent tracking-wider uppercase">Notice</span>
          </div>
          <h2 className="text-xl md:text-[22px] font-bold text-text-primary mb-4 leading-snug">
            필터류 가격 인상 안내
          </h2>

          <div className="text-sm text-text-secondary leading-relaxed space-y-3">
            <p>
              최근 필터류의 <span className="font-semibold text-text-primary">원가 상승과 파손 이슈</span>가 잦아져,
              부득이하게 필터 대여 가격을 조정하게 되었습니다.
            </p>

            <div className="flex items-center justify-center gap-3 py-3 px-4 bg-bg-primary rounded-xl my-2">
              <div className="text-center">
                <p className="text-[11px] text-text-muted mb-1">기존</p>
                <p className="text-base font-bold text-text-muted line-through">7,000원</p>
              </div>
              <span className="material-symbols-outlined text-text-muted">arrow_forward</span>
              <div className="text-center">
                <p className="text-[11px] text-accent mb-1 font-medium">변경</p>
                <p className="text-base font-bold text-accent">10,000원</p>
              </div>
            </div>

            <p>
              보다 안정적인 컨디션과 퀄리티 유지를 위한 조치이니,
              너그러운 양해 부탁드립니다.
            </p>
            <p className="text-xs text-text-muted pt-1">
              — VILLAGE<span className="text-accent">.</span> 드림
            </p>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="flex border-t border-divider">
          <button onClick={closeToday}
            className="flex-1 py-3.5 text-sm text-text-muted hover:bg-bg-primary transition-colors border-r border-divider">
            오늘 하루 보지 않기
          </button>
          <button onClick={close}
            className="flex-1 py-3.5 text-sm font-semibold text-text-primary hover:bg-bg-primary transition-colors">
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
