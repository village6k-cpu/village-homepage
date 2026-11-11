export interface FieldGuideSection {
  title: string;
  body: string;
  steps?: string[];
  tip?: string;
  photoGroups?: {
    title: string;
    photos: { imageUrl: string; alt: string; caption: string }[];
  }[];
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
  video?: {
    title: string;
    credit: string;
    watchUrl: string;
    embedUrl: string;
    chapters?: { title: string; description: string; startSeconds: number; endSeconds: number }[];
  };
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
    imageUrl: "/images/products/119.png",
    productId: 119,
    title: "붐마이크 처음 쓰는 법: 팬텀 전원 켜고 녹음하기",
    summary: "빌리지 소니 ECM-673 붐마이크를 레코더에 꽂는 곳부터 +48V 팬텀 전원을 켜고 첫 녹음을 확인하는 법까지 안내합니다.",
    equipmentNames: ["붐마이크", "소니 ECM - 673(붐마이크 세팅)", "ECM-673", "Zoom F6", "줌 F6", "Zoom H8", "줌 H8", "TASCAM Portacapture X8", "타스캠 X8", "Portacapture X8", "포타캡처 X8"],
    keywords: ["레코더", "래코더", "녹음기", "오디오", "붐마이크", "팬텀 전원", "48V", "PHANTOM", "XLR", "이어폰", "헤드폰", "한쪽", "모노", "스테레오 링크", "PAN"],
    quickSummary: [
      "팬텀 전원은 레코더가 마이크 케이블을 통해 마이크에 보내는 전기입니다. 빌리지의 소니 ECM-673은 +48V 팬텀 전원을 켜야 작동합니다.",
      "팬텀을 끈 상태에서 마이크를 둥근 3핀 케이블(XLR)로 연결하세요. F6·H8은 1번, X8은 옆면 3번에 꽂으면 아래 예시를 그대로 따라 할 수 있습니다.",
      "꽂은 번호에서 +48V 팬텀을 켜고, 같은 번호를 녹음 대상으로 선택합니다. 몇 초 녹음한 뒤 파일을 재생해서 목소리가 들어갔는지 확인하세요.",
    ],
    quickWarning: "마이크 케이블을 꽂거나 빼기 전에는 팬텀 전원을 끄세요. 켠 채로 케이블을 바꾸면 큰 소음이 나거나 장비가 손상될 수 있습니다.",
    intro: "이 글은 소니 ECM-673 붐마이크 한 개를 연결하는 예시입니다. 마이크는 목소리를 받아 케이블로 보내고, 레코더는 그 소리를 SD 카드에 파일로 저장합니다. 아래 연결 순서를 먼저 따라 한 뒤 빌린 레코더의 항목으로 이동하세요.",
    sections: [
      {
        title: "1. 붐마이크와 레코더 연결하기",
        body: "ECM-673은 마이크 자체에 배터리를 넣는 방식이 아닙니다. 레코더에서 +48V를 보내면 마이크가 작동합니다. 다른 마이크를 빌렸다면 모델명을 확인하고 그 마이크가 요구하는 전원만 켜세요.",
        steps: [
          "SD 카드와 레코더 배터리를 확인합니다. 이어폰은 헤드폰 그림이 있는 단자에 꽂고 볼륨을 낮춰둡니다.",
          "아래 모델별 메뉴에서 팬텀이 꺼져 있는지 확인합니다. F6는 Source가 Mic이면 팬텀 꺼짐입니다. H8과 X8은 Phantom을 OFF로 둡니다.",
          "XLR 케이블의 한쪽 끝은 마이크 뒤에, 다른 쪽 끝은 레코더의 번호가 적힌 큰 원형 입력에 꽂습니다. F6·H8은 1번, X8은 옆면 3번을 예로 듭니다.",
        ],
      },
      {
        title: "2. 팬텀 켜기 · TASCAM Portacapture X8",
        body: "옆면 3번에 꽂았다면 화면에서도 3번에 연결된 트랙을 선택합니다. 본체 위쪽 1·2번은 기본 마이크 자리입니다.",
        steps: [
          "첫 화면에서 MANUAL을 엽니다. 아래쪽 INPUT(입력)을 누르고, 3번에 연결된 트랙의 작은 마이크 아이콘을 누릅니다.",
          "GENERAL SETTINGS → I/O SETTINGS → PHANTOM에서 전압이 +48V인지 확인합니다. 입력 설정으로 돌아와 INPUT을 MIC(마이크)로 두고 PHANTOM을 켠 뒤 YES를 누릅니다.",
          "HOME에서 마이크를 연결한 트랙을 눌러 녹음 대상으로 켭니다. 트랙과 입력 번호가 다르면 INPUT SELECT에서 3번 입력이 어느 트랙에 연결됐는지 확인하세요.",
        ],
        tip: "PHANTOM이 보이지 않거나 켜지지 않으면 INPUT이 MIC인지 확인하세요. X8의 POWER SAVE MODE에서는 팬텀을 쓸 수 없고, 배터리가 부족할 때도 공급이 제한됩니다.",
      },
      {
        title: "2. 팬텀 켜기 · Zoom F6",
        body: "옆면 1번에 꽂았다면 메뉴에서도 1번을 선택합니다.",
        steps: [
          "MENU → INPUT → Phantom Settings → Voltage에서 +48V를 확인합니다.",
          "MENU → INPUT → PFL → 1번 → Source에서 Mic (PH)를 선택합니다. PH가 붙은 항목이 팬텀 전원을 켜는 설정입니다.",
          "앞면 1번 손잡이를 왼쪽 끝의 꺼짐 위치에서 살짝 오른쪽으로 돌립니다. 1번 표시가 빨간색으로 켜지면 녹음 대상에 들어간 상태입니다.",
        ],
      },
      {
        title: "2. 팬텀 켜기 · Zoom H8",
        body: "1번 XLR 입력에 꽂았다면 화면에서 1번 트랙을 선택합니다.",
        steps: [
          "첫 화면에서 FIELD를 엽니다. 마이크 아이콘 → 1번 트랙 → Phantom을 누릅니다.",
          "Voltage(For all tracks)에서 +48V를 확인하고 On/Off를 On으로 바꿉니다. 전압 설정은 다른 입력과 공유하므로 다른 마이크도 연결했다면 사양을 함께 확인하세요.",
          "본체의 1번 트랙 버튼을 눌러 빨간불이 켜지게 합니다.",
        ],
      },
      {
        title: "3. 말해보고 첫 녹음 확인하기",
        body: "마이크 앞에서 평소 말하는 크기로 소리를 내보세요. 연결한 번호 옆의 소리 막대(레벨 미터)가 말할 때 움직여야 합니다.",
        steps: [
          "막대가 움직이면 이어폰 볼륨을 조금씩 올려 목소리가 들리는지 확인합니다. 막대가 안 움직이면 꽂은 번호, 트랙 선택, 팬텀 +48V 순으로 다시 확인하세요.",
          "REC를 누른 뒤 녹음 표시가 켜지고 시간이 흐르는지 확인합니다. 몇 초간 말하고 녹음을 멈춘 뒤 방금 녹음한 파일을 재생합니다.",
          "마이크를 뺄 때는 녹음을 멈추고 이어폰 볼륨을 낮춘 뒤 팬텀을 끕니다. F6는 Source를 Mic (PH)에서 Mic로 바꾸고, H8·X8은 Phantom을 OFF로 바꾼 다음 XLR을 뺍니다.",
        ],
      },
      {
        title: "이어폰 한쪽만 들릴 때",
        body: "마이크 한 개를 꽂았는데 입력 두 개를 좌우로 묶는 스테레오 링크가 켜져 있으면 한쪽만 들릴 수 있습니다. 단일 마이크를 쓰는 입력 쌍의 링크를 풀고, 소리를 좌우 어디에 둘지 정하는 PAN을 중앙으로 맞춰보세요.",
        steps: [
          "X8은 입력 설정의 STEREO LINK를 끄고 MIXER에서 해당 트랙의 PAN을 중앙으로 맞춥니다.",
          "F6는 INPUT → Link Settings → Input Link에서 해당 입력 쌍의 링크를 풀고, PFL → Pan을 Center로 둡니다.",
          "H8은 해당 트랙 설정에서 Stereo Link를 끄고, Fader/Pan → Pan을 Center로 맞춥니다.",
        ],
      },
    ],
    sources: [
      { title: "Sony · ECM-673 공식 사용 설명서 (PDF)", url: "https://pro.sony/support/res/manuals/3992/8542107a290e10391e8716e0d94ed6fc/39927240M.pdf" },
      { title: "TASCAM · Portacapture X8 공식 설명서", url: "https://manual.tascam.jp/portacapture_x8/rm/en/manual.html" },
      { title: "Zoom · F6 공식 설명서 (PDF)", url: "https://zoomcorp.com/documents/248/E_F6.pdf" },
      { title: "Zoom · H8 공식 설명서 (PDF)", url: "https://zoomcorp.com/media/documents/E_H8_v2.pdf" },
    ],
  },
  {
    id: "osee-mega22s4-sdi-split",
    equipmentLabel: "OSEE MEGA 22S4",
    imageUrl: "/images/products/193.png",
    productId: 193,
    title: "OSEE MEGA 22S4 분할 보기",
    summary: "2·3·4분할 모드 고르기, 각 칸에 SDI·HDMI 입력 배정하기, 한 칸이 검게 뜰 때 확인하는 방법입니다.",
    equipmentNames: ["OSEE MEGA 22S4", "MEGA22S4", "22S4", "오씨", "오시"],
    keywords: ["SDI", "SDI1", "SDI2", "SDI3", "HDMI", "2분할", "3분할", "4분할", "분할 화면", "한쪽", "검은 화면", "입력 배정", "PBP HH", "PBP VV", "TRI HHH", "TRI HHV", "TRI VVV", "QUAD1", "QUAD2", "Source Allocation"],
    quickSummary: [
      "앞면 MODE에서 2분할은 PBP, 3분할은 TRI, 4분할은 QUAD를 고릅니다.",
      "Monitor Settings → Display → Source Allocation에서 Main, Sub1, Sub2, Sub3에 실제로 연결한 입력을 넣습니다.",
      "SDI만 연결했다면 세 신호까지 볼 수 있습니다. 네 신호를 보려면 HDMI 입력도 하나 이상 연결하세요.",
    ],
    quickWarning: "단독 화면에서 영상이 나오는데 분할 화면에서 한 칸만 검다면 입력 배정부터 확인하세요. SDI 케이블을 옮겨야 할 때는 카메라와 모니터 전원을 모두 끈 뒤 작업하세요.",
    intro: "MODE는 화면을 몇 칸으로 나눌지 정하는 버튼입니다. 각 칸에서 어느 카메라를 볼지는 Source Allocation에서 따로 정합니다. 모니터 뒤에 꽂은 단자 번호를 확인한 뒤 아래 순서대로 설정하세요.",
    sections: [
      {
        title: "1. MODE에서 화면 배치 고르기",
        body: "앞면 MODE를 누르면 왼쪽 위에 목록이 뜹니다. 버튼을 다시 눌러 원하는 모드에 주황색 선택 표시를 두고 화면이 바뀔 때까지 기다립니다. 같은 분할 수에서도 목록의 아이콘을 보면 칸 배치를 고를 수 있습니다.",
        steps: [
          "2분할은 PBP HH 또는 PBP VV를 고릅니다.",
          "3분할은 TRI HHH, TRI HHV, TRI VVV 중에서 고릅니다.",
          "4분할은 QUAD1 또는 QUAD2를 고릅니다. QUAD1은 2×2 배치, QUAD2는 메인 화면 하나와 보조 화면 세 개를 보여줍니다.",
        ],
        tip: "원하는 모드가 목록에 없으면 Monitor Settings → System → Function Key → MODE Key → Layout Config에서 해당 모드를 ON으로 바꿉니다.",
      },
      {
        title: "2. 각 칸에 카메라 입력 배정하기",
        body: "화면 배치 아이콘에서 M은 Main, S1·S2·S3은 Sub1·Sub2·Sub3입니다. 각 칸에 SDI1~3 또는 HDMI1~3 중에서 실제로 케이블을 꽂은 입력을 고릅니다.",
        steps: [
          "조이스틱을 아래로 한 번 움직여 상단 메뉴를 띄웁니다. Monitor Settings가 선택된 상태에서 아래로 한 번 더 움직입니다.",
          "Display → Source Allocation을 선택하고 조이스틱을 오른쪽으로 움직여 엽니다.",
          "조이스틱 위·아래로 칸을 고르고 좌·우로 입력을 바꿉니다. 예를 들어 2분할은 Main = SDI1, Sub1 = SDI2로 맞춥니다. 세 번째 카메라가 SDI IN3에 있으면 Sub2 = SDI3, 네 번째가 HDMI IN1에 있으면 Sub3 = HDMI1을 추가합니다. 선택은 자동 저장됩니다.",
        ],
      },
      {
        title: "3. 분할 화면의 한 칸이 검게 뜰 때",
        body: "검은 칸에 지정한 입력이 실제 단자와 맞는지 확인하세요. 예를 들어 세 번째 칸이 HDMI1로 배정돼 있는데 세 번째 카메라가 SDI IN3에 있다면 Sub2를 SDI3으로 바꿉니다.",
        steps: [
          "MODE에서 검은 칸에 배정된 입력을 단독 화면으로 열어 영상이 들어오는지 확인합니다.",
          "단독 화면이 나오면 분할로 돌아와, 검은 칸과 영상이 나오는 칸의 입력을 Source Allocation에서 서로 바꿔봅니다.",
          "검은 화면이 입력을 따라 옮겨가는지, 같은 칸에 남는지 확인한 뒤 원래 배정으로 돌립니다. 증상이 계속되면 결과와 Source Allocation 화면을 빌리지에 보내주세요.",
        ],
      },
    ],
    sources: [
      { title: "OSEE 공식 설명서 4.2.5.1 · 분할 모드 목록", url: "https://cdn.shopify.com/s/files/1/0601/0041/1549/files/45.010525.003.1_Mega_22S4_LCD_Monitor-English_Manual-V010000-2025.09.29.pdf?v=1762243135#page=26" },
      { title: "OSEE 공식 설명서 4.2.5.3 · 분할 화면 입력 배정 그림", url: "https://cdn.shopify.com/s/files/1/0601/0041/1549/files/45.010525.003.1_Mega_22S4_LCD_Monitor-English_Manual-V010000-2025.09.29.pdf?v=1762243135#page=32" },
    ],
  },
  {
    id: "hollyland-wireless-pairing",
    equipmentLabel: "홀리랜드 · Pyro / Mars",
    imageUrl: "/images/products/019.png",
    productId: 19,
    title: "홀리랜드 무선 송수신기 페어링 방법",
    summary: "Pyro는 같은 그룹으로 맞추고, Mars는 양쪽에서 PAIR를 누릅니다.",
    equipmentNames: ["홀리랜드", "Hollyland", "Pyro S", "Pyro 7", "파이로 S", "파이로 7", "Mars 4K", "Mars 400S", "Mars 400S Pro", "Mars M1", "마스 4K", "마스 400S", "마스 M1"],
    keywords: ["페어링", "무선송수신기", "무선 영상", "송신기", "수신기", "TX", "RX", "Group Pairing", "PAIR"],
    quickSummary: [
      "Pyro S·Pyro 7은 Group Pairing에서 송신기와 수신기를 같은 그룹으로 맞추면 자동 연결됩니다.",
      "Mars 4K·400S·400S Pro는 양쪽 메뉴에서 PAIR를 거의 동시에 누릅니다.",
      "Pyro 7이나 Mars M1을 모니터로 받을 때는 Receiver 모드로 맞춥니다.",
    ],
    quickWarning: "SDI 케이블을 꽂거나 뺄 때는 연결된 양쪽 장비의 전원을 끄세요. 단자가 손상되면 수리비가 크게 나올 수 있습니다.",
    intro: "TX는 카메라 영상을 보내는 송신기, RX는 영상을 받는 수신기입니다. 본체에 적힌 모델명을 보고 아래에서 해당하는 방법을 따라 하세요.",
    sections: [
      {
        title: "Pyro S·Pyro 7",
        body: "Pyro S는 메뉴 버튼을 3초간 누릅니다. Pyro 7은 화면 왼쪽 위의 무선 표시를 눌러 Wireless 메뉴를 열고, 영상을 받는 쪽이라면 Mode를 Receiver로 바꿉니다.",
        steps: [
          "양쪽의 Group Pairing에서 같은 글자를 고릅니다. 예를 들어 송신기와 수신기 모두 A로 맞춥니다.",
          "자동으로 연결되면 수신 화면에 카메라 영상이 나오는지 확인합니다. 여러 세트를 쓰면 세트마다 그룹을 다르게 지정하세요.",
        ],
      },
      {
        title: "Mars 4K·400S·400S Pro",
        body: "송신기와 수신기를 1m 이상 떨어뜨려 두고, 양쪽의 가운데 메뉴 버튼을 길게 누릅니다.",
        steps: [
          "양쪽에서 System Setting을 열고 PAIR 또는 Pairing을 거의 동시에 선택합니다.",
          "Mars M1을 Mars 4K나 400S Pro와 쓴다면 M1의 Settings → Function Switch에서 역할을 정합니다. M1에서 영상을 볼 때는 Receiver를 고르고, 두 기기에서 Pair를 거의 동시에 누릅니다.",
        ],
      },
      {
        title: "연결됐는데 화면이 안 나올 때",
        body: "카메라 출력은 송신기 IN에, 외장 모니터를 쓰면 수신기 OUT은 모니터 IN에 연결합니다. 모니터에서 실제로 꽂은 HDMI 또는 SDI 입력을 골랐는지 확인하세요.",
      },
    ],
    sources: [
      { title: "Hollyland · Pyro S 설명서", url: "https://www.hollyland.com/download/manual/pyro-s" },
      { title: "Hollyland · Pyro 7 설명서 (PDF)", url: "https://download.hollyland.com/User_manual/Pyro%207/Pyro%207%20Quick%20Guide%20V1.0.0.pdf" },
      { title: "Hollyland · Mars 4K 페어링", url: "https://www.hollyland.com/support/faq/mars-4k/connection-2" },
      { title: "Hollyland · Mars 400S Pro 페어링", url: "https://www.hollyland.com/support/faq/mars-400spro/connection-3" },
      { title: "Hollyland · Mars 400S 설명서 (PDF)", url: "https://cvp.com/pdf/hollyland-mars-400s-user-note.pdf" },
      { title: "Hollyland · Mars M1 페어링", url: "https://www.hollyland.com/faq/which-devices-can-connect-to-mars-m1-and-how-to-pair-them" },
      sdiSafetySource,
    ],
  },
  {
    id: "dji-sdr-pairing",
    equipmentLabel: "DJI SDR Transmission",
    imageUrl: "/images/products/014.png",
    productId: 14,
    title: "DJI SDR 페어링 방법",
    summary: "수신기에서 CTRL.A를 고른 뒤 송신기의 링크 버튼을 길게 누릅니다.",
    equipmentNames: ["DJI SDR Transmission", "DJI SDR", "디제이아이 SDR"],
    keywords: ["페어링", "무선송수신기", "무선 영상", "송신기", "수신기", "TX", "RX", "Connection Mode", "CTRL.A", "CTRL.B"],
    quickSummary: [
      "수신기 화면을 위에서 아래로 쓸어내리고 Connection Mode → CTRL.A를 누릅니다.",
      "송신기 본체의 링크 버튼을 길게 눌러 연결합니다.",
      "수신기를 한 대 더 연결할 때는 두 번째 수신기에 CTRL.B를 지정합니다.",
    ],
    quickWarning: "SDI 케이블을 꽂거나 뺄 때는 연결된 양쪽 장비의 전원을 끄세요. 단자가 손상되면 수리비가 크게 나올 수 있습니다.",
    intro: "카메라에 연결하는 쪽이 송신기(TX), 모니터에 연결하는 쪽이 수신기(RX)입니다. 수신기 한 대를 연결할 때는 CTRL.A부터 설정하세요.",
    sections: [
      {
        title: "수신기에서 먼저 시작하기",
        body: "송신기와 수신기 전원을 켭니다.",
        steps: [
          "수신기 홈 화면을 위에서 아래로 쓸어내립니다. Connection Mode에서 CTRL.A를 눌러 연결 대기 상태로 들어갑니다.",
          "송신기 본체의 링크 버튼을 길게 누릅니다. 연결이 끝나면 수신기에 신호가 잡히고 모니터에 카메라 영상이 나오는지 확인합니다.",
          "수신기를 추가할 때는 두 번째 수신기에서 CTRL.B를 고르고 송신기 링크 버튼을 다시 길게 누릅니다.",
        ],
      },
      {
        title: "연결됐는데 화면이 안 나올 때",
        body: "카메라 출력이 송신기 IN에, 수신기 OUT이 모니터 IN에 꽂혀 있는지 확인합니다. 모니터에서 실제로 꽂은 HDMI 또는 SDI 입력을 고르세요.",
      },
    ],
    sources: [
      { title: "DJI · SDR Transmission 설명서 5.1 Control Mode (PDF)", url: "https://dl.djicdn.com/downloads/DJI_SDR_Transmission/20240913/UM/DJI_SDR_Transmission_User_Guide_v1.0_EN.pdf" },
      sdiSafetySource,
    ],
  },
  {
    id: "teradek-bolt-pairing",
    equipmentLabel: "테라덱 · Bolt 1000 XT / 500 LT",
    imageUrl: "/images/products/129.png",
    productId: 129,
    title: "테라덱 Bolt 페어링 방법",
    summary: "수신기에서 Pairing을 열고 송신기의 작은 Reset 버튼을 1초 누릅니다.",
    equipmentNames: ["테라덱", "Teradek", "Bolt 1000 XT", "Bolt 1000XT", "Bolt 500 LT", "Bolt 500LT", "볼트 1000XT", "볼트 500LT"],
    keywords: ["페어링", "무선송수신기", "무선 영상", "송신기", "수신기", "TX", "RX", "Pairing", "Reset"],
    quickSummary: [
      "수신기 조이스틱으로 Pairing 메뉴를 엽니다.",
      "송신기의 작은 Reset 버튼을 클립으로 1초 눌렀다가 뗍니다.",
      "수신 화면에 OK가 뜨면 누르고, 모니터에서 카메라 영상을 확인합니다.",
    ],
    quickWarning: "SDI 케이블을 꽂거나 뺄 때는 연결된 양쪽 장비의 전원을 끄세요. 단자가 손상되면 수리비가 크게 나올 수 있습니다.",
    intro: "빌리지에서 대여하는 Bolt 1000 XT와 Bolt 500 LT 기준입니다. 세트에 들어 있는 송신기(TX)와 수신기(RX)를 사용하세요.",
    sections: [
      {
        title: "수신기 메뉴 → 송신기 버튼",
        body: "연결할 한 세트만 켭니다. 1000 XT는 수신기 본체 화면에서, 500 LT는 수신기에 연결한 모니터에서 메뉴를 봅니다.",
        photoGroups: [
          {
            title: "Bolt 1000 XT",
            photos: [
              {
                imageUrl: "/images/guides/teradek/bolt-1000-xt-rx.jpg",
                alt: "Bolt 1000 XT 수신기 옆면. OLED 화면 위 조이스틱에 M이 표시돼 있습니다.",
                caption: "RX 조이스틱 · M",
              },
              {
                imageUrl: "/images/guides/teradek/bolt-1000-xt-tx.jpg",
                alt: "Bolt 1000 XT 송신기 옆면. 미니 USB 단자 바로 아래 작은 Reset 구멍에 L이 표시돼 있습니다.",
                caption: "TX Reset 버튼 · L",
              },
            ],
          },
          {
            title: "Bolt 500 LT",
            photos: [
              {
                imageUrl: "/images/guides/teradek/bolt-500-lt-rx.jpg",
                alt: "Bolt 500 LT 수신기 옆면. 미니 USB 단자와 Reset 구멍 위의 동그란 조이스틱에 L이 표시돼 있습니다.",
                caption: "RX 조이스틱 · L",
              },
              {
                imageUrl: "/images/guides/teradek/bolt-500-lt-tx.jpg",
                alt: "Bolt 500 LT 송신기 옆면. 미니 USB 단자 바로 아래 작은 Reset 구멍에 K가 표시돼 있습니다.",
                caption: "TX Reset 버튼 · K",
              },
            ],
          },
        ],
        steps: [
          "수신기 조이스틱으로 Pairing을 선택합니다. 500 LT는 조이스틱을 눌러 모니터에 상태 화면을 띄우고, 오른쪽으로 밀어 메뉴를 엽니다.",
          "송신기 옆면의 미니 USB 단자 바로 아래에 있는 작은 Reset 버튼을 클립으로 1초만 눌렀다가 뗍니다. 송신기 LED가 깜빡이면 페어링이 시작된 상태입니다.",
          "수신 화면에 송신기가 잡히고 OK가 뜨면 조이스틱으로 선택합니다. 모니터에 카메라 영상이 나오는지 확인하세요.",
        ],
      },
      {
        title: "송신기를 못 찾을 때",
        body: "송신기와 수신기 전원을 껐다 켜고, 서로 1m 이상 떨어뜨린 뒤 다시 시도하세요. 수신기를 추가할 때도 한 대씩 페어링합니다.",
      },
    ],
    sources: [
      { title: "Teradek · Bolt 1000 XT 버튼 사진과 설명서 (PDF)", url: "https://d1xl95ab8ijfds.cloudfront.net/Public/Bolt3/Docs/xt_lt/Teradek_Bolt_1000-3000_XT_Quick_Start_Guide_v1.5_0419_web.pdf#page=2" },
      { title: "Teradek · Bolt 500 LT 버튼 사진과 설명서 (PDF)", url: "https://d1xl95ab8ijfds.cloudfront.net/Public/Bolt3/Docs/xt_lt/Teradek_Bolt_500_LT_Quick_Start_Guide_v1.5_0419_web.pdf#page=2" },
      { title: "SmallHD · Teradek 연결 문제 확인", url: "https://guide.smallhd.com/a/1753005-wireless-pairing" },
      sdiSafetySource,
    ],
  },
  {
    id: "solidcom-se-pairing",
    equipmentLabel: "홀리랜드 · Solidcom SE",
    imageUrl: "/images/products/190.png",
    productId: 190,
    title: "솔리드컴 SE 페어링 방법",
    summary: "마스터와 연결할 헤드셋에서 볼륨 + 버튼을 동시에 5초 누릅니다.",
    equipmentNames: ["홀리랜드 솔리드컴 SE", "Hollyland Solidcom SE", "Solidcom SE Global Version", "솔리드컴 SE 4S", "솔리드컴 SE 5S", "솔리드컴 SE 8S"],
    keywords: ["인터컴", "헤드셋", "페어링", "마스터", "리모트", "볼륨 +", "Volume +"],
    quickSummary: [
      "같은 세트라면 먼저 전원만 켜서 서로 말이 들리는지 확인합니다.",
      "새 헤드셋을 연결할 때는 마스터와 새 헤드셋의 볼륨 + 버튼을 동시에 5초 누릅니다.",
      "마이크 LED가 빠르게 깜빡이면 손을 뗍니다. LED가 깜빡이지 않고 계속 켜져 있으면 연결된 상태입니다.",
    ],
    quickWarning: "SE는 1.9 GHz와 2.4 GHz 버전이 있습니다. 헤드셋을 추가할 때는 같은 버전인지 먼저 확인하세요.",
    intro: "마스터는 다른 헤드셋이 연결되는 기준입니다. 제조사 기본 색상은 마스터가 갈색 헤드밴드, 리모트가 검은색 헤드밴드입니다.",
    sections: [
      {
        title: "양쪽에서 볼륨 + 5초",
        body: "마스터와 새로 연결할 헤드셋을 가까이 두고 켭니다. 이미 연결된 헤드셋도 전원을 켜 둡니다.",
        steps: [
          "마스터와 새 헤드셋의 볼륨 + 버튼을 동시에 5초간 누릅니다.",
          "마이크 쪽 LED가 빠르게 깜빡이면 버튼에서 손을 뗍니다.",
          "LED가 계속 켜진 상태가 되면 마이크를 내리고, 양쪽에서 한 번씩 말해 확인합니다.",
        ],
        tip: "불이 계속 빨갛게 켜져 있으면 음소거 상태입니다. 마이크를 내리고 TALK/MUTE 버튼으로 말하기 상태를 확인하세요.",
      },
    ],
    sources: [
      { title: "Hollyland · Solidcom SE 설명서 (PDF)", url: "https://download.hollyland.com/User_manual/Solidcom%20SE/Solidcom%20SE%20Quick%20Guide%20V1.0.pdf" },
      { title: "Hollyland · Solidcom SE 2.4 GHz 설명서 (PDF)", url: "https://download.hollyland.com/User_manual/Solidcom%20SE%20Global%20Version/Solidcom%20SE%202.4G%20-%20Quick%20Guide%20V1.0%20%28English%29.pdf" },
    ],
  },
  {
    id: "solidcom-c1-pro-pairing",
    equipmentLabel: "홀리랜드 · Solidcom C1 Pro",
    imageUrl: "/images/products/035.png",
    productId: 35,
    title: "솔리드컴 C1 Pro 페어링 방법",
    summary: "허브 없는 4S·6S 세트는 마스터와 연결할 헤드셋에서 A 버튼을 동시에 5초 누릅니다.",
    equipmentNames: ["홀리랜드 솔리드컴 C1 프로", "Hollyland Solidcom C1 Pro", "솔리드컴 C1 Pro 4S", "솔리드컴 C1 Pro 6S"],
    keywords: ["인터컴", "헤드셋", "페어링", "마스터", "리모트", "A 버튼", "허브", "USB Pairing"],
    quickSummary: [
      "빨간색 표시가 마스터, 파란색 표시가 리모트입니다.",
      "마스터와 연결할 리모트의 A 버튼을 동시에 5초 누릅니다.",
      "마이크 LED가 깜빡임을 멈추면 양쪽에서 한 번씩 말해 확인합니다.",
    ],
    quickWarning: "허브에 헤드셋을 붙일 때는 USB Pairing을 사용합니다. 허브 없는 세트에서만 아래 A 버튼 방식으로 연결하세요.",
    intro: "같은 세트로 받은 헤드셋은 전원을 켜면 보통 바로 연결됩니다. 새 헤드셋을 추가하거나 연결이 풀렸을 때 아래 방법을 쓰세요.",
    sections: [
      {
        title: "4S·6S 세트에서 헤드셋 연결",
        body: "마스터와 새로 연결할 리모트를 가까이 두고 켭니다. 이미 쓰고 있던 헤드셋도 전원을 켜 둡니다.",
        steps: [
          "마스터와 리모트의 A 버튼을 동시에 5초간 누릅니다.",
          "양쪽 마이크 끝 LED가 깜빡임을 멈추고 계속 켜지면 연결된 상태입니다.",
          "마이크를 내리고 TALK 상태에서 한 명씩 말해 양쪽에서 들리는지 확인합니다.",
        ],
      },
      {
        title: "별도 허브를 쓰는 경우",
        body: "허브와 리모트 헤드셋을 USB 케이블로 연결합니다. 허브 화면에 USB Pairing이 뜨면 비어 있는 번호를 고르고 가운데 확인 버튼을 누릅니다. 기존 헤드셋도 켜 두면 번호 중복을 피할 수 있습니다.",
      },
    ],
    sources: [
      { title: "Hollyland · Solidcom C1 Pro 허브 없는 모델 설명서 (PDF)", url: "https://download.hollyland.com/User_manual/SOLIDCOM%20C1%20PRO/Hollyland%20Solidcom%20C1%20Pro%EF%BC%88No%20Hub%EF%BC%89User%20Manual/Hollyland%20Solidcom%20C1%20Pro%EF%BC%88No%20Hub%EF%BC%89User%20Manual%20%28English%29%20V4.0.pdf" },
      { title: "Hollyland · Solidcom C1 Pro 허브 설명서 (PDF)", url: "https://download.hollyland.com/User_manual/SOLIDCOM%20C1%20PRO/Solidcom%20C1%20Pro%20-%20Hub8S%20User%20Manual/Hollyland%20Solidcom%20C1%20Pro%20-%20Hub8S%20User%20Manual%EF%BC%88English%EF%BC%89%20V1.0.0.pdf" },
    ],
  },
  {
    id: "synco-xtalk-xmax-pairing",
    equipmentLabel: "SYNCO · Xtalk XMax",
    imageUrl: "/images/products/188.png",
    productId: 188,
    title: "SYNCO Xtalk XMax 페어링 방법",
    summary: "9대 세트는 Master 1대, Level 1 네 대, Level 2 네 대로 나눠 두 번에 걸쳐 연결합니다.",
    equipmentNames: ["SYNCO Xtalk XMax", "Xtalk XMax 9구 세트", "XMax9", "싱코 엑스톡 엑스맥스", "신코 엑스톡 엑스맥스"],
    keywords: ["인터컴", "헤드셋", "페어링", "A 버튼", "마스터", "Master", "Level 1", "Level 2", "EasyGo", "9대"],
    quickSummary: [
      "기존 9대 세트는 Master → Level 1 → Level 2 순으로 켜고 먼저 통화해 봅니다.",
      "다시 묶을 때는 Master 1대, Level 1 네 대, Level 2 네 대로 맞춥니다.",
      "A 버튼을 누르다 첫 번째 삑에서 떼면 페어링입니다. Master와 Level 1부터 묶고, 그다음 Level 1과 Level 2를 묶습니다.",
    ],
    quickWarning: "역할을 바꿀 때와 페어링할 때 손을 떼는 삑 소리 횟수가 다릅니다. 이미 연결된 상태에서 A 버튼을 첫 삑까지 누르면 연결이 풀릴 수 있습니다.",
    intro: "빌리지 9대 세트를 한 그룹으로 묶는 방법입니다. Level 1은 Master에 직접 연결되고, Level 2는 Level 1을 거쳐 연결됩니다.",
    sections: [
      {
        title: "1. 헤드셋 9대의 역할 확인",
        body: "볼륨 +를 길게 누르고 첫 삑에서 떼면 현재 역할을 음성으로 알려줍니다. 바꿀 헤드셋에서만 A를 길게 누르고 아래 횟수에서 손을 떼세요.",
        steps: [
          "두 번째 삑에서 떼면 Master입니다. 역할 표시등은 빨간색입니다.",
          "세 번째 삑에서 떼면 Level 1입니다. 역할 표시등은 파란색입니다.",
          "네 번째 삑에서 떼면 Level 2입니다. 역할 표시등은 초록색입니다.",
        ],
      },
      {
        title: "2. 첫 삑에서 떼고 두 번에 나눠 연결",
        body: "각 단계에서 해당하는 기기의 A 버튼을 1분 안에 차례로 길게 누르고, 첫 삑이 들릴 때마다 손을 뗍니다. 연결을 시작하면 Connecting and Pairing 음성이 나옵니다.",
        steps: [
          "Master와 Level 1 네 대에서 실행합니다. 연결이 끝나면 이 다섯 대를 끄고 Master → Level 1 순서로 다시 켭니다.",
          "이번에는 Level 1 네 대와 Level 2 네 대에서 같은 방법으로 실행합니다.",
          "연결이 끝나면 아홉 대를 끄고 Master → Level 1 → Level 2 순으로 켭니다. 각 헤드셋에서 한 번씩 말해 확인하세요.",
        ],
        tip: "Level 2 설정이 없거나 일부만 연결되면 빌리지에 문의하세요. 9대를 한 그룹으로 쓰려면 13인용 펌웨어 구성이 필요합니다.",
      },
    ],
    sources: [
      { title: "SYNCO · Xtalk XMax 설명서 (PDF)", url: "https://cdn.shopify.com/s/files/1/0474/9895/2861/files/SYNCO_Xtalk_XMax_User_Guide_English.pdf" },
      { title: "SYNCO · Xtalk 버튼과 역할 확인", url: "https://www.syncoaudio.com/pages/synco-xtalk-buttons" },
      { title: "SYNCO · Xtalk 인원별 펌웨어 안내", url: "https://www.syncoaudio.com/pages/synco-xtalk-user-guide" },
    ],
  },
  {
    id: "tilta-cine-slider-setup",
    equipmentLabel: "틸타 · TSS-01",
    imageUrl: "/images/products/082.png",
    productId: 82,
    title: "틸타 시네 슬라이더 사용법",
    summary: "레일 수평 맞추기, 봉과 어댑터 연결하기, 고정 노브 조이는 법을 확인하세요.",
    equipmentNames: ["틸타 시네 슬라이더", "Tilta Cine Slider", "Tilta Slider System", "TSS-01", "TSS01"],
    keywords: ["조립", "사용법", "노브", "조임쇠", "봉", "레일", "어댑터", "연장", "유격", "수평", "나사산"],
    quickSummary: [
      "카메라를 올리기 전에 지지대 높이를 맞추고, 이어 붙일 두 봉을 같은 높이에서 일직선으로 놓습니다.",
      "봉–어댑터–봉은 손으로 돌렸을 때 부드럽게 들어가야 합니다. 끝까지 맞물렸으면 손으로 흔들어 유격이 없는지 확인합니다.",
      "연결부가 흔들리면 풀어서 봉의 양 끝을 바꿔 끼워보세요. 그래도 유격이 있으면 사용을 멈춥니다.",
      "봉을 양쪽 끝에 끼운 뒤, 끝부분마다 있는 고정 노브 두 개를 손으로 조금씩 번갈아 조입니다. 한 노브가 멈추면 옆 노브를 돌리고 다시 돌아옵니다.",
    ],
    quickWarning: "수평이 틀어진 상태에서 봉이나 노브를 힘으로 조이면 나사산이나 연결부가 손상돼 수리비가 나올 수 있습니다. 봉을 어댑터에 끼우다가 걸리면 바로 풀고 수평부터 다시 맞추세요.",
    video: {
      title: "Tilta TSS-01 조립 참고 영상",
      credit: "KINEMOTOR | KINOARENDA",
      watchUrl: "https://www.youtube.com/watch?v=vWHh-YcFFjQ",
      embedUrl: "https://www.youtube-nocookie.com/embed/vWHh-YcFFjQ?rel=0",
    },
    intro: "빌리지에서 대여하는 TSS-01 기준입니다. 봉은 캐리지가 움직이는 레일이고, 어댑터는 봉 두 개를 이어주는 연결 부품입니다.",
    sections: [
      {
        title: "봉–어댑터–봉 연결하기",
        body: "봉이 한쪽으로 처진 채 맞물리지 않도록 양쪽을 받치고, 지지대 높이를 맞춥니다. 봉 두 개를 같은 높이에서 일직선으로 놓은 뒤 어댑터를 손으로 돌려 끼웁니다.",
        steps: [
          "정상적으로 물리면 처음부터 부드럽게 돌아갑니다. 처음부터 뻑뻑하거나 중간에 걸리면 풀어서 봉의 높이와 각도를 다시 맞춥니다.",
          "봉이 끝까지 맞물리면 연결부 양쪽을 잡고 살짝 흔들어보세요. 덜컥거리거나 틈이 벌어지면 다시 조립합니다.",
          "유격이 남으면 해당 봉을 앞뒤로 뒤집어 반대쪽 끝을 어댑터에 연결해 보세요. 다시 조여도 흔들리면 카메라를 올리지 말고 빌리지에 연락해 주세요.",
        ],
      },
      {
        title: "고정 노브 두 개 번갈아 조이기",
        body: "두 봉을 슬라이더 양쪽 끝의 지지대에 끼웁니다. 지지대 하나에 고정 노브가 두 개씩 있습니다.",
        steps: [
          "한쪽 지지대에서 노브 하나를 손으로 돌립니다. 더 이상 돌아가지 않으면 옆 노브를 돌립니다.",
          "옆 노브를 돌리고 나면 처음 노브가 다시 돌아갑니다. 두 노브를 조금씩 번갈아 돌려 봉을 고정합니다.",
          "반대쪽 지지대도 같은 방식으로 조입니다. 양쪽에서 봉을 가볍게 흔들어 밀리거나 덜컥거리는 곳이 없는지 확인합니다.",
        ],
        tip: "봉이 아직 흔들리는데 두 노브 모두 돌아가지 않으면, 힘을 주지 말고 노브를 풀어 봉을 제자리에 다시 끼웁니다.",
      },
      {
        title: "카메라를 올리기 전 확인",
        body: "레일 두 줄이 평행하고 수평인지, 양쪽 끝의 스토퍼와 바퀴 안전 부품이 제자리에 있는지 확인합니다. 빈 캐리지를 천천히 끝에서 끝까지 밀어보고, 이음새에서 걸리거나 덜컥거리면 연결부부터 다시 확인하세요.",
      },
    ],
    sources: [
      { title: "Tilta Japan · TSS-01 구성품", url: "https://tilta.shop/items/62eafdc31d6b10616066a5b3" },
    ],
  },
  {
    id: "hy-revoring-nd-setup",
    equipmentLabel: "H&Y · REVORING ND + CPL",
    imageUrl: "/images/products/160.png",
    productId: 160,
    title: "H&Y 레보링 ND 사용법",
    summary: "장착 링 줄이기, 렌즈에 고정하기, ND 밝기 조절을 실물 영상으로 확인하세요.",
    equipmentNames: ["H&Y REVORING", "H&Y 레보링", "에이치앤와이", "레보링 ND", "3-1000 ND + CPL 필터", "H&Y 리보링", "리보링 ND"],
    keywords: ["사용법", "영상", "장착", "분리", "가변 ND", "필터", "CPL", "편광", "링", "핀", "밝기", "반사", "X자"],
    quickSummary: [
      "레보링은 렌즈 앞에 끼우는 지름 조절식 링입니다. 먼저 렌즈의 필터 지름(Ø)이 레보링에 적힌 범위 안에 드는지 확인하세요.",
      "필터 앞쪽 테두리를 잡고 렌즈 쪽 장착 링을 화살표 방향으로 돌립니다. 안쪽 날개가 오므라든 상태를 유지하며 렌즈 앞에 끼웁니다.",
      "장착 링을 천천히 놓으면 날개가 벌어져 렌즈 나사산에 걸립니다. 필터를 받친 채 가볍게 돌려 고정 상태를 확인합니다.",
      "장착이 끝나면 앞쪽 작은 핀으로 ND 밝기를 조절합니다. 뺄 때는 필터를 받치고 장착 링을 다시 돌려 날개를 오므립니다.",
    ],
    quickWarning: "렌즈 쪽 장착 링을 돌리면 고정이 풀릴 수 있습니다. 장착·분리할 때는 필터를 손으로 받치세요. 끝없이 힘을 줘 조이면 필터나 렌즈 나사산이 손상될 수 있습니다.",
    video: {
      title: "실물 동작 보기",
      credit: "H&Y Filters 공식 영상",
      watchUrl: "https://www.youtube.com/watch?v=BIwpZTwVHvg&t=4s",
      embedUrl: "https://www.youtube-nocookie.com/embed/BIwpZTwVHvg?rel=0&start=4&end=47",
      chapters: [
        {
          title: "렌즈에 끼우기",
          description: "장착 링을 돌려 날개를 오므린 채 끼우고, 천천히 놓아 고정합니다.",
          startSeconds: 4,
          endSeconds: 21,
        },
        {
          title: "ND로 밝기 조절",
          description: "앞쪽 ND 핀을 움직여 화면 밝기를 맞춥니다.",
          startSeconds: 21,
          endSeconds: 29,
        },
        {
          title: "CPL로 반사 조절",
          description: "CPL 핀을 돌려 물·유리의 반사를 조절합니다. 조절 후 밝기도 다시 확인하세요.",
          startSeconds: 29,
          endSeconds: 36,
        },
        {
          title: "검은 X자가 생길 때",
          description: "광각에서 ND를 많이 넣으면 생길 수 있습니다. ND를 MIN 쪽으로 되돌립니다.",
          startSeconds: 36,
          endSeconds: 47,
        },
      ],
    },
    intro: "ND는 렌즈로 들어오는 빛을 줄여 밝기를 맞추고, CPL은 물이나 유리의 반사를 조절합니다. 렌즈에 붙어 있는 장착 링과 앞쪽 ND·CPL 조절 핀을 각각 확인해 두세요.",
    sections: [
      {
        title: "렌즈에 끼우기",
        body: "렌즈 앞쪽에 적힌 Ø 뒤 숫자가 필터 지름입니다. 예를 들어 Ø77은 77mm입니다. 레보링 테두리에 적힌 지원 범위와 맞는지 확인한 뒤 장착하세요.",
        steps: [
          "유리를 누르지 않도록 필터 앞쪽 테두리를 잡습니다. 다른 손으로 렌즈 쪽 장착 링을 화살표 방향으로 돌려 안쪽 날개를 오므립니다.",
          "그 상태를 유지하며 렌즈 앞 나사산 안쪽에 수평으로 끼웁니다. 한쪽만 비스듬히 걸리지 않게 맞추세요.",
          "장착 링을 천천히 놓아 날개가 나사산을 잡게 합니다. 필터를 받치면서 앞에서 보아 시계 방향으로 살짝 돌리고, 기울거나 헐겁게 빠지지 않는지 확인합니다.",
        ],
      },
      {
        title: "ND와 CPL 조절하기",
        body: "앞쪽 유리 테두리의 작은 핀 두 개로 조절합니다. ND 쪽은 MIN·MAX 표시가 있는 링이고, CPL 쪽은 렌즈에 더 가까운 필터 링입니다.",
        steps: [
          "밝기를 바꿀 때는 CPL 쪽 핀을 잡고 ND 핀을 MIN에서 MAX 쪽으로 조금씩 움직입니다. 카메라 화면을 보면서 필요한 만큼만 어둡게 맞추세요.",
          "반사를 바꿀 때는 렌즈에 가까운 CPL 핀을 천천히 돌립니다. 물이나 유리에 비친 반사가 달라지는지 확인한 뒤 밝기도 다시 확인합니다.",
          "화면에 검은 X자나 얼룩이 생기면 ND를 MIN 쪽으로 되돌립니다. 특히 광각에서는 MAX까지 돌리기 전에 화면 전체를 확인하세요.",
        ],
      },
      {
        title: "렌즈에서 빼기",
        body: "필터 아래를 한 손으로 받칩니다. 렌즈 쪽 장착 링을 화살표 방향으로 돌려 날개를 오므린 상태에서 앞쪽으로 빼세요. 걸리면 당기는 힘을 빼고, 날개가 충분히 오므라들었는지 다시 확인합니다.",
      },
    ],
    sources: [
      { title: "H&Y · REVORING 구조와 장착 원리", url: "https://hy-filter.com/blogs/news/revoring-a-variable-step-ring-for-your-camera-lens-filters" },
      { title: "H&Y · VND+CPL 장착과 X자 현상 안내", url: "https://hy-filter.com/blogs/news/h-y-revoring-vnd-cpl-filter-review-by-michael-topham" },
      { title: "H&Y Filters · REVORING 공식 사용법 영상", url: "https://www.youtube.com/watch?v=BIwpZTwVHvg" },
    ],
  },
];
