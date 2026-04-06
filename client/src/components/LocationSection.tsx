// Stitch code.html Section 6: Location — 이미지+구조 그대로
import { KAKAO_URL } from "@/lib/products";

const MAP_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuCl32YLL9rfm8KCfZl9tgyE6dy0-kL-60s1Ajnj3XhXfca90cFxl6tycXDNloqwecbtuHi2rRt0aHqzzh-bBQtUUFwGskoyKIf_u-iZQ8kQ16EkBPZ66HCLi94QwExet1UpxVSx_HevY7mHTEXPadKunz4geniQ-FVCKQbCg5bZxirt1yyAdSl4kHCrZuL9WDxvKeL-DMetKhXzyACAMox87hlStNNyCSy_iwfHhtYt7OhNnzEFR29yZYfWn8L0qav5S5Na5JFdnQU";

export default function LocationSection() {
  return (
    <section id="location" className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 h-[400px] bg-surface-container rounded-lg overflow-hidden shadow-sm">
          <img className="w-full h-full object-cover grayscale" src={MAP_IMAGE} alt="카메라빌리지 위치" />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-4xl font-headline font-black mb-8 leading-tight">LOCATION.</h2>
          <div className="space-y-6 mb-12">
            <div>
              <p className="text-zinc-400 font-label text-xs uppercase tracking-widest mb-1">Address</p>
              <p className="text-xl font-bold">서울 마포구 동교로 23길 32 엠페로빌딩 2층</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="px-3 py-1 bg-secondary-container text-on-secondary-fixed text-xs font-black rounded-sm">NEW</div>
              <p className="text-primary font-bold">홍대입구역 도보 3분</p>
            </div>
          </div>
          <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
            className="w-full md:w-auto inline-block px-10 py-5 bg-secondary-container text-on-secondary-fixed font-black rounded-sm shadow-lg hover:opacity-90 active:scale-95 transition-all text-center">
            지금 바로 예약하기
          </a>
        </div>
      </div>
    </section>
  );
}
