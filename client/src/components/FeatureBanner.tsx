// VILLAGE — Feature Bar (플랫 디자인)
export default function FeatureBanner() {
  const features = [
    { icon: "forum", title: "카카오톡 예약", desc: "24시간 간편 상담" },
    { icon: "battery_full", title: "배터리 + SD 무료", desc: "35,000원 상당 구성" },
    { icon: "payments", title: "보증금 없음", desc: "선결제도 없음" },
    { icon: "location_on", title: "홍대입구역", desc: "1번출구 도보 3분" },
  ];

  return (
    <section className="bg-bg-card py-16 border-y border-divider">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-12">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center gap-3">
            <div className="w-14 h-14 rounded-2xl bg-bg-primary flex items-center justify-center text-accent">
              <span className="material-symbols-outlined !text-2xl">{f.icon}</span>
            </div>
            <div>
              <h4 className="font-medium text-sm text-text-primary">{f.title}</h4>
              <p className="text-xs text-text-muted mt-1">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
