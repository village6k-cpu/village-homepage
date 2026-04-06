// VILLAGE RENTAL — KakaoBanner Component
// 메인 화면 상단에 고정 표시되는 카카오톡 대여 신청 배너
// 클릭 시 https://pf.kakao.com/_xhPMls 로 이동

import { MessageCircle, ChevronRight } from "lucide-react";

const KAKAO_URL = "https://pf.kakao.com/_xhPMls";

export default function KakaoBanner() {
  return (
    <div
      style={{
        background: "oklch(0.97 0.005 85)",
        borderBottom: "1px solid oklch(0.91 0 0)",
      }}
    >
      <div className="container">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-4">
          {/* Left: instruction */}
          <div
            className="text-xs leading-relaxed text-center sm:text-left"
            style={{ color: "oklch(0.4 0 0)", fontFamily: "Noto Sans KR, sans-serif" }}
          >
            <span className="font-semibold" style={{ color: "oklch(0.25 0 0)" }}>예약 방법:</span>
            &nbsp;아래 버튼을 클릭 → 카카오톡 채널로 연결 → 양식에 맞춰 메시지 전송
            <span
              className="block mt-0.5"
              style={{ color: "oklch(0.55 0 0)" }}
            >
              예시) 김OO / 010-0000-0000 / 일반 &nbsp;|&nbsp; 소니 FX9 풀세트 / 5월 20일 00:00 ~ 5월 21일 00:00
            </span>
          </div>

          {/* Right: CTA button */}
          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 font-bold transition-all"
            style={{
              background: "#FEE500",
              color: "#3A1D1D",
              padding: "10px 22px",
              borderRadius: "3px",
              fontFamily: "Noto Sans KR, sans-serif",
              fontSize: "0.88rem",
              boxShadow: "0 2px 10px oklch(0.75 0.15 85 / 0.3)",
              whiteSpace: "nowrap",
            }}
          >
            <MessageCircle size={16} />
            클릭하여 대여 신청
            <ChevronRight size={14} />
          </a>
        </div>

        {/* Discount info bar */}
        <div
          className="flex flex-wrap items-center gap-x-4 gap-y-1 pb-3 text-xs"
          style={{ color: "oklch(0.5 0 0)", fontFamily: "Noto Sans KR, sans-serif" }}
        >
          <span>
            🎓 학생 <strong style={{ color: "oklch(0.55 0.2 27)" }}>30%</strong> · 개인사업자/프리랜서 <strong style={{ color: "oklch(0.55 0.2 27)" }}>20%</strong>
            &nbsp;(할인가 품목 제외)
          </span>
          <span style={{ color: "oklch(0.82 0 0)" }}>|</span>
          <span>
            📅 장기 할인 최대 <strong style={{ color: "oklch(0.55 0.2 27)" }}>~50%</strong> · 단골 추가 <strong style={{ color: "oklch(0.55 0.2 27)" }}>10~20%</strong>
            &nbsp;(중복 가능)
          </span>
        </div>
      </div>
    </div>
  );
}
