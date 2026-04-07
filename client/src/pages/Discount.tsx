// VILLAGE. — Discount Page (/discount)
// 대시보드 랜딩페이지 discount.html → React 1:1 변환
// 카테고리 탭 → 장비 드롭다운 → 기본 할인 칩 → 장기 칩 → 추가 칩 → 결과 카드

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { KAKAO_URL } from "@/lib/products";
import { Link } from "wouter";

// 장비 데이터 (대시보드 랜딩페이지와 동일)
const ED: Record<string, { n: string; p: number }[]> = {
  '카메라 풀세트': [
    { n: '픽시스 6K 풀세트 (PL 마운트)', p: 150000 }, { n: '소니 BURANO 풀세트', p: 250000 },
    { n: '소니 BURANO 베이직 세트', p: 200000 }, { n: '소니 FX9 풀세트', p: 100000 },
    { n: '소니 FX6 풀세트', p: 130000 }, { n: '소니 FX3 풀세트', p: 90000 },
    { n: '소니 A7S3 풀세트', p: 80000 }, { n: 'RED 코모도 풀세트', p: 100000 },
    { n: 'BMPCC 6K Pro 풀세트', p: 60000 }, { n: 'BMPCC 6K 풀세트', p: 50000 },
  ],
  '카메라': [
    { n: '소니 FX3 바디세트', p: 40000 }, { n: '소니 FX3 + 28-135', p: 65000 },
    { n: '소니 FX3 + 24-70 GM', p: 60000 }, { n: '소니 FX6 바디세트', p: 60000 },
    { n: '소니 FX6 + 28-135', p: 85000 }, { n: '소니 FX9 바디세트', p: 60000 },
    { n: '소니 A7S3 바디세트', p: 30000 }, { n: '소니 A7S3 + 24-70 GM', p: 50000 },
    { n: '캐논 R6 II + RF 100-500', p: 50000 }, { n: '소니 Z-90 캠코더(4K)', p: 40000 },
    { n: '소니 AX43A 캠코더(4K)', p: 30000 }, { n: '인스타360 X5', p: 30000 },
    { n: '고프로 히어로11', p: 20000 }, { n: '오즈모 포켓3', p: 20000 },
  ],
  '렌즈/필터': [
    { n: '소니 GM 렌즈 세트', p: 56000 }, { n: '소니 GM 단렌즈 세트(5본)', p: 90000 },
    { n: '소니 24-70 GM II', p: 25000 }, { n: '소니 70-200 GM II', p: 25000 },
    { n: '소니 FE 28-135', p: 25000 }, { n: '쿠크 COOKE SP3 세트', p: 110000 },
    { n: 'DZOFILM CATTA ACE 3세트', p: 80000 }, { n: '시그마 FF Prime 세트', p: 80000 },
    { n: '삼양 XEEN 세트', p: 50000 }, { n: '삼양 XEEN CF 세트', p: 80000 },
    { n: '라오와 24mm Probe', p: 30000 }, { n: '캐논 RF 100-500', p: 30000 },
    { n: '틸타 MB-T12 매트박스', p: 20000 }, { n: 'NiSi PL 필터', p: 7000 },
  ],
  '조명': [
    { n: '난룩스 Evoke 1200B', p: 50000 }, { n: '어퓨쳐 600X 프로 세트', p: 30000 },
    { n: '어퓨쳐 600C 프로(RGBWW)', p: 40000 }, { n: '어퓨쳐 300X 세트', p: 25000 },
    { n: '어퓨쳐 노바 P300C', p: 30000 }, { n: '아마란 F22C', p: 35000 },
    { n: '아마란 F21C', p: 20000 }, { n: '아마란 PT4C 4KIT', p: 60000 },
    { n: '파보튜브II 30XR 2KIT', p: 35000 }, { n: '파보튜브II 30X 4KIT', p: 60000 },
    { n: '어퓨쳐 B7C 8KIT', p: 40000 }, { n: '스피드라이트 430EX', p: 15000 },
  ],
  '모니터/무선': [
    { n: '홀리랜드 솔리드컴 C1 PRO 6S', p: 70000 }, { n: '홀리랜드 솔리드컴 C1 PRO 4S', p: 50000 },
    { n: '무선세트(17인치)', p: 50000 }, { n: 'TVLogic LVM-180A', p: 30000 },
    { n: '홀리랜드 파이로 S', p: 30000 }, { n: '홀리랜드 파이로 7', p: 20000 },
    { n: 'DJI SDR Transmission', p: 20000 }, { n: '틸타 뉴클리어스-M', p: 20000 },
  ],
  '짐벌/서포트': [
    { n: '틸타 시네 슬라이더', p: 50000 }, { n: 'MOVMAX RAZOR ARM', p: 40000 },
    { n: '로닌 RS4 프로', p: 30000 }, { n: '로닌 RS3 프로', p: 30000 },
    { n: '핫도그 슬라이더', p: 30000 }, { n: '시네 카트', p: 20000 },
  ],
  '오디오': [
    { n: 'JBL 파티박스 320+마이크', p: 30000 }, { n: '인터컴 5세트', p: 30000 },
    { n: '줌 F6', p: 20000 }, { n: '모토로라 무전기 4세트', p: 20000 },
    { n: '젠하이져 MKH-416P', p: 15000 }, { n: 'DJI 무선마이크', p: 10000 },
  ],
  '기타': [
    { n: 'KSH17 프롬프터', p: 60000 }, { n: '에코플로우 델타2 맥스', p: 50000 },
    { n: '아템 미니 익스트림 ISO', p: 30000 }, { n: '촬영용 턴테이블', p: 20000 },
    { n: 'V마운트 배터리 3개', p: 10000 }, { n: '강풍기', p: 5000 }, { n: 'C스탠드', p: 5000 },
  ],
};

