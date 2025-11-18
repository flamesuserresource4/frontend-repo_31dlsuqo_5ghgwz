export default function UseCases() {
  const cases = [
    {
      title: 'Customer Support',
      desc: 'AI agents that understand Bangla nuance and escalate intelligently, reducing response time and cost.',
    },
    {
      title: 'Government Services',
      desc: 'Citizen-facing chat and voice interfaces for forms, information, and assistance across ministries.',
    },
    {
      title: 'Media & Creators',
      desc: 'Content drafting, translation, and summarization tailored to regional tone and idioms.',
    },
    {
      title: 'Financial Services',
      desc: 'Secure assistants for KYC, statement analysis, and fraud detection with local compliance.',
    },
  ]

  return (
    <section id="usecases" className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-white">Built for Bangladesh. Ready for the world.</h2>
          <p className="mt-3 text-slate-300">High-impact applications across sectors.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {cases.map((uc) => (
            <div key={uc.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <h3 className="text-white text-lg font-medium">{uc.title}</h3>
              <p className="mt-2 text-slate-300 text-sm leading-relaxed">{uc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
