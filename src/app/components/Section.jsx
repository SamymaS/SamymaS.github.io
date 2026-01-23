export function Section({ id, title, icon, className = '', children }) {
  return (
    <section id={id} className={`${className} py-14 px-6`}>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <span className="text-blue-400">{icon}</span>
          <h2 className="text-3xl font-bold text-white">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  )
}
