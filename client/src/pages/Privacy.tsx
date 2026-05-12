// VILLAGE — 개인정보처리방침 (/privacy)
// 한국 개인정보보호법(PIPA) 표준 양식 기반. 카메라 렌탈 업종 특성 반영.

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const EFFECTIVE_DATE = "2026년 5월 12일";

const SECTIONS: { title: string; body: React.ReactNode }[] = [
  {
    title: "1. 개인정보의 수집 및 이용 목적",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>렌탈 서비스 제공: 예약 접수, 장비 대여 및 반납 확인, 요금 정산</li>
        <li>본인 확인 및 자격 확인: 학생·사업자·프리랜서 할인 적용 시 신분 확인</li>
        <li>고객 응대 및 분쟁 처리: 문의 대응, 파손·분실 등 사고 발생 시 책임 소재 확인</li>
        <li>안내·공지사항 전달: 예약 확인, 장비 변동, 픽업·반납 일정 안내</li>
      </ul>
    ),
  },
  {
    title: "2. 수집하는 개인정보 항목",
    body: (
      <>
        <p className="mb-3"><strong className="text-text-primary">필수 항목</strong></p>
        <ul className="list-disc pl-5 space-y-1.5 mb-5">
          <li>이름, 연락처(휴대전화번호 또는 카카오톡 채널 ID)</li>
          <li>대여 장비 목록, 대여 기간(시작·반납 일시)</li>
          <li>신분 구분 (일반 / 학생 / 사업자 / 프리랜서)</li>
        </ul>
        <p className="mb-3"><strong className="text-text-primary">선택 항목 (할인 또는 고가 장비 대여 시)</strong></p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>학생증 또는 재학증명서 (학생 할인 적용 시)</li>
          <li>사업자등록증 또는 프리랜서 증빙 (사업자·프리랜서 할인 적용 시)</li>
          <li>신분증(주민등록증·운전면허증 등) — 고가 시네마 장비 대여 시 본인 확인 목적에 한함</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. 개인정보의 보유 및 이용 기간",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>계약·거래 관련 기록(예약, 대여, 결제): <strong className="text-text-primary">5년</strong> (전자상거래법 제6조)</li>
        <li>소비자 불만 및 분쟁 처리 기록: <strong className="text-text-primary">3년</strong></li>
        <li>본인 확인용 신분증 사본: 확인 즉시 파기 (사본을 별도 보관하지 않음)</li>
        <li>카카오톡 채널 대화 내역: 카카오의 약관 및 정책에 따름</li>
        <li>마케팅 동의 정보: 동의 철회 시까지 또는 회원 탈퇴 시까지</li>
      </ul>
    ),
  },
  {
    title: "4. 개인정보의 제3자 제공",
    body: (
      <p>
        카메라빌리지는 원칙적으로 정보주체의 개인정보를 외부에 제공하지 않습니다.
        다만 법령에 특별한 규정이 있거나, 수사기관의 적법한 절차에 따른 요청이 있는 경우에 한하여
        제공할 수 있습니다.
      </p>
    ),
  },
  {
    title: "5. 개인정보 처리의 위탁",
    body: (
      <>
        <p className="mb-3">원활한 서비스 제공을 위해 다음과 같이 개인정보 처리를 위탁하고 있습니다.</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-divider">
                <th className="text-left py-2 pr-4 font-semibold text-text-primary">수탁업체</th>
                <th className="text-left py-2 font-semibold text-text-primary">위탁 업무</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-divider">
              <tr>
                <td className="py-2 pr-4">㈜카카오</td>
                <td className="py-2">카카오톡 채널을 통한 고객 응대 및 메시지 송수신</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">결제대행사 (해당 시)</td>
                <td className="py-2">카드·계좌이체 등 결제 처리</td>
              </tr>
              <tr>
                <td className="py-2 pr-4">Vercel Inc.</td>
                <td className="py-2">홈페이지 호스팅</td>
              </tr>
            </tbody>
          </table>
        </div>
      </>
    ),
  },
  {
    title: "6. 정보주체의 권리·의무 및 행사 방법",
    body: (
      <>
        <p className="mb-3">정보주체는 언제든지 다음의 권리를 행사할 수 있습니다.</p>
        <ul className="list-disc pl-5 space-y-1.5 mb-3">
          <li>개인정보 열람 요구</li>
          <li>오류가 있는 경우 정정 요구</li>
          <li>삭제 요구 (단, 법령에서 보유 의무가 있는 경우 제한될 수 있음)</li>
          <li>처리 정지 요구</li>
        </ul>
        <p>
          권리 행사는 카카오톡 채널 또는 전화로 요청하시면 지체 없이 처리합니다.
        </p>
      </>
    ),
  },
  {
    title: "7. 개인정보의 안전성 확보 조치",
    body: (
      <ul className="list-disc pl-5 space-y-1.5">
        <li>접근 권한 최소화: 개인정보에 접근할 수 있는 인원을 대표자로 제한</li>
        <li>물리적 사본 보관 금지: 신분증 등 본인 확인 후 사본을 별도 보관하지 않음</li>
        <li>전자 기록의 안전한 관리: 저장된 거래 기록은 접근이 통제된 환경에 보관</li>
        <li>해킹 등 대비: 호스팅 사업자(Vercel)의 표준 보안 조치 적용</li>
      </ul>
    ),
  },
  {
    title: "8. 개인정보 자동 수집 장치 (쿠키)",
    body: (
      <p>
        본 홈페이지는 사용자 경험 개선을 위해 일부 페이지에서 브라우저 로컬 저장소(localStorage)를 사용합니다.
        예: 알림 표시 여부 등. 식별 가능한 개인정보는 저장하지 않으며, 브라우저 설정에서 언제든 삭제할 수 있습니다.
      </p>
    ),
  },
  {
    title: "9. 개인정보 보호책임자",
    body: (
      <div className="space-y-1">
        <p>성명: 최재형 (대표)</p>
        <p>연락처: <a href="tel:0507-1487-3114" className="text-text-primary hover:text-accent border-b border-text-primary/30 hover:border-accent transition-colors">0507-1487-3114</a></p>
        <p>카카오톡 채널: 카메라빌리지</p>
      </div>
    ),
  },
  {
    title: "10. 권익침해 구제 방법",
    body: (
      <>
        <p className="mb-3">개인정보 침해로 인한 피해 구제, 상담 등은 아래 기관에 문의하실 수 있습니다.</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>개인정보분쟁조정위원회: 1833-6972 (<a href="https://www.kopico.go.kr" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent border-b border-text-primary/30 hover:border-accent transition-colors">www.kopico.go.kr</a>)</li>
          <li>개인정보침해신고센터: 118 (<a href="https://privacy.kisa.or.kr" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent border-b border-text-primary/30 hover:border-accent transition-colors">privacy.kisa.or.kr</a>)</li>
          <li>대검찰청 사이버수사과: 1301 (<a href="https://www.spo.go.kr" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent border-b border-text-primary/30 hover:border-accent transition-colors">www.spo.go.kr</a>)</li>
          <li>경찰청 사이버수사국: 182 (<a href="https://cyberbureau.police.go.kr" target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-accent border-b border-text-primary/30 hover:border-accent transition-colors">cyberbureau.police.go.kr</a>)</li>
        </ul>
      </>
    ),
  },
  {
    title: "11. 개인정보처리방침의 변경",
    body: (
      <p>
        본 방침은 시행일부터 적용되며, 법령 및 방침에 따른 변경 사항이 있는 경우에는
        시행 7일 전부터 홈페이지를 통해 고지합니다.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <div className="bg-bg-primary text-text-primary min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-3xl mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-20 md:pb-28">
          {/* Hero */}
          <p className="text-[11px] uppercase tracking-[0.2em] text-text-muted mb-3">Privacy Policy</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">개인정보처리방침</h1>
          <p className="text-sm text-text-secondary leading-relaxed">
            카메라빌리지(이하 "회사")는 정보주체의 개인정보를 중요하게 생각하며,
            「개인정보 보호법」 등 관련 법령을 준수합니다.
          </p>
          <div className="mt-4 pt-4 border-t border-divider text-xs text-text-muted">
            시행일: {EFFECTIVE_DATE}
          </div>

          {/* 본문 */}
          <div className="mt-10 space-y-10">
            {SECTIONS.map((s) => (
              <section key={s.title}>
                <h2 className="text-base md:text-lg font-bold text-text-primary mb-4">{s.title}</h2>
                <div className="text-sm md:text-[15px] text-text-secondary leading-[1.75]">
                  {s.body}
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
