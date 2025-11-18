export default function Tech() {
  const items = [
    {
      title: 'Training Corpus',
      desc: 'Curated Bangla + English corpus from news, literature, code, and user-generated content with aggressive deduplication and quality filters.',
    },
    {
      title: 'Model Architecture',
      desc: 'Decoder-only transformer optimized for long-context reasoning, sparse attention, group query attention, and efficient KV caching.',
    },
    {
      title: 'Inference Engine',
      desc: 'Highly optimized runtime for CPUs and GPUs with quantization-aware kernels enabling on-device and edge deployments.',
    },
    {
      title: 'Safety & Alignment',
      desc: 'Reinforcement learning from human feedback (RLHF) with localized safety policy tuned for Bangladesh context.',
    },
  ]

  return (
    <section id="tech" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_10%_20%,rgba(168,85,247,0.12),transparent),radial-gradient(400px_160px_at_90%_30%,rgba(251,146,60,0.12),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Under the hood</h2>
          <p className="mt-3 text-slate-300">A modern AI stack engineered for speed, safety, and local relevance.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {items.map((item) => (
            <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h3 className="text-white text-lg font-medium">{item.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
