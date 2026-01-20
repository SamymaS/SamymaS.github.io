import './App.css'

const skills = ['React', 'Vite', 'HTML', 'CSS', 'JavaScript']

const projects = [
  {
    title: 'Portfolio GitHub Pages',
    description:
      'Un site one-page rapide et moderne pour présenter mon profil, mes projets et mes contacts.',
  },
  {
    title: 'Projet à venir',
    description:
      'Je prépare actuellement un projet autour du design d’interface et de l’accessibilité web.',
  },
]

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <p className="hero__intro">Bonjour, je suis</p>
        <h1 className="hero__title">Samyma</h1>
        <p className="hero__subtitle">
          Développeuse front-end passionnée par les expériences web élégantes.
        </p>
        <div className="hero__actions">
          <a className="button" href="#projects">
            Voir mes projets
          </a>
          <a className="button button--ghost" href="#contact">
            Me contacter
          </a>
        </div>
      </header>

      <section className="section" id="about">
        <h2>À propos</h2>
        <p>
          Je construis des interfaces web modernes en mettant l’accent sur la performance, la clarté
          et le storytelling. J’aime transformer des idées en expériences numériques simples à
          utiliser.
        </p>
        <div className="skills">
          {skills.map((skill) => (
            <span className="chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="section" id="projects">
        <h2>Projets</h2>
        <div className="cards">
          {projects.map((project) => (
            <article className="card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className="link">Voir plus</button>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2>Contact</h2>
        <p>Discutons de votre prochain site ou projet créatif.</p>
        <div className="contact__actions">
          <a className="button" href="mailto:contact@samyma.dev">
            contact@samyma.dev
          </a>
          <a className="button button--ghost" href="https://github.com/SamymaS">
            GitHub
          </a>
        </div>
      </section>
    </div>
  )
}