const BD = [
  { n: '학생 30%', r: 0.3 },
  { n: '개인사업자/프리랜서 20%', r: 0.2 },
  { n: '없음', r: 0 },
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

        {/* Hero */}
        <div className="py-12 text-center border-b border-divider">
          <div className="text-xs tracking-[5px] font-medium text-accent">CAMERA VILLAGE</div>
          <div className="text-3xl font-bold mt-3 tracking-tight leading-tight">
            빌리지 할인이<br /><span className="text-accent">더 커졌습니다</span>
          </div>
          <div className="text-sm mt-2 text-text-muted">전부 중복 적용 · 보증금 없음 · 선결제 없음</div>
          <div className="flex flex-wrap gap-2 justify-center mt-4">
            <span className="px-3.5 py-1.5 rounded-md text-xs font-medium border border-[#E8593C40] bg-[#E8593C10] text-accent">학생 30%</span>
            <span className="px-3.5 py-1.5 rounded-md text-xs font-medium border border-[#E8593C40] bg-[#E8593C10] text-accent">사업자 20%</span>
            <span className="px-3.5 py-1.5 rounded-md text-xs font-medium border border-[#85B7EB60] bg-[#85B7EB15] text-[#85B7EB]">3/10 쿠폰</span>
            <span className="px-3.5 py-1.5 rounded-md text-xs font-medium border border-emerald-300 bg-emerald-50 text-emerald-500">소개 리워드</span>
            <span className="px-3.5 py-1.5 rounded-md text-xs font-medium border border-purple-300 bg-purple-50 text-purple-500">히든 할인</span>
          </div>
        </div>

        {/* 01 기본 할인 */}
        <Section num="01" numColor="text-orange-500" title="기본 할인" sub="학생 또는 사업자, 택1">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <StatCard label="학생" value="30%" color="#D4A017" note="학생증 제시" />
            <StatCard label="개인사업자 / 프리랜서" value="20%" color="#D4A017" note="사업자등록증 또는 증빙" />
          </div>
          <InfoBox items={["전 장비 적용 (시네마 장비 포함)", "장기·쿠폰·소개 할인과 중복 가능"]} />
        </Section>

        {/* 02 장기 */}
        <Section num="02" numColor="text-orange-500" title="장기 대여 할인" sub="기본 할인과 중복 적용">
          <table className="w-full text-sm">
            <tbody>
              {[["2회차", "10%"], ["3~5회차", "20%"], ["6~9회차", "35%"], ["10~15회차", "40%"], ["15~19회차", "45%"], ["20회차~", "50%"]].map(([label, rate]) => (
                <tr key={label} style={{ borderBottom: "1px solid #DEDBD5" }}>
                  <td className="py-2.5 px-3" style={{ color: "#999999" }}>{label}</td>
                  <td className="py-2.5 px-3 text-right font-bold font-headline" style={{ color: "#E8593C" }}>{rate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Section>

        {/* 03 쿠폰 */}
        <Section num="03" numColor="text-blue-500" title="3/10 쿠폰" sub="이용할수록 추가 할인 자동 발급">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <StatCard label="3회 이용" value="5%" color="#3B82F6" note="쿠폰 자동 발급" />
            <StatCard label="10회 이용" value="10%" color="#3B82F6" note="쿠폰 자동 발급" />
          </div>
          <AccentBox color="blue" title="기본 할인과 중복 적용" desc="유효기간 2개월 · 학생/사업자/장기 할인 위에 추가로 적용" />
        </Section>

        {/* 04 소개 */}
        <Section num="04" numColor="text-emerald-500" title="소개 리워드" sub="소개하면 둘 다 할인">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <StatCard label="소개한 사람" value="+5%" color="#22C55E" />
            <StatCard label="소개받은 사람" value="+5%" color="#22C55E" />
          </div>
          <AccentBox color="green" title="기본 할인과 중복 적용" desc="횟수 제한 없음 · 예약 시 소개자 이름만 알려주세요" />
        </Section>

        {/* 05 히든 할인 */}
        <Section num="05 — BONUS" numColor="text-purple-500" title="히든 할인" sub="위 할인이 전부가 아닙니다">
          <div className="grid grid-cols-2 gap-3 mb-3">
            <StatCard label="단골 고객" value="추가 할인" color="#A855F7" note="이용 내역에 따라" small />
            <StatCard label="제휴업체" value="별도 협의" color="#A855F7" note="정기 이용 시" small />
          </div>
          <AccentBox color="purple" title="별도 문의" desc="카카오톡으로 문의하시면 상황에 맞게 안내드려요" />
        </Section>

        {/* 예시 */}
        <Section num="EXAMPLE" numColor="text-orange-500" title="할인은 중복됩니다" sub="학생 + 장기 + 쿠폰 + 소개, 전부 동시 적용">
          <CalcExample
            label="FX3 · 학생 + 10회 쿠폰"
            original={50000}
            tags={[{ n: "학생 30%", c: "orange" }, { n: "10회 쿠폰", c: "blue" }]}
            result={31500} pct="-37%"
          />
          <CalcExample
            label="FX3 · 학생 + 6~9회차 장기 + 소개"
            original={50000}
            tags={[{ n: "학생", c: "orange" }, { n: "장기 35%", c: "orange" }, { n: "소개 5%", c: "green" }]}
            result={21613} pct="-56.8%"
          />
        </Section>

        {/* === 할인 계산기 === */}
        <div className="px-6 py-7 max-w-xl mx-auto" style={{ borderTop: "1px solid #DEDBD5" }}>
          <div className="text-xs tracking-[3px] font-medium text-orange-500 mb-2">CALCULATOR</div>
          <div className="text-2xl font-bold mb-1 font-headline">내 할인 직접 계산</div>
          <div className="text-sm mb-5" style={{ color: "#999999" }}>장비 선택 → 할인 적용 → 최종 가격 확인</div>

          {/* 카테고리 탭 */}
          <div className="text-xs mb-1.5" style={{ color: "#999999" }}>장비 카테고리</div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 mb-4" style={{ scrollbarWidth: "none" }}>
            {Object.keys(ED).map((c) => (
              <button key={c} onClick={() => { setSelCat(c); setSelEq(null); }}
                className={`px-3.5 py-2 rounded-lg text-xs whitespace-nowrap transition-all font-medium ${
                  selCat === c
                    ? "bg-accent text-white font-semibold"
                    : "bg-bg-primary border border-divider text-text-muted"
                }`}>
                {c}
              </button>
            ))}
          </div>

          {/* 장비 선택 */}
          <div className="text-xs mb-1.5" style={{ color: "#999999" }}>장비 선택</div>
          <div className="relative mb-4">
            <select
              value={selEq ?? ""}
              onChange={(e) => setSelEq(e.target.value !== "" ? parseInt(e.target.value) : null)}
              className="w-full py-3 px-3.5 pr-9 bg-bg-primary border border-divider rounded-lg text-sm appearance-none focus:outline-none focus:border-accent"
            >
              {!selCat ? (
                <option value="">카테고리를 먼저 선택하세요</option>
              ) : (
                <>
                  <option value="">장비를 선택하세요</option>
                  {ED[selCat].map((e, i) => (
                    <option key={i} value={i}>{e.n}  ·  ₩{e.p.toLocaleString()}/일</option>
                  ))}
                </>
              )}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs pointer-events-none" style={{ color: "#999999" }}>▼</div>
          </div>

          {/* 기본 할인 (택1) */}
          <div className="text-xs mb-1.5" style={{ color: "#999999" }}>기본 할인 (택1)</div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {BD.map((d, i) => (
              <button key={i} onClick={() => setSelBase(selBase === i ? null : i)}
                className={`px-3 py-2 rounded-lg text-xs transition-all ${
                  selBase === i
                    ? "bg-blue-50 border border-blue-400 text-blue-500 font-medium"
                    : "bg-bg-primary border border-divider text-text-muted"
                }`}>
                {d.n}
              </button>
            ))}
          </div>

          {/* 장기 대여 (택1) */}
          <div className="text-xs mb-1.5" style={{ color: "#999999" }}>장기 대여 (택1)</div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {LT.map((d, i) => (
              <button key={i} onClick={() => setSelLt(selLt === i ? null : i)}
                className={`px-3 py-2 rounded-lg text-xs transition-all ${
                  selLt === i
                    ? "bg-blue-50 border border-blue-400 text-blue-500 font-medium"
                    : "bg-bg-primary border border-divider text-text-muted"
                }`}>
                {d.n}
              </button>
            ))}
          </div>

          {/* 추가 할인 (중복 가능) */}
          <div className="text-xs mb-1.5" style={{ color: "#999999" }}>추가 할인 (중복 가능)</div>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {EX.map((d, i) => (
              <button key={i} onClick={() => toggleEx(i)}
                className={`px-3 py-2 rounded-lg text-xs transition-all ${
                  selEx.has(i)
                    ? "bg-orange-50 border border-orange-400 text-orange-500 font-medium"
                    : "bg-bg-primary border border-divider text-text-muted"
                }`}>
                {d.n}
              </button>
            ))}
          </div>

          {/* 결과 카드 */}
          <div className="relative rounded-xl p-5 text-center mt-4 overflow-hidden min-h-[80px]"
            style={{ background: "linear-gradient(145deg, #FFF8F6, #F9F9F9)", border: "1px solid #DEDBD5" }}>
            <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: "linear-gradient(90deg, transparent, #D4A017, transparent)" }} />
            {eq ? (
              <>
                <div className="text-xs mb-1" style={{ color: "#999999" }}>{eq.n}</div>
                {savings > 0 ? (
                  <>
                    <div className="text-sm line-through font-headline" style={{ color: "#A1A1AA" }}>₩{eq.p.toLocaleString()}</div>
                    <div className="text-4xl font-bold font-headline tracking-tight my-1" style={{ color: "#E8593C" }}>₩{finalPrice.toLocaleString()}</div>
                    <div className="inline-block px-2.5 py-0.5 rounded-full text-sm font-bold font-headline" style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E" }}>-{pct}%</div>
                    <div className="mt-2.5 pt-2.5 text-xs" style={{ borderTop: "1px solid #DEDBD5", color: "#817662" }}>
                      <strong style={{ color: "#22C55E" }}>₩{savings.toLocaleString()}</strong> 절약
                      {names.length > 0 && <><br />{names.join(" + ")}</>}
                    </div>
                  </>
                ) : (
                  <>
                    <div className="text-4xl font-bold font-headline tracking-tight my-1">₩{eq.p.toLocaleString()}</div>
                    <div className="text-xs" style={{ color: "#999999" }}>정가 (할인을 선택해보세요)</div>
                  </>
                )}
              </>
            ) : (
              <div className="py-4 text-sm" style={{ color: "#A1A1AA" }}>장비와 할인을 선택해보세요</div>
            )}
          </div>
        </div>

        {/* Perks */}
        <div className="px-6 mb-6 p-4 rounded-xl max-w-xl mx-auto" style={{ background: "rgba(34,197,94,0.04)", border: "1px solid rgba(34,197,94,0.15)" }}>
          <div className="text-sm font-semibold mb-2" style={{ color: "#22C55E" }}>기본 포함 (무료)</div>
          {["배터리 3~4개 (₩20,000~40,000 상당)", "SD카드 2~3장 (₩15,000~30,000 상당)", "보증금 없음 · 선결제 없음", "카카오톡 간편 예약", "홍대입구역 도보 3분"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-xs py-0.5" style={{ color: "#999999" }}>
              <span style={{ color: "#22C55E" }}>✓</span> {item}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="px-6 mb-8 max-w-xl mx-auto">
          <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer"
            className="block w-full py-3.5 bg-accent text-white font-bold text-center rounded-xl text-base hover:opacity-90 active:scale-[0.98] transition-all">
            카카오톡 '카메라빌리지'로 예약
          </a>
        </div>

      </main>
      <Footer />
    </div>
  );
}

// --- Sub Components ---

function Section({ num, numColor, title, sub, children }: { num: string; numColor: string; title: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="px-6 py-7 max-w-xl mx-auto" style={{ borderBottom: "1px solid #DEDBD5" }}>
      <div className={`text-xs tracking-[3px] font-medium mb-2 ${numColor}`}>{num}</div>
      <div className="text-2xl font-bold mb-1 font-headline">{title}</div>
      <div className="text-sm mb-5" style={{ color: "#999999" }}>{sub}</div>
      {children}
    </div>
  );
}

function StatCard({ label, value, color, note, small }: { label: string; value: string; color: string; note?: string; small?: boolean }) {
  return (
    <div className="bg-bg-primary border border-divider rounded-xl p-4 text-center">
      <div className="text-xs mb-1" style={{ color: "#999999" }}>{label}</div>
      <div className={`font-bold font-headline ${small ? "text-xl" : "text-3xl"}`} style={{ color, letterSpacing: "-1px" }}>{value}</div>
      {note && <div className="text-[11px] mt-1" style={{ color: "#A1A1AA" }}>{note}</div>}
    </div>
  );
}

function InfoBox({ items }: { items: string[] }) {
  return (
    <div className="bg-bg-primary border border-divider rounded-xl p-4">
      {items.map((item) => (
        <div key={item} className="flex items-center gap-2 text-sm py-1.5" style={{ color: "#999999" }}>
          <span style={{ color: "#22C55E" }}>✓</span> {item}
        </div>
      ))}
    </div>
  );
}

function AccentBox({ color, title, desc }: { color: string; title: string; desc: string }) {
  const styles: Record<string, { bg: string; border: string; text: string }> = {
    blue: { bg: "rgba(59,130,246,0.06)", border: "rgba(59,130,246,0.15)", text: "#3B82F6" },
    green: { bg: "rgba(34,197,94,0.06)", border: "rgba(34,197,94,0.15)", text: "#22C55E" },
    purple: { bg: "rgba(168,85,247,0.06)", border: "rgba(168,85,247,0.15)", text: "#A855F7" },
  };
  const s = styles[color] || styles.blue;
  return (
    <div className="rounded-lg p-3.5 text-sm" style={{ background: s.bg, border: `1px solid ${s.border}`, color: s.text }}>
      <div className="font-bold text-sm mb-1">{title}</div>
      <div className="text-xs" style={{ color: "#999999" }}>{desc}</div>
    </div>
  );
}

function CalcExample({ label, original, tags, result, pct }: { label: string; original: number; tags: { n: string; c: string }[]; result: number; pct: string }) {
  const tagBg: Record<string, string> = { orange: "rgba(232,89,60,0.12)", blue: "rgba(59,130,246,0.1)", green: "rgba(34,197,94,0.1)" };
  const tagText: Record<string, string> = { orange: "#E8593C", blue: "#3B82F6", green: "#22C55E" };
  return (
    <div className="bg-bg-primary border border-divider rounded-xl p-4 mb-2.5">
      <div className="text-xs mb-2" style={{ color: "#999999" }}>{label}</div>
      <div className="flex items-center gap-1.5 flex-wrap text-sm">
        <span className="line-through font-headline" style={{ color: "#A1A1AA" }}>₩{original.toLocaleString()}</span>
        {tags.map((t, i) => (
          <span key={i}>
            <span style={{ color: "#A1A1AA" }}> × </span>
            <span className="px-2 py-0.5 rounded text-xs" style={{ background: tagBg[t.c], color: tagText[t.c] }}>{t.n}</span>
          </span>
        ))}
      </div>
      <div className="text-2xl font-bold font-headline mt-2" style={{ color: "#E8593C" }}>
        ₩{result.toLocaleString()} <span className="text-sm font-bold" style={{ color: "#22C55E" }}>{pct}</span>
      </div>
    </div>
  );
}
