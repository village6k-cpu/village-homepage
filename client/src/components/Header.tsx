// VILLAGE. — Header (Stitch code.html 그대로)
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { products, KAKAO_URL } from "@/lib/products";

const navLinks = [
  { label: "장비목록", href: "/#products" },
  { label: "할인안내", href: "/discount" },
  { label: "사용가이드", href: "/guide" },
  { label: "위치", href: "/#location" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [location] = useLocation();

  const searchResults = searchQuery.trim().length > 0
    ? products.filter((p) => p.name.toLowerCase().includes(searchQuery.toLowerCase())).slice(0, 6)
    : [];

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

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-sm h-20 px-8">
      <div className="flex justify-between items-center h-full max-w-[1920px] mx-auto">
        {/* Logo */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-zinc-900 font-headline">
          VILLAGE.
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10 font-headline font-medium text-sm tracking-tight">
          {navLinks.map((link) => {
            const isActive = link.href === "/discount" ? location === "/discount"
              : link.href === "/guide" ? location === "/guide" : false;
            return link.href.startsWith("/#") ? (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-zinc-500 hover:text-zinc-800 transition-colors"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={isActive
                  ? "text-zinc-900 font-bold border-b-2 border-[#D4A017] pb-1"
                  : "text-zinc-500 hover:text-zinc-800 transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-4 text-zinc-400">
            <a href="tel:0507-1487-3114"><span className="material-symbols-outlined">phone</span></a>
            <a href="https://map.naver.com/p/search/%EC%84%9C%EC%9A%B8%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%EB%8F%99%EA%B5%90%EB%A1%9C%2023%EA%B8%B8%2032%20%EC%97%A0%ED%8E%98%EB%A1%9C%EB%B9%8C%EB%94%A9" target="_blank" rel="noopener noreferrer">
              <span className="material-symbols-outlined">location_on</span>
            </a>
          </div>
          <a
            href={KAKAO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-secondary-container text-on-secondary-fixed px-6 py-2.5 font-bold text-sm rounded shadow-sm hover:opacity-80 transition-opacity active:scale-95 duration-150"
          >
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
          <div className="relative mb-3">
            <input
              type="text"
              placeholder="장비를 검색하세요..."
              value={searchQuery}
              onChange={(e) => { setSearchQuery(e.target.value); setSearchOpen(e.target.value.trim().length > 0); }}
              className="w-full text-sm outline-none bg-surface-container-low border border-outline-variant rounded-sm px-4 py-2.5 font-body"
            />
            {searchOpen && searchResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-outline-variant rounded-sm shadow-lg z-50">
                {searchResults.map((p) => (
                  <a key={p.id} href={p.productUrl} target="_blank" rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-xs hover:bg-surface-container-low transition-colors"
                    onClick={() => { setMobileOpen(false); setSearchQuery(""); }}>
                    {p.name}
                    <span className="ml-2 font-black text-primary-container">{p.priceDay.toLocaleString()}원</span>
                  </a>
                ))}
              </div>
            )}
          </div>
          {navLinks.map((link) => (
            link.href.startsWith("/#") ? (
              <button key={link.label} onClick={() => handleNavClick(link.href)}
                className="block w-full text-left text-sm py-3 font-medium text-zinc-600 hover:text-zinc-900 font-headline">
                {link.label}
              </button>
            ) : (
              <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)}
                className="block text-sm py-3 font-medium text-zinc-600 hover:text-zinc-900 font-headline">
                {link.label}
              </Link>
            )
          ))}
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
