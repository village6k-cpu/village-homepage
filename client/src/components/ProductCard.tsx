// VILLAGE — Product Card (플랫 디자인, 코랄 accent)
import { Product, formatPrice, KAKAO_URL } from "@/lib/products";

const tagStyles: Record<string, string> = {
  SALE: "bg-accent text-white",
  NEW: "bg-tag-dark text-white",
  BEST: "bg-tag-dark text-white",
  "입고예정": "bg-bg-primary text-text-secondary",
};

const DEFAULT_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23F5F3EF'%3E%3Crect width='400' height='300'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='.3em' fill='%23999999' font-size='14' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E";

export default function ProductCard({ product }: { product: Product }) {
  const img = product.image && product.image.length > 0 ? product.image : DEFAULT_IMG;
  const tagClass = product.tag ? tagStyles[product.tag] || "bg-bg-primary text-text-secondary" : "";

  return (
    <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
      className="group bg-bg-card rounded-2xl overflow-hidden transition-transform hover:-translate-y-1">
      <div className="aspect-[4/3] bg-bg-card p-8 flex items-center justify-center relative overflow-hidden">
        <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          src={img} alt={product.name} loading="lazy" />
        {product.tag && (
          <div className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-medium rounded-md ${tagClass}`}>
            {product.tag}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-bold text-lg mb-1 text-text-primary">{product.name}</h3>
        <p className="text-text-muted text-xs mb-4">{product.category}</p>
        <div className="flex justify-between items-end">
          {product.priceDay === 0 ? (
            <span className="text-accent font-medium text-lg">무료</span>
          ) : (
            <div>
              <span className="text-text-muted text-sm line-through">{formatPrice(product.priceDay)}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-accent font-medium text-xl">{formatPrice(Math.round(product.priceDay * 0.7))}</span>
                <span className="text-[11px] text-text-muted">/ 24h</span>
              </div>
              <span className="text-[10px] font-medium text-accent">학생 할인가</span>
            </div>
          )}
          <div className="w-10 h-10 flex items-center justify-center bg-bg-primary hover:bg-accent hover:text-white transition-colors rounded-lg text-text-muted">
            <span className="material-symbols-outlined !text-lg">add</span>
          </div>
        </div>
      </div>
    </a>
  );
}
