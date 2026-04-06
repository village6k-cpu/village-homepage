// Stitch code.html Section 3: Feature Bar — 그대로
export default function FeatureBanner() {
  return (
    <section className="bg-surface-container-low py-16">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
            <span className="material-symbols-outlined !text-3xl">forum</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">Kakao Booking</h4>
            <p className="text-xs text-on-surface-variant mt-1">24시간 간편 상담</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
            <span className="material-symbols-outlined !text-3xl">battery_full</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">Battery + SD Free</h4>
            <p className="text-xs text-on-surface-variant mt-1">₩35,000 상당 구성</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
            <span className="material-symbols-outlined !text-3xl">payments</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">No Deposit</h4>
            <p className="text-xs text-on-surface-variant mt-1">보증금/선결제 없음</p>
          </div>
        </div>
        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm text-primary">
            <span className="material-symbols-outlined !text-3xl">map</span>
          </div>
          <div>
            <h4 className="font-bold text-sm">Hongdae Station</h4>
            <p className="text-xs text-on-surface-variant mt-1">홍대입구역 도보 3분</p>
          </div>
        </div>
      </div>
    </section>
  );
}
