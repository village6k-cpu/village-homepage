import { Link } from "wouter";
import type { FieldGuide } from "@/lib/fieldGuides";

export function PowerSequence() {
  return (
    <div className="grid gap-3 sm:grid-cols-2" aria-label="빌리지 전원 사용 순서">
      {[
        { label: "켤 때", first: "카메라", second: "모니터", icon: "power_settings_new" },
        { label: "끌 때", first: "모니터", second: "카메라", icon: "power_off" },
      ].map((sequence) => (
        <div key={sequence.label} className="rounded-xl border border-white/15 bg-white/5 px-5 py-4">
          <p className="mb-2 flex items-center gap-2 text-xs font-bold text-white/60">
            <span aria-hidden="true" className="material-symbols-outlined !text-base text-[#FF9479]">{sequence.icon}</span>
            {sequence.label}
          </p>
          <p className="flex items-center gap-3 text-lg font-bold tracking-tight text-white">
            {sequence.first}<span aria-label="다음" className="text-[#FF9479]">→</span>{sequence.second}
          </p>
        </div>
      ))}
    </div>
  );
}

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
