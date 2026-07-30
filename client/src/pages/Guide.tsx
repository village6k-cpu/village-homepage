// VILLAGE — YouTube Equipment Guide Page (/guide)
import { useEffect, useMemo, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fetchEquipmentGuides, filterEquipmentGuides } from "@/lib/equipmentGuides";
import type { EquipmentGuideVideo } from "@/lib/equipmentGuides";

function initialSearchQuery() {
  if (typeof window === "undefined") return "";
  return new URLSearchParams(window.location.search).get("q")?.trim() || "";
}

function GuideCard({ guide }: { guide: EquipmentGuideVideo }) {
  const [playing, setPlaying] = useState(false);

  return (
    <article className={`overflow-hidden rounded-2xl border bg-white ${guide.required ? "border-accent/50" : "border-divider"}`}>
      {playing ? (
        <div className="aspect-video bg-black">
          <iframe
            src={guide.embedUrl}
            title={guide.title}
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group relative block aspect-video w-full overflow-hidden bg-zinc-900 text-left"
        >
          {guide.thumbnailUrl && (
            <img
              src={guide.thumbnailUrl}
              alt=""
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          )}
          <span className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
          <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-accent text-white shadow-lg">
            <span className="material-symbols-outlined !text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
          </span>
          <span className="sr-only">{guide.title} 재생</span>
        </button>
      )}

      <div className="p-5">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          {guide.required && (
            <span className="rounded-md bg-accent/10 px-2.5 py-1 text-[11px] font-bold text-accent">필수 확인</span>
          )}
          {guide.equipmentNames.slice(0, 2).map((name) => (
            <span key={name} className="rounded-md bg-bg-primary px-2.5 py-1 text-[11px] font-medium text-text-muted">
              {name}
            </span>
          ))}
        </div>
        <h2 className="text-lg font-bold leading-snug text-text-primary">{guide.title}</h2>
        {guide.summary && <p className="mt-2 text-sm font-medium leading-relaxed text-text-muted">{guide.summary}</p>}
        <a
          href={guide.watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-accent hover:underline"
        >
          YouTube에서 크게 보기
          <span className="material-symbols-outlined !text-base">open_in_new</span>
        </a>
      </div>
    </article>
  );
}

export default function Guide() {
  const [query, setQuery] = useState(initialSearchQuery);
  const [loading, setLoading] = useState(true);
  const [configured, setConfigured] = useState(false);
  const [guides, setGuides] = useState<EquipmentGuideVideo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    let active = true;
    fetchEquipmentGuides(controller.signal)
      .then((result) => {
        if (!active) return;
        setConfigured(result.configured);
        setGuides(result.guides);
        setError("");
      })
      .catch((reason) => {
        if (reason instanceof DOMException && reason.name === "AbortError") return;
        if (!active) return;
        setError(reason instanceof Error ? reason.message : "사용법 영상을 불러오지 못했습니다.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => {
      active = false;
      controller.abort();
    };
  }, []);

  const visibleGuides = useMemo(() => filterEquipmentGuides(guides, query), [guides, query]);

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />
      <div className="h-20" />

      <main className="mx-auto w-full max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <header className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <p className="mb-3 text-xs font-bold tracking-[0.18em] text-accent">EQUIPMENT GUIDE</p>
          <h1 className="text-3xl font-black tracking-tight md:text-4xl">장비 사용법 영상</h1>
          <p className="mt-4 text-sm font-medium leading-relaxed text-text-muted md:text-base">
            장착 방향, 파손 주의, 분실하기 쉬운 부품까지.<br className="hidden sm:block" />
            장비명이나 막힌 부분을 검색하면 짧은 영상으로 바로 확인할 수 있습니다.
          </p>
        </header>

        <label className="mx-auto block max-w-2xl">
          <span className="sr-only">장비명 또는 문제 검색</span>
          <div className="flex items-center gap-3 rounded-2xl border border-divider bg-white px-4 py-3.5 focus-within:border-accent focus-within:ring-2 focus-within:ring-accent/10">
            <span className="material-symbols-outlined text-text-muted">search</span>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="예: 미라지 매트박스, 플레이트, 나비나사"
              className="min-w-0 flex-1 bg-transparent text-base font-medium text-text-primary outline-none placeholder:text-text-muted"
              autoComplete="off"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} className="rounded-lg px-2 py-1 text-xs font-bold text-text-muted hover:bg-bg-primary">
                지우기
              </button>
            )}
          </div>
        </label>

        <div className="mt-8">
          {loading ? (
            <div className="rounded-2xl border border-divider bg-white p-10 text-center text-sm font-medium text-text-muted">사용법 영상을 불러오는 중...</div>
          ) : error ? (
            <div className="rounded-2xl border border-accent/30 bg-accent/5 p-8 text-center">
              <p className="font-bold text-text-primary">영상을 불러오지 못했습니다</p>
              <p className="mt-2 text-sm text-text-muted">{error}</p>
              <button type="button" onClick={() => window.location.reload()} className="mt-4 text-sm font-bold text-accent hover:underline">다시 시도</button>
            </div>
          ) : !configured ? (
            <div className="rounded-2xl border border-divider bg-white p-10 text-center">
              <span className="material-symbols-outlined text-accent !text-5xl">video_library</span>
              <p className="mt-3 font-bold">사용법 영상 준비 중입니다</p>
              <p className="mt-2 text-sm text-text-muted">영상이 등록되면 이곳에서 장비명으로 바로 검색할 수 있습니다.</p>
            </div>
          ) : visibleGuides.length === 0 ? (
            <div className="rounded-2xl border border-divider bg-white p-10 text-center">
              <p className="font-bold">검색 결과가 없습니다</p>
              <p className="mt-2 text-sm text-text-muted">장비 모델명이나 ‘조임쇠’, ‘플레이트’처럼 문제를 바꿔 검색해보세요.</p>
            </div>
          ) : (
            <>
              <div className="mb-4 flex items-center justify-between px-1 text-xs font-bold text-text-muted">
                <span>{query ? `검색 결과 ${visibleGuides.length}개` : `전체 영상 ${visibleGuides.length}개`}</span>
                <span>필수 영상 우선</span>
              </div>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {visibleGuides.map((guide) => <GuideCard key={guide.id} guide={guide} />)}
              </div>
            </>
          )}
        </div>

        <aside className="mt-12 rounded-2xl bg-footer-bg px-6 py-7 text-center text-white md:px-10">
          <p className="font-bold">영상으로 해결되지 않나요?</p>
          <p className="mt-1 text-sm text-zinc-400">장비를 억지로 조작하지 말고 카카오톡 채널 빌리지로 문의해주세요.</p>
        </aside>
      </main>

      <Footer />
    </div>
  );
}
