// VILLAGE — 세트 구성품 데이터 (세트마스터 시트 기반 자동 생성)
// 생성일: 2026-04-07

export interface Component {
  name: string;
  qty: number;
  note?: string;
}

// 홈페이지 제품 ID → 구성품 목록
export const productComponents: Record<number, Component[]> = {
  1: [
    { name: "픽시스 6K 바디(케이지)", qty: 1, note: "카메라" },
    { name: "100볼 트라이", qty: 1, note: "카메라" },
    { name: "베이비", qty: 1, note: "카메라" },
    { name: "하이햇", qty: 1 },
    { name: "TVLogic F-7HS", qty: 1, note: "카메라" },
    { name: "틸타 MB-T12", qty: 1 },
    { name: "소니 CF-B 512", qty: 2, note: "카메라" },
    { name: "V마운트 배터리", qty: 2, note: "카메라" },
    { name: "V마운트 배터리 충전기", qty: 1 },
    { name: "TVLogic 17인치", qty: 1, note: "카메라" },
    { name: "SDI 롱라인, SDI 라인, 노가암", qty: 4, note: "카메라" },
  ],
  2: [
    { name: "셀피 스틱", qty: 1, note: "카메라" },
  ],
  5: [
    { name: "마이크*2 / 마이크 송신기", qty: 1, note: "오디오" },
  ],
  7: [
    { name: "메모리*1 / 배터리*2 / 앞캡 / 렌즈 후드", qty: 1, note: "카메라" },
  ],
  8: [
    { name: "TX *1 / RX*2 / 3.5 라인*1", qty: 1, note: "오디오" },
  ],
  9: [
    { name: "소니 BURANO 바디(풀케이지)", qty: 1, note: "카메라" },
    { name: "셔틀러 비디오 20", qty: 1, note: "카메라" },
    { name: "베이비", qty: 1, note: "카메라" },
    { name: "하이햇", qty: 1 },
    { name: "7인치 모니터", qty: 1, note: "카메라" },
    { name: "소니 CF-B 1920", qty: 1, note: "카메라" },
    { name: "소니 CF-B 960", qty: 2, note: "카메라" },
    { name: "소니 CF-B 리더기", qty: 1 },
    { name: "V마운트 배터리(SWIT)", qty: 4 },
    { name: "V마운트 배터리 충전기(SWIT)", qty: 1, note: "카메라" },
    { name: "LVM-180A", qty: 1, note: "카메라" },
    { name: "노가암, SDI 연선*3, 멀티 D탭", qty: 3, note: "카메라" },
    { name: "매트박스", qty: 1, note: "카메라" },
  ],
  10: [
    { name: "롱 SDI or HDMI", qty: 1, note: "무선" },
  ],
  11: [
    { name: "롱 SDI or HDMI", qty: 1, note: "무선" },
  ],
  13: [
    { name: "소니 BURANO 바디(풀케이지)", qty: 1, note: "카메라" },
    { name: "셔틀러 비디오 20", qty: 1, note: "카메라" },
    { name: "베이비", qty: 1, note: "카메라" },
    { name: "하이햇", qty: 1, note: "카메라" },
    { name: "스몰HD INDIE7 or TVLogic F-7HS", qty: 1, note: "카메라" },
    { name: "소니 CF-B 1920", qty: 1, note: "카메라" },
    { name: "소니 CF-B 960", qty: 2, note: "카메라" },
    { name: "소니 CF-B 리더기", qty: 1, note: "카메라" },
    { name: "V마운트 배터리(SWIT)", qty: 4, note: "카메라" },
    { name: "V마운트 배터리 충전기(SWIT)", qty: 1 },
    { name: "LVM-180A", qty: 1, note: "카메라" },
    { name: "틸타 MB-T12", qty: 1, note: "카메라" },
    { name: "뉴클-M", qty: 1, note: "카메라" },
    { name: "테라덱 볼트 1000 XT (1:1)", qty: 1, note: "카메라" },
    { name: "노가암, 숏암, 숏암+클램프, SDI 연선*5, 멀티 D탭*2", qty: 1, note: "카메라" },
  ],
  14: [
    { name: "970더미*2 / SDI or HDMI*2 / 숏암*2", qty: 1, note: "무선" },
  ],
  16: [
    { name: "메모리*1 / 배터리*2", qty: 1, note: "카메라" },
  ],
  17: [
    { name: "캐논 R6 Mark 2 바디", qty: 1 },
    { name: "캐논 100-500 렌즈", qty: 1 },
    { name: "메모리*1 / 배터리*2 / 앞캡 / 뒷캡 / 후드", qty: 1, note: "카메라" },
  ],
  18: [
    { name: "D탭*1 / SDI or HDMI*1 / 안테나*2", qty: 1, note: "무선" },
  ],
  19: [
    { name: "D탭*2 / SDI or HDMI*2 / 안테나*6", qty: 1, note: "무선" },
  ],
  20: [
    { name: "아이솔레이터 / 브라켓 / 도브테일 / 나토레일", qty: 1, note: "그립" },
    { name: "석션컵 브라켓(롱숏) / 파워서플라이 플레이트", qty: 1, note: "그립" },
    { name: "2핀 LEMO / V프레이트 / 공기주입기", qty: 1, note: "그립" },
  ],
  21: [
    { name: "메모리*1 / 배터리*2 / 앞캡 / 후드", qty: 1, note: "카메라" },
  ],
  22: [
    { name: "헤드 / 리플렉터 / 디퓨져 / AC 라인", qty: 1, note: "조명" },
    { name: "A스탠드", qty: 1, note: "조명" },
  ],
  23: [
    { name: "패널 / 발라스터 / 연장라인 / AC라인 / 프레임대", qty: 1, note: "조명" },
    { name: "루버 / 실크1 / 실크2", qty: 1, note: "조명" },
    { name: "C스탠드", qty: 1, note: "조명" },
  ],
  25: [
    { name: "모터 / 컨트롤러 / 그립 / 미니로드*2 / 어댑터*1", qty: 1, note: "무선" },
    { name: "모터 배터리*2 / 컨트롤러 배터리*2", qty: 1, note: "무선" },
  ],
  26: [
    { name: "배터리그립 / 플레이트*2", qty: 1, note: "그립" },
  ],
  27: [
    { name: "헤드 / 발라스터 / 라인*2", qty: 1, note: "조명" },
    { name: "콤보스탠드", qty: 1, note: "조명" },
  ],
  28: [
    { name: "모터 / 컨트롤러 / C to D탭*1 / 로드 / 클램프 / 기어링", qty: 1, note: "무선" },
    { name: "기어링 *1", qty: 1, note: "무선" },
  ],
  30: [
    { name: "헤드 / 발라스터 / 클램프 / 라인*2", qty: 1, note: "조명" },
    { name: "소프트박스", qty: 1, note: "조명" },
    { name: "C스탠드", qty: 1, note: "조명" },
  ],
  31: [
    { name: "플로어 스탠드*4 / 아크릴그립*8 / 오링*4", qty: 1, note: "조명" },
    { name: "충전기*4", qty: 1, note: "조명" },
  ],
  32: [
    { name: "AC라인", qty: 1, note: "그립" },
  ],
  33: [
    { name: "플로어 스탠드*2 / 아크릴 그립*4 / 오링*2", qty: 1, note: "조명" },
    { name: "충전기*2", qty: 1, note: "조명" },
  ],
  34: [
    { name: "블림프 / 붐폴 / XLR / 데드캣", qty: 1, note: "오디오" },
  ],
  35: [
    { name: "배터리*12 / 충전기", qty: 1, note: "오디오" },
  ],
  36: [
    { name: "CooKe SP3(25/32/50/75/100)", qty: 1 },
  ],
  39: [
    { name: "배터리*8 / 충전기", qty: 1, note: "오디오" },
  ],
  40: [
    { name: "티비로직 D탭 / SDI or HDMI *1", qty: 1, note: "무선" },
  ],
  42: [
    { name: "티비로직 D탭 / SDI or HDMI *1", qty: 1, note: "무선" },
  ],
  44: [
    { name: "전용케이스", qty: 1, note: "렌즈" },
    { name: "USB 케이블", qty: 1, note: "렌즈" },
  ],
  51: [
    { name: "D탭*2 / SDI or HDMI*2 / 숏암*2", qty: 1, note: "무선" },
  ],
  53: [
    { name: "패널 / 발라스터 / 연장라인 / AC라인 / 프레임대", qty: 1, note: "조명" },
    { name: "루버 / 실크1 / 실크2", qty: 1, note: "조명" },
    { name: "C스탠드", qty: 1, note: "조명" },
  ],
  55: [
    { name: "C to HDMI*1 / 100볼 트라이", qty: 1, note: "그립" },
  ],
  58: [
    { name: "마이크로SD / 배터리*3  / 충전기", qty: 1, note: "카메라" },
  ],
  61: [
    { name: "캐논 오막포 바디", qty: 1, note: "카메라" },
    { name: "캐논 백사투 렌즈", qty: 1 },
    { name: "메모리*1 / 배터리*2 / 앞캡 / 뒷캡 / 후드", qty: 1 },
  ],
  64: [
    { name: "헤드 / 반도어 / 보웬스 어댑터 / D탭 / AC 라인", qty: 1, note: "조명" },
    { name: "A스탠드", qty: 1, note: "조명" },
  ],
  65: [
    { name: "AC라인", qty: 1, note: "그립" },
  ],
  66: [
    { name: "헤드 / 발라스터 / 클램프 / 라인*2", qty: 1, note: "조명" },
    { name: "소프트박스", qty: 1, note: "조명" },
    { name: "A스탠드", qty: 1, note: "조명" },
  ],
  67: [
    { name: "AC라인", qty: 1, note: "조명" },
    { name: "A스탠드", qty: 1, note: "조명" },
  ],
  68: [
    { name: "마이크로SD / 배터리*3  / 충전기", qty: 1, note: "카메라" },
  ],
  70: [
    { name: "소니 A7S3 바디(케이지)", qty: 1, note: "카메라" },
    { name: "소니 CF-A 160", qty: 2, note: "카메라" },
    { name: "소니 CF-A 리더기", qty: 2, note: "카메라" },
    { name: "NP-FZ100", qty: 3, note: "카메라" },
    { name: "NP-FZ100 충전기", qty: 1, note: "카메라" },
  ],
  71: [
    { name: "소니 FX3 바디(케이지)", qty: 1, note: "할인 품목" },
    { name: "소니 CF-A 160", qty: 2, note: "할인 품목" },
    { name: "소니 CF-A 리더기", qty: 1, note: "할인 품목" },
    { name: "NP-FZ100", qty: 3, note: "할인 품목" },
    { name: "NP-FZ100 충전기", qty: 1 },
  ],
  73: [
    { name: "소니 FX6 바디(케이지)", qty: 1, note: "카메라" },
    { name: "소니 CF-A 160", qty: 2, note: "카메라" },
    { name: "소니 CF-A 리더기", qty: 1, note: "카메라" },
    { name: "V마운트 배터리", qty: 2, note: "카메라" },
  ],
  74: [
    { name: "헤드 / 발라스터 / 라인*2", qty: 1 },
    { name: "노바용 소프트박스", qty: 1, note: "조명" },
    { name: "C스탠드", qty: 1, note: "조명" },
  ],
  75: [
    { name: "비디오 헤드 / 75볼 트라이*2 / 970배터리*2", qty: 1, note: "그립" },
  ],
  78: [
    { name: "소니 FE 14mm F1.8 GM", qty: 1, note: "기본 구성" },
    { name: "소니 FE 24mm F1.4 GM", qty: 1, note: "기본 구성" },
    { name: "소니 FE 35mm F1.4 GM", qty: 1, note: "기본 구성" },
    { name: "소니 FE 50mm F1.4 GM", qty: 1, note: "기본 구성" },
    { name: "소니 FE 85mm F1.4 GM", qty: 1, note: "기본 구성" },
    { name: "소니 FE 135mm F1.8 GM", qty: 1, note: "선택 추가 +2만원" },
  ],
  80: [
    { name: "헤드 / 발라스터 / 클램프 / 라인*2", qty: 1, note: "조명" },
    { name: "소프트박스", qty: 1, note: "조명" },
    { name: "C스탠드", qty: 1, note: "조명" },
  ],
  81: [
    { name: "헤드 / 발라스터 / 클램프 / 라인*2", qty: 1, note: "조명" },
    { name: "소프트박스", qty: 1, note: "조명" },
    { name: "C스탠드", qty: 1, note: "조명" },
  ],
  82: [
    { name: "베이비 콤보*2", qty: 1, note: "그립" },
  ],
  83: [
    { name: "970더미*1 / SDI or HDMI*1 / 숏암*1", qty: 1, note: "무선" },
  ],
  84: [
    { name: "레드 코모도 6K 바디(케이지)", qty: 1, note: "할인 품목" },
    { name: "100볼 트라이", qty: 1, note: "할인 품목" },
    { name: "베이비", qty: 1, note: "할인 품목" },
    { name: "하이햇", qty: 1, note: "할인 품목" },
    { name: "스몰HD INDIE7 or TVLogic F-7HS", qty: 1, note: "할인 품목" },
    { name: "AV PRO CF 512", qty: 2, note: "할인 품목" },
    { name: "AV PRO CF 256", qty: 1 },
    { name: "AV PRO CF 리더기", qty: 1 },
    { name: "V마운트 배터리", qty: 4, note: "할인 품목" },
    { name: "V마운트 배터리 충전기", qty: 1 },
    { name: "LVM-170A", qty: 1, note: "할인 품목" },
  ],
  85: [
    { name: "배터리그립 / 플레이트*2", qty: 1, note: "그립" },
  ],
  89: [
    { name: "무전기*2 / 이어폰*2 / 충전기*2", qty: 1, note: "오디오" },
  ],
  92: [
    { name: "16-35 / 24-70 / 70-200", qty: 1, note: "렌즈" },
  ],
  95: [
    { name: "소니 FX9 바디(케이지)", qty: 1, note: "카메라" },
    { name: "소니 XQD 240", qty: 1, note: "카메라" },
    { name: "소니 XQD 120", qty: 2, note: "카메라" },
    { name: "V마운트 배터리", qty: 2, note: "카메라" },
  ],
  100: [
    { name: "아이리스 / 고보 *3", qty: 1, note: "조명" },
  ],
  101: [
    { name: "17인치 모니터", qty: 1, note: "무선" },
    { name: "무선 송수신기", qty: 1, note: "무선" },
    { name: "뉴클-M", qty: 1, note: "무선" },
  ],
  102: [
    { name: "7인치 모니터", qty: 1, note: "무선" },
    { name: "무선 송수신기", qty: 1, note: "무선" },
    { name: "뉴클-M", qty: 1, note: "무선" },
  ],
  103: [
    { name: "충전기", qty: 1, note: "오디오" },
  ],
  105: [
    { name: "핀마이크(솜, 클립) / 3.5 라인*1 / XLR 라인*1", qty: 1, note: "오디오" },
  ],
  109: [
    { name: "본체 / 케이블*3", qty: 1, note: "조명" },
  ],
  110: [
    { name: "이어셋*5", qty: 1, note: "오디오" },
  ],
  111: [
    { name: "배터리그립 / 플레이트*2", qty: 2, note: "그립" },
  ],
  112: [
    { name: "소니 A7S3 바디(케이지)", qty: 1, note: "카메라" },
    { name: "75볼 트라이", qty: 1, note: "카메라" },
    { name: "베이비", qty: 1, note: "카메라" },
    { name: "하이햇", qty: 1, note: "카메라" },
    { name: "5인치 모니터", qty: 1, note: "카메라" },
    { name: "매트박스", qty: 1 },
    { name: "소니 CF-A 160", qty: 2, note: "카메라" },
    { name: "소니 CF-A 리더기", qty: 1, note: "카메라" },
    { name: "V마운트 배터리", qty: 2, note: "카메라" },
    { name: "V마운트 배터리 충전기", qty: 1, note: "카메라" },
    { name: "NP-FZ100", qty: 3 },
    { name: "NP-FZ100 충전기", qty: 1 },
    { name: "매직암, HDMI 라인, 970더미, C to C", qty: 1 },
  ],
  119: [
    { name: "블림프 / 붐폴 / XLR / 데드캣", qty: 1, note: "오디오" },
  ],
  120: [
    { name: "32기가 메모리, 전용 가방", qty: 1, note: "오디오" },
  ],
  121: [
    { name: "32기가 메모리", qty: 1, note: "오디오" },
  ],
  123: [
    { name: "파워박스 / 듀얼그립 or 링그립", qty: 1, note: "그립" },
  ],
  125: [
    { name: "매직캠*1 / 슈퍼클램프*1", qty: 1, note: "그립" },
  ],
  127: [
    { name: "D탭*2 / SDI or HDMI*2 / 숏암*2", qty: 1, note: "무선" },
  ],
  128: [
    { name: "D탭*2 / SDI or HDMI*2  / 숏암*2", qty: 1, note: "무선" },
  ],
  129: [
    { name: "D탭*3 / 안테나*12 / SDI*3 / 숏암*3", qty: 1, note: "무선" },
  ],
  130: [
    { name: "D탭*2 / SDI*2 / 안테나*2 / 숏암*2", qty: 1, note: "무선" },
  ],
  131: [
    { name: "970더미*2 / SDI or HDMI*2 / 숏암*2", qty: 1, note: "무선" },
  ],
  134: [
    { name: "D탭 / SDI or HDMI *1", qty: 1, note: "무선" },
  ],
  135: [
    { name: "롱 SDI or HDMI", qty: 1, note: "무선" },
  ],
  137: [
    { name: "모터 / 컨트롤러 / D탭 / 배터리*4 / 충전기", qty: 1, note: "무선" },
  ],
  138: [
    { name: "패널 / 발라스터 / 연장라인 / AC라인", qty: 1, note: "조명" },
    { name: "루버 / 실크", qty: 1, note: "조명" },
    { name: "A스탠드", qty: 1, note: "조명" },
  ],
  140: [
    { name: "조명기 / 파우치", qty: 1, note: "조명" },
  ],
  142: [
    { name: "충전 케이스 / 케이블", qty: 1, note: "조명" },
  ],
  143: [
    { name: "실리콘 디퓨전*2 / 볼헤드*2 / 충전케이스 / 케이블", qty: 1, note: "조명" },
  ],
  145: [
    { name: "그립헤드, 그립암", qty: 1, note: "조명" },
  ],
  147: [
    { name: "고보 / 실크 / 싱글 / 더블 / 우드락", qty: 1, note: "조명" },
  ],
  151: [
    { name: "18-35 / 50-100", qty: 1, note: "렌즈" },
  ],
  155: [
    { name: "67 / 72 / 77 / 82 업링", qty: 1, note: "렌즈" },
  ],
  161: [
    { name: "소니 FE 28-135mm 렌즈", qty: 1 },
    { name: "소니 A7S3 바디(케이지)", qty: 1, note: "카메라" },
    { name: "소니 CF-A 160", qty: 2, note: "카메라" },
    { name: "소니 CF-A 리더기", qty: 2, note: "카메라" },
    { name: "NP-FZ100", qty: 3, note: "카메라" },
    { name: "NP-FZ100 충전기", qty: 1, note: "카메라" },
  ],
  162: [
    { name: "소니 GM 24-70mm II 렌즈", qty: 1 },
    { name: "소니 A7S3 바디(케이지)", qty: 1, note: "카메라" },
    { name: "소니 CF-A 160", qty: 2, note: "카메라" },
    { name: "소니 CF-A 리더기", qty: 2, note: "카메라" },
    { name: "NP-FZ100", qty: 3, note: "카메라" },
    { name: "NP-FZ100 충전기", qty: 1, note: "카메라" },
  ],
  163: [
    { name: "소니 FE 28-135mm 렌즈", qty: 1 },
    { name: "소니 FX3 바디(케이지)", qty: 1, note: "할인 품목" },
    { name: "소니 CF-A 160", qty: 2, note: "할인 품목" },
    { name: "소니 CF-A 리더기", qty: 1, note: "할인 품목" },
    { name: "NP-FZ100", qty: 3, note: "할인 품목" },
    { name: "NP-FZ100 충전기", qty: 1 },
  ],
  164: [
    { name: "소니 GM 24-70mm II 렌즈", qty: 1 },
    { name: "소니 FX3 바디(케이지)", qty: 1, note: "할인 품목" },
    { name: "소니 CF-A 160", qty: 2, note: "할인 품목" },
    { name: "소니 CF-A 리더기", qty: 1, note: "할인 품목" },
    { name: "NP-FZ100", qty: 3, note: "할인 품목" },
    { name: "NP-FZ100 충전기", qty: 1 },
  ],
  165: [
    { name: "소니 FE 28-135mm 렌즈", qty: 1 },
    { name: "소니 FX6 바디(케이지)", qty: 1, note: "카메라" },
    { name: "소니 CF-A 160", qty: 2, note: "카메라" },
    { name: "소니 CF-A 리더기", qty: 1, note: "카메라" },
    { name: "V마운트 배터리", qty: 2, note: "카메라" },
  ],
  166: [
    { name: "소니 FE 28-135mm 렌즈", qty: 1 },
    { name: "소니 FX9 바디(케이지)", qty: 1, note: "카메라" },
    { name: "소니 XQD 240", qty: 1, note: "카메라" },
    { name: "소니 XQD 120", qty: 2, note: "카메라" },
    { name: "V마운트 배터리", qty: 2, note: "카메라" },
  ],
  167: [
    { name: "본체 / 마이크로SD / 여분 배터리*1", qty: 1, note: "카메라" },
  ],
  168: [
    { name: "메모리 *1 / 배터리*2 / 바디캡", qty: 1, note: "카메라" },
  ],
  169: [
    { name: "메모리 *1 / 배터리*2 / 바디캡", qty: 1, note: "카메라" },
  ],
  170: [
    { name: "소니 FX3 바디(케이지)", qty: 1, note: "카메라" },
    { name: "75볼 트라이", qty: 1, note: "카메라" },
    { name: "베이비", qty: 1, note: "카메라" },
    { name: "하이햇", qty: 1, note: "카메라" },
    { name: "5인치 모니터", qty: 1, note: "카메라" },
    { name: "매트박스", qty: 2, note: "카메라" },
    { name: "소니 CF-A 160", qty: 2, note: "카메라" },
    { name: "소니 CF-A 리더기", qty: 2, note: "카메라" },
    { name: "V마운트 배터리", qty: 4, note: "카메라" },
    { name: "V마운트 배터리 충전기", qty: 1, note: "카메라" },
    { name: "NP-FZ100", qty: 3 },
    { name: "NP-FZ100 충전기", qty: 1 },
    { name: "매직암, HDMI 라인, 970더미, C to C", qty: 1 },
  ],
  179: [
    { name: "소니 FX6 바디(케이지)", qty: 1, note: "카메라" },
    { name: "100볼 트라이", qty: 1, note: "카메라" },
    { name: "베이비", qty: 1, note: "카메라" },
    { name: "하이햇", qty: 1, note: "카메라" },
    { name: "스몰HD INDIE7 or TVLogic F-7HS", qty: 1, note: "카메라" },
    { name: "틸타 MB-T12", qty: 1, note: "카메라" },
    { name: "소니 CF-A 160", qty: 2, note: "카메라" },
    { name: "소니 CF-A 리더기", qty: 1, note: "카메라" },
    { name: "V마운트 배터리", qty: 4, note: "카메라" },
    { name: "V마운트 배터리 충전기", qty: 1 },
    { name: "LVM-170A", qty: 1, note: "카메라" },
    { name: "SDI 롱라인, SDI 라인, 노가암", qty: 1 },
  ],
  180: [
    { name: "모터 / 컨트롤러 / C to D탭*1 / 로드 / 클램프 / 기어링", qty: 1, note: "무선" },
    { name: "기어링 *1", qty: 1, note: "무선" },
  ],
  181: [
    { name: "AC라인", qty: 1, note: "무선" },
  ],
  182: [
    { name: "소니 FX9 바디(케이지)", qty: 1, note: "카메라" },
    { name: "100볼 트라이", qty: 1, note: "카메라" },
    { name: "베이비", qty: 1, note: "카메라" },
    { name: "하이햇", qty: 1 },
    { name: "스몰HD INDIE7 or TVLogic F-7HS", qty: 1, note: "카메라" },
    { name: "틸타 MB-T12", qty: 1 },
    { name: "소니 XQD 256", qty: 1, note: "카메라" },
    { name: "소니 XQD 128", qty: 2 },
    { name: "V마운트 배터리", qty: 2, note: "카메라" },
    { name: "V마운트 배터리 충전기", qty: 1 },
    { name: "LVM-170A", qty: 1, note: "카메라" },
    { name: "SDI 롱라인, SDI 라인, 노가암", qty: 4, note: "카메라" },
  ],
  183: [
    { name: "BMPCC 6K PRO 바디(케이지)", qty: 1, note: "카메라" },
    { name: "75볼 트라이", qty: 1, note: "카메라" },
    { name: "베이비", qty: 1, note: "카메라" },
    { name: "하이햇", qty: 1, note: "카메라" },
    { name: "5인치 모니터", qty: 1, note: "카메라" },
    { name: "삼성 T5 1TB SSD", qty: 2, note: "카메라" },
    { name: "V마운트 배터리", qty: 2, note: "카메라" },
    { name: "970 더미, HDMI 라인, 멀티 D탭", qty: 1, note: "카메라" },
  ],
  186: [
    { name: "BMPCC 6K 바디(케이지)", qty: 1, note: "카메라" },
    { name: "75볼 트라이", qty: 1, note: "카메라" },
    { name: "베이비", qty: 1, note: "카메라" },
    { name: "하이햇", qty: 1, note: "카메라" },
    { name: "5인치 모니터", qty: 1, note: "카메라" },
    { name: "삼성 T5 1TB SSD", qty: 2, note: "카메라" },
    { name: "V마운트 배터리", qty: 2, note: "카메라" },
    { name: "970 더미, HDMI 라인, 멀티 D탭", qty: 1, note: "카메라" },
  ],
  194: [
    { name: "소니 A7M5 바디(케이지)", qty: 1, note: "카메라" },
    { name: "소니 CF-A 160", qty: 2, note: "카메라" },
    { name: "소니 CF-A 리더기", qty: 2, note: "카메라" },
    { name: "NP-FZ100", qty: 3, note: "카메라" },
    { name: "NP-FZ100 충전기", qty: 1, note: "카메라" },
  ],
  195: [
    { name: "헤드 / 발라스터 / 클램프 / 라인*2", qty: 1, note: "조명" },
    { name: "소프트박스", qty: 1, note: "조명" },
    { name: "C스탠드", qty: 1, note: "조명" },
  ],
};
