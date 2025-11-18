import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Tech from './components/Tech'
import UseCases from './components/UseCases'
import Benchmark from './components/Benchmark'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(124,58,237,0.15),transparent),radial-gradient(900px_400px_at_20%_20%,rgba(251,146,60,0.08),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Tech />
        <UseCases />
        <Benchmark />
        <CTA />
      </main>
      <footer className="relative border-t border-white/10 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} Cyqro. All rights reserved.</p>
          <div className="text-xs text-slate-400">FR-1 • Made in Bangladesh</div>
        </div>
      </footer>
    </div>
  )
}

export default App
