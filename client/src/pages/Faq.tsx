// VILLAGE — FAQ 페이지 (/faq)
// 목적: 카톡/전화 문의를 줄이기 위한 자주묻는질문 페이지
import { useMemo, useState } from "react";
import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { KAKAO_URL } from "@/lib/products";
import { FAQ_CATEGORIES, faqs, type FaqItem } from "@/lib/faq";

// 간단한 마크다운 → JSX (볼드, 줄바꿈, 링크)
function renderAnswer(text: string) {
  const lines = text.split("\n");
  return lines.map((line, li) => {
    // [text](url) → <a>
    const parts: (string | JSX.Element)[] = [];
    const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
    let last = 0, m, key = 0;
    while ((m = regex.exec(line)) !== null) {
      if (m.index > last) parts.push(line.slice(last, m.index));
      if (m[1]) {
        // link
        const url = m[2];
        const isInternal = url.startsWith("/");
        parts.push(
          isInternal ? (
            <Link key={`l${li}-${key}`} href={url} className="text-accent underline hover:no-underline">{m[1]}</Link>
          ) : (
            <a key={`l${li}-${key}`} href={url} target="_blank" rel="noopener noreferrer"
              className="text-accent underline hover:no-underline">{m[1]}</a>
          )
        );
      } else if (m[3]) {
        parts.push(<strong key={`b${li}-${key}`} className="font-semibold text-text-primary">{m[3]}</strong>);
      }
      key++;
      last = m.index + m[0].length;
    }
    if (last < line.length) parts.push(line.slice(last));
    return (
      <span key={li}>
        {parts.length ? parts : line}
        {li < lines.length - 1 && <br />}
      </span>
    );
  });
}

function matches(item: FaqItem, q: string): boolean {
  if (!q) return true;
  const hay = (item.q + " " + item.a + " " + (item.tags || []).join(" ")).toLowerCase();
  return q.toLowerCase().split(/\s+/).filter(Boolean).every((w) => hay.includes(w));
}

