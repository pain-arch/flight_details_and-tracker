import { PageContainer } from "@/components/common/page-container";
import { AppHeader } from "@/components/common/app-header";
import { clientEnv } from "@/lib/env";

export default function HomePage() {
  return (
    <PageContainer>
      <AppHeader title={clientEnv.NEXT_PUBLIC_APP_NAME} subtitle="Next.js 16 SaaS-ready starter" />

      <section className="mt-8 grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-slate-900">App Router</h2>
          <p className="mt-2 text-sm text-slate-600">Built with the `src/app` directory and modern route handlers.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-slate-900">Scalable Structure</h2>
          <p className="mt-2 text-sm text-slate-600">Organized by `components`, `services`, `hooks`, and `lib` layers.</p>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-4">
          <h2 className="text-sm font-semibold text-slate-900">Type-safe Env</h2>
          <p className="mt-2 text-sm text-slate-600">Runtime validation for required environment variables with Zod.</p>
        </div>
      </section>
    </PageContainer>
  );
}
