// VILLAGE — Location Section
import { KAKAO_URL } from "@/lib/products";

const MAP_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCl32YLL9rfm8KCfZl9tgyE6dy0-kL-60s1Ajnj3XhXfca90cFxl6tycXDNloqwecbtuHi2rRt0aHqzzh-bBQtUUFwGskoyKIf_u-iZQ8kQ16EkBPZ66HCLi94QwExet1UpxVSx_HevY7mHTEXPadKunz4geniQ-FVCKQbCg5bZxirt1yyAdSl4kHCrZuL9WDxvKeL-DMetKhXzyACAMox87hlStNNyCSy_iwfHhtYt7OhNnzEFR29yZYfWn8L0qav5S5Na5JFdnQU";

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-bg-card">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 h-[400px] bg-bg-primary rounded-2xl overflow-hidden">
          <img className="w-full h-full object-cover" src={MAP_IMAGE} alt="카메라빌리지 위치" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold text-text-primary mb-3">오시는 길</h2>
          <div className="accent-line mb-10" />
          <div className="space-y-6 mb-12">
            <div>
              <p className="text-text-muted text-xs uppercase tracking-widest mb-1">Address</p>
              <p className="text-xl font-medium text-text-primary">서울 마포구 동교로 23길 32 엠페로빌딩 2층</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-accent text-white text-xs font-medium rounded-md">홍대입구역</div>
              <p className="text-text-secondary font-medium">1번 출구 도보 3분</p>
            </div>
            <div>
              <p className="text-text-muted text-xs uppercase tracking-widest mb-1">Tel</p>
              <p className="text-text-primary font-medium">0507-1487-3114</p>
            </div>
            <div>
              <p className="text-text-muted text-xs uppercase tracking-widest mb-1">Parking</p>
              <p className="text-text-secondary">건물 옆 전용 주차 공간 (4대)</p>
            </div>
          </div>
          <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
            onClick={() => (window as any).naverConv?.()}
            className="w-full md:w-auto inline-block px-10 py-4 bg-accent text-white font-medium rounded-lg hover:bg-accent-dark transition-colors text-center">
            카카오톡으로 예약하기
          </a>
        </div>
      </div>
    </section>
  );
}