export default function Faq() {
  const [selCat, setSelCat] = useState<string>("전체");
  const [query, setQuery] = useState("");
  const [openIdx, setOpenIdx] = useState<Set<number>>(new Set());

  const filtered = useMemo(() => {
    return faqs
      .map((item, i) => ({ item, i }))
      .filter(({ item }) => selCat === "전체" || item.cat === selCat)
      .filter(({ item }) => matches(item, query));
  }, [selCat, query]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { 전체: faqs.length };
    FAQ_CATEGORIES.forEach((cat) => {
      c[cat] = faqs.filter((f) => f.cat === cat).length;
    });
    return c;
  }, []);

  const toggle = (i: number) => {
    const next = new Set(openIdx);
    if (next.has(i)) next.delete(i); else next.add(i);
    setOpenIdx(next);
  };

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero + 안내 */}
        <div className="max-w-3xl mx-auto px-6 md:px-12 pt-10 md:pt-14 pb-8">
          <p className="text-xs uppercase tracking-widest text-text-muted mb-2">FAQ</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-7 md:mb-8">자주 묻는 질문</h1>

          <p className="text-xl md:text-2xl font-bold text-text-primary leading-snug mb-2">
            찾으시는 답, 거의 다 여기 있습니다.
          </p>
          <p className="text-sm md:text-base text-text-secondary leading-relaxed">
            검색해보시고, 안 나오면 카카오톡으로 주세요. 답변이 가장 빠릅니다.
            <br className="hidden sm:block" />
            전화는 카톡 답이 늦을 때 주시면 돼요 —{" "}
            <a href="tel:0507-1487-3114" className="text-text-primary font-medium underline-offset-2 hover:underline">
              0507-1487-3114
            </a>
            .
          </p>
        </div>

        {/* 검색 */}
        <div className="max-w-3xl mx-auto px-6 md:px-12 pb-4">
          <div className="relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none" style={{ fontSize: "20px" }}>
              search
            </span>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="궁금한 키워드 입력 (예: 보증금, 학생, 예약)"
              className="w-full pl-12 pr-10 py-3.5 bg-white border border-divider rounded-xl text-sm focus:outline-none focus:border-accent transition-colors"
            />
            {query && (
              <button
                onClick={() => setQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
                aria-label="검색어 지우기"
              >
                <span className="material-symbols-outlined" style={{ fontSize: "20px" }}>close</span>
              </button>
            )}
          </div>
        </div>

        {/* 카테고리 칩 */}
        <div className="max-w-3xl mx-auto px-6 md:px-12 pb-6">
          <div className="flex gap-1.5 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {(["전체", ...FAQ_CATEGORIES] as string[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelCat(cat)}
                className={`px-3.5 py-2 rounded-lg text-xs whitespace-nowrap transition-all font-medium ${
                  selCat === cat
                    ? "bg-accent text-white"
                    : "bg-white border border-divider text-text-muted hover:text-text-primary"
                }`}
              >
                {cat} <span className={`ml-1 ${selCat === cat ? "opacity-70" : "text-text-muted"}`}>{counts[cat] ?? 0}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Q&A 리스트 */}
        <div className="max-w-3xl mx-auto px-6 md:px-12 pb-8">
          {filtered.length === 0 ? (
            <div className="bg-white border border-divider rounded-2xl p-8 text-center">
              <p className="text-sm text-text-muted mb-4">
                "{query}" 에 대한 답변을 찾지 못했어요.
              </p>
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
                onClick={() => (window as any).naverConv?.()}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#FAE100] text-[#3C1E1E] font-bold text-sm rounded-lg hover:bg-[#E6D000] transition-colors">
                카카오톡으로 문의하기
              </a>
            </div>
          ) : (
            <div className="space-y-2">
              {filtered.map(({ item, i }) => {
                const open = openIdx.has(i);
                return (
                  <div key={i} className="bg-white border border-divider rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggle(i)}
                      className="w-full flex items-start gap-3 text-left px-5 py-4 hover:bg-bg-primary transition-colors"
                      aria-expanded={open}
                    >
                      <span className="text-accent font-headline font-bold flex-shrink-0 mt-0.5">Q.</span>
                      <span className="flex-1 text-sm md:text-base font-medium text-text-primary leading-relaxed">
                        {item.q}
                      </span>
                      <span
                        className="material-symbols-outlined text-text-muted flex-shrink-0 transition-transform"
                        style={{ fontSize: "22px", transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        expand_more
                      </span>
                    </button>
                    {open && (
                      <div className="px-5 pb-5 pt-1 border-t border-divider">
                        <div className="flex items-start gap-3 pt-4">
                          <span className="text-text-muted font-headline font-bold flex-shrink-0">A.</span>
                          <div className="flex-1 text-sm text-text-secondary leading-relaxed">
                            {renderAnswer(item.a)}
                          </div>
                        </div>
                        <div className="mt-3 ml-7 flex items-center gap-2">
                          <span className="inline-block px-2 py-0.5 rounded-md text-[11px] bg-bg-primary text-text-muted">
                            {item.cat}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* 하단 CTA — 답을 못 찾았을 때 */}
        <div className="max-w-3xl mx-auto px-6 md:px-12 pb-12">
          <div className="rounded-2xl p-6 md:p-7 text-center"
            style={{ background: "linear-gradient(145deg, #FFF8F6, #F9F9F9)", border: "1px solid #DEDBD5" }}>
            <div className="text-sm md:text-base font-bold mb-1.5">원하는 답을 못 찾으셨나요?</div>
            <p className="text-xs md:text-sm text-text-muted mb-4">
              카카오톡 채널로 메시지 주시면 빠르게 답변드립니다.
            </p>
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
              onClick={() => (window as any).naverConv?.()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#FAE100] text-[#3C1E1E] font-bold text-sm rounded-lg hover:bg-[#E6D000] active:scale-[0.98] transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#3C1E1E">
                <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.56-.96 3.6-.99 3.83 0 0-.02.17.09.23.11.07.24.01.24.01.32-.04 3.7-2.44 4.28-2.86.55.08 1.13.12 1.73.12 5.52 0 10-3.58 10-7.93C22 6.58 17.52 3 12 3z"/>
              </svg>
              카카오톡으로 문의하기
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
