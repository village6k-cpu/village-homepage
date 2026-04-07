// VILLAGE — Guide Page (/guide)
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { reels, reelSeries } from "@/lib/reels";

const placeholderReels = [
  { title: "FX3 필수 설정 5가지", desc: "소니 시네마 라인 최적화 가이드", series: "사용법", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJV4nJyLk2MId-SmyKFnB6viqrnfvL8PYu5XRf9GXkclcOJaR69N-aEj4XZNRsmx7nmssfOWDqcfHQHEilUbV7ji5IJrwOm5cFe05OjkpDv2LfJKqc7sEH3B6H_1YMo4ZdwFDASUx0DZ3O4kW9r8wRgvLRzrYkl70fF8EfDzCIp2BuL5rarrRLmb6O1cksDHGagfm5HgKiZKbQr6OXp5JTdwE1syBOTikJq-iRPG_jxyg0wc7TqFKVkKeyC-eeuFFqA-T30Ko_T38" },
  { title: "장비 사용법 및 주의사항", desc: "렌즈 교체부터 센서 보호까지", series: "주의사항", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3dCAvUaHIYuLyd2UlBRK1nAVtQ53LFjwwS0Kyk34y5jMXakHUwkuJCdB2chJIJQMD7pFuj63Tfnkjht9pR3q9e29hif8qtG1qwCc3YE1SK4-VD4YxZa0Tjc4vPUGZUWremTHCcSv_4wVF0eXdpQ3TdTrv4lOwIkxEX8xOanvrXLA2zXF2InxN9cM7_DH7T1VGz4n7t6EN59QQwKul4RrRKuStJs7CNw2NjXRSA34zTGrqdYsTAIJ6LLHyW441-iRyIv6HhH5icdQ" },
  { title: "팬싸인회 캠 세팅 꿀팁", desc: "최고의 직캠을 위한 포커스 설정", series: "팁", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPN9kBr3j_b670jcnA4c8rhTTHiOPnSafDYn_Gy_HzD4cdZ6442eID2u-hUElNK9oPpHU2iiKZwHMTN7XHI4oFWotlIXbq6Flu4lSkmzyTgT9P16PNLxA2iNdOgOZJTyI0CRJrUnINvJ3h2y1Ou7ktmnP02eLH7CcTB_MCMljXdK7xVJm6SLn68qr7StzhJA3x-h5tbSO6kitGmm9wWbvpi8rCHXDQFHVGRu9MIB0Way4egS9QR61mpvsc-_Ox2RJJyEj_6kUO_Iw" },
];

export default function Guide() {
  const [activeSeries, setActiveSeries] = useState<string>("전체");

  const displayReels = reels.length > 0
    ? reels.filter((r) => activeSeries === "전체" || r.series === activeSeries)
    : placeholderReels.filter((r) => activeSeries === "전체" || r.series === activeSeries);

  return (
    <div className="min-h-screen bg-bg-primary">
      <Header />
      <div style={{ height: "80px" }} />

      <main className="max-w-7xl mx-auto px-8 py-16">
        <div className="mb-12">
          <h1 className="text-3xl font-bold mb-3">장비 사용 가이드</h1>
          <div className="accent-line mb-4" />
          <p className="text-sm text-text-muted">
            전문가가 알려주는 장비 사용법, 주의사항, 그리고 꿀팁
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12">
          {reelSeries.map((series) => (
            <button key={series} onClick={() => setActiveSeries(series)}
              className={`px-5 py-2 rounded-lg text-sm transition-colors ${
                activeSeries === series
                  ? "bg-tag-dark text-white font-medium"
                  : "border border-divider text-text-secondary hover:border-text-primary"
              }`}>
              {series}
            </button>
          ))}
        </div>

        {displayReels.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayReels.map((reel, i) => (
              <a key={i}
                href={"instagramUrl" in reel ? (reel as any).instagramUrl : "https://www.instagram.com/village.6k/"}
                target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                <div className="aspect-[9/16] relative overflow-hidden rounded-2xl mb-4">
                  <img src={reel.image} alt={reel.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                      <span className="material-symbols-outlined text-white" style={{ fontSize: "28px", fontVariationSettings: "'FILL' 1" }}>
                        play_arrow
                      </span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 text-[10px] font-medium rounded-md bg-accent text-white">
                    {"series" in reel ? reel.series : ""}
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-1">{reel.title}</h4>
                <p className="text-sm text-text-muted">{reel.desc}</p>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="material-symbols-outlined mb-4" style={{ fontSize: "48px", color: "#DEDBD5" }}>videocam</span>
            <p className="text-sm text-text-muted">해당 시리즈의 가이드가 아직 없습니다.</p>
            <p className="text-xs mt-2 text-text-muted">곧 업로드 예정입니다!</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
