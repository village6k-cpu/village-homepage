import { Link } from "wouter";
import type { FieldGuide } from "@/lib/fieldGuides";

export default function FieldGuideCard({ guide }: { guide: FieldGuide }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-accent/50 bg-white">
      <Link href={`/guide/${guide.id}`} className="group flex h-full flex-col focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-accent">
        <div className="relative overflow-hidden bg-white">
          <img src={guide.imageUrl} alt={guide.equipmentLabel} className="aspect-video w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]" loading="lazy" />
          <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-md bg-bg-primary px-2.5 py-1.5 text-[11px] font-bold text-text-secondary">
            <span aria-hidden="true" className="material-symbols-outlined !text-base">article</span>글 안내
          </span>
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-md bg-accent/10 px-2.5 py-1 text-[11px] font-bold text-accent">필수 확인</span>
            <span className="rounded-md bg-bg-primary px-2.5 py-1 text-[11px] font-medium text-text-muted">{guide.equipmentLabel}</span>
          </div>
          <h2 className="text-lg font-bold leading-snug group-hover:text-accent">{guide.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-text-secondary">{guide.summary}</p>
          <p className="mt-auto pt-4 text-xs font-bold text-accent">안내 읽기 <span aria-hidden="true">→</span></p>
        </div>
      </Link>
    </article>
  );
}
