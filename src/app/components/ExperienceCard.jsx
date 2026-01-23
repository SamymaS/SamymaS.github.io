export function ExperienceCard({
  title,
  company,
  period,
  location,
  isHighlighted = false,
  tasks,
}) {
  return (
    <article
      className={`border-l-4 ${
        isHighlighted ? 'border-blue-500 bg-blue-500/10' : 'border-gray-700 bg-gray-900/40'
      } rounded-xl p-6 space-y-4`}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
          <p className="text-blue-400 font-medium">{company}</p>
        </div>
        <div className="text-sm text-gray-400">
          <p>{period}</p>
          <p>{location}</p>
        </div>
      </div>
      <ul className="space-y-2 text-gray-300 text-sm leading-relaxed">
        {tasks.map((task, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: task }} />
        ))}
      </ul>
    </article>
  )
}
