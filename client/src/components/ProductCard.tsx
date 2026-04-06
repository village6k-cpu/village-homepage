// Stitch code.html Section 4: Product Card — 그대로
import { Product, formatPrice, KAKAO_URL } from "@/lib/products";

const tagStyles: Record<string, string> = {
  SALE: "bg-error-container text-on-error-container",
  NEW: "bg-primary-container text-on-primary",
  BEST: "bg-on-surface text-white",
  "입고예정": "bg-surface-container-high text-on-surface",
};

const DEFAULT_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23EEEEEE'%3E%3Crect width='400' height='300'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='.3em' fill='%23A0A0A0' font-size='14' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E";

export default function ProductCard({ product }: { product: Product }) {
  const img = product.image && product.image.length > 0 ? product.image : DEFAULT_IMG;
  const tagClass = product.tag ? tagStyles[product.tag] || "bg-surface-container-high" : "";

  return (
    <a href={product.productUrl || KAKAO_URL} target="_blank" rel="noopener noreferrer"
      className="group bg-surface-container-lowest border border-surface-container-high transition-all hover:border-primary-container overflow-hidden">
      <div className="aspect-[4/3] bg-surface-container-lowest p-8 flex items-center justify-center relative overflow-hidden">
        <img className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
          src={img} alt={product.name} loading="lazy" />
        {product.tag && (
          <div className={`absolute top-4 left-4 px-3 py-1 text-[10px] font-bold font-label uppercase ${tagClass}`}>
            {product.tag}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-black text-lg mb-1">{product.name}</h3>
        <p className="text-zinc-400 text-xs mb-4">{product.category}</p>
        <div className="flex justify-between items-end">
          {product.priceDay === 0 ? (
            <span className="text-primary-container font-black">무료</span>
          ) : (
            <div>
              <span className="text-zinc-400 text-sm line-through">{formatPrice(product.priceDay)}</span>
              <div className="flex items-baseline gap-1">
                <span className="text-primary-container font-black text-lg">{formatPrice(Math.round(product.priceDay * 0.7))}</span>
                <span className="text-[10px] font-normal text-zinc-500">/ 24h</span>
              </div>
              <span className="text-[10px] font-bold text-primary">학생 할인가</span>
            </div>
          )}
          <div className="w-10 h-10 flex items-center justify-center bg-surface-container hover:bg-primary transition-colors rounded-sm">
            <span className="material-symbols-outlined !text-lg">add</span>
          </div>
        </div>
      </div>
    </a>
  );
}
