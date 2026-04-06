// VILLAGE RENTAL — Product Data (엑셀 자동 변환)
// 출처: 빌리지_렌탈장비_전체목록.xlsx (187개 장비)

export interface Product {
  id: number;
  name: string;
  priceDay: number;
  originalPrice?: number;
  category: string;
  image: string;
  productUrl: string;
  tag?: 'SALE' | 'NEW' | 'BEST' | '입고예정';
}

export const products: Product[] = [
  {
  id: 1,
  name: "픽시스 6K 풀세트 (PL 마운트) - 입고 예정",
  priceDay: 150000,
  category: "카메라 풀세트",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1754180895577_1000.png",
  productUrl: "https://village6k.co.kr/product/36c20010-19bf-49df-b920-dce0c4e0469a",
  tag: "입고예정"
  },
  {
  id: 2,
  name: "인스타360 X5 (+인비져블 셀피스틱)",
  priceDay: 30000,
  category: "카메라",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1753086642448_1000.png",
  productUrl: "https://village6k.co.kr/product/092b6a01-1262-44b2-8161-8859afb4850c"
  },
  {
  id: 3,
  name: "울란지 Video Fast (75볼- 셔틀러 플로우텍 스타일)",
  priceDay: 15000,
  category: "삼각대",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1752744436322_1000.png",
  productUrl: "https://village6k.co.kr/product/37b2c14a-d29b-4831-b76d-6566e150ce5e"
  },
  {
  id: 4,
  name: "셔틀러 플로우텍 aktiv8 GS",
  priceDay: 30000,
  category: "삼각대",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1752744558249_1000.png",
  productUrl: "https://village6k.co.kr/product/c27a0ece-bd1b-4eff-8ad9-32c75945cf39"
  },
  {
  id: 5,
  name: "JBL 파티박스 스테이지 320 + 마이크 2대",
  priceDay: 30000,
  category: "오디오",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1751341073288_1000.png",
  productUrl: "https://village6k.co.kr/product/614eba1e-3595-42c4-bace-23f9c1392ca8"
  },
  {
  id: 6,
  name: "강풍기",
  priceDay: 5000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1751341025071_1000.png",
  productUrl: "https://village6k.co.kr/product/71087828-04f8-4d82-a1c6-b3094a072a24"
  },
  {
  id: 7,
  name: "소니 Z-90 캠코더(4K)",
  priceDay: 50000,
  originalPrice: 50000,
  category: "카메라",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1749720326326_1000.png",
  productUrl: "https://village6k.co.kr/product/13b8ceed-ed88-4f51-94e2-5cbefa967846",
  tag: "SALE"
  },
  {
  id: 8,
  name: "DJI 무선마이크 (1TX + 2RX 구성)",
  priceDay: 10000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1751341322964_1000.png",
  productUrl: "https://village6k.co.kr/product/446c2fd6-c74b-446d-811a-68bbee101a58"
  },
  {
  id: 9,
  name: "소니 BURANO 베이직 세트(뉴클, 무선 제외)",
  priceDay: 200000,
  originalPrice: 250000,
  category: "카메라 풀세트",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1733391337899_1000.png",
  productUrl: "https://village6k.co.kr/product/365435f7-3add-4fd7-a908-ae3385b76b6f-199",
  tag: "SALE"
  },
  {
  id: 10,
  name: "17인치 모니터(구형)",
  priceDay: 25000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171769832_1000.png",
  productUrl: "https://village6k.co.kr/product/fc721926-5fba-4362-8d09-bf1b3c3d29cc-198"
  },
  {
  id: 11,
  name: "TVLogic LVM-180A",
  priceDay: 35000,
  originalPrice: 35000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171769832_1000.png",
  productUrl: "https://village6k.co.kr/product/fc721926-5fba-4362-8d09-bf1b3c3d29cc-197",
  tag: "SALE"
  },
  {
  id: 12,
  name: "삼양 XEEN 렌즈 세트",
  priceDay: 50000,
  originalPrice: 80000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659000186012_1000.png",
  productUrl: "https://village6k.co.kr/product/shampoobar-kelp",
  tag: "SALE"
  },
  {
  id: 13,
  name: "소니 BURANO 풀세트",
  priceDay: 250000,
  originalPrice: 300000,
  category: "카메라 풀세트",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1733391337899_1000.png",
  productUrl: "https://village6k.co.kr/product/365435f7-3add-4fd7-a908-ae3385b76b6f",
  tag: "SALE"
  },
  {
  id: 14,
  name: "DJI SDR Transmission (무선송수신기)",
  priceDay: 20000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1733384738810_1000.png",
  productUrl: "https://village6k.co.kr/product/10ceffe5-729a-450d-b27a-66b2b1d18b92"
  },
  {
  id: 15,
  name: "DZOFILM CATTA ACE 3 Lens 세트",
  priceDay: 100000,
  originalPrice: 100000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1733392007285_1000.png",
  productUrl: "https://village6k.co.kr/product/c5d3a2a1-ba87-4002-80fd-83e2c1789b86",
  tag: "SALE"
  },
  {
  id: 16,
  name: "소니 AX43A 캠코더(4K)",
  priceDay: 30000,
  category: "카메라",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687341709806_1000.png",
  productUrl: "https://village6k.co.kr/product/7b4f7ced-a1ae-43a5-a8b7-06dada4a5cf6"
  },
  {
  id: 17,
  name: "캐논 R6 MARK II + RF 100-500 (또는 100-400)",
  priceDay: 60000,
  originalPrice: 80000,
  category: "카메라",
  image: "",
  productUrl: "https://village6k.co.kr/product/ca93a851-e914-4bc7-b292-0b63391c6aea",
  tag: "SALE"
  },
  {
  id: 18,
  name: "홀리랜드 파이로 7",
  priceDay: 20000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1733384561443_1000.png",
  productUrl: "https://village6k.co.kr/product/ff0a9114-47e5-45c4-8b26-1900def81f65"
  },
  {
  id: 19,
  name: "홀리랜드 파이로 S",
  priceDay: 30000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1733384620954_1000.png",
  productUrl: "https://village6k.co.kr/product/04dca6b9-0570-4392-9479-238574a5fbca"
  },
  {
  id: 20,
  name: "MOVMAX RAZOR ARM",
  priceDay: 50000,
  originalPrice: 60000,
  category: "짐벌/그립/달리",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1733384688114_1000.png",
  productUrl: "https://village6k.co.kr/product/55b7c98b-da30-4724-b071-7f754d59d717",
  tag: "SALE"
  },
  {
  id: 21,
  name: "소니 AX-700 캠코더(4K)",
  priceDay: 30000,
  category: "카메라",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687429252459_1000.png",
  productUrl: "https://village6k.co.kr/product/010d35ea-3ab6-4271-ac79-0d3849d027f3"
  },
  {
  id: 22,
  name: "어퓨쳐 스톰 80C",
  priceDay: 20000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1733384502383_1000.png",
  productUrl: "https://village6k.co.kr/product/f130a5af-06ed-4094-9edf-cd15cc941328"
  },
  {
  id: 23,
  name: "아마란 F21C",
  priceDay: 20000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1722413804202_1000.png",
  productUrl: "https://village6k.co.kr/product/92940c74-93ae-46c0-9237-31f4c8b14fcf"
  },
  {
  id: 24,
  name: "캐논 RF 100-500",
  priceDay: 30000,
  originalPrice: 40000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1733384783979_1000.png",
  productUrl: "https://village6k.co.kr/product/aba28917-efa1-42dd-a5f6-ba167bd8e4af",
  tag: "SALE"
  },
  {
  id: 25,
  name: "PDMOVIE LIVE AIR 3 Smart LiDAR",
  priceDay: 20000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1719319893378_1000.png",
  productUrl: "https://village6k.co.kr/product/001f62cf-ab32-461f-87c0-4df130b444fc-71-179-183"
  },
  {
  id: 26,
  name: "로닌 RS4 프로",
  priceDay: 30000,
  originalPrice: 35000,
  category: "짐벌/그립/달리",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1719320526852_1000.png",
  productUrl: "https://village6k.co.kr/product/paperlaundry-eucalyptus-182",
  tag: "SALE"
  },
  {
  id: 27,
  name: "난룩스 Evoke 1200B",
  priceDay: 50000,
  originalPrice: 60000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1719320048905_1000.png",
  productUrl: "https://village6k.co.kr/product/9779aea0-6504-4f48-a5dd-0adcc2bbde41",
  tag: "SALE"
  },
  {
  id: 28,
  name: "틸타 뉴클리어스 Nano II",
  priceDay: 20000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1719320060036_1000.png",
  productUrl: "https://village6k.co.kr/product/001f62cf-ab32-461f-87c0-4df130b444fc-71-179"
  },
  {
  id: 29,
  name: "파보튜브II 30XR 2KIT",
  priceDay: 35000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1663089194984_1000.png",
  productUrl: "https://village6k.co.kr/product/toothpaste-98-178"
  },
  {
  id: 30,
  name: "어퓨쳐 600D(최대 광량 600X의 약 1.6배)",
  priceDay: 30000,
  originalPrice: 40000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658995984792_1000.png",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-177",
  tag: "SALE"
  },
  {
  id: 31,
  name: "아마란 PT4C 4KIT",
  priceDay: 60000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1719320234413_1000.png",
  productUrl: "https://village6k.co.kr/product/518632c5-218c-4982-a9f9-068bb31f3d26-176"
  },
  {
  id: 32,
  name: "에코플로우 델타2 맥스(파워뱅크, 2048Wh, 최대 출력 6kW)",
  priceDay: 60000,
  originalPrice: 60000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687341583388_1000.png",
  productUrl: "https://village6k.co.kr/product/44d39497-ec5c-4693-93d0-90bddd03461d-175",
  tag: "SALE"
  },
  {
  id: 33,
  name: "아마란 PT4C 2KIT",
  priceDay: 30000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1719320168316_1000.png",
  productUrl: "https://village6k.co.kr/product/518632c5-218c-4982-a9f9-068bb31f3d26"
  },
  {
  id: 34,
  name: "젠하이져 MKH-416P(붐마이크 세팅) - 렌탈 일시 중지",
  priceDay: 15000,
  category: "오디오",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659172009292_1000.png",
  productUrl: "https://village6k.co.kr/product/laundrybar-mugwort-79-173"
  },
  {
  id: 35,
  name: "홀리랜드 솔리드컴 C1 PRO - 6S",
  priceDay: 70000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1699275171880_1000.png",
  productUrl: "https://village6k.co.kr/product/713407dc-5a98-4447-88d0-2413b900db9a-172"
  },
  {
  id: 36,
  name: "쿠크 COOKE SP3 렌즈 세트",
  priceDay: 150000,
  originalPrice: 150000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1722413574191_1000.png",
  productUrl: "https://village6k.co.kr/product/17387a76-a587-4420-b319-a6d898470470",
  tag: "SALE"
  },
  {
  id: 37,
  name: "니시 아테나 프라임 단렌즈 세트",
  priceDay: 100000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1719320337291_1000.png",
  productUrl: "https://village6k.co.kr/product/84531499-e907-4430-a18e-a7e3a077e30f"
  },
  {
  id: 38,
  name: "모션나인 카트 M1",
  priceDay: 20000,
  category: "짐벌/그립/달리",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1699275300738_1000.png",
  productUrl: "https://village6k.co.kr/product/5a291087-0d70-4123-8b36-fbc1f27778fc"
  },
  {
  id: 39,
  name: "홀리랜드 솔리드컴 C1 PRO - 4S",
  priceDay: 50000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1699275171880_1000.png",
  productUrl: "https://village6k.co.kr/product/713407dc-5a98-4447-88d0-2413b900db9a"
  },
  {
  id: 40,
  name: "TVLogic VFM-055A",
  priceDay: 20000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1699005151130_1000.png",
  productUrl: "https://village6k.co.kr/product/2cf8e528-447b-4c65-8bb1-ca85f4296303"
  },
  {
  id: 41,
  name: "셔틀러 비디오 20",
  priceDay: 35000,
  category: "삼각대",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1698974550397_1000.png",
  productUrl: "https://village6k.co.kr/product/09df2e0a-e0a6-4899-a5d9-1e49ebbe14c7"
  },
  {
  id: 42,
  name: "TVLogic F-7HS (신형 7인치 모니터)",
  priceDay: 30000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1698837180626_1000.png",
  productUrl: "https://village6k.co.kr/product/d580e20c-d072-4d8b-aba1-60eb644e645f"
  },
  {
  id: 43,
  name: "소니 90mm 매크로 렌즈",
  priceDay: 20000,
  originalPrice: 20000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1699428491417_1000.png",
  productUrl: "https://village6k.co.kr/product/1b8bd784-a212-4ae1-9bb5-eed28dd88053",
  tag: "SALE"
  },
  {
  id: 44,
  name: "라오와 24mm f/14 Probe (PL/E/EF)",
  priceDay: 30000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1698837194062_1000.png",
  productUrl: "https://village6k.co.kr/product/f298eb8f-d203-4b51-85fa-0cd2aef775bd"
  },
  {
  id: 45,
  name: "Bowers&Wilkins Formation Flex(2조)",
  priceDay: 50000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1698279827359_1000.png",
  productUrl: "https://village6k.co.kr/product/50536110-3e47-4f6a-a513-d1da450a59eb"
  },
  {
  id: 46,
  name: "캐논 스피드라이트 430EX III-RT (스트로보)",
  priceDay: 15000,
  category: "조명",
  image: "",
  productUrl: "https://village6k.co.kr/product/39659493-5e5c-412d-a294-f67a2696e438"
  },
  {
  id: 47,
  name: "시그마 FF High Speed Prime 렌즈 세트",
  priceDay: 100000,
  originalPrice: 100000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1719320767428_1000.png",
  productUrl: "https://village6k.co.kr/product/97fccd7a-07df-491a-b534-e67f8353fc2b",
  tag: "SALE"
  },
  {
  id: 48,
  name: "슬레이트",
  priceDay: 5000,
  category: "기타",
  image: "",
  productUrl: "https://village6k.co.kr/product/7f00a699-33b7-4f70-841c-bd4724c42eae"
  },
  {
  id: 49,
  name: "NiSi True-Color PL 필터 (4x5.65)",
  priceDay: 7000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1719320873590_1000.png",
  productUrl: "https://village6k.co.kr/product/9909863f-8f6e-42cb-ae00-d886ded17c23"
  },
  {
  id: 50,
  name: "고릴라포드",
  priceDay: 5000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1691069374473_1000.png",
  productUrl: "https://village6k.co.kr/product/32394a15-838e-48e9-b658-3532bf2e8895"
  },
  {
  id: 51,
  name: "홀리랜드 마스 4K (1:2 가능, 앱 모니터링 가능)",
  priceDay: 25000,
  originalPrice: 30000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1691035984842_1000.png",
  productUrl: "https://village6k.co.kr/product/4f84b9f0-52f2-4fba-95c2-dc4a23cd0e1b",
  tag: "SALE"
  },
  {
  id: 52,
  name: "라오와 12mm T2.9 Zero-D Cine",
  priceDay: 35000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1691036000281_1000.png",
  productUrl: "https://village6k.co.kr/product/ae59cc78-a0cd-45fd-8c72-48c038b9c7c6"
  },
  {
  id: 53,
  name: "아마란 F22C",
  priceDay: 35000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1690556543198_1000.png",
  productUrl: "https://village6k.co.kr/product/39315fcd-cb71-462d-84aa-cbd757109057"
  },
  {
  id: 54,
  name: "모션나인 C-BED",
  priceDay: 5000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1690432726110_1000.png",
  productUrl: "https://village6k.co.kr/product/37c777d4-108f-4d73-93dd-34ee84aa4a15"
  },
  {
  id: 55,
  name: "KSH17 프롬프터 (100볼 트라이 포함)",
  priceDay: 60000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1690292025874_1000.png",
  productUrl: "https://village6k.co.kr/product/5b34a3a7-72ec-419d-ae12-94ceaf83a7d7"
  },
  {
  id: 56,
  name: "아이릭스 150mm CINE 매크로 렌즈",
  priceDay: 20000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1690291966583_1000.png",
  productUrl: "https://village6k.co.kr/product/a92249b5-9289-4377-86fc-89143c4fe62c"
  },
  {
  id: 57,
  name: "소니 XLR-K3M 외장마이크",
  priceDay: 10000,
  category: "오디오",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1690291980854_1000.png",
  productUrl: "https://village6k.co.kr/product/2f9ed9f1-8863-42ad-8a42-4b2074b154ba"
  },
  {
  id: 58,
  name: "고프로 히어로11 블랙 패키지",
  priceDay: 20000,
  category: "카메라",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1663172122162_1000.png",
  productUrl: "https://village6k.co.kr/product/cleansingbar-olive-107-134"
  },
  {
  id: 59,
  name: "미니 삼각대",
  priceDay: 5000,
  category: "삼각대",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1690292458349_1000.png",
  productUrl: "https://village6k.co.kr/product/941a21d4-2cee-4e85-b113-2de17b070b16"
  },
  {
  id: 60,
  name: "캐논 100-400mm II(백사투)",
  priceDay: 30000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687341694950_1000.png",
  productUrl: "https://village6k.co.kr/product/e3163842-65d7-430d-b03b-4c3448503e30"
  },
  {
  id: 61,
  name: "오막포+백사투",
  priceDay: 40000,
  originalPrice: 70000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1690292580959_1000.png",
  productUrl: "https://village6k.co.kr/product/7b4f7ced-a1ae-43a5-a8b7-06dada4a5cf6-135-137",
  tag: "SALE"
  },
  {
  id: 62,
  name: "탑 클램프",
  priceDay: 5000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687427092618_1000.png",
  productUrl: "https://village6k.co.kr/product/cc50fac6-90f1-468a-b840-c9d9518ef696"
  },
  {
  id: 63,
  name: "더블 헤더",
  priceDay: 5000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687427170809_1000.png",
  productUrl: "https://village6k.co.kr/product/6b5d0d8e-e2c9-4bf0-a759-70a0b98071b4"
  },
  {
  id: 64,
  name: "어퓨쳐 LS 60X",
  priceDay: 20000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1663089180026_1000.png",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-94"
  },
  {
  id: 65,
  name: "에코플로우 델타2 (파워뱅크, 1024Wh, 2시간 내 완충)",
  priceDay: 50000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687341583388_1000.png",
  productUrl: "https://village6k.co.kr/product/44d39497-ec5c-4693-93d0-90bddd03461d"
  },
  {
  id: 66,
  name: "어퓨쳐 300X 세트 (2세트 5만원)",
  priceDay: 25000,
  originalPrice: 30000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658995972380_1000.png",
  productUrl: "https://village6k.co.kr/product/toothbrush",
  tag: "SALE"
  },
  {
  id: 67,
  name: "어퓨쳐 아마란 300C 세트(RGBWW)",
  priceDay: 20000,
  originalPrice: 25000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687341565809_1000.png",
  productUrl: "https://village6k.co.kr/product/fcb3d8d7-0ddc-4e96-9229-a045f449c251",
  tag: "SALE"
  },
  {
  id: 68,
  name: "고프로 히어로10 블랙 패키지",
  priceDay: 20000,
  category: "카메라",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1663172122162_1000.png",
  productUrl: "https://village6k.co.kr/product/cleansingbar-olive-107"
  },
  {
  id: 69,
  name: "소니 100-400 GM",
  priceDay: 30000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659859932657_1000.png",
  productUrl: "https://village6k.co.kr/product/shampoobar-blackbean-41-96-126"
  },
  {
  id: 70,
  name: "소니 A7S3 바디 세트 (CF-A 메모리, 배터리 포함)",
  priceDay: 40000,
  originalPrice: 40000,
  category: "카메라",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658929859456_1000.png",
  productUrl: "https://village6k.co.kr/product/cleansingbar-calendula",
  tag: "SALE"
  },
  {
  id: 71,
  name: "소니 FX3 바디 세트 (CF-A 메모리, 배터리 포함)",
  priceDay: 50000,
  originalPrice: 50000,
  category: "카메라",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658929874491_1000.png",
  productUrl: "https://village6k.co.kr/product/cleansingbar-calendula-32",
  tag: "SALE"
  },
  {
  id: 72,
  name: "맨프로토 MVMX PRO 500(모노포드)",
  priceDay: 10000,
  category: "삼각대",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659436027703_1000.png",
  productUrl: "https://village6k.co.kr/product/loofahsponge-slice-92"
  },
  {
  id: 73,
  name: "소니 FX6 바디 세트 (CF-A 메모리, 배터리 포함)",
  priceDay: 60000,
  originalPrice: 70000,
  category: "카메라 풀세트",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658991483411_1000.png",
  productUrl: "https://village6k.co.kr/product/cleansingbar-calendula-32-35",
  tag: "SALE"
  },
  {
  id: 74,
  name: "어퓨쳐 노바 P300C 세트(2세트 6만원)",
  priceDay: 30000,
  originalPrice: 40000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658996008360_1000.png",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-54",
  tag: "SALE"
  },
  {
  id: 75,
  name: "핫도그 슬라이더(앱 컨트롤 가능, 최대 길이 120cm)",
  priceDay: 30000,
  category: "짐벌/그립/달리",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687341741001_1000.png",
  productUrl: "https://village6k.co.kr/product/6a800989-e52c-4f43-a034-993a01ca2ad6"
  },
  {
  id: 76,
  name: "시네 카트",
  priceDay: 20000,
  category: "짐벌/그립/달리",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1673515004560_1000.png",
  productUrl: "https://village6k.co.kr/product/82ea11bd-6c28-468d-9d2e-7fc6f988ce9b"
  },
  {
  id: 77,
  name: "메타본즈(PL to E)",
  priceDay: 10000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659002827526_1000.png",
  productUrl: "https://village6k.co.kr/product/607a52d8-49ee-403e-acc1-0a6a74184103-52-125"
  },
  {
  id: 78,
  name: "소니 GM 단렌즈 세트",
  priceDay: 90000,
  category: "렌즈",
  image: "",
  productUrl: "https://village6k.co.kr/product/de76a085-ad9c-4431-8201-078e9b05cce5"
  },
  {
  id: 79,
  name: "삼양 XEEN CF 렌즈 세트",
  priceDay: 80000,
  originalPrice: 100000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1698837308592_1000.png",
  productUrl: "https://village6k.co.kr/product/b3961407-b2ae-4a1d-a4a6-5fc5099fe19a",
  tag: "SALE"
  },
  {
  id: 80,
  name: "어퓨쳐 600X 프로 세트",
  priceDay: 35000,
  originalPrice: 40000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658995984792_1000.png",
  productUrl: "https://village6k.co.kr/product/toothbrush-53",
  tag: "SALE"
  },
  {
  id: 81,
  name: "어퓨쳐 600C 프로 세트 (RGBWW)",
  priceDay: 40000,
  originalPrice: 50000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687341592361_1000.png",
  productUrl: "https://village6k.co.kr/product/f114cb65-e727-490d-9c76-d4141b8c64d9",
  tag: "SALE"
  },
  {
  id: 82,
  name: "틸타 시네 슬라이더",
  priceDay: 50000,
  category: "짐벌/그립/달리",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659172332356_1000.png",
  productUrl: "https://village6k.co.kr/product/paperlaundry-eucalyptus-91"
  },
  {
  id: 83,
  name: "홀리랜드 마스 M1",
  priceDay: 20000,
  originalPrice: 20000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687341765008_1000.png",
  productUrl: "https://village6k.co.kr/product/788b2253-f424-4bd0-999e-b43d659c6220",
  tag: "SALE"
  },
  {
  id: 84,
  name: "RED 코모도 풀세트(EF/PL마운트 중 선택)",
  priceDay: 100000,
  originalPrice: 130000,
  category: "카메라 풀세트",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1673667272180_1000.png",
  productUrl: "https://village6k.co.kr/product/6e4c0629-0e28-4438-a68e-6d936265a0c3",
  tag: "SALE"
  },
  {
  id: 85,
  name: "로닌 RS3 프로",
  priceDay: 30000,
  category: "짐벌/그립/달리",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171897545_1000.png",
  productUrl: "https://village6k.co.kr/product/paperlaundry-eucalyptus"
  },
  {
  id: 86,
  name: "파보튜브II 30X 2KIT",
  priceDay: 30000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1663089194984_1000.png",
  productUrl: "https://village6k.co.kr/product/toothpaste-98"
  },
  {
  id: 87,
  name: "CINE SADDLE",
  priceDay: 5000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1672317118732_1000.png",
  productUrl: "https://village6k.co.kr/product/d16e8889-d7d0-45f0-a530-382fda922b26-113-114"
  },
  {
  id: 88,
  name: "L 플레이트",
  priceDay: 5000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687448262654_1000.png",
  productUrl: "https://village6k.co.kr/product/d16e8889-d7d0-45f0-a530-382fda922b26-113"
  },
  {
  id: 89,
  name: "모토로라 T82EX 4세트(고성능 무전기)",
  priceDay: 20000,
  category: "오디오",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1672317129664_1000.png",
  productUrl: "https://village6k.co.kr/product/loofahsponge-slice-112"
  },
  {
  id: 90,
  name: "오토폴",
  priceDay: 5000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1672317142834_1000.png",
  productUrl: "https://village6k.co.kr/product/d16e8889-d7d0-45f0-a530-382fda922b26"
  },
  {
  id: 91,
  name: "파보튜브II 30X 4KIT",
  priceDay: 60000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659172728324_1000.png",
  productUrl: "https://village6k.co.kr/product/toothpaste"
  },
  {
  id: 92,
  name: "소니 GM 렌즈 세트(단품 대여 가능)",
  priceDay: 70000,
  originalPrice: 70000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658999509189_1000.png",
  productUrl: "https://village6k.co.kr/product/shampoobar-blackbean-41-95",
  tag: "SALE"
  },
  {
  id: 93,
  name: "서튼 ST-V15(100볼)",
  priceDay: 15000,
  category: "삼각대",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1672317156227_1000.png",
  productUrl: "https://village6k.co.kr/product/3326aae4-2f77-436f-830e-826fe02c209d"
  },
  {
  id: 94,
  name: "애플 아이패드(무선 모니터링 가능)",
  priceDay: 10000,
  category: "모니터/무선",
  image: "",
  productUrl: "https://village6k.co.kr/product/dishbar-soapberry-108"
  },
  {
  id: 95,
  name: "소니 FX9 바디 세트 (XQD 메모리, 배터리 포함)",
  priceDay: 60000,
  originalPrice: 70000,
  category: "카메라 풀세트",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658929897608_1000.png",
  productUrl: "https://village6k.co.kr/product/cleansingbar-calendula-32-35-38",
  tag: "SALE"
  },
  {
  id: 96,
  name: "캠기어 엘리트 15(100볼)",
  priceDay: 20000,
  category: "삼각대",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1672317166410_1000.png",
  productUrl: "https://village6k.co.kr/product/067e714a-c365-42f5-9d4c-a904a98d9caf"
  },
  {
  id: 97,
  name: "캠기어 마크4(75볼)",
  priceDay: 10000,
  category: "삼각대",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1672317178740_1000.png",
  productUrl: "https://village6k.co.kr/product/05be674c-643d-4b8a-8f38-a8e3a4cca614-104"
  },
  {
  id: 98,
  name: "셔틀러 에이스 CF XL(75볼)",
  priceDay: 20000,
  category: "삼각대",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1672317190053_1000.png",
  productUrl: "https://village6k.co.kr/product/05be674c-643d-4b8a-8f38-a8e3a4cca614-133"
  },
  {
  id: 99,
  name: "셔틀러 에이스 CF M(75볼)",
  priceDay: 10000,
  category: "삼각대",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1672317190053_1000.png",
  productUrl: "https://village6k.co.kr/product/05be674c-643d-4b8a-8f38-a8e3a4cca614"
  },
  {
  id: 100,
  name: "어퓨쳐 Spotlight 마운트(아이리스 제공)",
  priceDay: 10000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658996048876_1000.png",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-54-55-56-57"
  },
  {
  id: 101,
  name: "무선세트(17인치)",
  priceDay: 50000,
  category: "모니터/무선",
  image: "",
  productUrl: "https://village6k.co.kr/product/dishbar-soapberry"
  },
  {
  id: 102,
  name: "무선세트(7인치)",
  priceDay: 50000,
  category: "모니터/무선",
  image: "",
  productUrl: "https://village6k.co.kr/product/dishbar-soapberry-64"
  },
  {
  id: 103,
  name: "하만카돈 Go+Play (100W 출력, 블루투스 스피커, 2대 페어링 가능)",
  priceDay: 10000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1663089080746_1000.png",
  productUrl: "https://village6k.co.kr/product/laundrybar-oatmeal-99"
  },
  {
  id: 104,
  name: "어퓨쳐 F10 프레넬 렌즈+반도어(600용)",
  priceDay: 10000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658995303670_1000.png",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-54-55-56-57-58"
  },
  {
  id: 105,
  name: "소니 UWP-D21",
  priceDay: 10000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171967078_1000.png",
  productUrl: "https://village6k.co.kr/product/laundrybar-oatmeal"
  },
  {
  id: 106,
  name: "소니 24-70 GM II",
  priceDay: 25000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659859920988_1000.png",
  productUrl: "https://village6k.co.kr/product/shampoobar-blackbean-41"
  },
  {
  id: 107,
  name: "소니 70-200 GM II",
  priceDay: 30000,
  originalPrice: 30000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659859932657_1000.png",
  productUrl: "https://village6k.co.kr/product/shampoobar-blackbean-41-96",
  tag: "SALE"
  },
  {
  id: 108,
  name: "어퓨쳐 2X 프레넬 렌즈(300용)",
  priceDay: 5000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687341940415_1000.png",
  productUrl: "https://village6k.co.kr/product/b9ea2468-ce5e-4b9a-b5f5-56848e5b3aa6"
  },
  {
  id: 109,
  name: "어퓨쳐 파워스테이션",
  priceDay: 10000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687341725827_1000.png",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-54-123"
  },
  {
  id: 110,
  name: "인터컴 (5세트, 이어셋 포함)",
  priceDay: 30000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659172080387_1000.png",
  productUrl: "https://village6k.co.kr/product/loofahsponge-slice"
  },
  {
  id: 111,
  name: "로닌 RS2 프로",
  priceDay: 30000,
  category: "짐벌/그립/달리",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171909246_1000.png",
  productUrl: "https://village6k.co.kr/product/paperlaundry-eucalyptus-75"
  },
  {
  id: 112,
  name: "소니 A7S3 풀세트",
  priceDay: 80000,
  category: "카메라 풀세트",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658929344006_1000.png",
  productUrl: "https://village6k.co.kr/product/milk"
  },
  {
  id: 113,
  name: "툴콘 TG-1800K (1.8kW, 16kg)",
  priceDay: 30000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659172098495_1000.png",
  productUrl: "https://village6k.co.kr/product/loofahsponge"
  },
  {
  id: 114,
  name: "애플박스 세트 ​(풀/하프/쿼터/팬케잌)​",
  priceDay: 5000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659172120673_1000.png",
  productUrl: "https://village6k.co.kr/product/loofahsponge-slice-84"
  },
  {
  id: 115,
  name: "사다리",
  priceDay: 5000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687448450830_1000.png",
  productUrl: "https://village6k.co.kr/product/1891de4a-95a1-4ade-9bdd-42529cf3511a"
  },
  {
  id: 116,
  name: "포그 머신 (용액 포함)",
  priceDay: 20000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659172158925_1000.png",
  productUrl: "https://village6k.co.kr/product/loofahsponge-slice-84-85-86-87"
  },
  {
  id: 117,
  name: "헤이저 머신 (용액 포함, 지속 분사)",
  priceDay: 30000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659172172954_1000.png",
  productUrl: "https://village6k.co.kr/product/loofahsponge-slice-84-85-86"
  },
  {
  id: 118,
  name: "로데 비디오 마이크 프로 +",
  priceDay: 10000,
  category: "오디오",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171984248_1000.png",
  productUrl: "https://village6k.co.kr/product/laundrybar-mugwort"
  },
  {
  id: 119,
  name: "소니 ECM - 673(붐마이크 세팅)",
  priceDay: 10000,
  category: "오디오",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659172009292_1000.png",
  productUrl: "https://village6k.co.kr/product/laundrybar-mugwort-79"
  },
  {
  id: 120,
  name: "줌 F6",
  priceDay: 20000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659172023459_1000.png",
  productUrl: "https://village6k.co.kr/product/laundrybar-mugwort-79-80"
  },
  {
  id: 121,
  name: "줌 H8(핸디 레코더)",
  priceDay: 20000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1663089295648_1000.png",
  productUrl: "https://village6k.co.kr/product/laundrybar-mugwort-79-80-97"
  },
  {
  id: 122,
  name: "붐마이크 거치대 홀더",
  priceDay: 5000,
  category: "오디오",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1663089506513_1000.png",
  productUrl: "https://village6k.co.kr/product/laundrybar-mugwort-79-80-81"
  },
  {
  id: 123,
  name: "지윤 크레인 3S",
  priceDay: 30000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171921755_1000.png",
  productUrl: "https://village6k.co.kr/product/paperlaundry-eucalyptus-75-76"
  },
  {
  id: 124,
  name: "숄더리그",
  priceDay: 10000,
  category: "기타",
  image: "",
  productUrl: "https://village6k.co.kr/product/paperlaundry-eucalyptus-75-76-77"
  },
  {
  id: 125,
  name: "맨프로토 143A (카메라 거치 가능 대형 매직암)",
  priceDay: 5000,
  category: "카메라",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171948310_1000.png",
  productUrl: "https://village6k.co.kr/product/paperlaundry-eucalyptus-75-76-77-78"
  },
  {
  id: 126,
  name: "슈퍼클램프",
  priceDay: 3000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687448287617_1000.png",
  productUrl: "https://village6k.co.kr/product/1f31e31b-b1da-4faf-9101-180ccbd63f97"
  },
  {
  id: 127,
  name: "홀리랜드 마스 400S 프로 (1:2 가능, 앱 모니터링 가능)",
  priceDay: 20000,
  originalPrice: 25000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171607648_1000.png",
  productUrl: "https://village6k.co.kr/product/72d065fb-f909-4a49-a357-58146867ac34-67",
  tag: "SALE"
  },
  {
  id: 128,
  name: "홀리랜드 마스 400S (앱 모니터링 가능)",
  priceDay: 20000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171697197_1000.png",
  productUrl: "https://village6k.co.kr/product/72d065fb-f909-4a49-a357-58146867ac34"
  },
  {
  id: 129,
  name: "테라덱 볼트 1000XT (1:2 가능)",
  priceDay: 30000,
  originalPrice: 40000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171714721_1000.png",
  productUrl: "https://village6k.co.kr/product/dishbar-oatmeal",
  tag: "SALE"
  },
  {
  id: 130,
  name: "테라덱 볼트 500LT",
  priceDay: 25000,
  originalPrice: 30000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171733111_1000.png",
  productUrl: "https://village6k.co.kr/product/dishbar-oatmeal-65",
  tag: "SALE"
  },
  {
  id: 131,
  name: "바식스 아톰 500 (앱 모니터링 가능)",
  priceDay: 20000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171746173_1000.png",
  productUrl: "https://village6k.co.kr/product/72d065fb-f909-4a49-a357-58146867ac34-67-68"
  },
  {
  id: 132,
  name: "5인치 프리뷰 모니터(포트키, TVlogic)",
  priceDay: 20000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687448706801_1000.png",
  productUrl: "https://village6k.co.kr/product/dishbar-soapberry-64-100"
  },
  {
  id: 133,
  name: "7인치 프리뷰 모니터(포트키)",
  priceDay: 20000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687448728604_1000.png",
  productUrl: "https://village6k.co.kr/product/dishbar-soapberry-64-100-101"
  },
  {
  id: 134,
  name: "스몰HD INDIE7 (케이지 세팅)",
  priceDay: 25000,
  originalPrice: 25000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171757887_1000.png",
  productUrl: "https://village6k.co.kr/product/001f62cf-ab32-461f-87c0-4df130b444fc",
  tag: "SALE"
  },
  {
  id: 135,
  name: "TVLogic LVM-170A",
  priceDay: 30000,
  originalPrice: 30000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171769832_1000.png",
  productUrl: "https://village6k.co.kr/product/fc721926-5fba-4362-8d09-bf1b3c3d29cc",
  tag: "SALE"
  },
  {
  id: 136,
  name: "블랙매직 멀티뷰 4HD (4채널 모니터링 어댑터)",
  priceDay: 15000,
  category: "모니터/무선",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171786446_1000.png",
  productUrl: "https://village6k.co.kr/product/001f62cf-ab32-461f-87c0-4df130b444fc-71-72-73"
  },
  {
  id: 137,
  name: "틸타 뉴클리어스-M",
  priceDay: 20000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171805088_1000.png",
  productUrl: "https://village6k.co.kr/product/001f62cf-ab32-461f-87c0-4df130b444fc-71"
  },
  {
  id: 138,
  name: "시네로이드 CFL-800 세트",
  priceDay: 20000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658995996849_1000.png",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-54-55-56-57-58-59"
  },
  {
  id: 139,
  name: "V마운트 배터리 세트(3개)",
  priceDay: 10000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687427926990_1000.png",
  productUrl: "https://village6k.co.kr/product/e5874f7f-b02e-40a8-8660-05d69c59e8f5"
  },
  {
  id: 140,
  name: "파보튜브II 6C",
  priceDay: 5000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1663117966152_1000.png",
  productUrl: "https://village6k.co.kr/product/toothpaste-98-102"
  },
  {
  id: 141,
  name: "어퓨쳐 B7C 2KIT",
  priceDay: 20000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658996022380_1000.png",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-54-55-111"
  },
  {
  id: 142,
  name: "어퓨쳐 B7C 8KIT",
  priceDay: 40000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658996022380_1000.png",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-54-55"
  },
  {
  id: 143,
  name: "어퓨쳐 MC4 트래블 KIT",
  priceDay: 20000,
  category: "조명",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658996035865_1000.png",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-54-55-56"
  },
  {
  id: 144,
  name: "C-BOOM (AVENGER D600)",
  priceDay: 5000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659487696145_1000.png",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-54-55-56-57-58-59-60-93"
  },
  {
  id: 145,
  name: "C스탠드(그립암, 그립헤드 포함)",
  priceDay: 5000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1672317203776_1000.png",
  productUrl: "https://village6k.co.kr/product/9f85661b-2361-4f33-8305-d3fc5d236324"
  },
  {
  id: 146,
  name: "콤보 스탠드",
  priceDay: 5000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687341959970_1000.png",
  productUrl: "https://village6k.co.kr/product/9f85661b-2361-4f33-8305-d3fc5d236324-131"
  },
  {
  id: 147,
  name: "스크림 세트(고보)",
  priceDay: 10000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659004060283_1000.png",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-54-55-56-57-58-59-60"
  },
  {
  id: 148,
  name: "석자/넉자 플로피",
  priceDay: 5000,
  category: "기타",
  image: "",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-54-55-56-57-58-59-60-61-62"
  },
  {
  id: 149,
  name: "소니 FE 28-135 렌즈 (E 마운트)",
  priceDay: 30000,
  originalPrice: 30000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658999680676_1000.png",
  productUrl: "https://village6k.co.kr/product/shampoobar-blackbean-41-42",
  tag: "SALE"
  },
  {
  id: 150,
  name: "소니 FE 24-105mm 렌즈 (E 마운트)",
  priceDay: 20000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687341834927_1000.png",
  productUrl: "https://village6k.co.kr/product/shampoobar-blackbean-41-42-110"
  },
  {
  id: 151,
  name: "시그마 아트 줌렌즈 세트",
  priceDay: 40000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658999547037_1000.png",
  productUrl: "https://village6k.co.kr/product/shampoobar-blackbean-44"
  },
  {
  id: 152,
  name: "삼양 VDSLR MK2 세트",
  priceDay: 50000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658999558575_1000.png",
  productUrl: "https://village6k.co.kr/product/shampoobar-blackbean"
  },
  {
  id: 153,
  name: "삼양 100mm 매크로 렌즈",
  priceDay: 10000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658999571528_1000.png",
  productUrl: "https://village6k.co.kr/product/shampoobar-kelp-43"
  },
  {
  id: 154,
  name: "틸타 MB-T12 매트박스 (4x5.65, 3stages)",
  priceDay: 20000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658999584976_1000.png",
  productUrl: "https://village6k.co.kr/product/af421324-0de6-4279-b3c3-b2b6f8f912d1"
  },
  {
  id: 155,
  name: "틸타 MB-T16 미라지 매트박스 (4x5.65, 경량형)",
  priceDay: 15000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659003135899_1000.png",
  productUrl: "https://village6k.co.kr/product/af421324-0de6-4279-b3c3-b2b6f8f912d1-46"
  },
  {
  id: 156,
  name: "매트박스 미니(틸타 or 스몰리그)",
  priceDay: 7000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659002922114_1000.png",
  productUrl: "https://village6k.co.kr/product/shampoobar-peppermint"
  },
  {
  id: 157,
  name: "NiSi PL 필터 (4x5.65)",
  priceDay: 7000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687429097363_1000.png",
  productUrl: "https://village6k.co.kr/product/286793c7-6d23-4e2a-8290-64eba4659547"
  },
  {
  id: 158,
  name: "티펜 Black Pro-Mist 필터 (4x5.65 or 67-82mm)",
  priceDay: 7000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659002716850_1000.png",
  productUrl: "https://village6k.co.kr/product/128e4c67-099c-4a81-8978-7c781480e944-48-49"
  },
  {
  id: 159,
  name: "슈나이더 Hollywood Black Magic 필터 (4x5.65 or 67-82mm)",
  priceDay: 7000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659002735290_1000.png",
  productUrl: "https://village6k.co.kr/product/128e4c67-099c-4a81-8978-7c781480e944-48-49-50"
  },
  {
  id: 160,
  name: "H&Y REVORING (3-1000 ND + CPL 필터)",
  priceDay: 7000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659002743859_1000.png",
  productUrl: "https://village6k.co.kr/product/128e4c67-099c-4a81-8978-7c781480e944"
  },
  {
  id: 161,
  name: "소니 A7S3 바디 세트 + FE 28-135 렌즈",
  priceDay: 70000,
  originalPrice: 90000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658991096810_1000.png",
  productUrl: "https://village6k.co.kr/product/cleansingbar-calendula-30",
  tag: "SALE"
  },
  {
  id: 162,
  name: "소니 A7S3 바디 세트 + 24-70 GM 렌즈",
  priceDay: 65000,
  originalPrice: 85000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658991403554_1000.png",
  productUrl: "https://village6k.co.kr/product/cleansingbar-calendula-30-31",
  tag: "SALE"
  },
  {
  id: 163,
  name: "소니 FX3 바디 세트 + FE 28-135 렌즈",
  priceDay: 80000,
  originalPrice: 100000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658991122620_1000.png",
  productUrl: "https://village6k.co.kr/product/cleansingbar-calendula-32-33-34",
  tag: "SALE"
  },
  {
  id: 164,
  name: "소니 FX3 바디 세트 + 24-70 GM 렌즈",
  priceDay: 75000,
  originalPrice: 95000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658991423316_1000.png",
  productUrl: "https://village6k.co.kr/product/cleansingbar-calendula-32-33",
  tag: "SALE"
  },
  {
  id: 165,
  name: "소니 FX6 바디 세트 + FE 28-135 렌즈",
  priceDay: 90000,
  originalPrice: 130000,
  category: "카메라 풀세트",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658991018197_1000.png",
  productUrl: "https://village6k.co.kr/product/cleansingbar-calendula-32-35-36",
  tag: "SALE"
  },
  {
  id: 166,
  name: "소니 FX9 바디 세트 + FE 28-135 렌즈",
  priceDay: 90000,
  originalPrice: 150000,
  category: "카메라 풀세트",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658991073578_1000.png",
  productUrl: "https://village6k.co.kr/product/cleansingbar-calendula-32-35-38-39",
  tag: "SALE"
  },
  {
  id: 167,
  name: "오즈모 포켓3",
  priceDay: 20000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1733384389515_1000.png",
  productUrl: "https://village6k.co.kr/product/7b8a3cc0-fda7-428f-968f-e6c135b5201e"
  },
  {
  id: 168,
  name: "캐논 R6 MARK II",
  priceDay: 40000,
  originalPrice: 40000,
  category: "카메라",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1733384375796_1000.png",
  productUrl: "https://village6k.co.kr/product/43ae079a-25a3-436f-8ad7-c4c66483da64",
  tag: "SALE"
  },
  {
  id: 169,
  name: "캐논 5D MARK IV(오막포)",
  priceDay: 30000,
  originalPrice: 40000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687342019585_1000.png",
  productUrl: "https://village6k.co.kr/product/7b4f7ced-a1ae-43a5-a8b7-06dada4a5cf6-135",
  tag: "SALE"
  },
  {
  id: 170,
  name: "소니 FX3 풀세트",
  priceDay: 90000,
  category: "카메라 풀세트",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658929270589_1000.png",
  productUrl: "https://village6k.co.kr/product/milk-89"
  },
  {
  id: 171,
  name: "석자/넉자 디퓨젼, 그리드",
  priceDay: 5000,
  category: "기타",
  image: "",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-54-55-56-57-58-59-60-61"
  },
  {
  id: 172,
  name: "반사판",
  priceDay: 5000,
  category: "기타",
  image: "",
  productUrl: "https://village6k.co.kr/product/toothbrush-53-54-55-56-57-58-59-60-61-62-63"
  },
  {
  id: 173,
  name: "IR ND 필터",
  priceDay: 7000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659002753126_1000.png",
  productUrl: "https://village6k.co.kr/product/128e4c67-099c-4a81-8978-7c781480e944-48"
  },
  {
  id: 174,
  name: "매슬리니",
  priceDay: 3000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687448302316_1000.png",
  productUrl: "https://village6k.co.kr/product/21e9b7ce-e2e8-4984-a8cb-cb9b755fabc5"
  },
  {
  id: 175,
  name: "H&Y 가변 어댑터링 (필터 어댑터, 67-82mm)",
  priceDay: 5000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659002760850_1000.png",
  productUrl: "https://village6k.co.kr/product/607a52d8-49ee-403e-acc1-0a6a74184103"
  },
  {
  id: 176,
  name: "시그마 MC-11 (렌즈 어댑터, EF to E)",
  priceDay: 5000,
  category: "렌즈",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659002827526_1000.png",
  productUrl: "https://village6k.co.kr/product/607a52d8-49ee-403e-acc1-0a6a74184103-52"
  },
  {
  id: 177,
  name: "클라우드 백업 서비스 (1캠 기준)",
  priceDay: 10000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1688213999770_1000.png",
  productUrl: "https://village6k.co.kr/product/3c5871b2-7752-4ec2-8614-7005d9ac4c24"
  },
  {
  id: 178,
  name: "TAKSTAR CM-63 (콘덴서 마이크)",
  priceDay: 10000,
  category: "오디오",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1663089617776_1000.png",
  productUrl: "https://village6k.co.kr/product/laundrybar-mugwort-79-80-81-82-83"
  },
  {
  id: 179,
  name: "소니 FX6 풀세트",
  priceDay: 130000,
  category: "카메라 풀세트",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658929249638_1000.png",
  productUrl: "https://village6k.co.kr/product/cleansingbar-menthol"
  },
  {
  id: 180,
  name: "틸타 뉴클리어스-N",
  priceDay: 10000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659172556211_1000.png",
  productUrl: "https://village6k.co.kr/product/001f62cf-ab32-461f-87c0-4df130b444fc-71-72"
  },
  {
  id: 181,
  name: "아템 미니 익스트림 ISO",
  priceDay: 30000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659171885982_1000.png",
  productUrl: "https://village6k.co.kr/product/001f62cf-ab32-461f-87c0-4df130b444fc-71-72-73-74"
  },
  {
  id: 182,
  name: "소니 FX9 풀세트",
  priceDay: 100000,
  originalPrice: 150000,
  category: "카메라 풀세트",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658929228751_1000.png",
  productUrl: "https://village6k.co.kr/product/luffasponge-hand",
  tag: "SALE"
  },
  {
  id: 183,
  name: "BMPCC 6K Pro 풀세트",
  priceDay: 60000,
  category: "카메라 풀세트",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658929202810_1000.png",
  productUrl: "https://village6k.co.kr/product/Seasponge-27"
  },
  {
  id: 184,
  name: "오디오 테크니카 ATH-M50X",
  priceDay: 10000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659172062633_1000.png",
  productUrl: "https://village6k.co.kr/product/laundrybar-mugwort-79-80-81-82"
  },
  {
  id: 185,
  name: "촬영용 턴테이블 ​(직경 60cm, 하중 80kg)​",
  priceDay: 20000,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1659172188372_1000.png",
  productUrl: "https://village6k.co.kr/product/loofahsponge-slice-84-85"
  },
  {
  id: 186,
  name: "BMPCC 6K 풀세트",
  priceDay: 50000,
  category: "카메라 풀세트",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1658929186891_1000.png",
  productUrl: "https://village6k.co.kr/product/Seasponge"
  },
  {
  id: 187,
  name: "웨건, 테이블, 릴선, 리드선 등 서비스",
  priceDay: 0,
  category: "기타",
  image: "https://contents.sixshop.com/thumbnails/uploadedFiles/218807/product/image_1687448465847_1000.png",
  productUrl: "https://village6k.co.kr/product/loofahsponge-slice-84-85-86-87-88"
  },
];

export const categories = [
  "카메라 풀세트",
  "카메라",
  "삼각대",
  "렌즈",
  "조명",
  "모니터/무선",
  "짐벌/그립/달리",
  "오디오",
  "기타",
];

export const formatPrice = (price: number): string => {
  return `${price.toLocaleString()}원`;
};

export const KAKAO_URL = "https://pf.kakao.com/_xhPMls";
