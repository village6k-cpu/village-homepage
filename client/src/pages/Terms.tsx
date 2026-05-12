// VILLAGE — 이용약관 (/terms)
// 카메라/영상 장비 렌탈 표준 약관. 빌리지 운영 특성(보증금 없음·카카오톡 예약 등) 반영.

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EFFECTIVE_DATE = "2026년 5월 12일";

const ARTICLES: { num: string; title: string; body: React.ReactNode }[] = [
  {
    num: "제1조",
    title: "목적",
    body: (
      <p>
        본 약관은 카메라빌리지(이하 "회사")가 제공하는 카메라·영상 장비 렌탈 서비스(이하 "서비스")의 이용 조건,
        절차, 회사와 이용자의 권리·의무 및 책임 사항을 규정함을 목적으로 합니다.
      </p>
    ),
  },
  {
    num: "제2조",
    title: "정의",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li><strong className="text-text-primary">"이용자"</strong>란 본 약관에 따라 회사의 서비스를 신청하고 이용하는 자를 말합니다.</li>
        <li><strong className="text-text-primary">"장비"</strong>란 회사가 보유 또는 관리하는 카메라·렌즈·조명·음향·서포트 등 영상 촬영 관련 일체의 물품을 말합니다.</li>
        <li><strong className="text-text-primary">"대여 기간"</strong>이란 이용자가 장비를 픽업한 시점부터 반납한 시점까지의 기간을 말합니다.</li>
        <li><strong className="text-text-primary">"예약"</strong>이란 이용자가 카카오톡 채널·전화 등을 통해 특정 장비 및 기간을 신청하고 회사가 이를 확인한 행위를 말합니다.</li>
      </ul>
    ),
  },
  {
    num: "제3조",
    title: "약관의 효력 및 변경",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>본 약관은 홈페이지에 게시함으로써 효력을 발생합니다.</li>
        <li>회사는 관련 법령에 위배되지 않는 범위에서 약관을 변경할 수 있으며, 변경 시 시행일 7일 전부터 홈페이지를 통해 공지합니다.</li>
        <li>이용자가 변경된 약관에 동의하지 않는 경우, 서비스 이용을 중단하고 회사에 통지함으로써 이용 계약을 해지할 수 있습니다.</li>
      </ul>
    ),
  },
  {
    num: "제4조",
    title: "서비스의 제공",
    body: (
      <>
        <p className="mb-3">회사는 다음과 같은 서비스를 제공합니다.</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>카메라·렌즈·조명·음향·서포트 등 영상 제작 장비의 대여</li>
          <li>장비 사용에 관한 기본 안내 및 부속품(배터리·메모리 등) 제공</li>
          <li>학생·사업자·장기 대여·소개 등에 대한 할인 적용</li>
          <li>기타 회사가 정하는 부가 서비스</li>
        </ul>
      </>
    ),
  },
  {
    num: "제5조",
    title: "예약 및 이용 신청",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>이용자는 회사가 운영하는 카카오톡 채널 "카메라빌리지" 또는 전화를 통해 예약을 신청합니다.</li>
        <li>예약 시 이름, 연락처, 신분 구분(일반/학생/사업자), 대여 장비, 대여 기간을 제공해야 합니다.</li>
        <li>회사는 재고 상황 및 이용자의 자격을 확인한 후 예약 확정 여부를 통지합니다.</li>
        <li>회사는 다음의 경우 예약을 거절하거나 취소할 수 있습니다.
          <ul className="list-[circle] pl-5 mt-1.5 space-y-1">
            <li>장비 재고가 없거나 점검·수리 중인 경우</li>
            <li>이용자가 허위 정보를 제공한 경우</li>
            <li>과거 무단 반납·파손 미정산·연락 두절 등의 이력이 있는 경우</li>
            <li>기타 정상적인 서비스 제공이 어렵다고 회사가 판단하는 경우</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    num: "제6조",
    title: "회사의 의무",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>회사는 장비가 정상 작동하는 상태로 이용자에게 제공할 의무를 부담합니다.</li>
        <li>회사는 이용자의 개인정보를 「개인정보 보호법」 및 본 사이트의 <a href="/privacy" className="text-text-primary hover:text-accent border-b border-text-primary/30 hover:border-accent transition-colors">개인정보처리방침</a>에 따라 보호합니다.</li>
        <li>회사는 약관·할인·운영 시간 등 중요 사항이 변경되는 경우 사전에 공지합니다.</li>
      </ul>
    ),
  },
  {
    num: "제7조",
    title: "이용자의 의무",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>이용자는 약정한 일시와 장소에서 장비를 픽업·반납해야 합니다.</li>
        <li>이용자는 장비를 선량한 관리자의 주의 의무로 사용해야 하며, 통상적 사용 범위를 초과하는 용도(우천 시 무방수 장비 사용, 해수·모래 노출 등)는 사전에 회사와 협의해야 합니다.</li>
        <li>이용자는 장비를 제3자에게 임의로 재임대·양도할 수 없습니다.</li>
        <li>이용자는 장비의 분실·도난·파손이 발생한 경우 즉시 회사에 통지해야 합니다.</li>
        <li>이용자는 회사가 정한 운영 시간 외 픽업·반납을 요청하는 경우, 사전에 합의된 절차를 따라야 합니다.</li>
      </ul>
    ),
  },
  {
    num: "제8조",
    title: "대여료 및 결제",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>대여료는 홈페이지에 게시된 일 단위 가격을 기준으로 하며, 적용 가능한 할인(학생·사업자·장기·쿠폰·소개)은 중복 적용됩니다.</li>
        <li><strong className="text-text-primary">회사는 선결제·보증금을 받지 않습니다.</strong> 결제는 픽업 시 또는 반납 후 정산을 원칙으로 합니다.</li>
        <li>결제 수단은 현금·계좌이체·카드 중 이용자가 선택할 수 있으며, 세금계산서 발행이 필요한 경우 사전에 통지해야 합니다.</li>
        <li>할인 적용을 위한 증빙(학생증·사업자등록증 등)이 확인되지 않는 경우 해당 할인은 적용되지 않습니다.</li>
      </ul>
    ),
  },
  {
    num: "제9조",
    title: "대여 기간 및 반납",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>대여 기간은 예약 시 합의한 픽업·반납 일시를 기준으로 합니다.</li>
        <li>이용자가 반납 시간을 초과한 경우, 추가 대여료가 청구될 수 있으며 다음 예약자에게 피해가 발생한 경우 이용자가 배상 책임을 부담합니다.</li>
        <li>반납 시 회사는 장비의 외관·작동 상태를 점검하며, 이상이 확인된 경우 제11조에 따라 처리합니다.</li>
      </ul>
    ),
  },
  {
    num: "제10조",
    title: "예약 취소 및 환불",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>이용자가 픽업 전 예약을 취소하는 경우, 별도의 위약금이 청구되지 않습니다(선결제가 없으므로).</li>
        <li>이용자가 픽업 후 자발적으로 조기 반납하는 경우, 이미 사용한 일수에 대한 대여료가 청구되며 사용하지 않은 잔여 일수는 청구되지 않습니다.</li>
        <li>장비의 결함으로 정상적인 사용이 불가한 경우, 회사는 즉시 대체 장비를 제공하거나 해당 일자에 대한 대여료를 청구하지 않습니다.</li>
      </ul>
    ),
  },
  {
    num: "제11조",
    title: "장비의 파손·분실",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>대여 기간 중 장비에 파손·분실이 발생한 경우, 이용자는 그 사실을 즉시 회사에 통지해야 합니다.</li>
        <li>회사는 공식 서비스센터 또는 제조사의 수리 견적을 근거로 수리 비용을 산정합니다.</li>
        <li>수리가 불가능하거나 분실된 경우, 동일·동급 장비의 시장 가격을 기준으로 변상금을 산정합니다.</li>
        <li>고의·중과실 정도, 통상적 마모 여부 등을 고려하여 양 당사자가 협의하여 부담 비율을 정합니다.</li>
        <li>이용자는 본인의 책임 보험(개인 배상책임보험 등)을 통한 보상을 회사에 요청할 수 있습니다.</li>
      </ul>
    ),
  },
  {
    num: "제12조",
    title: "서비스 이용 제한",
    body: (
      <p>
        회사는 이용자가 본 약관을 위반하거나 다음 사유에 해당하는 경우, 서비스 이용을 제한하거나
        예약을 거절할 수 있습니다.
      </p>
    ),
  },
  {
    num: "제13조",
    title: "책임 제한",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>회사는 천재지변, 통신 장애, 기타 회사의 합리적 통제를 벗어난 사유로 인한 서비스 제공 불능에 대해 책임을 부담하지 않습니다.</li>
        <li>회사는 이용자가 장비를 사용하여 촬영·제작한 결과물의 품질, 저작권, 초상권 등에 대해 책임을 부담하지 않습니다.</li>
        <li>회사는 이용자가 본인의 부주의로 인하여 발생한 손해(데이터 손실, 일정 차질 등)에 대해 책임을 부담하지 않습니다.</li>
      </ul>
    ),
  },
  {
    num: "제14조",
    title: "분쟁 해결 및 관할",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>본 약관과 관련하여 회사와 이용자 사이에 발생한 분쟁은 상호 협의하여 해결하는 것을 원칙으로 합니다.</li>
        <li>협의가 이루어지지 않는 경우, 「민사소송법」에 따른 관할 법원을 합의 관할 법원으로 합니다.</li>
        <li>본 약관에 명시되지 않은 사항은 「민법」, 「전자상거래법」 등 관련 법령 및 일반 상관례에 따릅니다.</li>
      </ul>
    ),
  },
];

