// VILLAGE — PYXIS 6K 렌탈 시작 안내 (센터 팝업, 옅은 배경)
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
      className="fixed inset-0 z-[60] flex items-center justify-center px-6"
      style={{
        background: "rgba(0,0,0,0.3)",
        opacity: entered ? 1 : 0,
        transition: "opacity 0.25s ease",
      }}
      onClick={() => dismiss(false)}
    >
      <div
        className="relative w-full max-w-[360px] bg-white rounded-2xl overflow-hidden shadow-2xl"
        style={{
          transform: entered ? "translateY(0) scale(1)" : "translateY(10px) scale(0.97)",
          opacity: entered ? 1 : 0,
          transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 닫기 */}
        <button
          onClick={() => dismiss(false)}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-black/25 hover:bg-black/45 transition-colors text-white text-lg leading-none"
          aria-label="닫기"
        >
          &times;
        </button>

        {/* 제품 이미지 */}
        <div className="relative h-44 bg-bg-primary overflow-hidden">
          <img
            src="/images/products/001.png"
            alt="PYXIS 6K 시네마 풀세트"
            className="h-full w-full object-cover"
          />
          <div className="absolute top-3.5 left-3.5 bg-accent text-white text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full shadow-sm">
            신규 입고
          </div>
        </div>

        {/* 본문 */}
        <div className="px-6 pt-4 pb-5">
          <h3 className="text-base font-black text-text-primary leading-snug mb-1">
            PYXIS 6K 시네마 풀세트
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-3">
            픽시스 6K 렌탈이 시작되었습니다.
            <br />
            EF · PL 마운트 / BRAW / 풀프레임 —{" "}
            <span className="font-semibold text-text-primary">100,000원</span>
            <span className="text-text-muted">/1일</span>
          </p>

          <Link
            href="/product/1"
            onClick={() => dismiss(true)}
            className="flex items-center justify-center gap-2 w-full h-11 bg-accent hover:bg-accent-dark text-white text-sm font-bold rounded-xl transition-colors"
          >
            구성품 보러가기
            <span className="text-base leading-none">&rarr;</span>
          </Link>

          <button
            onClick={() => dismiss(true)}
            className="block mx-auto mt-2.5 text-[11px] text-text-muted hover:text-text-primary transition-colors underline underline-offset-2"
          >
            오늘 하루 보지 않기
          </button>
        </div>
      </div>
    </div>
  );
}
