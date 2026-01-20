export function ProjectCard({ title, description, status, technologies = [], highlights = [] }) {
  return (
    <article className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        {status ? (
          <span className="text-xs uppercase tracking-wide text-blue-300 border border-blue-500/40 px-3 py-1 rounded-full">
            {status}
          </span>
        ) : null}
      </div>
      <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
      {technologies.length ? (
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      ) : null}
      {highlights.length ? (
        <ul className="text-sm text-gray-400 space-y-1 list-disc list-inside">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
