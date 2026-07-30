export interface EquipmentGuideVideo {
  id: string;
  title: string;
  summary: string;
  equipmentNames: string[];
  keywords: string[];
  required: boolean;
  thumbnailUrl: string;
  watchUrl: string;
  embedUrl: string;
}

interface EquipmentGuideApiResponse {
  success: boolean;
  configured?: boolean;
  guides?: EquipmentGuideVideo[];
  error?: string;
}

export interface EquipmentGuideResult {
  configured: boolean;
  guides: EquipmentGuideVideo[];
}

export const EQUIPMENT_GUIDES_API_URL =
  import.meta.env.VITE_GUIDES_API_URL?.trim() ||
  "https://today-dashboard-ten.vercel.app/api/guides";

export async function fetchEquipmentGuides(signal?: AbortSignal): Promise<EquipmentGuideResult> {
  const response = await fetch(EQUIPMENT_GUIDES_API_URL, { signal });
  const body = (await response.json().catch(() => null)) as EquipmentGuideApiResponse | null;

  if (!response.ok || !body?.success) {
    throw new Error(body?.error || "사용법 영상을 불러오지 못했습니다.");
  }

  return {
    configured: Boolean(body.configured),
    guides: Array.isArray(body.guides) ? body.guides : [],
  };
}

export function normalizeEquipmentGuideText(value: unknown) {
  return String(value ?? "")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/아푸투레|아푸투어|aputure/g, "아푸처")
    .replace(/[^0-9a-z가-힣]+/g, "");
}

export function filterEquipmentGuides(guides: EquipmentGuideVideo[], query: string) {
  const tokens = query
    .split(/[\s,，/]+/)
    .map(normalizeEquipmentGuideText)
    .filter(Boolean);

  if (tokens.length === 0) return guides;

  const normalizedQuery = normalizeEquipmentGuideText(query);

  return guides.filter((guide) => {
    const equipmentNameMatch = guide.equipmentNames.some((name) => {
      const normalizedName = normalizeEquipmentGuideText(name);
      return normalizedName.length >= 2 && (
        normalizedQuery.includes(normalizedName) || normalizedName.includes(normalizedQuery)
      );
    });
    if (equipmentNameMatch) return true;

    const haystack = normalizeEquipmentGuideText([
      guide.title,
      guide.summary,
      ...guide.equipmentNames,
      ...guide.keywords,
    ].join(" "));
    return tokens.every((token) => haystack.includes(token));
  });
}
