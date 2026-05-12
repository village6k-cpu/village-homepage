// VILLAGE. — Discount Page (/discount)
// 에디토리얼 / 미니멀 재디자인. 카드 모자이크·그라데이션·다색 chip·번호섹션 다 제거.
// 데이터/계산 로직은 그대로, 디자인 언어만 갈아엎음.

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { KAKAO_URL } from "@/lib/products";

// ── 데이터 ─────────────────────────────────
const ED: Record<string, { n: string; p: number }[]> = {
  '카메라 풀세트': [
    { n: '픽시스 6K 풀세트 (PL 마운트)', p: 150000 }, { n: '소니 BURANO 풀세트', p: 250000 },
    { n: '소니 BURANO 베이직 세트', p: 200000 }, { n: '소니 FX9 풀세트', p: 130000 },
    { n: '소니 FX6 풀세트', p: 130000 }, { n: '소니 FX3 풀세트', p: 90000 },
    { n: '소니 A7S3 풀세트', p: 80000 }, { n: 'RED 코모도 풀세트', p: 100000 },
    { n: 'BMPCC 6K Pro 풀세트', p: 60000 }, { n: 'BMPCC 6K 풀세트', p: 50000 },
  ],
  '카메라': [
    { n: '소니 FX3 바디세트', p: 50000 }, { n: '소니 FX3 + 28-135', p: 80000 },
    { n: '소니 FX3 + 24-70 GM', p: 75000 }, { n: '소니 FX6 바디세트', p: 60000 },
    { n: '소니 FX6 + 28-135', p: 90000 }, { n: '소니 FX9 바디세트', p: 60000 },
    { n: '소니 A7S3 바디세트', p: 40000 }, { n: '소니 A7S3 + 24-70 GM', p: 65000 },
    { n: '캐논 R6 II + RF 100-500', p: 60000 }, { n: '소니 Z-90 캠코더(4K)', p: 50000 },
    { n: '소니 AX43A 캠코더(4K)', p: 30000 }, { n: '인스타360 X5', p: 30000 },
    { n: '고프로 히어로11', p: 20000 }, { n: '오즈모 포켓3', p: 20000 },
  ],
  '렌즈/필터': [
    { n: '소니 GM 렌즈 세트', p: 70000 }, { n: '소니 GM 단렌즈 세트(5본)', p: 90000 },
    { n: '소니 24-70 GM II', p: 25000 }, { n: '소니 70-200 GM II', p: 30000 },
    { n: '소니 FE 28-135', p: 30000 }, { n: '쿠크 COOKE SP3 세트', p: 200000 },
    { n: 'DZOFILM CATTA ACE 3세트', p: 100000 }, { n: '시그마 FF Prime 세트', p: 100000 },
    { n: '삼양 XEEN 세트', p: 50000 }, { n: '삼양 XEEN CF 세트', p: 80000 },
    { n: '라오와 24mm Probe', p: 30000 }, { n: '캐논 RF 100-500', p: 30000 },
    { n: '틸타 MB-T12 매트박스', p: 20000 }, { n: 'NiSi PL 필터', p: 10000 },
  ],
  '조명': [
    { n: '난룩스 Evoke 1200B', p: 50000 }, { n: '어퓨쳐 600X 프로 세트', p: 35000 },
    { n: '어퓨쳐 600C 프로(RGBWW)', p: 40000 }, { n: '어퓨쳐 300X 세트', p: 25000 },
    { n: '어퓨쳐 노바 P300C', p: 30000 }, { n: '아마란 F22C', p: 35000 },
    { n: '아마란 F21C', p: 20000 }, { n: '아마란 PT4C 4KIT', p: 60000 },
    { n: '파보튜브II 30XR 2KIT', p: 35000 }, { n: '파보튜브II 30X 4KIT', p: 60000 },
    { n: '어퓨쳐 B7C 8KIT', p: 40000 }, { n: '스피드라이트 430EX', p: 15000 },
  ],
  '모니터/무선': [
    { n: '홀리랜드 솔리드컴 C1 PRO 6S', p: 70000 }, { n: '홀리랜드 솔리드컴 C1 PRO 4S', p: 50000 },
    { n: '무선세트(17인치)', p: 50000 }, { n: 'TVLogic LVM-180A', p: 35000 },
    { n: '홀리랜드 파이로 S', p: 30000 }, { n: '홀리랜드 파이로 7', p: 20000 },
    { n: 'DJI SDR Transmission', p: 20000 }, { n: '틸타 뉴클리어스-M', p: 20000 },
  ],
  '짐벌/서포트': [
    { n: '틸타 시네 슬라이더', p: 50000 }, { n: 'MOVMAX RAZOR ARM', p: 50000 },
    { n: '로닌 RS4 프로', p: 35000 }, { n: '로닌 RS3 프로', p: 30000 },
    { n: '핫도그 슬라이더', p: 30000 }, { n: '시네 카트', p: 20000 },
  ],
  '오디오': [
    { n: 'JBL 파티박스 320+마이크', p: 30000 }, { n: '인터컴 5세트', p: 30000 },
    { n: '줌 F6', p: 20000 }, { n: '모토로라 무전기 4세트', p: 20000 },
    { n: '젠하이져 MKH-416P', p: 15000 }, { n: 'DJI 무선마이크', p: 10000 },
  ],
  '기타': [
    { n: 'KSH17 프롬프터', p: 60000 }, { n: '에코플로우 델타2 맥스', p: 60000 },
    { n: '아템 미니 익스트림 ISO', p: 30000 }, { n: '촬영용 턴테이블', p: 20000 },
    { n: 'V마운트 배터리 3개', p: 10000 }, { n: '강풍기', p: 5000 }, { n: 'C스탠드', p: 5000 },
  ],
};

