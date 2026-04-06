// VILLAGE. — Category Page (/equipment/:category)
// 카테고리별 장비 목록 페이지

import { useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/lib/products";
import { Link } from "wouter";

export default function Category() {
  const { category } = useParams<{ category: string }>();
  const decoded = decodeURIComponent(category || "");
  const filtered = products.filter((p) => p.category === decoded);
  const isValid = categories.includes(decoded);

  if (!isValid) {
    return (
      <div className="bg-background font-body text-on-surface">
        <Header />
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-8 py-24 text-center">
            <h1 className="text-3xl font-black font-headline mb-4">카테고리를 찾을 수 없습니다</h1>
            <Link href="/#products" className="text-primary font-bold">장비 목록으로 돌아가기</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-background font-body text-on-surface">
      <Header />
      <main className="pt-20">
        <div className="max-w-[1920px] mx-auto px-8 md:px-20 py-24">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <Link href="/#products" className="text-xs font-bold tracking-widest uppercase text-primary mb-4 inline-block hover:opacity-70">
                ← 전체 장비
              </Link>
              <h1 className="text-4xl font-headline font-black tracking-tight mb-4">{decoded}</h1>
              <div className="w-20 h-1.5 bg-primary-container" />
              <p className="text-sm text-on-surface-variant mt-4">{filtered.length}개 장비</p>
            </div>

            {/* Category nav pills */}
            <div className="flex flex-wrap gap-2 font-label text-sm">
              {categories.map((cat) => (
                <Link
                  key={cat}
                  href={`/equipment/${encodeURIComponent(cat)}`}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    cat === decoded
                      ? "bg-on-surface text-white font-bold"
                      : "border border-outline-variant hover:border-primary"
                  }`}
                >
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {filtered.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
