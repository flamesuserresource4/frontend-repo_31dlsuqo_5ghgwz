import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/30 to-slate-950/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 w-full">
        <div className="pt-40 pb-24 md:pt-48 md:pb-40 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-900/60 px-3 py-1 text-xs text-slate-200/90 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-amber-400 animate-pulse" />
              Bangladesh's First AI Model / LLM — FR-1
            </div>
            <h1 className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
              Meet Cyqro FR-1
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-slate-300 max-w-2xl">
              A frontier-grade Bangla-first large language model engineered for enterprise, government, and creators. Built in Bangladesh. Built for the world.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-5 py-3 font-medium shadow-2xl shadow-violet-500/10 ring-1 ring-slate-200 hover:bg-slate-100 transition">Request a demo</a>
              <a href="#tech" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white px-5 py-3 font-medium ring-1 ring-inset ring-white/20 hover:bg-white/15 transition">Explore the tech</a>
            </div>
          </div>

          <div className="md:col-span-5">
            <div className="relative">
              <div className="absolute -inset-16 -z-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-slate-900/40 p-4 backdrop-blur">
                <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-slate-200">Multilingual</div>
                    <div className="mt-1 text-slate-400">Bangla + English</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-slate-200">Optimized</div>
                    <div className="mt-1 text-slate-400">Edge + Cloud</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-slate-200">Aligned</div>
                    <div className="mt-1 text-slate-400">Safety-first</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-slate-200">Performant</div>
                    <div className="mt-1 text-slate-400">State-of-the-art</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
