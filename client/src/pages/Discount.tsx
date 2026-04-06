// VILLAGE. — Discount Page (/discount)
// 할인 계산기: discount.html → React 변환
// 할인 계산 방식: 곱하기(복리) — 정가 × (1-할인1) × (1-할인2) × ...

import { useState, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { KAKAO_URL } from "@/lib/products";

// 장기 대여 할인율 (회차 = 24시간 단위)
const longTermRates: { label: string; min: number; max: number; rate: number }[] = [
  { label: "1회차 (당일)", min: 1, max: 1, rate: 0 },
  { label: "2회차", min: 2, max: 2, rate: 0.10 },
  { label: "3~5회차", min: 3, max: 5, rate: 0.20 },
  { label: "6~9회차", min: 6, max: 9, rate: 0.35 },
  { label: "10~15회차", min: 10, max: 15, rate: 0.40 },
  { label: "15~19회차", min: 15, max: 19, rate: 0.45 },
  { label: "20회차~", min: 20, max: 999, rate: 0.50 },
];

function getLongTermRate(days: number): number {
  for (const r of longTermRates) {
    if (days >= r.min && days <= r.max) return r.rate;
  }
  return 0.50; // 20+
}

function getLongTermLabel(days: number): string {
  for (const r of longTermRates) {
    if (days >= r.min && days <= r.max) return r.label;
  }
  return "20회차~";
}

export default function Discount() {
  const [basePrice, setBasePrice] = useState(50000);
  const [days, setDays] = useState(1);
  const [isStudent, setIsStudent] = useState(false);
  const [isBusiness, setIsBusiness] = useState(false);
  const [hasCoupon3, setHasCoupon3] = useState(false);
  const [hasCoupon10, setHasCoupon10] = useState(false);
  const [hasReferral, setHasReferral] = useState(false);

  // 기본 할인 (택1)
  const baseDiscount = isStudent ? 0.30 : isBusiness ? 0.20 : 0;
  const baseDiscountLabel = isStudent ? "학생 30%" : isBusiness ? "개인사업자/프리랜서 20%" : "없음";

  // 장기 할인
  const longTermRate = getLongTermRate(days);
  const longTermLabel = getLongTermLabel(days);

  // 쿠폰
  const couponRate = hasCoupon10 ? 0.10 : hasCoupon3 ? 0.05 : 0;
  const couponLabel = hasCoupon10 ? "10회 쿠폰 10%" : hasCoupon3 ? "3회 쿠폰 5%" : "없음";

  // 소개 리워드
  const referralRate = hasReferral ? 0.05 : 0;

  // 계산 (곱하기/복리)
  const result = useMemo(() => {
    let price = basePrice;
    const appliedDiscounts: { name: string; rate: number; before: number; after: number }[] = [];

    if (baseDiscount > 0) {
      const before = price;
      price = price * (1 - baseDiscount);
      appliedDiscounts.push({ name: baseDiscountLabel, rate: baseDiscount, before, after: price });
    }

    if (longTermRate > 0) {
      const before = price;
      price = price * (1 - longTermRate);
      appliedDiscounts.push({ name: `장기 ${longTermLabel} ${(longTermRate * 100).toFixed(0)}%`, rate: longTermRate, before, after: price });
    }

    if (couponRate > 0) {
      const before = price;
      price = price * (1 - couponRate);
      appliedDiscounts.push({ name: `쿠폰 ${couponLabel}`, rate: couponRate, before, after: price });
    }

    if (referralRate > 0) {
      const before = price;
      price = price * (1 - referralRate);
      appliedDiscounts.push({ name: "소개 리워드 5%", rate: referralRate, before, after: price });
    }

    const perDay = Math.round(price);
    const total = perDay * days;
    const totalDiscount = basePrice > 0 ? Math.round((1 - perDay / basePrice) * 100) : 0;

    return { perDay, total, totalDiscount, appliedDiscounts };
  }, [basePrice, days, baseDiscount, longTermRate, couponRate, referralRate, baseDiscountLabel, longTermLabel, couponLabel]);

  return (
    <div className="min-h-screen" style={{ background: "#F9F9F9" }}>
      <Header />
      <div style={{ height: "80px" }} />

      <main className="max-w-4xl mx-auto px-4 py-16">
        {/* Page header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black tracking-tight mb-3" style={{ fontFamily: "'Work Sans', sans-serif" }}>
            할인 계산기
          </h1>
          <div className="w-20 h-1.5 mb-4" style={{ background: "#D4A017" }} />
          <p className="text-sm" style={{ color: "#4F4634" }}>
            모든 할인은 <strong>중복 적용</strong>됩니다. 정가 × (1-할인1) × (1-할인2) × ... 방식으로 계산됩니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Input */}
          <div className="space-y-6">
            {/* 장비 가격 */}
            <div className="p-6 bg-white rounded-sm" style={{ border: "1px solid #E8E8E8" }}>
              <label className="block text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#795900", fontFamily: "'Inter', sans-serif" }}>
                1일 렌탈 정가 (원)
              </label>
              <input
                type="number"
                value={basePrice}
                onChange={(e) => setBasePrice(Number(e.target.value))}
                className="w-full text-2xl font-black outline-none bg-zinc-50 px-4 py-3 rounded-sm"
                style={{ border: "1px solid #E8E8E8", fontFamily: "'Work Sans', sans-serif" }}
                min={0}
                step={5000}
              />
            </div>

            {/* 대여 기간 */}
            <div className="p-6 bg-white rounded-sm" style={{ border: "1px solid #E8E8E8" }}>
              <label className="block text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#795900", fontFamily: "'Inter', sans-serif" }}>
                대여 기간 (회차 = 24시간 단위)
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min={1}
                  max={30}
                  value={days}
                  onChange={(e) => setDays(Number(e.target.value))}
                  className="flex-1 accent-amber-600"
                />
                <span className="text-2xl font-black w-16 text-right" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                  {days}
                </span>
              </div>
              <p className="text-xs mt-2" style={{ color: "#71717A" }}>
                장기 할인: {longTermLabel} → <strong>{(longTermRate * 100).toFixed(0)}%</strong>
              </p>
            </div>

            {/* 기본 할인 (택1) */}
            <div className="p-6 bg-white rounded-sm" style={{ border: "1px solid #E8E8E8" }}>
              <label className="block text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#795900", fontFamily: "'Inter', sans-serif" }}>
                기본 할인 (택1)
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="baseDiscount"
                    checked={!isStudent && !isBusiness}
                    onChange={() => { setIsStudent(false); setIsBusiness(false); }}
                    className="accent-amber-600"
                  />
                  <span className="text-sm">해당 없음</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="baseDiscount"
                    checked={isStudent}
                    onChange={() => { setIsStudent(true); setIsBusiness(false); }}
                    className="accent-amber-600"
                  />
                  <span className="text-sm">학생 <strong>30%</strong> (학생증 제시)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="baseDiscount"
                    checked={isBusiness}
                    onChange={() => { setIsStudent(false); setIsBusiness(true); }}
                    className="accent-amber-600"
                  />
                  <span className="text-sm">개인사업자/프리랜서 <strong>20%</strong></span>
                </label>
              </div>
            </div>

            {/* 추가 할인 */}
            <div className="p-6 bg-white rounded-sm" style={{ border: "1px solid #E8E8E8" }}>
              <label className="block text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#795900", fontFamily: "'Inter', sans-serif" }}>
                추가 할인 (중복 가능)
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={hasCoupon3} onChange={(e) => { setHasCoupon3(e.target.checked); if (e.target.checked) setHasCoupon10(false); }} className="accent-amber-600" />
                  <span className="text-sm">3회 이용 쿠폰 <strong>5%</strong> (유효기간 2개월)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={hasCoupon10} onChange={(e) => { setHasCoupon10(e.target.checked); if (e.target.checked) setHasCoupon3(false); }} className="accent-amber-600" />
                  <span className="text-sm">10회 이용 쿠폰 <strong>10%</strong> (유효기간 2개월)</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer">
                  <input type="checkbox" checked={hasReferral} onChange={(e) => setHasReferral(e.target.checked)} className="accent-amber-600" />
                  <span className="text-sm">소개 리워드 <strong>+5%</strong> (소개한/받은 사람 모두)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right: Result */}
          <div className="space-y-6">
            {/* 계산 결과 */}
            <div className="p-8 bg-white rounded-sm" style={{ border: "2px solid #D4A017" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-6" style={{ color: "#795900", fontFamily: "'Inter', sans-serif" }}>
                계산 결과
              </h3>

              {/* 할인 전 */}
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm" style={{ color: "#71717A" }}>1일 정가</span>
                <span className="text-sm line-through" style={{ color: "#A1A1AA" }}>{basePrice.toLocaleString()}원</span>
              </div>

              {/* 적용된 할인 목록 */}
              {result.appliedDiscounts.map((d, i) => (
                <div key={i} className="flex justify-between items-center py-2" style={{ borderTop: "1px solid #F3F3F3" }}>
                  <span className="text-xs" style={{ color: "#4F4634" }}>{d.name}</span>
                  <span className="text-xs font-bold" style={{ color: "#93000A" }}>-{(d.rate * 100).toFixed(0)}%</span>
                </div>
              ))}

              {/* 결과 */}
              <div className="mt-6 pt-6" style={{ borderTop: "2px solid #1A1C1C" }}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-bold">할인된 1일 가격</span>
                  <span className="text-3xl font-black" style={{ color: "#D4A017", fontFamily: "'Work Sans', sans-serif" }}>
                    {result.perDay.toLocaleString()}원
                  </span>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-sm font-bold">{days}일 총 예상 금액</span>
                  <span className="text-xl font-black" style={{ fontFamily: "'Work Sans', sans-serif" }}>
                    {result.total.toLocaleString()}원
                  </span>
                </div>
                <div className="text-center py-3 rounded-sm" style={{ background: "#FFDAD6" }}>
                  <span className="text-sm font-black" style={{ color: "#93000A" }}>
                    총 {result.totalDiscount}% 할인!
                  </span>
                </div>
              </div>
            </div>

            {/* 계산 수식 */}
            <div className="p-6 bg-white rounded-sm" style={{ border: "1px solid #E8E8E8" }}>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#795900", fontFamily: "'Inter', sans-serif" }}>
                계산 수식
              </h4>
              <div className="text-sm font-mono p-4 rounded-sm overflow-x-auto" style={{ background: "#F3F3F3", color: "#4F4634" }}>
                {basePrice.toLocaleString()}원
                {result.appliedDiscounts.map((d, i) => (
                  <span key={i}> × {(1 - d.rate).toFixed(2)}</span>
                ))}
                {" = "}
                <strong style={{ color: "#D4A017" }}>{result.perDay.toLocaleString()}원</strong>
              </div>
            </div>

            {/* 히든 할인 안내 */}
            <div className="p-6 rounded-sm" style={{ background: "#F3F3F3", borderLeft: "4px solid #8B5CF6" }}>
              <h4 className="font-bold text-sm mb-2">히든 할인</h4>
              <p className="text-xs" style={{ color: "#4F4634" }}>
                단골 고객 및 제휴업체 대상 추가 할인은 <strong>별도 문의</strong>해 주세요.
              </p>
            </div>

            {/* CTA */}
            <a
              href={KAKAO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-5 font-black text-lg rounded-sm shadow-lg hover:opacity-90 active:scale-95 transition-all"
              style={{ background: "#FAE100", color: "#201C00", fontFamily: "'Work Sans', sans-serif" }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: "22px", fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
              카카오톡 '카메라빌리지'로 예약
            </a>

            {/* 포함 서비스 */}
            <div className="p-6 bg-white rounded-sm" style={{ border: "1px solid #E8E8E8" }}>
              <h4 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#795900", fontFamily: "'Inter', sans-serif" }}>
                기본 포함 (무료)
              </h4>
              <ul className="text-sm space-y-2" style={{ color: "#4F4634" }}>
                <li>✓ 배터리 3~4개 + SD카드 2~3장 (₩35,000 상당)</li>
                <li>✓ 보증금 없음</li>
                <li>✓ 선결제 없음</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 할인 정책 상세 */}
        <div className="mt-16">
          <h2 className="text-2xl font-black mb-8" style={{ fontFamily: "'Work Sans', sans-serif" }}>할인 정책 상세</h2>

          {/* 장기 대여 표 */}
          <div className="p-6 bg-white rounded-sm mb-6" style={{ border: "1px solid #E8E8E8" }}>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: "#795900", fontFamily: "'Inter', sans-serif" }}>
              장기 대여 할인 (회차 = 24시간 단위)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {longTermRates.slice(1).map((r) => (
                <div key={r.label} className="p-4 rounded-sm text-center" style={{ background: "#F3F3F3" }}>
                  <p className="text-xs mb-1" style={{ color: "#71717A" }}>{r.label}</p>
                  <p className="text-xl font-black" style={{ color: "#D4A017", fontFamily: "'Work Sans', sans-serif" }}>
                    {(r.rate * 100).toFixed(0)}%
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 쿠폰 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-sm" style={{ border: "1px solid #E8E8E8" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#3B82F6", fontFamily: "'Inter', sans-serif" }}>쿠폰</h3>
              <ul className="text-sm space-y-2" style={{ color: "#4F4634" }}>
                <li>3회 이용 → <strong>5% 쿠폰</strong> 자동 발급 (유효기간 2개월)</li>
                <li>10회 이용 → <strong>10% 쿠폰</strong> 자동 발급 (유효기간 2개월)</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-sm" style={{ border: "1px solid #E8E8E8" }}>
              <h3 className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#10B981", fontFamily: "'Inter', sans-serif" }}>소개 리워드</h3>
              <ul className="text-sm space-y-2" style={{ color: "#4F4634" }}>
                <li>소개한 사람 <strong>+5%</strong></li>
                <li>소개받은 사람 <strong>+5%</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
