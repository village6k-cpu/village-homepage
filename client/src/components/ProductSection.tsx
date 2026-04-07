// VILLAGE — Equipment Section (코랄 accent line)
import { useState } from "react";
import { Link } from "wouter";
import { products, categories, Product } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  const [active, setActive] = useState("전체");
  const tabs = ["전체", ...categories];
  const filtered = products.filter((p: Product) => active === "전체" || p.category === active);

  return (
    <section id="products" className="py-24 bg-bg-primary">
      <div className="max-w-[1920px] mx-auto px-8 md:px-20">
        <div className="mb-10 md:mb-16">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3">장비 목록</h2>
            <div className="accent-line" />
          </div>
          <div className="flex overflow-x-auto no-scrollbar gap-2 text-sm pb-1 -mx-2 px-2">
            {tabs.map((tab) => (
              tab === "전체" ? (
                <button key={tab} onClick={() => setActive(tab)}
                  className={`px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex-shrink-0 ${
                    active === tab ? "bg-tag-dark text-white font-medium" : "border border-divider text-text-secondary hover:border-text-primary"
                  }`}>
                  {tab}
                </button>
              ) : (
                <Link key={tab} href={`/equipment/${encodeURIComponent(tab)}`}
                  className="px-4 py-2 rounded-lg transition-colors border border-divider text-text-secondary hover:border-text-primary whitespace-nowrap flex-shrink-0">
                  {tab}
                </Link>
              )
            ))}
          </div>
        </div>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="flex items-center justify-center py-16">
            <p className="text-sm text-text-muted">해당 카테고리의 장비가 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  );
}
