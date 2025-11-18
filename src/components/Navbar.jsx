import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Technology', href: '#tech' },
    { label: 'Use Cases', href: '#usecases' },
    { label: 'Benchmark', href: '#benchmark' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-3">
              <div className="relative h-9 w-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-violet-500/20 ring-1 ring-white/20" />
              <span className="text-white font-semibold tracking-tight">Cyqro</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-slate-300 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="inline-flex items-center rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20 hover:bg-white/15 transition">Get early access</a>
            </nav>

            <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/15 text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="block rounded-lg px-3 py-2 text-slate-300 hover:bg-white/5 hover:text-white">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="block rounded-lg bg-white/10 px-3 py-2 text-white ring-1 ring-inset ring-white/20 text-center">Get early access</a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
