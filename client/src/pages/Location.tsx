// VILLAGE — 오시는 길 (별도 페이지)
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { KAKAO_URL } from "@/lib/products";

const ADDRESS = "서울 마포구 동교로 23길 32 엠페로빌딩 2층";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent("서울 마포구 동교로23길 32 엠페로빌딩")}&hl=ko&z=17&output=embed`;
const KAKAO_MAP = "https://map.kakao.com/?q=" + encodeURIComponent(ADDRESS);
const NAVER_MAP = "https://map.naver.com/p/search/" + encodeURIComponent(ADDRESS);

export default function Location() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <Header />
      <main className="pt-20">
        {/* 상단 헤더 */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-6">
          <p className="text-xs uppercase tracking-widest text-text-muted mb-2">Visit</p>
          <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-3">오시는 길</h1>
          <p className="text-text-secondary text-sm md:text-base">
            홍대입구역 1번 출구에서 도보 3분. 편하게 방문해주세요.
          </p>
        </div>

        {/* 지도 */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-8">
          <div className="relative w-full aspect-[16/10] md:aspect-[16/8] rounded-2xl overflow-hidden border border-divider bg-bg-card">
            <iframe
              src={MAP_EMBED}
              className="absolute inset-0 w-full h-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="카메라빌리지 위치 지도"
            />
          </div>

          {/* 지도 외부 열기 링크 */}
          <div className="flex flex-wrap gap-2 mt-3">
            <a href={KAKAO_MAP} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-divider rounded-full text-xs font-medium text-text-secondary hover:border-accent hover:text-accent transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>map</span>
              카카오맵에서 열기
            </a>
            <a href={NAVER_MAP} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-white border border-divider rounded-full text-xs font-medium text-text-secondary hover:border-accent hover:text-accent transition-colors">
              <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>map</span>
              네이버지도에서 열기
            </a>
          </div>
        </div>

        {/* 정보 카드 그리드 */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* 주소 */}
            <div className="bg-white rounded-2xl p-6 border border-divider">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-accent" style={{ fontSize: "22px" }}>location_on</span>
                <p className="text-xs uppercase tracking-widest text-text-muted font-medium">Address</p>
              </div>
              <p className="text-lg font-semibold text-text-primary leading-snug mb-1">
                서울 마포구 동교로 23길 32
              </p>
              <p className="text-sm text-text-secondary">엠페로빌딩 2층</p>
            </div>

            {/* 지하철 */}
            <div className="bg-white rounded-2xl p-6 border border-divider">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-accent" style={{ fontSize: "22px" }}>directions_subway</span>
                <p className="text-xs uppercase tracking-widest text-text-muted font-medium">Subway</p>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#0D3692] text-white text-xs font-bold">2</span>
                <span className="text-base font-semibold text-text-primary">홍대입구역</span>
              </div>
              <p className="text-sm text-text-secondary">1번 출구 도보 3분</p>
            </div>

            {/* 연락처 */}
            <div className="bg-white rounded-2xl p-6 border border-divider">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-accent" style={{ fontSize: "22px" }}>call</span>
                <p className="text-xs uppercase tracking-widest text-text-muted font-medium">Tel</p>
              </div>
              <a href="tel:0507-1487-3114" className="text-lg font-semibold text-text-primary hover:text-accent transition-colors">
                0507-1487-3114
              </a>
              <p className="text-sm text-text-secondary mt-1">상담 및 예약 문의</p>
            </div>

            {/* 주차 */}
            <div className="bg-white rounded-2xl p-6 border border-divider">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-accent" style={{ fontSize: "22px" }}>local_parking</span>
                <p className="text-xs uppercase tracking-widest text-text-muted font-medium">Parking</p>
              </div>
              <p className="text-lg font-semibold text-text-primary mb-1">건물 옆 전용 주차</p>
              <p className="text-sm text-text-secondary">총 4대 (선착순)</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 pb-20">
          <div className="bg-[#2A2A2A] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="text-xs uppercase tracking-widest text-white/50 mb-1.5">Reservation</p>
              <h3 className="text-white font-bold text-xl md:text-2xl leading-snug">
                방문 전 카카오톡으로
                <br className="md:hidden" /> 미리 예약해주세요
              </h3>
              <p className="text-white/60 text-sm mt-2">보증금/선결제 없음 · 배터리·SD카드 무료 포함</p>
            </div>
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
              onClick={() => (window as any).naverConv?.()}
              className="flex-shrink-0 inline-flex items-center justify-center gap-2.5 bg-[#FAE100] text-[#3C1E1E] px-7 py-4 font-bold text-base rounded-xl hover:bg-[#E6D000] active:scale-[0.98] transition-all">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#3C1E1E">
                <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.56-.96 3.6-.99 3.83 0 0-.02.17.09.23.11.07.24.01.24.01.32-.04 3.7-2.44 4.28-2.86.55.08 1.13.12 1.73.12 5.52 0 10-3.58 10-7.93C22 6.58 17.52 3 12 3z"/>
              </svg>
              카카오톡으로 예약하기
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
