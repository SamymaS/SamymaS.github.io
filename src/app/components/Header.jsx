export function Header() {
  return (
    <header className="bg-gradient-to-b from-gray-900 to-gray-950 border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <span className="bg-blue-500/20 text-blue-400 border border-blue-500/40 font-semibold px-4 py-2 rounded-full">
                SB
              </span>
              <span className="text-gray-400">Portfolio 2026</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Samy Boudaoud</h1>
            <p className="text-xl text-blue-400 font-semibold">Ingénieur Logiciel | Fullstack &amp; IoT</p>
            <p className="text-gray-400">Aix-en-Provence, France</p>
            <p className="text-gray-300 max-w-2xl leading-relaxed">
              Ingénieur logiciel passionné par les systèmes distribués, l&apos;IoT et le développement
              fullstack. J&apos;aime créer des solutions robustes, performantes et centrées sur l&apos;utilisateur.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <a
                href="mailto:samy.boudaoud@email.com"
                className="inline-flex items-center gap-2 bg-gray-800 text-gray-200 px-4 py-2 rounded-lg border border-gray-700"
              >
                ✉️ samy.boudaoud@email.com
              </a>
              <span className="inline-flex items-center gap-2 bg-gray-800 text-gray-200 px-4 py-2 rounded-lg border border-gray-700">
                📞 +33 6 12 34 56 78
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href="https://www.linkedin.com/in/samy-boudaoud"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500/20 text-blue-300 border border-blue-500/40 px-5 py-3 rounded-xl text-center font-semibold"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Samymas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-violet-500/20 text-violet-300 border border-violet-500/40 px-5 py-3 rounded-xl text-center font-semibold"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
