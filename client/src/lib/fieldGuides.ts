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
];
