export default function Benchmark() {
  const stats = [
    { label: 'Bangla QA', value: '+7.2%', note: 'over prior open models' },
    { label: 'Mixed Lang Tasks', value: '+5.8%', note: 'code + text' },
    { label: 'Latency (8B int4)', value: '28 ms', note: 'on A100 batch 8' },
    { label: 'Context', value: '128K', note: 'tokens' },
  ]

  return (
    <section id="benchmark" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/60 to-slate-900/30 p-8 backdrop-blur">
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
                <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">{s.value}</div>
                <div className="mt-1 text-sm text-slate-300">{s.label}</div>
                <div className="mt-1 text-xs text-slate-400">{s.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
