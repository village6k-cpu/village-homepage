// Stitch code.html Footer — 그대로
import { KAKAO_URL } from "@/lib/products";

export default function Footer() {
  return (
    <footer className="bg-[#111111] w-full py-16 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <div className="text-xl font-black text-white mb-4 font-headline">VILLAGE.</div>
          <p className="font-body text-xs leading-relaxed text-zinc-500 mb-6">
            최고의 장비로 최고의 순간을 기록하세요. 카메라빌리지는 크리에이터들의 창작 활동을 지원합니다.
          </p>
          <div className="flex gap-4">
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#D4A017] transition-colors">
              <span className="material-symbols-outlined">share</span>
            </a>
            <a href="https://www.instagram.com/village.6k/" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-[#D4A017] transition-colors">
              <span className="material-symbols-outlined">photo_camera</span>
            </a>
            <a href="tel:0507-1487-3114" className="text-zinc-500 hover:text-[#D4A017] transition-colors">
              <span className="material-symbols-outlined">videocam</span>
            </a>
          </div>
        </div>
        <div className="md:col-span-2">
          <h5 className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-6">Quick Links</h5>
          <div className="grid grid-cols-2 gap-4">
            <a className="text-zinc-500 text-xs hover:text-[#D4A017] transition-colors" href="#">이용약관</a>
            <a className="text-zinc-500 text-xs hover:text-[#D4A017] transition-colors" href="#">개인정보처리방침</a>
            <a className="text-zinc-500 text-xs hover:text-[#D4A017] transition-colors" href="/guide">렌탈가이드</a>
            <a className="text-zinc-500 text-xs hover:text-[#D4A017] transition-colors" href="/#location">위치안내</a>
            <a className="text-zinc-500 text-xs hover:text-[#D4A017] transition-colors" href="/discount">할인혜택</a>
            <a className="text-zinc-500 text-xs hover:text-[#D4A017] transition-colors" href="#">공지사항</a>
          </div>
        </div>
        <div>
          <h5 className="text-zinc-400 font-bold text-xs uppercase tracking-widest mb-6">Contact</h5>
          <p className="text-zinc-500 text-xs mb-2">KakaoTalk: 카메라빌리지</p>
          <p className="text-zinc-500 text-xs mb-6">Tel: 0507-1487-3114</p>
          <p className="font-body text-xs leading-relaxed text-zinc-500">© VILLAGE. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
