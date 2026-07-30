// VILLAGE — Equipment Guide Search CTA
import { Link } from "wouter";

export default function ReelsSection() {
  return (
    <section className="bg-bg-primary py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Link
          href="/guide"
          className="group grid overflow-hidden rounded-3xl border border-divider bg-white md:grid-cols-[1fr_auto]"
        >
          <div className="p-7 md:p-12">
            <p className="mb-3 text-xs font-bold tracking-[0.16em] text-accent">EQUIPMENT GUIDE</p>
            <h2 className="text-2xl font-black leading-tight text-text-primary md:text-3xl">장비 사용 중 막히셨나요?</h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-text-muted md:text-base">
              조임쇠가 안 잠기거나 플레이트 방향이 헷갈릴 때, 억지로 조작하지 마세요.<br className="hidden md:block" />
              장비명이나 문제를 검색하면 빌리지의 짧은 설명 영상을 바로 볼 수 있습니다.
            </p>
            <div className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-bold text-white transition-transform group-hover:translate-x-1">
              사용법 영상 검색
              <span className="material-symbols-outlined !text-xl">arrow_forward</span>
            </div>
          </div>
          <div className="flex min-h-[180px] items-center justify-center bg-footer-bg px-10 py-8 md:min-w-[280px]">
            <div className="text-center">
              <span className="material-symbols-outlined text-accent !text-7xl" style={{ fontVariationSettings: "'FILL' 1" }}>play_circle</span>
              <p className="mt-3 text-sm font-bold text-white">촬영 · 검색 · 바로 해결</p>
              <p className="mt-1 text-xs text-zinc-500">조임쇠 · 플레이트 · 나비나사</p>
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
