import { useEffect, useRef } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { Toaster } from "../components/ui/sonner";
import { Button } from "../components/ui/button";
import { ContactForm } from "../components/ContactForm";
import { EmergencyBanner } from "../components/EmergencyBanner";
import { FAQ } from "../components/FAQ";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { SEO } from "../components/SEO";
import type { ProblemPageBlock, ProblemPageData } from "../data/problemPages";
import { Link } from "react-router-dom";

interface ProblemPageProps {
  page: ProblemPageData;
}

function ContentBlock({ block }: { block: ProblemPageBlock }) {
  if (block.type === "paragraph") {
    return <p className="text-lg text-surface-700">{block.text}</p>;
  }

  if (block.type === "ordered-list") {
    return (
      <ol className="list-decimal space-y-4 pl-6 text-lg text-surface-700">
        {block.items?.map((item) => <li key={item}>{item}</li>)}
      </ol>
    );
  }

  return (
    <div className="overflow-x-auto rounded-lg border border-surface-200">
      <table className="w-full min-w-[640px] border-collapse text-left">
        <thead className="bg-surface-100">
          <tr>
            {block.headers?.map((header) => (
              <th key={header} scope="col" className="border-b border-surface-200 px-4 py-3 text-surface-900">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows?.map((row) => (
            <tr key={row.join("|")} className="align-top even:bg-surface-50">
              {row.map((cell) => (
                <td key={cell} className="border-b border-surface-200 px-4 py-3 text-surface-700 last:border-b-0">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ProblemPage({ page }: ProblemPageProps) {
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page.slug]);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      <Toaster position="top-right" />
      <SEO
        title={page.metaTitle}
        description={page.description}
        canonicalUrl={`https://sydneydrivewayrepair.com/${page.slug}`}
      />

      <EmergencyBanner />
      <Header onContactClick={scrollToContact} />

      <main>
        <section className="bg-gradient-to-br from-primary-50 via-white to-primary-100 px-4 py-14 sm:py-20">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-3xl text-surface-900 sm:text-4xl md:text-5xl">{page.h1}</h1>
            <p className="mt-6 max-w-3xl text-lg text-surface-700">{page.description}</p>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                className="w-full bg-accent-500 text-white hover:bg-accent-600 sm:w-auto"
                asChild
              >
                <a href="tel:0480893502">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  Call Now 0480 893 502
                </a>
              </Button>
              <button
                type="button"
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 text-primary-600 underline hover:text-primary-700"
              >
                Request Callback
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <p className="mt-4 text-sm text-surface-700">{page.helper}</p>
          </div>
        </section>

        {page.sections.map((section, index) => (
          <section key={section.heading} className={`px-4 py-16 ${index % 2 ? "bg-surface-50" : "bg-white"}`}>
            <div className="mx-auto max-w-5xl space-y-6">
              <h2 className="text-3xl text-surface-900 sm:text-4xl">{section.heading}</h2>
              {section.blocks.map((block, blockIndex) => <ContentBlock key={`${section.heading}-${blockIndex}`} block={block} />)}
            </div>
          </section>
        ))}

        <section className="px-4 py-16" id="pricing">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl text-surface-900 sm:text-4xl">Leave it vs fix it (no scarcity)</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-surface-200 bg-surface-50 p-6">
                <h3 className="text-xl text-surface-900">Leave it</h3>
                <p className="mt-3 text-lg text-surface-700">{page.leaveIt}</p>
              </div>
              <div className="rounded-lg border border-surface-200 bg-surface-50 p-6">
                <h3 className="text-xl text-surface-900">Fix it</h3>
                <p className="mt-3 text-lg text-surface-700">{page.fixIt}</p>
              </div>
            </div>
            <p className="mt-8 text-lg italic text-surface-700">{page.feeling}</p>
          </div>
        </section>

        <section className="bg-surface-50 px-4 py-16" id="areas">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl text-surface-900 sm:text-4xl">Where we take these jobs (5 live LGAs only)</h2>
            <ul className="mt-8 space-y-4 text-lg text-surface-700">
              {page.serviceAreas.map((area) => (
                <li key={area.href}>
                  <Link to={area.href} className="text-primary-600 underline hover:text-primary-700">{area.label}</Link>
                  {" — "}{area.note}
                </li>
              ))}
            </ul>
            {page.relatedLinks && (
              <p className="mt-8 text-lg text-surface-700">
                Related problem pages:{" "}
                {page.relatedLinks.map((link, index) => (
                  <span key={link.href}>
                    {index > 0 && ", "}
                    <Link to={link.href} className="text-primary-600 underline hover:text-primary-700">{link.label}</Link>
                  </span>
                ))}
                .
              </p>
            )}
          </div>
        </section>

        <section className="px-4 py-16" id="how-it-works">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl text-surface-900 sm:text-4xl">How it works</h2>
            <ol className="mt-8 space-y-5 text-lg text-surface-700">
              {page.steps.map((step, index) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">{index + 1}</span>
                  <span><strong className="text-surface-900">{step.title}</strong> — {step.description}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div ref={contactRef}>
          <ContactForm
            intro={page.contactDescription}
            secondaryIntro=""
            issuePlaceholder={page.issuePlaceholder}
          />
          <div className="-mt-8 pb-16 text-center">
            <a href="tel:0480893502" className="inline-flex items-center text-lg font-semibold text-accent-600 underline hover:text-accent-700">
              <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
              Call Now 0480 893 502
            </a>
          </div>
        </div>

        <FAQ items={page.faqs} title={`${page.h1} FAQs`} />

        <section className="bg-surface-50 px-4 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-3xl text-surface-900 sm:text-4xl">What we are NOT</h2>
            <div className="mt-8 overflow-x-auto rounded-lg border border-surface-200">
              <table className="w-full min-w-[640px] border-collapse text-left">
                <thead className="bg-surface-100">
                  <tr>
                    <th scope="col" className="border-b border-surface-200 px-4 py-3 text-surface-900">Not us</th>
                    <th scope="col" className="border-b border-surface-200 px-4 py-3 text-surface-900">Why it matters on this page</th>
                  </tr>
                </thead>
                <tbody>
                  {page.notUs.map((item) => (
                    <tr key={item.label} className="align-top even:bg-white">
                      <td className="border-b border-surface-200 px-4 py-3 text-surface-900">{item.label}</td>
                      <td className="border-b border-surface-200 px-4 py-3 text-surface-700">{item.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
