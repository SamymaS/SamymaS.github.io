export function SkillCategory({ title, skills }) {
  return (
    <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6 space-y-4">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}
