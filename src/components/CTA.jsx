export default function CTA() {
  return (
    <section id="contact" className="relative py-24 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_80%_30%,rgba(99,102,241,0.12),transparent),radial-gradient(400px_160px_at_10%_30%,rgba(251,146,60,0.12),transparent)]" />
      <div className="relative mx-auto max-w-3xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">Get early access to FR-1</h2>
        <p className="mt-3 text-slate-300">Tell us a bit about your use case. Well reach out within 48 hours.</p>
        <form className="mt-8 grid gap-3 sm:grid-cols-2 text-left">
          <input className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-white/30" placeholder="Name" />
          <input className="rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-white/30" placeholder="Company" />
          <input className="sm:col-span-2 rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-white/30" placeholder="Work email" />
          <textarea rows={4} className="sm:col-span-2 rounded-xl bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 ring-1 ring-inset ring-white/10 focus:outline-none focus:ring-white/30" placeholder="What would you build with FR-1?" />
          <button type="button" className="sm:col-span-2 inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium ring-1 ring-slate-200 hover:bg-slate-100 transition">Request access</button>
        </form>
        <p className="mt-3 text-xs text-slate-400">By submitting, you agree to our terms and privacy policy.</p>
      </div>
    </section>
  )
}
