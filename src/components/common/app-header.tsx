type AppHeaderProps = {
  title: string;
  subtitle?: string;
};

export function AppHeader({ title, subtitle }: AppHeaderProps) {
  return (
    <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Starter</p>
      <h1 className="mt-2 text-2xl font-semibold text-slate-900 sm:text-3xl">{title}</h1>
      {subtitle ? <p className="mt-2 text-sm text-slate-600">{subtitle}</p> : null}
    </header>
  );
}
