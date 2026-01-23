import { Header } from './app/components/Header'
import { Section } from './app/components/Section'
import { ExperienceCard } from './app/components/ExperienceCard'
import { ProjectCard } from './app/components/ProjectCard'
import { SkillCategory } from './app/components/SkillCategory'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header />

      <Section
        id="profil"
        title="Profil & Objectif"
        icon={<span className="text-2xl">👤</span>}
        className="bg-gradient-to-b from-gray-900 to-gray-950"
      >
        <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/50">
          <p className="text-gray-300 text-lg leading-relaxed">
            Ingénieur Logiciel diplômé d&apos;un{' '}
            <span className="text-blue-400 font-semibold">
              Mastère 2 Expert Développement Logiciel, Mobile &amp; IoT
            </span>
            , je dispose d&apos;un profil polyvalent couvrant l&apos;ensemble du cycle de développement :
            du{' '}
            <span className="text-violet-400 font-semibold">Backend robuste</span> au{' '}
            <span className="text-cyan-400 font-semibold">Frontend interactif</span>, en passant par
            les{' '}
            <span className="text-blue-400 font-semibold">systèmes embarqués (IoT)</span> et les
            logiciels métiers. Passionné par la technique et l&apos;innovation, je cherche à mettre à
            profit cette vision globale au sein de projets ambitieux à forte valeur ajoutée.
          </p>
        </div>
      </Section>

      <Section
        id="competences"
        title="Compétences Techniques"
        icon={<span className="text-2xl">💻</span>}
        className="bg-gray-950"
      >
        <div className="grid gap-6">
          <SkillCategory
            title="Langages"
            skills={['Java', 'Kotlin', 'C++', 'Python', 'PHP', 'HTML/CSS', 'JavaScript', 'Dart']}
          />
          <SkillCategory
            title="Frameworks & Outils"
            skills={[
              'Spring',
              'Flask',
              'Qt',
              'Flutter',
              'Node.js',
              'Git',
              'GitLab',
              'GitHub',
              'Docker',
              'Ansible',
              'Jira',
              'CI/CD',
            ]}
          />
          <SkillCategory title="Bases de données" skills={['MySQL', 'PostgreSQL', 'PL/SQL']} />
          <SkillCategory
            title="Systèmes & IoT"
            skills={[
              'Linux',
              'ESP32',
              'Arduino',
              'Raspberry Pi',
              'MQTT',
              'Modbus RTU',
              'Bluetooth BLE',
              'UART',
            ]}
          />
          <SkillCategory
            title="Architecture & Conception"
            skills={[
              'Micro-services',
              'Event-driven',
              'UML',
              'API REST',
              'OpenAPI',
              'Design Patterns',
              'UX/UI',
              'Figma',
              'Rive',
            ]}
          />
        </div>
      </Section>

      <Section
        id="experiences"
        title="Expériences Professionnelles"
        icon={<span className="text-2xl">🧭</span>}
        className="bg-gradient-to-b from-gray-900 to-gray-950"
      >
        <div className="space-y-6">
          <ExperienceCard
            title="Ingénieur Logiciel - Alternance"
            company="CS GROUP"
            period="Septembre 2024 – Aujourd'hui"
            location="Aix-en-Provence"
            isHighlighted
            tasks={[
              '<strong class="text-blue-400">Développement Backend :</strong> Conception en Java / Kotlin sur la plateforme <strong class="text-violet-400">MobilitX</strong> (transport & données temps réel).',
              '<strong class="text-blue-400">Architecture :</strong> Participation à une architecture modulaire et événementielle (services, cache, supervision).',
              '<strong class="text-blue-400">Fiabilité & Performance :</strong> Implémentation de fonctionnalités métier complexes et résolution de tickets industriels avec fortes contraintes.',
              '<strong class="text-blue-400">DevOps :</strong> Utilisation de GitLab, Jira, CI/CD et tests d\'intégration.',
            ]}
          />

          <ExperienceCard
            title="Développeur Fullstack Salesforce - Alternance"
            company="Niji"
            period="Janvier 2022 – Juin 2023"
            location="Aix-en-Provence"
            tasks={[
              '<strong class="text-blue-400">Analyse & Dév :</strong> Analyse des besoins clients, développement et paramétrage d\'applications Salesforce.',
              '<strong class="text-blue-400">Technologies :</strong> Utilisation de HTML, CSS, JavaScript et Apex.',
              '<strong class="text-blue-400">Best Practices :</strong> Application des bonnes pratiques de développement et processus CI/CD.',
            ]}
          />

          <ExperienceCard
            title="Développeur Logiciel Fullstack - Alternance"
            company="REZZO Telecom"
            period="Janvier 2021 – Décembre 2022"
            location="Aix-en-Provence"
            tasks={[
              '<strong class="text-blue-400">Refonte Logicielle (LUCY) :</strong> Développement Frontend en C++ Qt et Backend en Python Flask pour un logiciel de facturation.',
              '<strong class="text-blue-400">Base de données :</strong> Mise à jour de procédures PL/SQL et développement de systèmes d\'import de données (CSV, XLSX).',
              '<strong class="text-blue-400">Gestion de version :</strong> Utilisation de Git via AWS CodeCommit.',
            ]}
          />

          <ExperienceCard
            title="Technicien Informatique - Stage"
            company="Groupe ORTEC"
            period="Octobre 2020 – Décembre 2020"
            location="Aix-en-Provence"
            tasks={[
              'Digitalisation de documents vers un ERP et création de modules e-learning (Java, SharePoint).',
              'Support technique, maintenance réseau et déploiement de postes pour le télétravail.',
            ]}
          />
        </div>
      </Section>

      <Section
        id="projets"
        title="Projets : Web, Mobile, Logiciel & IoT"
        icon={<span className="text-2xl">📂</span>}
        className="bg-gray-950"
      >
        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl">📱</span>
              <h3 className="text-2xl font-bold text-white">Développement Mobile &amp; Gamification</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="Sameva"
                description="Application mobile basée sur un système de quêtes pour la productivité gamifiée."
                status="En cours"
                highlights={[
                  "Conception d'un MVP",
                  "Travail sur l'UX/UI (Figma, Rive)",
                  "Intégration d'une IA pour limiter la triche",
                ]}
              />
              <ProjectCard
                title="COCI"
                description="Application mobile complète de covoiturage pour la Côte-d'Ivoire."
                status="En cours"
                highlights={[
                  'Architecture Front & Back complète',
                  'API robuste',
                  'Gestion de DTOs complets',
                ]}
              />
              <ProjectCard
                title="Photo Gallery App"
                description="Gestion et visualisation de photos avec géolocalisation."
                technologies={['Ionic', 'Capacitor', 'Leaflet']}
                highlights={['Géolocalisation', 'Affichage cartographique']}
              />
              <ProjectCard
                title="Action ou Vérité"
                description="Jeu mobile avec système de paiement en ligne."
                technologies={['Stripe']}
                highlights={[
                  'Intégration paiement en ligne',
                  'Gestion des règles de jeu',
                  'Expérience utilisateur optimisée',
                ]}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl">🤖</span>
              <h3 className="text-2xl font-bold text-white">IoT &amp; Systèmes Embarqués</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="Maison Connectée"
                description="Pilotage d'une maison connectée via application mobile Flutter."
                technologies={['Flutter', 'ESP32', 'Bluetooth BLE', 'Wi-Fi', 'MQTT']}
                highlights={[
                  'Communication ESP32',
                  'Gestion capteurs/actionneurs (LED, temp, LCD)',
                ]}
              />
              <ProjectCard
                title="Projet Modbus RTU"
                description="Communication série Modbus RTU entre ESP32 et Raspberry Pi."
                technologies={['ESP32', 'Raspberry Pi', 'UART', 'Modbus RTU']}
                highlights={[
                  'Gestion des échanges via UART',
                  "Simulation supervision d'équipements industriels",
                ]}
              />
              <ProjectCard
                title="CAROBOT"
                description="Robot autonome capable de suivre une ligne et saisir des objets."
                technologies={['Arduino', 'C/C++', 'Bluetooth']}
                highlights={['Robot autonome', 'Pilotage via application mobile Bluetooth']}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl">🛰️</span>
              <h3 className="text-2xl font-bold text-white">Backend, API &amp; Web</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="Assistant Vocal"
                description="Backend Flask pour assistant intelligent avec analyse du langage naturel."
                technologies={['Python', 'Flask', 'spaCy', 'OpenAI']}
                highlights={['Analyse NLP avec spaCy', 'Intégration APIs (OpenAI, Météo, Spotify)']}
              />
              <ProjectCard
                title="SeaRiders"
                description="Plateforme e-commerce pour planches à voile recyclées."
                highlights={['Développement Fullstack', 'Branding complet', 'Approche éco-responsable']}
              />
              <ProjectCard
                title="Ynov Express"
                description="Plateforme Web avec architecture orientée services."
                highlights={['Architecture orientée services', "Contrôle d'accès par rôles (RBAC)"]}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl">⚡</span>
              <h3 className="text-2xl font-bold text-white">Interactive &amp; Temps Réel</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ProjectCard
                title="TikTok Live → Minecraft"
                description="Projet expérimental connectant les événements TikTok Live à un serveur Minecraft en temps réel."
                highlights={['Intégration APIs et Streaming', 'Événements temps réel']}
              />
              <ProjectCard
                title="Puissance 4 Multijoueur"
                description="Jeu en ligne temps réel avec WebSockets."
                technologies={['Node.js', 'WebSockets']}
                highlights={['Backend Node.js', 'Gestion événements multijoueurs']}
              />
              <ProjectCard
                title="B4SKET G4ME"
                description="Reproduction grandeur nature d'un Puissance 4 pour l'entraînement sportif."
                technologies={['C++', 'Python', 'PHP', 'MySQL', 'Raspberry Pi']}
                highlights={['Hardware & Software', 'Script Python pour gestion des trames']}
              />
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="formations"
        title="Formations"
        icon={<span className="text-2xl">🎓</span>}
        className="bg-gradient-to-b from-gray-900 to-gray-950"
      >
        <div className="space-y-4">
          <div className="bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-lg p-6 border-l-4 border-blue-500">
            <h3 className="font-bold text-white text-lg">
              Mastère Expert en Études et Développement du SI
            </h3>
            <p className="text-blue-400 mt-1">Spécialisation : Logiciel, Mobile &amp; IoT</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
              <span>Ynov Aix-en-Provence</span>
              <span>•</span>
              <span>2024-2026</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-lg p-6 border-l-4 border-gray-600">
            <h3 className="font-bold text-white text-lg">Bachelor Responsable Ingénierie Logiciel</h3>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
              <span>CESI Aix-en-Provence</span>
              <span>•</span>
              <span>2021-2022</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-lg p-6 border-l-4 border-gray-600">
            <h3 className="font-bold text-white text-lg">BTS Systèmes Numériques</h3>
            <p className="text-gray-400 mt-1">Option Info &amp; Réseaux</p>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
              <span>Lycée Vauvenargues</span>
              <span>•</span>
              <span>2019-2021</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-lg p-6 border-l-4 border-gray-600">
            <h3 className="font-bold text-white text-lg">Baccalauréat STI2D</h3>
            <p className="text-gray-400 mt-1">
              Option SIN (Systèmes d&apos;Information et Numérique)
            </p>
            <div className="flex items-center gap-4 mt-2 text-sm text-gray-400">
              <span>Lycée Vauvenargues</span>
              <span>•</span>
              <span>2019</span>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="langues"
        title="Langues & Centres d'intérêt"
        icon={<span className="text-2xl">🌍</span>}
        className="bg-gray-950"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
              Langues
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-lg p-4">
                <span className="text-gray-300">Français</span>
                <span className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-400 border border-green-500/30 px-3 py-1 rounded-full text-sm font-medium">
                  Maternel
                </span>
              </div>
              <div className="flex justify-between items-center bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-lg p-4">
                <span className="text-gray-300">Anglais</span>
                <span className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/30 px-3 py-1 rounded-full text-sm font-medium">
                  C2 - Expert
                </span>
              </div>
              <div className="flex justify-between items-center bg-gradient-to-br from-gray-800/30 to-gray-900/30 rounded-lg p-4">
                <span className="text-gray-300">Espagnol</span>
                <span className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 text-yellow-400 border border-yellow-500/30 px-3 py-1 rounded-full text-sm font-medium">
                  Intermédiaire
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 flex items-center gap-2 text-lg">
              Centres d&apos;intérêt
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Handball',
                'Jeux vidéo',
                'Veille technologique',
                'Projets personnels',
                'Photographie',
                'Voyages',
              ].map((interest) => (
                <span
                  key={interest}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 text-gray-300 border border-gray-700/50 px-4 py-2 rounded-lg text-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <footer className="bg-gradient-to-b from-gray-950 to-black border-t border-gray-800 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <div className="flex justify-center gap-6 mb-6">
            <a
              href="https://www.linkedin.com/in/samy-boudaoud"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Samymas"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-violet-400 transition-colors"
            >
              GitHub
            </a>
          </div>

          <p className="text-gray-400">
            © 2026 <span className="text-blue-400 font-semibold">Samy Boudaoud</span> - Ingénieur
            Logiciel | Fullstack &amp; IoT
          </p>
          <p className="text-gray-600 text-sm">Portfolio créé avec React &amp; Tailwind CSS</p>
        </div>
      </footer>
    </div>
  )
}
