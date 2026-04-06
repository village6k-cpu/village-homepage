// VILLAGE RENTAL — Reels/Guide Content Data
// 릴스 업로드 후 실제 데이터로 채움

export interface Reel {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  instagramUrl: string;
  series: '사용법' | '주의사항' | '팁' | '인터뷰' | '기타';
}

export const reels: Reel[] = [
  // 릴스 업로드 후 아래 형식으로 추가
  // {
  //   id: 1,
  //   title: "FX3 필수 설정 5가지",
  //   description: "소니 시네마 라인 최적화 가이드",
  //   thumbnail: "https://...",
  //   instagramUrl: "https://www.instagram.com/reel/...",
  //   series: "사용법",
  // },
];

export const reelSeries = ['전체', '사용법', '주의사항', '팁', '인터뷰'] as const;
