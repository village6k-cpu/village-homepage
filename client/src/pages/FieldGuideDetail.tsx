import { Link, useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { PowerSequence } from "@/components/FieldGuideSeries";
import { fieldGuides } from "@/lib/fieldGuides";
import { KAKAO_URL } from "@/lib/products";
import NotFound from "@/pages/NotFound";

export default function FieldGuideDetail() {
  const { slug } = useParams<{ slug: string }>();
  const guide = fieldGuides.find((item) => item.id === slug);
  if (!guide) return <NotFound />;
  const nextGuide = fieldGuides[fieldGuides.indexOf(guide) + 1];

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />
      <div className="h-20" />
      <main className="mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
        <Link href="/guide" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-text-secondary hover:text-accent"><span aria-hidden="true">←</span> 장비 사용법</Link>

        <header className="border-b border-divider pb-10 pt-7 md:pb-12">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-[11px] font-bold">
            <span className="tracking-[0.14em] text-accent">VILLAGE FIELD NOTES</span>
            <span className="text-divider" aria-hidden="true">/</span>
            <span className="text-text-secondary">SMALLHD · {guide.episode}편</span>
            <span className="rounded-md bg-white px-2.5 py-1.5 text-text-secondary">{guide.readTime} 읽기</span>
          </div>
          <h1 className="max-w-3xl text-3xl font-black leading-[1.35] tracking-tight md:text-5xl md:leading-[1.3]">{guide.title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-text-secondary">{guide.intro}</p>
        </header>

        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-14">
          <aside className="lg:sticky lg:top-28">
            <p className="mb-4 text-[11px] font-bold tracking-[0.14em] text-text-secondary">IN THIS GUIDE</p>
            <nav aria-label="이 가이드의 목차" className="flex flex-col gap-1 border-l border-divider">
              {guide.sections.map((section, index) => (
                <a key={section.title} href={`#section-${index + 1}`} className="border-l-2 border-transparent px-4 py-2 text-sm leading-6 text-text-secondary transition-colors hover:border-accent hover:text-accent">{section.title}</a>
              ))}
            </nav>
            <Link href="/product/134" className="mt-5 inline-flex min-h-11 items-center gap-2 text-xs font-bold text-accent">SmallHD 대여 장비 보기 <span aria-hidden="true">↗</span></Link>
          </aside>

          <article className="min-w-0">
            <div className="rounded-2xl bg-footer-bg p-6 text-white sm:p-8">
              <p className="mb-3 text-[11px] font-bold tracking-[0.14em] text-[#FF9479]">이것만은 꼭 기억하세요</p>
              <p className="text-xl font-bold leading-relaxed tracking-tight sm:text-2xl">{guide.takeaway}</p>
              {guide.episode === "01" && (
                <div className="mt-6">
                  <PowerSequence />
                  <p className="mt-4 text-xs leading-6 text-zinc-300">외부 전원선을 사용하는 SDI 세팅은 전원 OFF만으로 충분하지 않습니다.<br />아래 케이블 연결·분리 순서도 함께 지켜주세요.</p>
                </div>
              )}
            </div>

            <div className="mt-10 space-y-10 sm:mt-12 sm:space-y-12">
              {guide.sections.map((section, index) => (
                <section key={section.title} id={`section-${index + 1}`} className="scroll-mt-28">
                  <p className="mb-2 text-[11px] font-bold tracking-[0.12em] text-accent">NOTE {String(index + 1).padStart(2, "0")}</p>
                  <h2 className="text-xl font-bold leading-relaxed tracking-tight sm:text-2xl">{section.title}</h2>
                  <p className="mt-4 text-[15px] leading-8 text-text-secondary">{section.body}</p>
                  {section.steps && (
                    <ol className="mt-5 divide-y divide-divider rounded-xl border border-divider bg-white px-5 sm:px-6">
                      {section.steps.map((step, stepIndex) => (
                        <li key={step} className="flex gap-3 py-4 text-sm leading-7">
                          <span className="shrink-0 pt-0.5 text-xs font-bold text-accent" aria-hidden="true">{String(stepIndex + 1).padStart(2, "0")}</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                  {section.tip && <p className="mt-5 border-l-2 border-accent pl-4 text-sm leading-7 text-text-secondary"><strong className="mb-1 block text-text-primary">현장에서 기억하기</strong>{section.tip}</p>}
                </section>
              ))}
            </div>

            <section className="mt-12 rounded-2xl border border-accent/30 bg-white p-6 sm:p-8" aria-labelledby="checklist-heading">
              <p className="mb-2 text-[11px] font-bold tracking-[0.14em] text-accent">READY TO SHOOT</p>
              <h2 id="checklist-heading" className="text-xl font-bold">촬영 전, 마지막 확인.</h2>
              <ul className="mt-5 space-y-3">
                {guide.checklist.map((item) => <li key={item} className="flex gap-3 text-sm leading-6"><span className="font-bold text-accent" aria-hidden="true">✓</span>{item}</li>)}
              </ul>
            </section>

            <details className="mt-7 border-b border-divider pb-5 text-xs text-text-secondary">
              <summary className="cursor-pointer py-2 font-bold">참고한 제조사 자료</summary>
              <p className="mb-3 mt-2 leading-6">빌리지 이용 수칙과 제조사 안내를 바탕으로 정리했습니다. 모델·펌웨어·전원 구성에 따라 메뉴와 사용 조건이 다를 수 있습니다.</p>
              <ul className="space-y-2">
                {guide.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-block py-1 underline underline-offset-4 hover:text-accent">{source.title} ↗</a></li>)}
              </ul>
            </details>

            <div className="mt-8 rounded-2xl bg-white p-6 sm:p-8">
              <p className="text-lg font-bold">헷갈리면, 연결하기 전에 물어보세요.</p>
              <p className="mt-2 text-sm leading-7 text-text-secondary">카메라 모델과 연결 단자, 전원 구성을 알려주시면 더 정확하게 안내해드릴 수 있습니다.</p>
              <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-accent hover:underline">카카오톡 채널 빌리지에 문의하기 <span aria-hidden="true">↗</span></a>
            </div>

            <nav aria-label="시리즈 이어 읽기" className="mt-10 border-t border-divider pt-7">
              {nextGuide ? (
                <Link href={`/guide/${nextGuide.id}`} className="group block">
                  <span className="text-xs font-bold text-accent">다음 가이드 · {nextGuide.episode}편</span>
                  <p className="mt-3 flex items-center justify-between gap-4 text-lg font-bold leading-7 group-hover:text-accent">{nextGuide.title}<span aria-hidden="true">→</span></p>
                </Link>
              ) : <Link href="/guide" className="inline-flex min-h-11 items-center gap-3 font-bold text-accent">전체 장비 사용법 보기 <span aria-hidden="true">→</span></Link>}
              <div className="mt-5 flex flex-wrap gap-2">
                {fieldGuides.map((item) => <Link key={item.id} href={`/guide/${item.id}`} aria-current={item.id === guide.id ? "page" : undefined} className={`rounded-lg border px-4 py-3 text-xs font-bold ${item.id === guide.id ? "border-accent bg-accent/5 text-accent" : "border-divider hover:border-accent"}`}>{item.episode}편</Link>)}
              </div>
            </nav>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
