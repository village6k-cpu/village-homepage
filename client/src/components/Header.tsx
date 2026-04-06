// VILLAGE. — Header (Stitch + 장비목록 드롭다운 + 검색)
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { products, categories, formatPrice, KAKAO_URL } from "@/lib/products";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [equipOpen, setEquipOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [location] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);

  const searchResults = searchQuery.trim().length > 0
    ? products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 8)
    : [];

  // Close search on outside click
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
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm h-20 px-8">
      <div className="flex justify-between items-center h-full max-w-[1920px] mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-zinc-900 font-headline">
          VILLAGE.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 font-headline font-medium text-sm tracking-tight">
          {/* 장비목록 — 호버 드롭다운 */}
          <div className="relative"
            onMouseEnter={() => setEquipOpen(true)}
            onMouseLeave={() => setEquipOpen(false)}>
            <button onClick={() => handleNavClick("/#products")}
              className={`transition-colors ${isEquipmentPage ? "text-zinc-900 font-bold border-b-2 border-[#D4A017] pb-1" : "text-zinc-500 hover:text-zinc-800"}`}>
              장비목록
            </button>
            {equipOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-white rounded-lg shadow-xl border border-surface-container-high py-2 min-w-[180px]">
                  <Link href="/#products" onClick={() => setEquipOpen(false)}
                    className="block px-5 py-2.5 text-sm text-zinc-600 hover:bg-surface-container-low hover:text-zinc-900 transition-colors font-medium">
                    전체 장비
                  </Link>
                  <div className="h-px bg-surface-container-high mx-3 my-1" />
                  {categories.map((cat) => (
                    <Link key={cat} href={`/equipment/${encodeURIComponent(cat)}`} onClick={() => setEquipOpen(false)}
                      className="block px-5 py-2.5 text-sm text-zinc-500 hover:bg-surface-container-low hover:text-zinc-900 transition-colors">
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href="/discount"
            className={location === "/discount" ? "text-zinc-900 font-bold border-b-2 border-[#D4A017] pb-1" : "text-zinc-500 hover:text-zinc-800 transition-colors"}>
            할인안내
          </Link>
          <Link href="/guide"
            className={location === "/guide" ? "text-zinc-900 font-bold border-b-2 border-[#D4A017] pb-1" : "text-zinc-500 hover:text-zinc-800 transition-colors"}>
            사용가이드
          </Link>
          <button onClick={() => handleNavClick("/#location")}
            className="text-zinc-500 hover:text-zinc-800 transition-colors">
            위치
          </button>
        </div>

        {/* Right side: search + icons + CTA */}
        <div className="flex items-center gap-4">
          {/* Desktop search */}
          <div className="hidden md:block relative" ref={searchRef}>
            <div className="flex items-center gap-2 bg-surface-container-low border border-surface-container-high rounded-full px-4 py-2 transition-all"
              style={{ width: searchOpen ? "300px" : "40px", overflow: "hidden" }}>
              <button onClick={() => { setSearchOpen(!searchOpen); if (!searchOpen) setTimeout(() => document.getElementById("headerSearch")?.focus(), 100); }}
                className="flex-shrink-0 text-zinc-400 hover:text-zinc-700">
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>search</span>
              </button>
              {searchOpen && (
                <input id="headerSearch" type="text" placeholder="장비 검색..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-sm outline-none bg-transparent font-body"
                  autoFocus />
              )}
            </div>
            {/* Search results dropdown */}
            {searchOpen && searchResults.length > 0 && (
              <div className="absolute top-full right-0 mt-2 w-[360px] bg-white rounded-lg shadow-xl border border-surface-container-high py-2 max-h-[400px] overflow-y-auto">
                {searchResults.map((p) => (
                  <a key={p.id} href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-surface-container-low transition-colors"
                    onClick={() => { setSearchOpen(false); setSearchQuery(""); }}>
                    <div className="w-12 h-12 rounded bg-surface-container-low flex-shrink-0 overflow-hidden">
                      {p.image && <img src={p.image} alt="" className="w-full h-full object-contain" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{p.name}</div>
                      <div className="text-xs text-on-surface-variant">{p.category}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-xs text-zinc-400 line-through">{formatPrice(p.priceDay)}</div>
                      <div className="text-sm font-black text-primary-container">{formatPrice(Math.round(p.priceDay * 0.7))}</div>
                    </div>
                  </a>
                ))}
              </div>
            )}
            {searchOpen && searchQuery.trim().length > 0 && searchResults.length === 0 && (
              <div className="absolute top-full right-0 mt-2 w-[300px] bg-white rounded-lg shadow-xl border border-surface-container-high py-6 text-center">
                <p className="text-sm text-on-surface-variant">검색 결과가 없습니다</p>
              </div>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-4 text-zinc-400">
            <a href="tel:0507-1487-3114"><span className="material-symbols-outlined">phone</span></a>
            <a href="https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%99%EA%B5%90%EB%A1%9C%2023%EA%B8%B8%2032%20%EC%97%A0%ED%8E%98%EB%A1%9C%EB%B9%8C%EB%94%A9" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">location_on</span>
            </a>
          </div>
          <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
            className="hidden sm:inline-block bg-secondary-container text-on-secondary-fixed px-6 py-2.5 font-bold text-sm rounded shadow-sm hover:opacity-80 transition-opacity active:scale-95 duration-150">
            KakaoTalk 대여 신청
          </a>
          <button className="md:hidden text-zinc-700" onClick={() => setMobileOpen(!mobileOpen)}>
            <span className="material-symbols-outlined text-3xl">{mobileOpen ? "close" : "menu"}</span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-zinc-100 shadow-lg px-6 py-4">
          {/* Mobile search */}
          <div className="relative mb-3">
            <div className="flex items-center gap-2 bg-surface-container-low border border-outline-variant rounded-sm px-3 py-2.5">
              <span className="material-symbols-outlined text-zinc-400" style={{ fontSize: "18px" }}>search</span>
              <input type="text" placeholder="장비 검색..." value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-sm outline-none bg-transparent font-body" />
            </div>
            {searchQuery.trim().length > 0 && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-outline-variant rounded-sm shadow-lg z-50 max-h-[300px] overflow-y-auto">
                {searchResults.map((p) => (
                  <a key={p.id} href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-surface-container-low transition-colors"
                    onClick={() => { setMobileOpen(false); setSearchQuery(""); }}>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-medium truncate">{p.name}</div>
                    </div>
                    <span className="text-xs font-black text-primary-container">{formatPrice(Math.round(p.priceDay * 0.7))}</span>
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* 장비목록 + 하위 카테고리 */}
          <button onClick={() => handleNavClick("/#products")}
            className="block w-full text-left text-sm py-3 font-semibold text-zinc-800 font-headline">
            장비목록
          </button>
          <div className="pl-4 mb-2">
            {categories.map((cat) => (
              <Link key={cat} href={`/equipment/${encodeURIComponent(cat)}`} onClick={() => setMobileOpen(false)}
                className="block text-sm py-2 text-zinc-500 hover:text-zinc-900 font-headline">
                {cat}
              </Link>
            ))}
          </div>

          <Link href="/discount" onClick={() => setMobileOpen(false)}
            className="block text-sm py-3 font-medium text-zinc-600 hover:text-zinc-900 font-headline">할인안내</Link>
          <Link href="/guide" onClick={() => setMobileOpen(false)}
            className="block text-sm py-3 font-medium text-zinc-600 hover:text-zinc-900 font-headline">사용가이드</Link>
          <button onClick={() => handleNavClick("/#location")}
            className="block w-full text-left text-sm py-3 font-medium text-zinc-600 hover:text-zinc-900 font-headline">위치</button>

          <div className="pt-3 mt-2 border-t border-zinc-100">
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
              className="block text-center bg-secondary-container text-on-secondary-fixed font-bold text-sm py-3 rounded-sm">
              카카오톡으로 대여 신청
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