const BD = [
  { n: '학생 30%', short: '학생', r: 0.3 },
  { n: '개인사업자/프리랜서 20%', short: '사업자', r: 0.2 },
  { n: '없음', short: '없음', r: 0 },
];
const LT = [
  { n: '없음', r: 0 }, { n: '2회차 10%', r: 0.1 }, { n: '3~5회차 20%', r: 0.2 },
  { n: '6~9회차 35%', r: 0.35 }, { n: '10~15회차 40%', r: 0.4 },
  { n: '15~19회차 45%', r: 0.45 }, { n: '20회차~ 50%', r: 0.5 },
];
const EX = [
  { n: '3회 쿠폰 5%', r: 0.05 },
  { n: '10회 쿠폰 10%', r: 0.1 },
  { n: '소개 리워드 5%', r: 0.05 },
];

// 통합 할인 안내 표 데이터 — 페이지 상단 정보 영역
const DISCOUNT_TABLE: { label: string; value: string; note?: string }[] = [
  { label: '학생', value: '30%', note: '학생증' },
  { label: '개인사업자 · 프리랜서', value: '20%', note: '사업자등록증' },
  { label: '2회차 대여', value: '10%' },
  { label: '3~5회차', value: '20%' },
  { label: '6~9회차', value: '35%' },
  { label: '10~15회차', value: '40%' },
  { label: '15~19회차', value: '45%' },
  { label: '20회차~', value: '50%' },
  { label: '3회 이용 쿠폰', value: '5%' },
  { label: '10회 이용 쿠폰', value: '10%' },
  { label: '소개한 사람 / 소개받은 사람', value: '각 +5%' },
];

