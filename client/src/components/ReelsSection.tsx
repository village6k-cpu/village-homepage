// Stitch code.html Section 5: Equipment Guide (Reels) — 이미지+구조 그대로
import { Link } from "wouter";

const reels = [
  { title: "FX3 필수 설정 5가지", desc: "소니 시네마 라인 최적화 가이드",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJV4nJyLk2MId-SmyKFnB6viqrnfvL8PYu5XRf9GXkclcOJaR69N-aEj4XZNRsmx7nmssfOWDqcfHQHEilUbV7ji5IJrwOm5cFe05OjkpDv2LfJKqc7sEH3B6H_1YMo4ZdwFDASUx0DZ3O4kW9r8wRgvLRzrYkl70fF8EfDzCIp2BuL5rarrRLmb6O1cksDHGagfm5HgKiZKbQr6OXp5JTdwE1syBOTikJq-iRPG_jxyg0wc7TqFKVkKeyC-eeuFFqA-T30Ko_T38" },
  { title: "장비 사용법 및 주의사항", desc: "렌즈 교체부터 센서 보호까지",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB3dCAvUaHIYuLyd2UlBRK1nAVtQ53LFjwwS0Kyk34y5jMXakHUwkuJCdB2chJIJQMD7pFuj63Tfnkjht9pR3q9e29hif8qtG1qwCc3YE1SK4-VD4YxZa0Tjc4vPUGZUWremTHCcSv_4wVF0eXdpQ3TdTrv4lOwIkxEX8xOanvrXLA2zXF2InxN9cM7_DH7T1VGz4n7t6EN59QQwKul4RrRKuStJs7CNw2NjXRSA34zTGrqdYsTAIJ6LLHyW441-iRyIv6HhH5icdQ" },
  { title: "팬싸인회 캠 세팅 꿀팁", desc: "최고의 직캠을 위한 포커스 설정",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPN9kBr3j_b670jcnA4c8rhTTHiOPnSafDYn_Gy_HzD4cdZ6442eID2u-hUElNK9oPpHU2iiKZwHMTN7XHI4oFWotlIXbq6Flu4lSkmzyTgT9P16PNLxA2iNdOgOZJTyI0CRJrUnINvJ3h2y1Ou7ktmnP02eLH7CcTB_MCMljXdK7xVJm6SLn68qr7StzhJA3x-h5tbSO6kitGmm9wWbvpi8rCHXDQFHVGRu9MIB0Way4egS9QR61mpvsc-_Ox2RJJyEj_6kUO_Iw" },
];

export default function ReelsSection() {
  return (
    <section className="py-24 bg-surface-container">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl font-headline font-black tracking-tight mb-2 uppercase">Village Guide</h2>
            <p className="text-on-surface-variant font-medium">전문가가 알려주는 장비 가이드</p>
          </div>
          <Link href="/guide" className="text-primary font-black uppercase text-xs tracking-widest border-b-2 border-primary pb-1">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reels.map((reel, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="aspect-[9/16] relative overflow-hidden rounded shadow-xl mb-4">
                <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  src={reel.image} alt={reel.title} loading="lazy" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                    <span className="material-symbols-outlined !text-4xl text-white" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  </div>
                </div>
              </div>
              <h4 className="font-black text-xl mb-1">{reel.title}</h4>
              <p className="text-on-surface-variant text-sm">{reel.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
