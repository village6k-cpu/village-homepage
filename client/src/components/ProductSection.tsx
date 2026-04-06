// Stitch code.html Section 4: Equipment Showcase — 그대로
import { useState } from "react";
import { products, categories, Product } from "@/lib/products";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  const [active, setActive] = useState("전체");
  const tabs = ["전체", ...categories];
  const filtered = products.filter((p: Product) => active === "전체" || p.category === active);

  return (
    <section id="products" className="py-24">
      <div className="max-w-[1920px] mx-auto px-8 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div>
            <h2 className="text-4xl font-headline font-black tracking-tight mb-4">대여 장비</h2>
            <div className="w-20 h-1.5 bg-primary-container" />
          </div>
          <div className="flex flex-wrap gap-2 font-label text-sm">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActive(tab)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  active === tab
                    ? "bg-on-surface text-white font-bold"
                    : "border border-outline-variant hover:border-primary"
                }`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        ) : (
          <div className="flex items-center justify-center py-16">
            <p className="text-sm text-on-surface-variant">해당 카테고리의 장비가 없습니다.</p>
          </div>
        )}
      </div>
    </section>
  );
}
