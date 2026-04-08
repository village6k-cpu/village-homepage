// VILLAGE — 장비 상세 페이지 (구성품 표시)
import { useParams, Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { products, formatPrice, KAKAO_URL, Product } from "@/lib/products";
import { productComponents, Component } from "@/lib/productComponents";

const DEFAULT_IMG = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300' fill='%23F5F3EF'%3E%3Crect width='400' height='300'/%3E%3Ctext x='200' y='150' text-anchor='middle' dy='.3em' fill='%23999999' font-size='14' font-family='sans-serif'%3ENo Image%3C/text%3E%3C/svg%3E";

const tagStyles: Record<string, string> = {
  SALE: "bg-accent text-white",
  NEW: "bg-tag-dark text-white",
  BEST: "bg-tag-dark text-white",
  "입고예정": "bg-divider text-text-secondary",
};

export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const id = Number(params.id);
  const product = products.find((p: Product) => p.id === id);

  if (!product) {
    return (
      <div className="bg-bg-primary text-text-primary min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-6 py-24 text-center">
            <h1 className="text-2xl font-bold mb-4">장비를 찾을 수 없습니다</h1>
            <Link href="/" className="text-accent hover:underline">홈으로 돌아가기</Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const components = productComponents[id] || [];
  const img = product.image && product.image.length > 0 ? product.image : DEFAULT_IMG;
  const discountPrice = Math.round(product.priceDay * 0.7);
  const tagClass = product.tag ? tagStyles[product.tag] || "" : "";

  // 풀세트 상품 (무선 송수신기 포함)
  const FULLSET_IDS = [13, 84, 112, 170, 179, 182];
  const isFullSet = FULLSET_IDS.includes(id);

  // Find related products in same category (exclude self)
  const related = products
    .filter((p: Product) => p.category === product.category && p.id !== id)
    .slice(0, 4);

  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <Header />
      <main className="pt-20">
        {/* 뒤로가기 + 브레드크럼 */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 pt-8 pb-4">
          <nav className="flex items-center gap-2 text-sm text-text-muted">
            <Link href="/" className="hover:text-accent transition-colors">홈</Link>
            <span>/</span>
            <Link href="/" className="hover:text-accent transition-colors">장비 목록</Link>
            <span>/</span>
            <span className="text-text-primary font-medium truncate max-w-[200px]">{product.name}</span>
          </nav>
        </div>

        {/* 상품 메인 정보 */}
        <div className="max-w-5xl mx-auto px-6 md:px-12 pb-12">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            {/* 이미지 */}
            <div className="md:w-1/2">
              <div className="bg-white rounded-2xl p-8 md:p-12 flex items-center justify-center aspect-[4/3] relative">
                <img src={img} alt={product.name} className="w-full h-full object-contain" />
                {product.tag && (
                  <div className={`absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-md ${tagClass}`}>
                    {product.tag}
                  </div>
                )}
              </div>
            </div>

            {/* 정보 */}
            <div className="md:w-1/2 flex flex-col justify-center">
              <p className="text-text-muted text-sm mb-2">{product.category}</p>
              <h1 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">{product.name}</h1>

              {/* 가격 */}
              <div className="mb-6">
                {product.priceDay === 0 ? (
                  <span className="text-accent font-bold text-2xl">무료</span>
                ) : (
                  <>
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="text-accent font-bold text-3xl">{formatPrice(discountPrice)}</span>
                      <span className="text-text-muted text-sm">/ 24h</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-text-muted text-sm line-through">{formatPrice(product.priceDay)}</span>
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-0.5 rounded">학생 30% 할인가</span>
                    </div>
                  </>
                )}
              </div>

              {/* 풀세트 무선 송수신기 포함 배지 */}
              {isFullSet && (
                <div className="flex items-center gap-2 px-4 py-3 mb-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <span className="material-symbols-outlined text-emerald-500 !text-lg">sensors</span>
                  <span className="text-sm font-semibold text-emerald-600">무선 송수신기 포함</span>
                  <span className="text-xs text-emerald-500 ml-auto">추가 비용 없음</span>
                </div>
              )}

              {/* 혜택 안내 */}
              <div className="bg-white rounded-xl p-4 mb-6 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-accent">✓</span>
                  <span className="text-text-secondary">배터리 + SD카드 무료 포함</span>
                </div>
                {isFullSet && (
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-accent">✓</span>
                    <span className="text-text-secondary font-medium">무선 송수신기 포함 (가격 동일)</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-accent">✓</span>
                  <span className="text-text-secondary">보증금 없음 · 선결제 없음</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-accent">✓</span>
                  <span className="text-text-secondary">할인 중복 적용 가능 (학생/사업자/장기/소개)</span>
                </div>
              </div>

              {/* CTA */}
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 w-full bg-[#FAE100] text-[#3C1E1E] px-6 py-4 font-bold text-base rounded-xl hover:bg-[#E6D000] active:scale-[0.98] transition-all">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="#3C1E1E">
                  <path d="M12 3C6.48 3 2 6.58 2 10.9c0 2.78 1.86 5.22 4.65 6.6-.15.56-.96 3.6-.99 3.83 0 0-.02.17.09.23.11.07.24.01.24.01.32-.04 3.7-2.44 4.28-2.86.55.08 1.13.12 1.73.12 5.52 0 10-3.58 10-7.93C22 6.58 17.52 3 12 3z"/>
                </svg>
                카카오톡으로 예약하기
              </a>
            </div>
          </div>
        </div>

        {/* 구성품 목록 */}
        {components.length > 0 && (
          <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
            <div className="mb-6">
              <h2 className="text-xl md:text-2xl font-bold mb-2">세트 구성품</h2>
              <div className="accent-line" />
              <p className="text-text-muted text-sm mt-3">
                이 장비를 대여하시면 아래 구성품이 모두 포함됩니다.
              </p>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden">
              {/* 헤더 */}
              <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-bg-primary border-b border-divider text-sm font-medium text-text-muted">
                <div className="col-span-1 text-center">#</div>
                <div className="col-span-7">구성 장비</div>
                <div className="col-span-2 text-center">수량</div>
                <div className="col-span-2">비고</div>
              </div>

              {/* 구성품 리스트 */}
              {components.map((c: Component, i: number) => (
                <div key={i}
                  className={`grid grid-cols-12 gap-4 px-6 py-4 items-center ${
                    i < components.length - 1 ? "border-b border-divider/50" : ""
                  } hover:bg-bg-primary/50 transition-colors`}
                >
                  <div className="col-span-1 text-center text-text-muted text-sm hidden md:block">
                    {i + 1}
                  </div>
                  <div className="col-span-8 md:col-span-7">
                    <span className="text-sm md:text-base font-medium text-text-primary">{c.name}</span>
                  </div>
                  <div className="col-span-2 text-center">
                    <span className="inline-flex items-center justify-center min-w-[32px] h-7 bg-bg-primary rounded-md text-sm font-medium text-text-primary">
                      {c.qty}
                    </span>
                  </div>
                  <div className="col-span-2 hidden md:block">
                    {c.note && (
                      <span className="text-xs text-text-muted">{c.note}</span>
                    )}
                  </div>
                </div>
              ))}

              {/* 합계 */}
              <div className="px-6 py-4 bg-bg-primary border-t border-divider flex justify-between items-center">
                <span className="text-sm font-medium text-text-secondary">
                  총 {components.length}종 · {components.reduce((sum: number, c: Component) => sum + c.qty, 0)}개
                </span>
                <span className="text-xs text-text-muted">구성품은 재고 상황에 따라 동급 대체될 수 있습니다</span>
              </div>
            </div>
          </div>
        )}

        {/* 단품 안내 (구성품 없는 경우) */}
        {components.length === 0 && (
          <div className="max-w-5xl mx-auto px-6 md:px-12 pb-16">
            <div className="bg-white rounded-2xl p-8 text-center">
              <p className="text-text-muted text-sm">
                이 장비는 단품으로 대여됩니다. 추가 구성이 필요하시면 카카오톡으로 문의해주세요.
              </p>
            </div>
          </div>
        )}

        {/* 관련 장비 */}
        {related.length > 0 && (
          <div className="max-w-5xl mx-auto px-6 md:px-12 pb-24">
            <h2 className="text-xl font-bold mb-6">같은 카테고리 장비</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {related.map((p: Product) => (
                <Link key={p.id} href={`/product/${p.id}`}
                  className="bg-white rounded-xl overflow-hidden hover:-translate-y-1 transition-transform group">
                  <div className="aspect-[4/3] p-4 flex items-center justify-center">
                    <img
                      src={p.image && p.image.length > 0 ? p.image : DEFAULT_IMG}
                      alt={p.name}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-sm font-medium text-text-primary line-clamp-2 mb-1">{p.name}</h3>
                    {p.priceDay > 0 && (
                      <span className="text-accent text-sm font-medium">{formatPrice(Math.round(p.priceDay * 0.7))}</span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
