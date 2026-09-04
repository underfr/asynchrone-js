const teamgrid = document.getElementById('team-grid')

const card = (m) => `<div class="card bg-base-100 w-full max-w-sm shadow-xl">
  <div class="card-body items-center gap-5 text-center">
<div class="avatar">
    <div class="ring-primary ring-offset-base-100 w-28 rounded-full ring ring-offset-2">
    <img src="${m.avatar}" alt="Photo de ${m.name}" />
    </div>
</div>
<h2 class="card-title text-2xl">${m.name}</h2>
<div class="badge badge-outline badge-secondary">${m.role}</div>
<p class="text-sm">${m.bio}</p>
<div class="flex flex-wrap justify-center gap-2">
  ${m.skills.map(s => `<span class="badge badge-ghost">${s}</span>`).join('')}
</div>
</div>
</div>`

const teamMembers = [
  {
    id: 1,
    name: "Alice Dupont",
    role: "Développeuse Frontend",
    avatar: "https://i.pravatar.cc/150?img=1",
    bio: "Passionnée par React et les interfaces utilisateur modernes. Alice transforme les designs en expériences web interactives.",
    skills: ["React", "TypeScript", "CSS3", "Vite"],
    experience: "5 ans d'expérience",
    location: "Paris, France",
    email: "alice@example.com",
  },
  {
    id: 2,
    name: "Karim Benali",
    role: "Développeur Backend",
    avatar: "https://i.pravatar.cc/150?img=12",
    bio: "Spécialiste des API robustes et des bases de données bien pensées. Karim aime quand une requête passe de 800 ms à 40 ms.",
    skills: ["Node.js", "PostgreSQL", "Docker", "Redis"],
    experience: "7 ans d'expérience",
    location: "Lyon, France",
    email: "karim@example.com",
  },
  {
    id: 3,
    name: "Sofia Marchetti",
    role: "Designer UI/UX",
    avatar: "https://i.pravatar.cc/150?img=5",
    bio: "Sofia part toujours des besoins réels des utilisateurs avant d'ouvrir Figma. Ses maquettes se lisent sans mode d'emploi.",
    skills: ["Figma", "Design system", "Prototypage", "Accessibilité"],
    experience: "6 ans d'expérience",
    location: "Marseille, France",
    email: "sofia@example.com",
  },
  {
    id: 4,
    name: "Thomas Lefèvre",
    role: "Ingénieur DevOps",
    avatar: "https://i.pravatar.cc/150?img=15",
    bio: "Thomas automatise tout ce qui peut l'être. Il gère les pipelines de déploiement et surveille la prod comme du lait sur le feu.",
    skills: ["Kubernetes", "Terraform", "CI/CD", "AWS"],
    experience: "8 ans d'expérience",
    location: "Nantes, France",
    email: "thomas@example.com",
  },
  {
    id: 5,
    name: "Yasmine Haddad",
    role: "Data Analyst",
    avatar: "https://i.pravatar.cc/150?img=9",
    bio: "Yasmine transforme des tableaux illisibles en décisions concrètes. Elle construit les tableaux de bord que l'équipe consulte chaque matin.",
    skills: ["Python", "SQL", "Pandas", "Power BI"],
    experience: "4 ans d'expérience",
    location: "Toulouse, France",
    email: "yasmine@example.com",
  },
  {
    id: 6,
    name: "Lucas Girard",
    role: "Développeur Mobile",
    avatar: "https://i.pravatar.cc/150?img=33",
    bio: "Lucas développe des applications natives et cross-platform. Il teste chaque écran sur un vieux téléphone avant de valider.",
    skills: ["React Native", "Swift", "Kotlin", "Expo"],
    experience: "5 ans d'expérience",
    location: "Bordeaux, France",
    email: "lucas@example.com",
  },
  {
    id: 7,
    name: "Émilie Rousseau",
    role: "Product Owner",
    avatar: "https://i.pravatar.cc/150?img=20",
    bio: "Émilie fait le lien entre les besoins clients et l'équipe technique. Elle sait dire non à une fonctionnalité quand il le faut.",
    skills: ["Agile", "Jira", "User stories", "Roadmap"],
    experience: "9 ans d'expérience",
    location: "Lille, France",
    email: "emilie@example.com",
  },
  {
    id: 8,
    name: "Mathieu Tremblay",
    role: "Développeur Fullstack",
    avatar: "https://i.pravatar.cc/150?img=52",
    bio: "À l'aise du formulaire jusqu'à la migration de base de données, Mathieu est celui qu'on appelle quand un bug traverse toute la stack.",
    skills: ["Vue.js", "Laravel", "MySQL", "Tailwind"],
    experience: "6 ans d'expérience",
    location: "Montréal, Canada",
    email: "mathieu@example.com",
  },
  {
    id: 9,
    name: "Nadia Sissoko",
    role: "Ingénieure QA",
    avatar: "https://i.pravatar.cc/150?img=44",
    bio: "Nadia trouve les cas limites auxquels personne n'avait pensé. Sa suite de tests automatisés bloque les régressions avant la mise en ligne.",
    skills: ["Cypress", "Playwright", "Jest", "Tests manuels"],
    experience: "4 ans d'expérience",
    location: "Bruxelles, Belgique",
    email: "nadia@example.com",
  },
  {
    id: 10,
    name: "Julien Moreau",
    role: "Expert Cybersécurité",
    avatar: "https://i.pravatar.cc/150?img=60",
    bio: "Julien audite les applications avant qu'un attaquant ne le fasse. Il forme aussi l'équipe aux bonnes pratiques de sécurité.",
    skills: ["Pentest", "OWASP", "Cryptographie", "Audit"],
    experience: "10 ans d'expérience",
    location: "Genève, Suisse",
    email: "julien@example.com",
  },
];

teamgrid.insertAdjacentHTML("beforeend",teamMembers.map(card).join(''))
