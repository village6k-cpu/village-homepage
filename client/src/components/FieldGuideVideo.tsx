import { useState } from "react";
import type { FieldGuide } from "@/lib/fieldGuides";

export default function FieldGuideVideo({ video }: { video: NonNullable<FieldGuide["video"]> }) {
  const [selection, setSelection] = useState<{ index: number; playback: number } | null>(null);
  const chapter = selection === null ? undefined : video.chapters?.[selection.index];
  const embedUrl = new URL(video.embedUrl);
  if (chapter) {
    embedUrl.searchParams.set("start", String(chapter.startSeconds));
    embedUrl.searchParams.set("end", String(chapter.endSeconds));
    embedUrl.searchParams.set("autoplay", "1");
  }

  return (
    <section aria-labelledby="guide-video-heading" className="mt-8">
      <h2 id="guide-video-heading" className="mb-3 text-lg font-bold">{video.title}</h2>
      <div className="aspect-video overflow-hidden rounded-2xl bg-black">
        <iframe
          key={selection?.playback}
          src={embedUrl.toString()}
          title={video.title}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
      {video.chapters && (
        <div className="mt-4">
          <p className="mb-3 text-sm text-text-secondary">보고 싶은 동작을 누르면 해당 장면이 재생됩니다.</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {video.chapters.map((item, index) => (
              <button
                key={item.startSeconds}
                type="button"
                aria-pressed={selection?.index === index}
                onClick={() => setSelection((previous) => ({
                  index,
                  playback: (previous?.playback ?? 0) + 1,
                }))}
                className={`min-h-11 rounded-xl border p-3 text-left hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${selection?.index === index ? "border-accent bg-accent/5" : "border-divider bg-white"}`}
              >
                <span className="block text-sm font-bold text-accent">▶ {item.title}</span>
                <span className="mt-1 block text-xs leading-6 text-text-secondary">{item.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="mt-2 flex flex-wrap items-center gap-x-3 text-xs text-text-secondary">
        <span>{video.credit}</span>
        <a href={video.watchUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-bold text-accent hover:underline">YouTube에서 보기 ↗</a>
      </div>
    </section>
  );
}
