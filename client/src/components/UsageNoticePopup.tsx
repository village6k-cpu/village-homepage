// VILLAGE — 장비 사용법 미숙 관련 안내 팝업 (상품 상세 진입 시, 하루 1회)
import { useEffect, useState } from "react";

const STORAGE_KEY = "village-popup-usage-notice";

export default function UsageNoticePopup() {
  const [open, setOpen] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    try {
      const hideUntil = localStorage.getItem(STORAGE_KEY);
      if (hideUntil && Number(hideUntil) > Date.now()) return;
    } catch {}
    const t = setTimeout(() => {
      setOpen(true);
      requestAnimationFrame(() => setEntered(true));
    }, 600);
    return () => clearTimeout(t);
  }, []);

  const dismiss = (remember: boolean) => {
    if (remember) {
      try {
        localStorage.setItem(STORAGE_KEY, String(Date.now() + 24 * 60 * 60 * 1000));
      } catch {}
    }
    setEntered(false);
    setTimeout(() => setOpen(false), 250);
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center px-6"
      style={{
        background: "rgba(0,0,0,0.3)",
        opacity: entered ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}
      onClick={() => dismiss(false)}
    >
      <div
        className="relative w-full max-w-[360px] bg-white rounded-2xl shadow-2xl px-6 pt-6 pb-5"
        style={{
          transform: entered ? "translateY(0) scale(1)" : "translateY(10px) scale(0.97)",
          opacity: entered ? 1 : 0,
          transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <p className="text-[11px] font-bold text-accent tracking-widest mb-2">안내</p>
        <p className="text-sm text-text-primary leading-relaxed mb-5">
          해당 장비의 사용법을 모르실 경우에는 반드시 예약 시 미리 알려주시기 바랍니다.
          장비 사용 미숙으로 인한 책임 회피 또는 환불 요구는 불가한 점 양지 바랍니다.
        </p>

        <button
          onClick={() => dismiss(false)}
          className="w-full h-11 bg-tag-dark hover:bg-black text-white text-sm font-bold rounded-xl transition-colors"
        >
          확인했습니다
        </button>

        <button
          onClick={() => dismiss(true)}
          className="block mx-auto mt-2.5 text-[11px] text-text-muted hover:text-text-primary transition-colors underline underline-offset-2"
        >
          오늘 하루 보지 않기
        </button>
      </div>
    </div>
  );
}
