// Stitch code.html Section 2: Discount Highlight — 그대로
import { Link } from "wouter";
import { KAKAO_URL } from "@/lib/products";

export default function DiscountHighlight() {
  return (
    <section className="py-24 bg-surface-container-lowest">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-headline font-black tracking-tight mb-2">빌리지 할인 안내</h2>
          <div className="w-16 h-1 bg-primary-container" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-surface-container-low p-8 border-t-4 border-orange-500 rounded-sm">
            <span className="text-orange-500 text-xs font-bold font-label tracking-widest uppercase mb-4 block">Education</span>
            <h3 className="text-2xl font-black mb-2">학생 30%</h3>
            <p className="text-on-surface-variant text-sm">학생증 지참 시 전 장비 할인 적용</p>
          </div>
          <div className="bg-surface-container-low p-8 border-t-4 border-orange-500 rounded-sm">
            <span className="text-orange-500 text-xs font-bold font-label tracking-widest uppercase mb-4 block">Enterprise</span>
            <h3 className="text-2xl font-black mb-2">개인사업자/프리랜서 20%</h3>
            <p className="text-on-surface-variant text-sm">사업자 등록증 확인 시 상시 할인</p>
          </div>
          <div className="bg-surface-container-low p-8 border-t-4 border-orange-500 rounded-sm">
            <span className="text-orange-500 text-xs font-bold font-label tracking-widest uppercase mb-4 block">Long Term</span>
            <h3 className="text-2xl font-black mb-2">장기 최대 50%</h3>
            <p className="text-on-surface-variant text-sm">대여 기간에 따른 파격적인 구간 할인</p>
          </div>
          <div className="bg-surface-container-low p-8 border-t-4 border-blue-500 rounded-sm">
            <span className="text-blue-500 text-xs font-bold font-label tracking-widest uppercase mb-4 block">Loyalty</span>
            <h3 className="text-2xl font-black mb-2">3/10 쿠폰</h3>
            <p className="text-on-surface-variant text-sm font-medium">3회 5% · 10회 10% 추가 혜택</p>
          </div>
          <div className="bg-surface-container-low p-8 border-t-4 border-emerald-500 rounded-sm">
            <span className="text-emerald-500 text-xs font-bold font-label tracking-widest uppercase mb-4 block">Referral</span>
            <h3 className="text-2xl font-black mb-2">소개 리워드</h3>
            <p className="text-on-surface-variant text-sm">추천인/피추천인 모두 +5% 적립</p>
          </div>
          <div className="bg-surface-container-low p-8 border-t-4 border-purple-500 rounded-sm">
            <span className="text-purple-500 text-xs font-bold font-label tracking-widest uppercase mb-4 block">Custom</span>
            <h3 className="text-2xl font-black mb-2">히든 할인</h3>
            <p className="text-on-surface-variant text-sm">대형 프로젝트 및 협찬 별도 문의</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <p className="text-primary-container font-black text-xl">할인은 전부 중복 적용됩니다</p>
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Link href="/discount" className="px-8 py-4 border border-outline-variant font-bold hover:bg-surface-container transition-colors text-center">
              내 할인 직접 계산해보기 →
            </Link>
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 bg-secondary-container text-on-secondary-fixed font-black rounded-sm flex items-center justify-center gap-2">
              카카오톡 '카메라빌리지'로 예약
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
