export interface FieldGuideSection {
  title: string;
  body: string;
  steps?: string[];
  tip?: string;
}

export interface FieldGuide {
  id: string;
  equipmentLabel: string;
  imageUrl: string;
  productId: number;
  title: string;
  summary: string;
  equipmentNames: string[];
  keywords: string[];
  quickSummary: string[];
  quickWarning: string;
  intro: string;
  sections: FieldGuideSection[];
  sources: { title: string; url: string }[];
}

const equipmentNames = ["SmallHD", "스몰HD", "INDIE7", "스몰HD INDIE7 (케이지 세팅)"];
const sdiSafetySource = {
  title: "ARRI · SDI 단자 손상 예방 기술 안내 (PDF)",
  url: "https://www.arri.com/resource/blob/194752/d3093e6af632150787ec95d176a39958/download-technical-information-data.pdf",
};

export const fieldGuides: FieldGuide[] = [
  {
    id: "smallhd-safe-connection",
    equipmentLabel: "SmallHD 모니터",
    imageUrl: "/images/products/134.png",
    productId: 134,
    title: "SmallHD 모니터 연결·분리 주의사항 (모든 모니터 공통)",
    summary: "케이블을 만지기 전 양쪽 전원을 꺼주세요. 전원 ON·OFF 순서와 SDI·HDMI 단자 취급 방법을 안내합니다.",
    equipmentNames,
    keywords: ["전원", "연결", "분리", "케이블", "SDI", "HDMI", "D-Tap", "배터리", "파손", "안전", "수리", "모니터"],
    quickSummary: [
      "케이블을 꽂거나 뺄 때는 카메라와 모니터 전원을 모두 끕니다.",
      "켤 때는 카메라 → 모니터, 끌 때는 모니터 → 카메라 순서입니다.",
      "SDI + 외부 전원: 전원선 먼저, SDI 나중에 연결합니다. 분리할 때는 SDI부터 뺍니다.",
    ],
    quickWarning: "연결·분리 순서를 지키지 않으면 모니터나 카메라의 단자가 손상될 수 있으며, 고가의 수리비가 발생할 수 있습니다.",
    intro: "SmallHD 모니터의 영상 단자는 충격이나 잘못된 전원 연결로 손상될 수 있습니다. 케이블을 연결하거나 분리하기 전에 아래 순서를 확인해주세요.",
    sections: [
      {
        title: "전원 켜고 끄는 순서",
        body: "영상 케이블 연결을 마친 뒤에는 카메라 바디를 먼저 켜고, 모니터를 켜주세요. 촬영을 마치면 모니터를 먼저 끄고, 카메라를 끕니다. 케이블을 바꿀 때도 같은 순서로 양쪽 전원을 끈 다음 작업해주세요.",
        tip: "이 순서는 빌리지 대여 장비 이용 수칙입니다. 외부 전원선을 사용하는 SDI 세팅은 아래의 케이블 연결·분리 순서까지 함께 지켜야 합니다.",
      },
      {
        title: "SDI와 외부 전원을 함께 사용할 때",
        body: "SDI는 둥근 BNC 커넥터를 쓰는 영상 연결 방식입니다. 카메라와 모니터가 외부 배터리나 D-Tap으로 전원을 받는 세팅에서는 전원 스위치가 OFF여도 연결·분리 중 전류가 영상 단자로 흐를 수 있습니다. ARRI도 이 위험과 케이블 작업 순서를 안내하고 있습니다.",
        steps: [
          "연결 전: 카메라·모니터 전원 OFF를 확인하고, SDI 케이블이 분리된 상태에서 준비합니다.",
          "연결할 때: 빌리지에서 안내한 전원 케이블을 먼저 연결한 뒤, SDI 케이블을 연결합니다.",
          "켜기: 카메라 바디 → 모니터 순서로 켜고 화면을 확인합니다.",
          "끄기: 녹화를 종료하고 저장이 끝나면 모니터 → 카메라 바디 순서로 끕니다.",
          "분리할 때: SDI 케이블을 먼저 분리한 뒤, 전원 케이블을 분리합니다.",
        ],
        tip: "외부 전원 케이블이나 배터리를 교체할 때도 영상 케이블을 먼저 분리하세요. 연결 상태가 헷갈리면 배터리를 바로 뽑지 말고 빌리지에 문의해주세요.",
      },
      {
        title: "케이블과 단자 취급",
        body: "선이 팽팽하면 단자가 장비 무게와 움직임을 그대로 받습니다. 카메라를 움직이거나 모니터 각도를 바꿀 여유 길이를 남기고, 케이블이 걸리지 않는지 확인해주세요.",
        steps: [
          "HDMI는 모양과 방향을 확인하고 곧게 연결합니다. 잘 들어가지 않으면 힘으로 밀지 않습니다.",
          "SDI는 잠금 링을 풀고 커넥터 몸통을 잡아 분리합니다. 선 자체를 잡아당기지 않습니다.",
          "모니터는 케이지나 마운트를 잡고 옮깁니다. 케이블을 손잡이처럼 사용하지 않습니다.",
          "피복 손상·핀 변형·단자 흔들림이 보이면 사용을 멈추고 상태를 알려주세요.",
        ],
      },
      {
        title: "화면이 나오지 않거나 끊길 때",
        body: "화면이 나오지 않거나 신호가 끊기면 먼저 촬영을 멈추고 양쪽 전원을 끄세요. 연결을 바꿔야 한다면 위 순서를 처음부터 적용합니다. 반복해서 꽂았다 빼거나 단자를 흔들어 신호를 잡으려 하지 마세요.",
        tip: "타는 냄새, 비정상적인 발열, 단자 손상이 느껴지면 재시도하지 마세요. 사용을 중단하고 빌리지에 연락해주세요.",
      },
    ],
    sources: [sdiSafetySource],
  },
  {
    id: "lighting-safe-connection",
    equipmentLabel: "조명 · 어퓨쳐 등",
    imageUrl: "/images/products/030.png",
    productId: 30,
    title: "조명기 연결·분리 주의사항",
    summary: "조명기·발라스터 케이블을 먼저 연결하고, 돼지코 전원 플러그는 마지막에 꽂아주세요.",
    equipmentNames: ["조명", "조명기", "Aputure", "어퓨쳐", "아푸처", "amaran", "아마란", "Nanlux", "난룩스", "난라이트"],
    keywords: ["전원", "돼지코", "콘센트", "플러그", "발라스터", "컨트롤 박스", "컨트롤러", "케이블", "연결", "분리", "고장", "600D", "600X", "600C", "300X", "60X", "700X", "80C", "1200B"],
    quickSummary: [
      "조명기·발라스터 등 장비 사이의 케이블을 먼저 모두 연결합니다.",
      "돼지코 전원 플러그는 마지막에 콘센트에 꽂고, 조명 전원을 켭니다.",
      "분리할 때는 전원 OFF → 돼지코 뽑기 → 장비 사이 케이블 분리 순서입니다.",
      "전기가 공급되는 상태에서는 중간 케이블을 뺐다 끼우지 마세요. 고장 원인이 될 수 있습니다.",
    ],
    quickWarning: "전기가 공급되는 상태에서 케이블을 뺐다 끼우면 조명기·발라스터가 고장 날 수 있으며, 고가의 수리비가 발생할 수 있습니다.",
    intro: "어퓨쳐 등 AC 전원을 사용하는 조명의 연결 순서입니다. 발라스터는 조명에 전원을 공급하고 밝기 등을 조절하는 컨트롤 박스입니다. 외장 발라스터가 없는 모델도 전원 플러그는 나머지 연결을 마친 뒤 꽂아주세요.",
    sections: [
      {
        title: "연결할 때: 돼지코는 마지막에",
        body: "콘센트나 멀티탭에 전원 플러그가 꽂혀 있지 않은 상태에서 시작합니다. 조명과 발라스터의 전원 스위치도 꺼주세요.",
        steps: [
          "조명기와 발라스터를 고정한 뒤, 함께 대여한 전용 케이블로 연결합니다.",
          "전원 케이블의 장비 쪽 커넥터까지 연결하고, 각 커넥터의 잠금 상태를 확인합니다.",
          "장비 사이 연결이 모두 끝나면 돼지코 전원 플러그를 콘센트에 꽂습니다.",
          "마지막으로 조명 전원을 켭니다.",
        ],
        tip: "커넥터가 잘 들어가지 않으면 방향과 핀을 확인하세요. 힘으로 밀어 넣거나 다른 장비의 케이블을 임의로 쓰지 마세요.",
      },
      {
        title: "전원이 연결된 상태에서 케이블을 바꾸지 마세요",
        body: "돼지코를 먼저 꽂아 전기가 공급되는 상태에서 조명기·발라스터 사이의 케이블을 뺐다 끼우면 단자나 내부 회로가 손상될 수 있습니다. 조명이 꺼져 보이거나 밝기가 0%여도 전원이 차단된 것은 아닙니다. 연결을 바꿀 때는 스위치를 끄고 콘센트에서 전원 플러그를 뽑은 뒤 작업하세요.",
        tip: "이 순서는 빌리지 대여 조명 이용 수칙입니다. 배터리 전원도 함께 연결되어 있다면 해당 모델의 절차에 따라 배터리 전원까지 차단한 뒤 케이블을 만져주세요.",
      },
      {
        title: "분리할 때: 돼지코부터 뽑기",
        body: "사용을 마치거나 케이블을 바꿀 때는 연결할 때와 반대 순서로 진행합니다. 모델에 별도의 냉각·종료 절차가 있으면 먼저 따라주세요.",
        steps: [
          "조명 전원을 끕니다.",
          "콘센트에서 돼지코 전원 플러그를 뽑습니다. 선을 잡아당기지 말고 플러그 몸통을 잡으세요.",
          "조명기와 발라스터 사이의 케이블, 장비 쪽 전원 케이블을 분리합니다. 잠금 장치가 있으면 먼저 풀어주세요.",
          "조명기가 충분히 식은 뒤 정리합니다.",
        ],
        tip: "타는 냄새, 스파크, 단자 손상이 있으면 다시 켜거나 케이블을 반복해서 꽂지 말고 빌리지에 연락해주세요.",
      },
    ],
    sources: [
      { title: "Aputure · LS 600d 사용 설명서 (PDF)", url: "https://docs.aputure.com/hubfs/Knowledge%20Base/Aputure/LS%20600d/All%20files/LS-600d-Product-Manual-V1.0-.pdf" },
      { title: "Aputure · LS 600d Pro 조명기·컨트롤 박스 연결", url: "https://help.aputure.com/en/ls600d-pro/getting-started" },
    ],
  },
  {
    id: "recorder-mic-setup",
    equipmentLabel: "Zoom F6 · Zoom H8 · TASCAM Portacapture X8",
    imageUrl: "/images/products/120.png",
    productId: 120,
    title: "레코더 마이크 연결과 소리 확인",
    summary: "마이크 소리가 안 들어오거나 이어폰 한쪽만 들릴 때, 팬텀 전원과 스테레오 링크를 확인하는 방법입니다.",
    equipmentNames: ["Zoom F6", "줌 F6", "Zoom H8", "줌 H8", "TASCAM Portacapture X8", "타스캠 X8", "Portacapture X8", "포타캡처 X8"],
    keywords: ["레코더", "래코더", "녹음기", "오디오", "붐마이크", "팬텀 전원", "48V", "PHANTOM", "XLR", "이어폰", "헤드폰", "한쪽", "모노", "스테레오 링크", "PAN"],
    quickSummary: [
      "팬텀 전원을 끈 상태에서 XLR 마이크를 연결하고, 꽂은 번호의 녹음 트랙을 켭니다.",
      "팬텀 전원이 필요한 마이크만 해당 입력에서 켭니다. 전압은 마이크 사양에 맞춥니다.",
      "모노 마이크 한 개가 이어폰 한쪽에서만 들리면 해당 입력의 스테레오 링크를 끄고, PAN을 가운데로 맞춥니다.",
      "촬영 전에 입력 미터를 보고, 짧게 녹음한 파일을 재생해 소리를 확인합니다.",
    ],
    quickWarning: "팬텀 전원이 켜진 상태에서 XLR을 꽂거나 빼면 큰 소음이 나거나 마이크와 레코더가 손상될 수 있습니다. 케이블을 바꾸기 전에 해당 입력의 팬텀 전원을 끄세요.",
    intro: "팬텀 전원은 레코더가 XLR 케이블을 통해 마이크에 공급하는 전원입니다. 붐에 장착했더라도 필요한 전원은 마이크 모델마다 다릅니다. 무선 수신기나 믹서를 연결할 때는 장비의 출력 레벨에 맞춰 입력을 설정하고, 팬텀 전원은 꺼둡니다.",
    sections: [
      {
        title: "마이크 소리가 안 들어올 때",
        body: "말하거나 소리를 내면서 마이크를 꽂은 번호의 입력 미터를 보세요. 미터가 안 움직이면 입력부터, 미터가 움직이는데 이어폰이 조용하면 듣는 설정부터 확인합니다.",
        steps: [
          "실제 꽂은 단자와 선택한 녹음 트랙이 맞는지 확인합니다. 외장 마이크를 연결했다면 내장 마이크 트랙과 구분하세요.",
          "마이크 입력 설정과 입력 레벨(GAIN 또는 TRIM)을 확인합니다. 팬텀이 필요한 마이크라면 연결한 입력만 켜고 마이크 사양에 맞는 전압을 사용합니다.",
          "미터가 움직이면 이어폰이 헤드폰 단자에 끝까지 들어갔는지, 볼륨과 모니터링 설정이 맞는지 확인합니다.",
        ],
      },
      {
        title: "이어폰 한쪽만 들릴 때",
        body: "스테레오 링크는 두 입력을 왼쪽과 오른쪽 한 쌍으로 묶습니다. 예를 들어 X8에서 3·4번이 묶여 있고 3번에만 모노 마이크를 꽂으면 왼쪽만 들릴 수 있습니다.",
        steps: [
          "모노 마이크 한 개를 쓰는 경우 해당 입력 쌍의 스테레오 링크를 풀고, 믹서의 좌우 배치(PAN)를 중앙에 둡니다.",
          "X/Y 마이크처럼 좌우를 따로 받는 스테레오 소스를 쓰는 경우에는 해당 스테레오 설정을 유지합니다.",
          "짧게 녹음하고 재생해 확인합니다. 이어폰에서 듣는 좌우 배치와 실제로 저장되는 트랙은 설정에 따라 다를 수 있습니다.",
        ],
      },
      {
        title: "TASCAM Portacapture X8",
        body: "외장 XLR 마이크는 옆면 3~6번에 연결합니다. 상단 1·2번은 기본 마이크가 연결되는 자리입니다.",
        steps: [
          "MANUAL 앱 → INPUT(입력) → 해당 트랙의 입력 설정 아이콘을 누릅니다.",
          "INPUT은 MIC로 설정합니다. 팬텀이 필요한 경우 해당 입력의 PHANTOM을 켜고 확인 창에서 YES를 누릅니다. 전압 메뉴는 GENERAL SETTINGS → I/O SETTINGS → PHANTOM입니다.",
          "모노 마이크가 한쪽만 들리면 같은 입력 설정에서 STEREO LINK를 끄고 MIXER에서 해당 트랙의 PAN을 중앙에 둡니다.",
        ],
        tip: "팬텀을 켰는데도 작동하지 않거나 전원이 꺼지면 배터리 잔량과 전원 공급 상태를 확인하세요. X8의 POWER SAVE MODE에서는 팬텀 전원이 꺼집니다.",
      },
      {
        title: "Zoom F6",
        body: "MENU → INPUT → PFL → 연결한 트랙 → Source에서 입력을 설정합니다. 팬텀이 필요한 마이크는 Mic (PH), 일반 마이크 입력은 Mic를 선택합니다. 팬텀 전압은 INPUT → Phantom Settings → Voltage에서 확인합니다.",
        tip: "한쪽만 들리면 INPUT → Link Settings → Input Link에서 해당 입력 쌍이 Stereo로 묶였는지 확인하세요. 모노로 쓸 때는 링크를 풀고 PFL의 Pan을 Center로 맞춥니다. 그래도 한쪽만 들리면 OUTPUT → Headphone Out → Routing을 확인하세요.",
      },
      {
        title: "Zoom H8",
        body: "FIELD 앱 → 마이크 아이콘 → 연결한 트랙 → Phantom → On/Off에서 팬텀을 설정합니다. 전압은 같은 메뉴의 Voltage(For all tracks)에서 확인합니다. 팬텀 전압을 바꾸면 다른 입력에도 적용되므로 연결한 마이크 사양을 함께 확인하세요.",
        tip: "모노 마이크 한 개를 연결했는데 한쪽만 들리면 트랙 설정에서 Stereo Link를 끄고 Fader/Pan → Pan을 Center로 맞춥니다.",
      },
    ],
    sources: [
      { title: "TASCAM · Portacapture X8 공식 설명서", url: "https://manual.tascam.jp/portacapture_x8/rm/en/manual.html" },
      { title: "Zoom · F6 공식 설명서 (PDF)", url: "https://zoomcorp.com/documents/248/E_F6.pdf" },
      { title: "Zoom · H8 공식 설명서 (PDF)", url: "https://zoomcorp.com/media/documents/E_H8_v2.pdf" },
    ],
  },
];
