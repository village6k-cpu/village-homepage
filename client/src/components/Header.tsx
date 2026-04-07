// VILLAGE — Header (Pretendard + 코랄 accent)
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { products, categories, formatPrice, KAKAO_URL } from "@/lib/products";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [equipOpen, setEquipOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location, setLocation] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);

  const doSearch = (q: string) => {
    if (q.trim()) {
      setLocation(`/search?q=${encodeURIComponent(q.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
      setMobileOpen(false);
    }
  };

  const searchResults = searchQuery.trim().length > 0
    ? products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 8)
    : [];

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const id = href.slice(2);
      if (location === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  const isEquipmentPage = location.startsWith("/equipment");

  return (
    <>
    <nav className="fixed top-0 w-full z-50 bg-[#F5F3EF]/90 backdrop-blur-md h-20 px-8 border-b border-divider">
      <div className="flex justify-between items-center h-full max-w-[1920px] mx-auto">
        {/* Logo — VILLAGE. (bold + coral dot) */}
        <Link href="/" className="text-2xl font-black tracking-tight text-text-primary">
          VILLAGE<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 font-medium text-sm">
          {/* 장비목록 — 호버 드롭다운 */}
          <div className="relative"
            onMouseEnter={() => setEquipOpen(true)}
            onMouseLeave={() => setEquipOpen(false)}>
            <button onClick={() => handleNavClick("/#products")}
              className={`transition-colors ${isEquipmentPage ? "text-text-primary font-bold border-b-2 border-accent pb-1" : "text-text-secondary hover:text-text-primary"}`}>
              장비목록
            </button>
            {equipOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-bg-card rounded-2xl border border-divider py-2 min-w-[180px]">
                  <Link href="/#products" onClick={() => setEquipOpen(false)}
                    className="block px-5 py-2.5 text-sm text-text-secondary hover:bg-bg-primary hover:text-text-primary transition-colors font-medium">
                    전체 장비
                  </Link>
                  <div className="h-px bg-divider mx-3 my-1" />
                  {categories.map((cat) => (
                    <Link key={cat} href={`/equipment/${encodeURIComponent(cat)}`} onClick={() => setEquipOpen(false)}
                      className="block px-5 py-2.5 text-sm text-text-muted hover:bg-bg-primary hover:text-text-primary transition-colors">
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/discount"
            className={location === "/discount" ? "text-text-primary font-bold border-b-2 border-accent pb-1" : "text-text-secondary hover:text-text-primary transition-colors"}>
            할인계산기
          </Link>
          <Link href="/guide"
            className={location === "/guide" ? "text-text-primary font-bold border-b-2 border-accent pb-1" : "text-text-secondary hover:text-text-primary transition-colors"}>
            사용가이드
          </Link>
          <button onClick={() => handleNavClick("/#location")}
            className="text-text-secondary hover:text-text-primary transition-colors">
            오시는길
          </button>
        </div>

        {/* Right side: search + CTA */}
        <div className="flex items-center gap-4">
          {/* Desktop search */}
          <div className="hidden md:block relative" ref={searchRef}>
            <div className="flex items-center gap-2 bg-bg-primary border border-divider rounded-lg px-4 py-2 transition-all"
              style={{ width: searchOpen ? "300px" : "40px", overflow: "hidden" }}>
              <button onClick={() => { setSearchOpen(!searchOpen); if (!searchOpen) setTimeout(() => document.getElementById("headerSearch")?.focus(), 100); }}
                className="flex-shrink-0 text-text-muted hover:text-text-primary">
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>search</span>
              </button>
              {searchOpen && (
                <input id="headerSearch" type="text" placeholder="장비 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") doSearch(searchQuery); }}
                  className="flex-1 text-sm outline-none bg-transparent"
                  autoFocus />
              )}
            </div>
            {searchOpen && searchQuery.trim().length > 0 && searchResults.length > 0 && (
              <div className="absolute top-full right-0 mt-2 w-[360px] bg-bg-card rounded-2xl border border-divider py-2 max-h-[400px] overflow-y-auto">
                {searchResults.map((p) => (
                  <button key={p.id}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-bg-primary transition-colors w-full text-left"
                    onClick={() => doSearch(p.name)}>
                    <div className="w-12 h-12 rounded-lg bg-bg-primary flex-shrink-0 overflow-hidden">
                      {p.image && <img src={p.image} alt="" className="w-full h-full object-contain" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{p.name}</div>
                      <div className="text-xs text-text-muted">{p.category}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs text-text-muted line-through">{formatPrice(p.priceDay)}</div>
                      <div className="text-sm font-medium text-accent">{formatPrice(Math.round(p.priceDay * 0.7))}</div>
                    </div>
                  </button>
                ))}
                <button onClick={() => doSearch(searchQuery)}
                  className="w-full text-center py-3 text-sm font-bold text-accent border-t border-divider mt-1 hover:bg-bg-primary transition-colors">
                  "{searchQuery}" 전체 결과 보기
                </button>
              </div>
            )}
            {searchOpen && searchQuery.trim().length > 0 && searchResults.length === 0 && (
              <div className="absolute top-full right-0 mt-2 w-[300px] bg-bg-card rounded-2xl border border-divider py-6 text-center">
                <p className="text-sm text-text-muted">검색 결과가 없습니다</p>
              </div>
            )}
          </div>

          <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-block bg-[#FAE100] text-[#3C1E1E] px-6 py-2.5 font-bold text-sm rounded-lg hover:bg-[#E6D000] transition-colors">
            카카오톡 대여 신청
          </a>
          <button className="md:hidden text-text-primary" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="material-symbols-outlined text-3xl">{mobileOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg-card border-t border-divider px-6 py-4">
          {/* Mobile search */}
          <div className="relative mb-3">
            <div className="flex items-center gap-2 bg-bg-primary border border-divider rounded-lg px-3 py-2.5">
              <span className="material-symbols-outlined text-text-muted" style={{ fontSize: "18px" }}>search</span>
              <input type="text" placeholder="장비 검색..." value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") doSearch(searchQuery); }}
                className="flex-1 text-sm outline-none bg-transparent" />
            </div>
            {searchQuery.trim().length > 0 && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-bg-card border border-divider rounded-lg z-50 max-h-[300px] overflow-y-auto">
                {searchResults.map((p) => (
                  <button key={p.id}
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-bg-primary transition-colors w-full text-left"
                    onClick={() => doSearch(p.name)}>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium truncate">{p.name}</div>
                    </div>
                    <span className="text-xs font-medium text-accent">{formatPrice(Math.round(p.priceDay * 0.7))}</span>
                  </button>
                ))}
                <button onClick={() => doSearch(searchQuery)}
                  className="w-full text-center py-2.5 text-xs font-bold text-accent border-t border-divider hover:bg-bg-primary">
                  전체 결과 보기
                </button>
              </div>
            )}
          </div>

          <button onClick={() => handleNavClick("/#products")}
            className="block w-full text-left text-sm py-3 font-semibold text-text-primary">
            장비목록
          </button>
          <div className="pl-4 mb-2">
            {categories.map((cat) => (
              <Link key={cat} href={`/equipment/${encodeURIComponent(cat)}`} onClick={() => setMobileOpen(false)}
                className="block text-sm py-2 text-text-muted hover:text-text-primary">
                {cat}
              </Link>
            ))}
          </div>

          <Link href="/discount" onClick={() => setMobileOpen(false)}
            className="block text-sm py-3 font-medium text-text-secondary hover:text-text-primary">가격표</Link>
          <Link href="/guide" onClick={() => setMobileOpen(false)}
            className="block text-sm py-3 font-medium text-text-secondary hover:text-text-primary">사용가이드</Link>
          <button onClick={() => handleNavClick("/#location")}
            className="block w-full text-left text-sm py-3 font-medium text-text-secondary hover:text-text-primary">오시는길</button>

          <div className="pt-3 mt-2 border-t border-divider">
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
              className="block text-center bg-[#FAE100] text-[#3C1E1E] font-bold text-sm py-3 rounded-lg hover:bg-[#E6D000] transition-colors">
              카카오톡 대여 신청
            </a>
          </div>
        </div>
      )}
    </nav>

    {/* 모바일 플로팅 카카오톡 버튼 */}
    <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
      className="md:hidden fixed bottom-6 right-5 z-50 w-14 h-14 rounded-full bg-[#FAE100] flex items-center justify-center shadow-lg hover:bg-[#E6D000] transition-colors active:scale-95"
      aria-label="카카오톡 대여 신청">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="#3C1E1E">
        <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.56-.96 3.6-.99 3.83 0 0-.02.17.09.23.11.07.24.01.24.01.32-.04 3.7-2.44 4.28-2.86.55.08 1.13.12 1.73.12 5.52 0 10-3.58 10-7.93C22 6.58 17.52 3 12 3z"/>
      </svg>
    </a>
    </>
  );
}