export default function Terms() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-20 md:pb-28">
          {/* Hero */}
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">Terms of Service</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">이용약관</h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            본 약관은 카메라빌리지가 제공하는 장비 렌탈 서비스의 이용 조건과 절차,
            회사와 이용자의 권리·의무를 규정합니다.
          </p>
          <div className="mt-4 pt-4 border-t border-divider text-xs text-text-muted">
            시행일: {EFFECTIVE_DATE}
          </div>

          {/* 본문 */}
          <div className="mt-10 space-y-10">
            {ARTICLES.map((a) => (
              <section key={a.num}>
                <h2 className="text-base md:text-lg font-bold text-text-primary mb-1">
                  <span className="text-text-muted font-normal mr-2 tabular-nums">{a.num}</span>
                  {a.title}
                </h2>
                <div className="text-sm md:text-[15px] text-text-secondary leading-[1.75] mt-3">
                  {a.body}
                </div>
              </section>
            ))}
          </div>

          {/* 사업자 정보 푸터 */}
          <div className="mt-14 pt-8 border-t border-divider text-xs text-text-muted space-y-1 leading-relaxed">
            <p>상호: 빌(BILL.) | 대표: 최재형 | 사업자등록번호: 690-29-01012</p>
            <p>주소: 서울특별시 마포구 동교로23길 32, 2층 201호 (동교동)</p>
            <p>연락처: 0507-1487-3114</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
