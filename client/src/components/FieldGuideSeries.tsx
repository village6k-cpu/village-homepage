import { Link } from "wouter";
import { fieldGuides, type FieldGuide } from "@/lib/fieldGuides";

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

export default function FieldGuideSeries({ guides, searching }: { guides: FieldGuide[]; searching: boolean }) {
  if (guides.length === 0) return null;

  return (
    <section className="mt-12 md:mt-16" aria-labelledby="field-guide-heading">
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="mb-2 text-[11px] font-bold tracking-[0.18em] text-accent">VILLAGE FIELD NOTES / 001</p>
          <h2 id="field-guide-heading" className="text-2xl font-black tracking-tight md:text-3xl">촬영 전, 꼭 알아둘 것들.</h2>
        </div>
        <span className="text-xs font-medium text-text-secondary">{searching ? `가이드 검색 결과 ${guides.length}편` : "SmallHD 입문 · 3편의 가이드"}</span>
      </div>

      {!searching && (
        <div className="mb-5 grid overflow-hidden rounded-2xl bg-footer-bg lg:grid-cols-[1.15fr_1fr]">
          <div className="p-7 text-white sm:p-10">
            <span className="inline-flex rounded-md border border-[#FF9479]/40 px-2.5 py-1 text-[11px] font-bold text-[#FF9479]">처음 빌렸다면 · 필수 확인</span>
            <h3 className="mt-6 text-3xl font-black leading-[1.3] tracking-tight sm:text-4xl">좋은 촬영의 시작은,<br />안전한 연결부터.</h3>
            <p className="mt-4 max-w-md text-sm leading-7 text-zinc-300">SmallHD 모니터를 처음 쓰는 당신에게.<br />케이블을 꽂는 순간부터 마지막 철수까지,<br className="hidden sm:block" /> 현장에서 꼭 필요한 기본을 모았습니다.</p>
            <Link href={`/guide/${fieldGuides[0].id}`} className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-lg bg-accent px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              1편부터 읽기 <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="flex flex-col justify-between border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0">
            <div className="relative mb-6 overflow-hidden rounded-xl bg-white">
              <img src="/images/products/134.png" alt="빌리지 대여 장비 SmallHD 모니터" width="714" height="942" className="aspect-[2/1] w-full object-cover object-center" />
              <span className="absolute left-4 top-3 text-[10px] font-bold tracking-[0.15em] text-text-secondary">SMALLHD / MONITOR</span>
            </div>
            <PowerSequence />
            <p className="mt-3 text-xs leading-5 text-zinc-400">케이블 작업은 양쪽 전원 OFF 후.<br />SDI·외부 전원 연결 순서는 1편에서 꼭 확인하세요.</p>
          </div>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        {guides.map((guide) => (
          <Link key={guide.id} href={`/guide/${guide.id}`} className="group flex h-full flex-col rounded-2xl border border-divider bg-white p-6 transition-colors hover:border-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
            <div className="mb-7 flex items-center justify-between">
              <span className="text-4xl font-black tracking-tighter text-divider" aria-label={`${guide.episode}편`}>{guide.episode}</span>
              <span aria-hidden="true" className="material-symbols-outlined text-accent !text-2xl">{guide.icon}</span>
            </div>
            <p className="mb-2 text-[10px] font-bold tracking-[0.12em] text-text-secondary">SMALLHD ESSENTIALS</p>
            <h3 className="text-lg font-bold leading-relaxed tracking-tight group-hover:text-accent">{guide.title}</h3>
            <p className="mb-6 mt-3 text-sm leading-6 text-text-secondary">{guide.summary}</p>
            <div className="mt-auto flex items-center justify-between border-t border-divider pt-4 text-xs font-bold">
              <span className="text-text-secondary">읽는 시간 {guide.readTime}</span>
              <span className="text-accent">가이드 읽기 <span aria-hidden="true">↗</span></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
