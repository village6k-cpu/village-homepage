import { Link, useParams } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { fieldGuides } from "@/lib/fieldGuides";
import { KAKAO_URL } from "@/lib/products";
import NotFound from "@/pages/NotFound";

export default function FieldGuideDetail() {
  const { slug } = useParams<{ slug: string }>();
  const guide = fieldGuides.find((item) => item.id === slug);
  if (!guide) return <NotFound />;

  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Header />
      <div className="h-20" />
      <main className="mx-auto max-w-3xl px-5 py-6 md:px-8 md:py-10">
        <Link href="/guide" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-text-secondary hover:text-accent"><span aria-hidden="true">←</span> 장비 사용법</Link>

        <article>
          <header className="pb-6 pt-4">
            <p className="mb-2 text-xs font-bold text-text-secondary">{guide.equipmentLabel}</p>
            <h1 className="text-2xl font-black leading-snug tracking-tight md:text-3xl">{guide.title}</h1>
          </header>

          <section aria-labelledby="quick-summary-heading" className="rounded-2xl border border-accent/40 bg-white p-5 sm:p-7">
            <h2 id="quick-summary-heading" className="mb-4 text-lg font-bold text-accent">30초 요약</h2>
            <p className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold leading-7 text-red-800">
              <span className="mr-2">경고</span>{guide.quickWarning}
            </p>
            <ul className="space-y-3">
              {guide.quickSummary.map((item) => (
                <li key={item} className="flex gap-3 text-sm font-medium leading-7 sm:text-base">
                  <span aria-hidden="true" className="font-bold text-accent">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section aria-labelledby="detail-heading" className="mt-10 border-t border-divider pt-8">
            <h2 id="detail-heading" className="text-xl font-bold">자세한 안내</h2>
            <p className="mt-3 text-sm leading-7 text-text-secondary">{guide.intro}</p>
            <div className="mt-8 space-y-8">
              {guide.sections.map((section, index) => (
                <section key={section.title} id={`section-${index + 1}`} className="scroll-mt-28">
                  <h3 className="text-lg font-bold leading-relaxed">{section.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary">{section.body}</p>
                  {section.photoGroups && (
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {section.photoGroups.map((group) => (
                        <div key={group.title} className="rounded-xl border border-divider bg-white p-3">
                          <h4 className="mb-3 text-sm font-bold">{group.title}</h4>
                          <div className="grid grid-cols-2 gap-2">
                            {group.photos.map((photo) => (
                              <figure key={photo.imageUrl} className="min-w-0">
                                <img src={photo.imageUrl} alt={photo.alt} loading="lazy" className="h-40 w-full object-contain" />
                                <figcaption className="mt-2 text-center text-xs font-bold leading-5">{photo.caption}</figcaption>
                              </figure>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {section.steps && (
                    <ol className="mt-4 space-y-3">
                      {section.steps.map((step, stepIndex) => (
                        <li key={step} className="flex gap-3 text-sm leading-7">
                          <span className="shrink-0 font-bold text-accent" aria-hidden="true">{stepIndex + 1}.</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  )}
                  {section.tip && <p className="mt-4 border-l-2 border-divider pl-4 text-sm leading-7 text-text-secondary">{section.tip}</p>}
                </section>
              ))}
            </div>
          </section>

          <details className="mt-8 border-t border-divider pt-4 text-xs text-text-secondary">
            <summary className="cursor-pointer py-2 font-bold">참고 자료</summary>
            <p className="mb-3 mt-2 leading-6">빌리지 이용 수칙과 제조사 자료를 함께 정리했습니다. 모델별 연결·종료 절차는 해당 설명서를 확인해주세요.</p>
            <ul className="space-y-2">
              {guide.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noopener noreferrer" className="inline-block py-1 underline underline-offset-4 hover:text-accent">{source.title} ↗</a></li>)}
            </ul>
          </details>

          <div className="mt-6 border-t border-divider pt-5 text-sm leading-7">
            <p className="text-text-secondary">연결 방법이 확실하지 않으면 사용 중인 장비와 연결 상태를 알려주세요.</p>
            <a href={KAKAO_URL} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 font-bold text-accent hover:underline">카카오톡으로 문의하기 <span aria-hidden="true">↗</span></a>
          </div>

          <nav aria-label="관련 페이지" className="mt-6 flex flex-wrap gap-x-6 border-t border-divider pt-4 text-sm font-bold">
            <Link href="/guide" className="inline-flex min-h-11 items-center text-accent">장비 사용법 목록</Link>
            <Link href={`/product/${guide.productId}`} className="inline-flex min-h-11 items-center text-text-secondary hover:text-accent">대여 장비 보기 <span aria-hidden="true" className="ml-2">↗</span></Link>
          </nav>
        </article>
      </main>
      <Footer />
    </div>
  );
}
