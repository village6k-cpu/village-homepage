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
  readTime: string;
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
    equipmentLabel: "SmallHD 모니터",
    imageUrl: "/images/products/134.png",
    productId: 134,
    title: "SmallHD 모니터 연결·분리 주의사항",
    summary: "케이블을 만지기 전 양쪽 전원을 꺼주세요. 전원 ON·OFF 순서와 SDI·HDMI 단자 취급 방법을 안내합니다.",
    equipmentNames,
    keywords: ["전원", "연결", "분리", "케이블", "SDI", "HDMI", "D-Tap", "배터리", "파손", "안전", "수리", "모니터"],
    readTime: "4분",
    takeaway: "케이블을 연결하거나 뺄 때는 카메라와 모니터, 양쪽 전원을 모두 꺼주세요.",
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
    checklist: ["케이블 작업 전 양쪽 전원 OFF", "켤 때 바디 → 모니터 / 끌 때 모니터 → 바디", "SDI 연결은 전원선 먼저 / 분리는 SDI 먼저", "선의 여유 길이와 마운트 고정 확인"],
    sources: [sdiSafetySource],
  },
];
