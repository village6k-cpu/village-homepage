// VILLAGE — Category Page (/equipment/:category)
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
      <div className="bg-bg-primary text-text-primary">
        <Header />
        <main className="pt-20">
          <div className="max-w-7xl mx-auto px-8 py-24 text-center">
            <h1 className="text-3xl font-bold mb-4">카테고리를 찾을 수 없습니다</h1>
            <Link href="/#products" className="text-accent font-medium">장비 목록으로 돌아가기</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-bg-primary text-text-primary">
      <Header />
      <main className="pt-20">
        <div className="max-w-[1920px] mx-auto px-8 md:px-20 py-24">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
            <div>
              <Link href="/#products" className="text-xs font-medium text-accent mb-4 inline-block hover:underline">
                ← 전체 장비
              </Link>
              <h1 className="text-3xl font-bold mb-3">{decoded}</h1>
              <div className="accent-line" />
              <p className="text-sm text-text-muted mt-4">{filtered.length}개 장비</p>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              {categories.map((cat) => (
                <Link key={cat} href={`/equipment/${encodeURIComponent(cat)}`}
                  className={`px-5 py-2 rounded-lg transition-colors ${
                    cat === decoded
                      ? "bg-tag-dark text-white font-medium"
                      : "border border-divider text-text-secondary hover:border-text-primary"
                  }`}>
                  {cat}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
