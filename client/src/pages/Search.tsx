// VILLAGE — Search Results Page (/search?q=...)
import { useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { Link } from "wouter";

export default function Search() {
  const params = new URLSearchParams(window.location.search);
  const query = params.get("q") || "";

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter((p) => p.name.toLowerCase().includes(q));
  }, [query]);

  return (
    <div className="bg-bg-primary text-text-primary">
      <Header />
      <main className="pt-20">
        <div className="max-w-[1920px] mx-auto px-8 md:px-20 py-24">
          <div className="mb-16">
            <Link href="/#products" className="text-xs font-medium text-accent mb-4 inline-block hover:underline">
              ← 전체 장비
            </Link>
            <h1 className="text-3xl font-bold mb-3">
              "{query}" 검색 결과
            </h1>
            <div className="accent-line" />
            <p className="text-sm text-text-muted mt-4">{results.length}개 장비</p>
          </div>

          {results.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <span className="material-symbols-outlined mb-4 block" style={{ fontSize: "48px", color: "#DEDBD5" }}>search_off</span>
              <p className="text-lg font-bold mb-2">검색 결과가 없습니다</p>
              <p className="text-sm text-text-muted">다른 키워드로 검색해보세요</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
