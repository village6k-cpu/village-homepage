export interface FieldGuideSection {
  title: string;
  body: string;
  steps?: string[];
  tip?: string;
}

export interface FieldGuide {
  id: string;
  episode: string;
  title: string;
  summary: string;
  equipmentNames: string[];
  keywords: string[];
  readTime: string;
  icon: string;
  takeaway: string;
  intro: string;
  sections: FieldGuideSection[];
  checklist: string[];
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
    episode: "01",
    title: "케이블을 꽂기 전, 전원부터 확인하세요.",
    summary: "SmallHD를 처음 쓴다면 가장 먼저. 전원 켜고 끄는 순서부터 SDI·HDMI 연결과 철수까지.",
    equipmentNames,
    keywords: ["전원", "연결", "분리", "케이블", "SDI", "HDMI", "D-Tap", "배터리", "파손", "안전", "수리", "모니터"],
    readTime: "4분",
    icon: "power_settings_new",
    takeaway: "케이블을 연결하거나 뺄 때는 카메라와 모니터, 양쪽 전원을 모두 꺼주세요.",
    intro: "촬영 준비가 바쁠수록 손이 먼저 갑니다. 하지만 모니터의 영상 단자는 작은 충격이나 잘못된 전원 연결에도 손상될 수 있습니다. 화면을 켜는 것보다 중요한 건, 안전하게 연결하는 순서입니다. 이 한 편은 장비를 꺼내기 전에 꼭 읽어주세요.",
    sections: [
      {
        title: "빌리지에서 기억할 전원 순서",
        body: "영상 케이블 연결을 마친 뒤에는 카메라 바디를 먼저 켜고, 모니터를 켜주세요. 촬영을 마치면 모니터를 먼저 끄고, 카메라를 끕니다. 케이블을 바꿀 때도 같은 순서로 양쪽 전원을 끈 다음 작업해주세요.",
        tip: "이 순서는 빌리지 대여 장비 이용 수칙입니다. 외부 전원선을 사용하는 SDI 세팅은 아래의 케이블 연결·분리 순서까지 함께 지켜야 합니다.",
      },
      {
        title: "SDI + 외부 전원: 전원을 껐다고 끝이 아닙니다",
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
        title: "단자를 지키는 작은 습관",
        body: "선이 팽팽하면 단자가 장비 무게와 움직임을 그대로 받습니다. 카메라를 움직이거나 모니터 각도를 바꿀 여유 길이를 남기고, 케이블이 걸리지 않는지 확인해주세요.",
        steps: [
          "HDMI는 모양과 방향을 확인하고 곧게 연결합니다. 잘 들어가지 않으면 힘으로 밀지 않습니다.",
          "SDI는 잠금 링을 풀고 커넥터 몸통을 잡아 분리합니다. 선 자체를 잡아당기지 않습니다.",
          "모니터는 케이지나 마운트를 잡고 옮깁니다. 케이블을 손잡이처럼 사용하지 않습니다.",
          "피복 손상·핀 변형·단자 흔들림이 보이면 사용을 멈추고 상태를 알려주세요.",
        ],
      },
      {
        title: "화면이 끊겨도, 켜진 채로 다시 꽂지 않기",
        body: "화면이 검게 나오거나 신호가 끊기면 당황해서 케이블부터 다시 꽂기 쉽습니다. 먼저 촬영을 멈추고 양쪽 전원을 끄세요. 연결을 바꿔야 한다면 위 순서를 처음부터 적용합니다. 반복해서 꽂았다 빼거나 단자를 흔들어 신호를 잡으려 하지 마세요.",
        tip: "타는 냄새, 비정상적인 발열, 단자 손상이 느껴지면 재시도하지 마세요. 안전하게 사용을 중단하고 빌리지에 연락해주세요.",
      },
    ],
    checklist: ["케이블 작업 전 양쪽 전원 OFF", "켤 때 바디 → 모니터 / 끌 때 모니터 → 바디", "SDI 연결은 전원선 먼저 / 분리는 SDI 먼저", "선의 여유 길이와 마운트 고정 확인"],
    sources: [sdiSafetySource],
  },
  {
    id: "smallhd-no-signal",
    episode: "02",
    title: "화면이 안 나올 때, 이 순서로 보세요.",
    summary: "No Signal 앞에서 당황하지 않도록. 입력 선택, IN·OUT 단자, 카메라 출력 설정을 하나씩 확인합니다.",
    equipmentNames,
    keywords: ["모니터", "검은 화면", "화면 안나옴", "No Signal", "신호 없음", "HDMI", "SDI", "입력", "출력", "해상도", "프레임"],
    readTime: "3분",
    icon: "settings_input_hdmi",
    takeaway: "케이블부터 다시 꽂기 전에, 입력 선택과 카메라 출력 설정을 먼저 확인하세요.",
    intro: "No Signal은 모니터가 현재 선택한 입력에서 표시할 수 있는 영상 신호를 찾지 못했다는 뜻입니다. 바로 고장이라고 단정할 필요는 없습니다. 설정을 먼저 보고, 케이블을 만져야 할 때는 안전 순서로 돌아가세요.",
    sections: [
      {
        title: "01. 모니터 전원과 영상 신호를 나눠 확인",
        body: "메뉴가 보이는데 영상만 없다면 전원은 들어온 상태입니다. 메뉴조차 켜지지 않으면 배터리 잔량과 장착 상태부터 확인하세요. 배터리를 탈착하거나 외부 전원선을 손봐야 한다면 양쪽 전원을 끄고 1편의 분리 순서를 따릅니다.",
      },
      {
        title: "02. HDMI로 연결했다면, 입력도 HDMI",
        body: "INDIE7의 Input 설정에서 실제 연결한 입력을 선택합니다. HDMI 케이블인데 입력이 SDI로 되어 있으면 화면이 나오지 않습니다. SDI는 연결한 단자의 입력 번호와 설정을 함께 확인해주세요. 메뉴 위치와 표기는 PageOS 버전에 따라 다를 수 있습니다.",
        tip: "단자 옆 IN은 입력, OUT은 출력입니다. 카메라의 영상 OUT에서 모니터의 영상 IN으로 연결하는 것이 기본입니다. OUT에 꽂혀 있다면 전원을 끈 뒤 바꿔주세요.",
      },
      {
        title: "03. 녹화 해상도와 외부 출력 해상도는 별개",
        body: "카메라가 4K로 녹화한다고 모니터에도 반드시 같은 신호를 보내야 하는 것은 아닙니다. 카메라의 HDMI·SDI 출력 메뉴에서 해상도와 프레임을 확인하세요. INDIE7 공식 퀵스타트 기준 지원 입력은 HDMI 최대 4K 30p, SDI 최대 1080 60p입니다. 다른 SmallHD 모델은 해당 모델의 사양을 확인해야 합니다.",
        tip: "4K 50/60p로 촬영 중인데 화면이 없다면 외부 출력이 모니터 지원 범위를 넘는지 확인하세요. 내부 녹화 설정을 무작정 바꾸기보다 지원되는 HD 출력 세팅을 빌리지와 확인해주세요.",
      },
      {
        title: "04. 그래도 안 나오면, 한 번에 하나만 변경",
        body: "입력과 출력 설정이 맞다면, 양쪽 전원을 끄고 케이블·잠금·단자 방향을 확인합니다. 여분의 정상 케이블이 있으면 하나만 교체해 확인하세요. 여러 설정을 동시에 바꾸면 원인을 찾기 어려워집니다.",
        steps: [
          "케이블을 만지기 전 모니터 → 카메라 순서로 전원을 끕니다.",
          "SDI와 외부 전원을 함께 쓰면 1편의 연결·분리 순서를 지킵니다.",
          "안전하게 다시 연결한 뒤 카메라 → 모니터 순서로 켭니다.",
          "해결되지 않으면 카메라 모델, 연결 방식, 출력 설정, 화면의 오류 표시를 빌리지에 알려주세요.",
        ],
        tip: "공장 초기화나 펌웨어 업데이트는 현장 해결책으로 시도하지 마세요. 대여 시 세팅을 유지한 채 문의해주세요.",
      },
    ],
    checklist: ["메뉴가 보이는지 먼저 확인", "실제 케이블과 선택한 입력 일치", "카메라 OUT → 모니터 IN 확인", "외부 출력 해상도·프레임 확인"],
    sources: [
      { title: "SmallHD · INDIE7 퀵스타트 / 지원 신호", url: "https://guide.smallhd.com/a/1634747-indie-7-quick-start-guide" },
      { title: "SmallHD · Input Config/Output", url: "https://guide.smallhd.com/a/1565535-input-config-output" },
    ],
  },
  {
    id: "smallhd-focus-exposure",
    episode: "03",
    title: "잘 보이는 화면에서, 잘 찍힌 화면으로.",
    summary: "확대 초점, 노출 도구, LUT의 차이. 처음에는 이 세 가지만 구분해도 촬영이 한결 편해집니다.",
    equipmentNames,
    keywords: ["모니터", "초점", "포커스", "Focus Assist", "피킹", "Pixel Zoom", "노출", "Waveform", "웨이브폼", "False Color", "폴스컬러", "LUT", "로그", "PageOS"],
    readTime: "4분",
    icon: "center_focus_strong",
    takeaway: "초점은 확대해서, 노출은 도구로, 색감은 입력 신호와 LUT를 함께 확인하세요.",
    intro: "큰 화면이 생겼다고 초점과 노출이 저절로 맞지는 않습니다. 모니터는 촬영 결과를 확인하는 도구입니다. 처음부터 모든 메뉴를 외우기보다, 지금 보고 있는 표시가 무엇을 뜻하는지부터 구분해보세요. 아래 조작은 INDIE7 터치스크린 기준이며 버전에 따라 다를 수 있습니다.",
    sections: [
      {
        title: "초점: 색 테두리를 보고, 확대해서 한 번 더",
        body: "Focus Assist는 선명한 경계에 색을 표시해 초점 위치를 찾도록 돕습니다. 하지만 감도가 너무 높으면 노이즈나 배경에도 색이 생길 수 있습니다. 인물의 눈처럼 중요한 부분은 Pixel Zoom으로 확대해 실제 디테일을 확인하세요.",
        steps: [
          "터치 화면에서 두 손가락으로 벌려 영상을 확대합니다.",
          "눈·속눈썹 등 원하는 초점 위치의 디테일을 보며 초점을 맞춥니다.",
          "확대를 풀고 전체 구도를 다시 확인한 뒤 촬영합니다.",
        ],
        tip: "모니터 화면 확대는 렌즈 줌 조작과 다릅니다. 확대된 화면만 보고 프레이밍하지 않도록 촬영 전 전체 화면으로 돌아오세요.",
      },
      {
        title: "노출: 화면 밝기만 믿지 마세요",
        body: "야외에서는 모니터를 밝게, 어두운 실내에서는 낮게 보게 됩니다. 백라이트는 화면을 보기 편하게 하는 설정입니다. 카메라 노출을 바꾼 것이 아니므로, 노출 판단은 Waveform이나 False Color 같은 도구와 함께 해주세요.",
        steps: [
          "Waveform은 화면의 밝기 분포를 그래프로 보여줍니다. 살려야 할 밝은 부분과 어두운 부분을 함께 살펴보세요.",
          "False Color는 밝기 구간을 색으로 표시합니다. 현재 선택한 스케일의 범례를 먼저 읽으세요.",
          "피부나 회색의 목표 값은 카메라·감마·입력 신호에 맞춰 확인합니다. 특정 색이나 IRE 숫자를 모든 촬영에 그대로 적용하지 마세요.",
        ],
      },
      {
        title: "LUT: 색을 보기 좋게 만드는 미리보기",
        body: "Log 영상이 회색빛으로 보이는 건 신호 특성일 수 있습니다. LUT는 이 영상을 원하는 모습으로 미리 확인하게 해주는 변환입니다. 카메라에서 이미 변환한 출력에 모니터에서도 같은 변환 LUT를 겹치면 색과 명암이 과해질 수 있습니다. 카메라 출력이 Log인지, 이미 변환된 영상인지 먼저 확인하세요.",
        tip: "모니터의 Look 도구는 카메라 내부 녹화 설정을 바꾸는 기능이 아닙니다. 노출 도구의 Ignore Look 설정에 따라 LUT 적용 전·후 측정이 달라질 수 있으니, 색이 예쁘다는 이유만으로 노출이 맞다고 판단하지 마세요.",
      },
      {
        title: "PageOS: 한 화면에는 한 가지 목적만",
        body: "PageOS의 페이지는 도구 구성을 나눠두는 작업 화면입니다. 전체 구도 확인용, 초점 확인용, 노출 확인용으로 나눠 쓰면 표시가 겹쳐 헷갈리는 일을 줄일 수 있습니다. 좌우로 넘겨 필요한 화면을 확인하고, 촬영 중에는 보기 편한 화면으로 돌아오세요.",
        tip: "대여 장비에 준비된 페이지가 있다면 먼저 활용하세요. 메뉴가 낯설 때는 페이지를 지우거나 초기화하기보다 빌리지에 사용 방법을 문의해주세요.",
      },
    ],
    checklist: ["중요한 초점은 확대해서 재확인", "확대를 풀고 전체 구도 확인", "노출은 백라이트 대신 측정 도구로 확인", "카메라 출력과 LUT 중복 적용 여부 확인"],
    sources: [
      { title: "SmallHD · Pixel Zoom", url: "https://guide.smallhd.com/a/1565923-pixel-zoom" },
      { title: "SmallHD · Focus Assist", url: "https://guide.smallhd.com/a/1565959-focus-assist" },
      { title: "SmallHD · Backlight", url: "https://guide.smallhd.com/a/1565924-backlight" },
      { title: "SmallHD · Waveform", url: "https://guide.smallhd.com/a/1565950-waveform" },
      { title: "SmallHD · Exposure Assist / False Color", url: "https://guide.smallhd.com/a/1565946-exposure-assist-false-color" },
      { title: "SmallHD · Look (3D LUT)", url: "https://guide.smallhd.com/a/1565964-look-3d-lut" },
      { title: "SmallHD · Working with Pages", url: "https://guide.smallhd.com/a/1565920-working-with-pages" },
    ],
  },
];