export default function Discount() {
  const [selCat, setSelCat] = useState<string | null>(null);
  const [selEq, setSelEq] = useState<number | null>(null);
  const [selBase, setSelBase] = useState<number | null>(null);
  const [selLt, setSelLt] = useState<number | null>(null);
  const [selEx, setSelEx] = useState<Set<number>>(new Set());

  const toggleEx = (i: number) => {
    const next = new Set(selEx);
    if (next.has(i)) next.delete(i); else next.add(i);
    setSelEx(next);
  };

  // 계산
  const eq = selCat && selEq !== null ? ED[selCat][selEq] : null;
  let finalPrice = eq ? eq.p : 0;
  const names: string[] = [];
  if (eq) {
    if (selBase !== null && BD[selBase].r > 0) { finalPrice *= (1 - BD[selBase].r); names.push(BD[selBase].n); }
    if (selLt !== null && LT[selLt].r > 0) { finalPrice *= (1 - LT[selLt].r); names.push(LT[selLt].n); }
    selEx.forEach(i => { finalPrice *= (1 - EX[i].r); names.push(EX[i].n); });
    finalPrice = Math.round(finalPrice);
  }
  const savings = eq ? eq.p - finalPrice : 0;
  const pct = eq && eq.p > 0 ? ((1 - finalPrice / eq.p) * 100).toFixed(1) : "0";

  return (
    <div className="bg-bg-primary text-text-primary">
      <Header />
      <main className="pt-20">
        {/* ── HERO ───────────────────────────── */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 pt-14 md:pt-20 pb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-4">Discount</p>
          <h1 className="font-bold leading-[1.05] tracking-tight text-[40px] md:text-[64px]" style={{ wordBreak: "keep-all" }}>
            할인은 <span className="text-accent">전부 중복</span>으로 적용됩니다.
          </h1>
          <p className="text-text-secondary text-sm md:text-base mt-5 max-w-xl leading-relaxed">
            보증금·선결제 없이 학생·사업자·장기·쿠폰·소개 할인을 모두 곱연산으로 적용합니다.
            아래에서 직접 계산해보세요.
          </p>
        </section>

        {/* ── 할인 안내 (정보 표) ─────────────── */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 pb-14 md:pb-20">
          <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-text-primary/20">
            <h2 className="text-lg md:text-xl font-bold">할인 안내</h2>
            <span className="text-[11px] uppercase tracking-[0.2em] text-text-muted">
              All discounts stack
            </span>
          </div>
          <dl className="divide-y divide-divider">
            {DISCOUNT_TABLE.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between py-3.5">
                <dt className="text-sm md:text-[15px] text-text-primary">
                  {row.label}
                  {row.note && (
                    <span className="ml-2 text-[11px] text-text-muted">{row.note}</span>
                  )}
                </dt>
                <dd className="text-base md:text-lg font-headline font-bold tabular-nums text-text-primary">
                  {row.value}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-xs text-text-muted">
            기본 할인(학생/사업자)은 택1. 장기·쿠폰·소개는 위에 곱하기로 추가 적용.
          </p>
        </section>

        {/* ── 계산기 ─────────────────────────── */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 pb-12 md:pb-16 border-t border-text-primary/10 pt-12 md:pt-16">
          <div className="flex items-baseline justify-between mb-8 pb-3 border-b border-text-primary/20">
            <h2 className="text-lg md:text-xl font-bold">직접 계산</h2>
            <span className="text-[11px] uppercase tracking-[0.2em] text-text-muted">Calculator</span>
          </div>

          {/* 1. 장비 선택 */}
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">01 · 장비</p>
            <div className="flex flex-wrap gap-x-3 gap-y-2 mb-3">
              {Object.keys(ED).map((c) => (
                <button
                  key={c}
                  onClick={() => { setSelCat(c); setSelEq(null); }}
                  className={`text-sm pb-1 transition-colors ${
                    selCat === c
                      ? "text-text-primary border-b-2 border-accent font-medium"
                      : "text-text-muted hover:text-text-primary border-b-2 border-transparent"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="relative">
              <select
                value={selEq ?? ""}
                onChange={(e) => setSelEq(e.target.value !== "" ? parseInt(e.target.value) : null)}
                disabled={!selCat}
                className="w-full py-3 px-0 pr-8 bg-transparent border-0 border-b border-text-primary/30 text-base appearance-none focus:outline-none focus:border-accent disabled:text-text-muted transition-colors"
              >
                {!selCat ? (
                  <option value="">먼저 카테고리를 선택하세요</option>
                ) : (
                  <>
                    <option value="">장비를 선택하세요</option>
                    {ED[selCat].map((e, i) => (
                      <option key={i} value={i}>
                        {e.n} — ₩{e.p.toLocaleString()}
                      </option>
                    ))}
                  </>
                )}
              </select>
              <span className="absolute right-1 top-1/2 -translate-y-1/2 text-text-muted pointer-events-none text-sm">↓</span>
            </div>
          </div>

          {/* 2. 기본 할인 */}
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">02 · 기본 할인 (택1)</p>
            <div className="flex flex-wrap gap-2">
              {BD.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setSelBase(selBase === i ? null : i)}
                  className={`px-3.5 py-1.5 text-sm border transition-colors ${
                    selBase === i
                      ? "bg-text-primary text-bg-primary border-text-primary"
                      : "bg-transparent text-text-muted border-divider hover:border-text-primary hover:text-text-primary"
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  {d.n}
                </button>
              ))}
            </div>
          </div>

          {/* 3. 장기 */}
          <div className="mb-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">03 · 장기 대여 (택1)</p>
            <div className="flex flex-wrap gap-2">
              {LT.map((d, i) => (
                <button
                  key={i}
                  onClick={() => setSelLt(selLt === i ? null : i)}
                  className={`px-3.5 py-1.5 text-sm border transition-colors ${
                    selLt === i
                      ? "bg-text-primary text-bg-primary border-text-primary"
                      : "bg-transparent text-text-muted border-divider hover:border-text-primary hover:text-text-primary"
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  {d.n}
                </button>
              ))}
            </div>
          </div>

          {/* 4. 추가 */}
          <div className="mb-10">
            <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">04 · 추가 할인 (중복)</p>
            <div className="flex flex-wrap gap-2">
              {EX.map((d, i) => (
                <button
                  key={i}
                  onClick={() => toggleEx(i)}
                  className={`px-3.5 py-1.5 text-sm border transition-colors ${
                    selEx.has(i)
                      ? "bg-text-primary text-bg-primary border-text-primary"
                      : "bg-transparent text-text-muted border-divider hover:border-text-primary hover:text-text-primary"
                  }`}
                  style={{ borderRadius: 0 }}
                >
                  {d.n}
                </button>
              ))}
            </div>
          </div>

          {/* 5. 결과 — 카드 아닌 정보 영역 */}
          <div className="border-t border-text-primary/20 pt-8">
            {eq ? (
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">결과</p>
                <p className="text-sm text-text-secondary mb-1">{eq.n}</p>
                <div className="flex items-baseline gap-4 flex-wrap">
                  <span className="text-[44px] md:text-[64px] font-bold font-headline tabular-nums leading-none tracking-tight text-text-primary">
                    ₩{finalPrice.toLocaleString()}
                  </span>
                  {savings > 0 && (
                    <span className="text-base md:text-lg text-text-muted line-through tabular-nums">
                      ₩{eq.p.toLocaleString()}
                    </span>
                  )}
                  {savings > 0 && (
                    <span className="text-base md:text-lg text-accent font-medium tabular-nums">
                      −{pct}%
                    </span>
                  )}
                </div>
                {savings > 0 && (
                  <p className="text-sm text-text-secondary mt-4">
                    <span className="text-text-primary font-medium">₩{savings.toLocaleString()}</span> 절약
                    {names.length > 0 && (
                      <span className="text-text-muted"> · {names.join(" · ")}</span>
                    )}
                  </p>
                )}
                {savings === 0 && (
                  <p className="text-xs text-text-muted mt-3">아래에서 할인을 선택해보세요.</p>
                )}
              </div>
            ) : (
              <p className="text-sm text-text-muted py-6">장비와 할인을 선택하면 가격이 표시됩니다.</p>
            )}
          </div>
        </section>

        {/* ── 예시 ─────────────────────────── */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 pb-14 md:pb-20 border-t border-text-primary/10 pt-12 md:pt-16">
          <div className="flex items-baseline justify-between mb-6 pb-3 border-b border-text-primary/20">
            <h2 className="text-lg md:text-xl font-bold">예시</h2>
            <span className="text-[11px] uppercase tracking-[0.2em] text-text-muted">Examples</span>
          </div>
          <ul className="divide-y divide-divider">
            <li className="py-4 flex items-baseline justify-between gap-4">
              <div className="text-sm md:text-[15px]">
                FX3 풀세트 <span className="text-text-muted">· 학생 + 10회 쿠폰</span>
                <div className="text-xs text-text-muted mt-1 tabular-nums">
                  ₩90,000 → ₩56,700
                </div>
              </div>
              <span className="text-base md:text-lg text-accent font-medium tabular-nums whitespace-nowrap">−37%</span>
            </li>
            <li className="py-4 flex items-baseline justify-between gap-4">
              <div className="text-sm md:text-[15px]">
                FX3 풀세트 <span className="text-text-muted">· 학생 + 6~9회차 + 소개</span>
                <div className="text-xs text-text-muted mt-1 tabular-nums">
                  ₩90,000 → ₩38,902
                </div>
              </div>
              <span className="text-base md:text-lg text-accent font-medium tabular-nums whitespace-nowrap">−56.8%</span>
            </li>
            <li className="py-4 flex items-baseline justify-between gap-4">
              <div className="text-sm md:text-[15px]">
                쿠크 SP3 렌즈 세트 <span className="text-text-muted">· 학생 + 3~5회차</span>
                <div className="text-xs text-text-muted mt-1 tabular-nums">
                  ₩200,000 → ₩112,000
                </div>
              </div>
              <span className="text-base md:text-lg text-accent font-medium tabular-nums whitespace-nowrap">−44%</span>
            </li>
          </ul>
        </section>

        {/* ── 포함 + CTA ──────────────────────── */}
        <section className="max-w-3xl mx-auto px-6 md:px-12 pb-20 md:pb-28 border-t border-text-primary/10 pt-12 md:pt-16">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">기본 포함</p>
              <ul className="text-sm text-text-secondary space-y-1.5">
                <li>배터리 3~4개</li>
                <li>SD카드 2~3장</li>
                <li>보증금 · 선결제 없음</li>
                <li>홍대입구역 도보 3분</li>
              </ul>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">예약</p>
              <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                카카오톡 채널로 신분·장비·기간만 알려주시면 됩니다.
              </p>
              <a
                href={KAKAO_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => (window as any).naverConv?.()}
                className="inline-flex items-center gap-2 text-sm font-medium text-text-primary border-b border-text-primary pb-0.5 hover:text-accent hover:border-accent transition-colors"
              >
                카카오톡으로 예약하기 →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
