export const profile = {
  name: "Christian Fernández",
  role: "Desarrollador Full-Stack",
  headline:
    "Full-Stack Engineer | Sistemas ERP, APIs & Arquitectura de Software",
  valueProposition:
    "Desarrollo y modernizo sistemas ERP empresariales, módulos de facturación y plataformas web con TypeScript/Node.js, PHP/Laravel, React y Domain-Driven Design (DDD).",
  stack: "TypeScript/Node.js · PHP/Laravel · React · Python · DDD",
  location: "Sucre, Venezuela",
  email: "chmalo.f@gmail.com",
  phone: "+58 424 895 1914",
  phoneHref: "tel:+584248951914",
  cvUrl: "/cv_christian_fernandez.pdf",
  social: {
    linkedin: "https://linkedin.com/in/christian-fernandez-dev",
    linkedinRecommendations:
      "https://linkedin.com/in/christian-fernandez-dev/details/recommendations/",
    github: "https://github.com/chmalo",
  },
  summary:
    "Soy Christian Fernández. Llevo más de 6 años construyendo y manteniendo sistemas ERP y plataformas web de gestión en producción. Me especializo en desarrollar y modernizar software empresarial donde la consistencia de datos, la facturación y el inventario son críticos. Cuento con una sólida trayectoria en producción con PHP/Laravel y React, pero entiendo los lenguajes como herramientas de ingeniería: trabajo con solvencia en TypeScript/Node.js y Python aplicando Domain-Driven Design (DDD), Arquitectura Hexagonal y testing automatizado para garantizar que los sistemas evolucionen sin deuda técnica. A través de Medine.tech colaboré como consultor técnico full-stack para Pensanómica (software ERP en Panamá), optimicé consultas complejas en MySQL reduciendo tiempos de reportes de horas a segundos y migré el portal de compras empresarial de Vue a React con cero downtime para las empresas clientes.",
  philosophy:
    "El buen software resuelve problemas de negocio reales y tolera el cambio. Priorizo código limpio y testeable, modelos de dominio que reflejen la realidad operativa de la empresa y una comunicación directa y transparente con los equipos de producto.",
  highlights: [
    { value: "6+", label: "años construyendo en producción" },
    { value: "Pensanómica", label: "consultor técnico en ERP (Panamá)" },
    { value: "DDD & Hexagonal", label: "arquitectura desacoplada" },
    { value: "Vue ➔ React", label: "migración con cero downtime" },
  ],
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Desarrollador Full-Stack",
    company: "Platzilla",
    period: "2026",
    bullets: [
      "Desarrollo full-stack para plataforma de organización de datos, rutinas de equipo e indicadores de gestión empresarial.",
      "Diseño e integración de APIs RESTful con validaciones estrictas y arquitectura desacoplada.",
      "Construcción y optimización de interfaces de usuario modernas, interactivas y responsivas con React y TypeScript.",
    ],
  },
  {
    role: "Desarrollador Full-Stack",
    company: "Medine.tech",
    period: "Jun 2020 — Ago 2026 (6 años)",
    bullets: [
      "<strong>Desarrollo en sistema ERP empresarial:</strong> desarrollo continuo de nuevas funcionalidades y módulos para plataforma ERP en producción.",
      "<strong>Consultoría técnica para Pensanómica (Flexio ERP, Panamá):</strong> optimicé consultas SQL complejas en MySQL y procesamiento de reportes de contabilidad e inventario, reduciendo tiempos de horas a segundos.",
      "<strong>Migración frontend de portal de compras:</strong> lideré la migración técnica desde Vue hacia una SPA en React 18 con TypeScript sin interrumpir la operación continua de los clientes corporativos.",
      "<strong>Modernización arquitectónica:</strong> refactoricé módulos monolíticos aplicando Domain-Driven Design (DDD) y Arquitectura Hexagonal, aislando las reglas de negocio del framework.",
      "<strong>Calidad y testing:</strong> implementé análisis estático con PHPStan y cobertura de pruebas automatizadas con PHPUnit y Playwright para asegurar entregas confiables a producción.",
    ],
  },
];

export type Company = {
  name: string;
  role: string;
  period: string;
  logo?: string;
  logoBg?: string;
  description: string;
  url?: string;
  linkedinUrl?: string;
};

export const companies: Company[] = [
  {
    name: "Platzilla",
    role: "Desarrollador Full-Stack",
    period: "2026",
    logo: "/img/logo-platzilla.png",
    logoBg: "bg-white",
    description:
      "Desarrollo de funcionalidades full-stack para plataforma de organización de datos, rutinas operativas e indicadores de gestión empresarial.",
    url: "https://www.platzilla.com/",
    linkedinUrl: "https://www.linkedin.com/company/platzilla-software/",
  },
  {
    name: "Medine.tech",
    role: "Desarrollador Full-Stack",
    period: "2020 — 2026",
    logo: "/img/logo-medineTech.png",
    logoBg: "bg-[#090a0c]",
    description:
      "Desarrollo y modernización de sistema ERP empresarial, refactorización a Domain-Driven Design (DDD) y consultoría técnica especializada para Pensanómica en Panamá.",
    url: "https://medine.tech",
    linkedinUrl: "https://www.linkedin.com/company/medinetech/",
  },
  {
    name: "Pensanómica",
    role: "Consultoría Técnica & Desarrollo",
    period: "Consultoría",
    logo: "/img/logo-pensanomica.png",
    logoBg: "bg-white",
    description:
      "Consultoría técnica especializada en Flexio ERP para Panamá: optimización de reportes contables y consultas complejas en MySQL (reduciendo tiempos de horas a segundos).",
    url: "https://pensanomica.com",
    linkedinUrl: "https://www.linkedin.com/company/pensanomica/",
  },
];

export type TechStackItem = {
  layer: string;
  tech: string;
  purpose: string;
};

export type ArchitectureDetail = {
  summary: string;
  diagram?: string;
  keyPoints: string[];
};

export type EngineeringLessons = {
  challenge: string;
  decision: string;
  learned: string;
};

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  metaDescription?: string;
  image?: string;
  status: "Completado" | "En desarrollo" | "Producción";
  isInternal?: boolean;
  internalNote?: string;
  tags: string[];
  githubUrl?: string;
  secondaryGithubUrl?: { label: string; url: string };
  liveUrl?: string;
  architecture: ArchitectureDetail;
  engineeringLessons: EngineeringLessons;
  features: string[];
  techStack: TechStackItem[];
  creationNotes: string[];
};

export const projects: Project[] = [
  {
    slug: "moto-taxi-finance",
    title: "Moto Taxi Finance",
    tagline: "PWA Financiera Multi-Tenant con Liquidación Parametrizada, RLS y Tasa BCV",
    description:
      "Aplicación web progresiva (PWA) de finanzas operativas para conductores y propietarios en el sector de transporte en dos ruedas. Permite a los choferes registrar sus ingresos diarios en calle, conciliar gastos de combustible y alquiler al cierre del período, y automatizar el reparto transparente entre la ganancia neta del chofer y el fondo de mantenimiento preventivo ('Pote Moto').",
    metaDescription:
      "Moto Taxi Finance — PWA financiera multi-tenant con Next.js, React 19, TypeScript, PostgreSQL RLS y Drizzle ORM.",
    image: "/img/moto-taxi.png",
    status: "Producción",
    tags: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Row-Level Security (RLS)",
      "Better-Auth",
      "PWA",
      "Tailwind CSS",
    ],
    liveUrl: "https://moto-taxi-finance.vercel.app/",
    githubUrl: "https://github.com/chmalo/moto-taxi-finance",
    architecture: {
      summary:
        "Arquitectura modular orientada al dominio (package-by-feature) con aislamiento multi-tenant estricto mediante PostgreSQL Row-Level Security (RLS) en tiempo de ejecución, transacciones ACID con Drizzle ORM y contabilidad monetaria en enteros (minor units) para evitar errores de coma flotante.",
      keyPoints: [
        "Aislamiento de datos por inquilino mediante políticas nativas de PostgreSQL RLS con SET LOCAL ROLE app_user dentro de cada transacción.",
        "Diseño modular (package-by-feature) con separación limpia entre capas de dominio, aplicación e infraestructura.",
        "Manejo de importes monetarios en unidades enteras (minor units) y sincronización programada con la tasa oficial BCV vía cron.",
        "Autenticación segura multi-tenant con Better-Auth, sesiones firmadas y cifrado criptográfico Argon2.",
      ],
    },
    engineeringLessons: {
      challenge:
        "Garantizar la confidencialidad y aislamiento estricto de las cuentas de conductores en una arquitectura multi-tenant compartida sin encarecer la infraestructura en la nube.",
      decision:
        "Implementé Row-Level Security (RLS) directamente en el motor PostgreSQL combinado con Drizzle ORM, delegando la regla de aislamiento a la base de datos para que sea imposible una fuga de datos entre inquilinos.",
      learned:
        "En sistemas financieros multi-tenant, la seguridad no debe depender únicamente de cláusulas WHERE en el código de aplicación: las políticas RLS en base de datos actúan como un cortafuegos infranqueable.",
    },
    features: [
      "Registro ágil de carreras e ingresos diarios optimizado para interacción táctil en dispositivos móviles.",
      "Motor de liquidación automático: cálculo de combustible, cuota de alquiler y reparto al 'Pote Moto'.",
      "Integración automatizada con la tasa oficial de cambio del Banco Central de Venezuela (BCV).",
      "Soporte PWA instalable con funcionamiento rápido y diseño responsivo adaptado al uso en campo.",
      "Historial detallado de liquidaciones y balances de saldo por período.",
    ],
    techStack: [
      {
        layer: "Framework Full-Stack",
        tech: "Next.js 16 (App Router) + React 19 + TypeScript",
        purpose: "Renderizado eficiente, server actions seguras y tipado estricto de punta a punta.",
      },
      {
        layer: "Base de Datos & ORM",
        tech: "PostgreSQL (Neon) + Drizzle ORM",
        purpose: "Persistencia relacional con migraciones declarativas y consultas tipadas.",
      },
      {
        layer: "Seguridad & Aislamiento",
        tech: "PostgreSQL RLS + Better-Auth + Argon2",
        purpose: "Aislamiento por tenant_id a nivel de base de datos y autenticación robusta.",
      },
      {
        layer: "Testing & Calidad",
        tech: "Vitest + Testcontainers",
        purpose: "Pruebas de integración contra instancias reales de PostgreSQL en Docker.",
      },
    ],
    creationNotes: [
      "Diseñado y desarrollado para solventar la falta de claridad en las liquidaciones diarias entre choferes y propietarios de motocicletas.",
      "La aplicación se encuentra desplegada y en uso activo en producción.",
    ],
  },
  {
    slug: "indacsa",
    title: "INDACSA — Planificación Agroindustrial",
    tagline: "Sistema de Optimización y Programación de Procesamiento de Semilla Certificada",
    description:
      "Aplicación técnica interna diseñada para reemplazar la planificación manual en hojas de cálculo de INDACSA, empresa productora de semilla certificada para siembra. El sistema modela la recepción de grano crudo, la capacidad de procesado en cuatro centros de maquinaria especializada y el balanceo de inventarios, resolviendo la secuenciación de producción para minimizar tiempos muertos y costos de limpieza entre cambios de variedad.",
    metaDescription:
      "INDACSA — Sistema de planificación de procesado de semilla certificada con Laravel, Inertia, React 19, TypeScript y PostgreSQL.",
    image: "/img/indacsa.png",
    status: "Producción",
    isInternal: true,
    internalNote: "Sistema desplegado en infraestructura privada de planta / Intranet corporativa.",
    tags: [
      "Laravel 13",
      "PHP 8.3",
      "Inertia.js 3",
      "React 19",
      "TypeScript",
      "PostgreSQL 17",
      "Docker",
      "Tailwind CSS 4",
    ],
    architecture: {
      summary:
        "Arquitectura desacoplada moderna con Laravel e Inertia.js sobre React 19 y TypeScript. Modela el dominio industrial de procesado de grano separando tres necesidades operativas (envasado, procesado y compras) y optimiza la programación semanal de maquinaria reduciendo paradas técnicas por limpieza.",
      keyPoints: [
        "Modelado de dominio industrial complejo: balanceo entre pedidos con fecha comprometida e inventario disponible de grano crudo y procesado.",
        "Optimización de secuencias de maquinaria: algoritmo para programar los cuatro centros de procesado minimizando tiempos de limpieza entre variedades.",
        "Arquitectura SPA con Server-Side Rendering (SSR) mediante Inertia.js 3 y React 19 sin la complejidad de una API REST separada.",
        "Infraestructura contenerizada con Docker compuesta por cinco servicios orquestados (PHP HTTP, Vite SSR, PostgreSQL 17, workers y colas).",
      ],
    },
    engineeringLessons: {
      challenge:
        "Reemplazar matrices de Excel consolidadas durante años por el personal de planta, donde el costo y tiempo de limpiar un centro de procesado entre variedades distintas condiciona la rentabilidad de todo el plan semanal.",
      decision:
        "Diseñé un motor de generación y comparación de escenarios productivos: el sistema permite simular diferentes alternativas de asignación de centros antes de convertir el escenario óptimo en el plan de producción semanal.",
      learned:
        "El software para plantas industriales debe modelar con fidelidad las restricciones físicas de la maquinaria; la usabilidad no es un adorno visual, sino la claridad con la que el operario visualiza el impacto de cada decisión de programación.",
    },
    features: [
      "Cálculo encadenado de necesidades: grano a envasar, grano a procesar y grano a comprar.",
      "Programación visual y asignación de carga de trabajo para 4 centros de procesado de semilla.",
      "Simulación y comparación de escenarios semanales considerando horas de limpieza por cambio de variedad.",
      "Trazabilidad de recepción de grano en camión y seguimiento de lotes procesados.",
      "Gestión de usuarios y accesos por perfiles de planta.",
    ],
    techStack: [
      {
        layer: "Backend",
        tech: "Laravel 13 + PHP 8.3",
        purpose: "Lógica de negocio, reglas de dominio de planta, migraciones y colas de tareas.",
      },
      {
        layer: "Frontend & SSR",
        tech: "Inertia.js 3 + React 19 + TypeScript + Tailwind 4",
        purpose: "Interfaz SPA reactiva, moderna y con tipado estricto.",
      },
      {
        layer: "Base de Datos",
        tech: "PostgreSQL 17",
        purpose: "Motor relacional de alto rendimiento para el histórico de producción y lotes.",
      },
      {
        layer: "Contenedores",
        tech: "Docker + Docker Compose",
        purpose: "Entorno industrial homogéneo con procesos dedicados para HTTP, Vite, SSR y colas.",
      },
      {
        layer: "Calidad & Testing",
        tech: "Pest + PHPStan + ESLint",
        purpose: "Análisis estático riguroso y pruebas de comportamiento en frontend y backend.",
      },
    ],
    creationNotes: [
      "Desarrollado para la optimización de procesos de planta en INDACSA bajo rigurosa especificación de dominio.",
      "El sistema opera en infraestructura interna de la compañía; el código y los datos de producción se mantienen bajo confidencialidad industrial.",
    ],
  },
  {
    slug: "poultry-track",
    title: "Poultry Track",
    tagline: "Sistema de Gestión Integral Avícola con Arquitectura Modular DDD",
    description:
      "ERP vertical para la agroindustria avícola que automatiza el seguimiento de lotes de cría, curvas de mortalidad, consumo de alimento, inventario de medicamentos, almacenes y ventas. Construido para resolver un problema operativo real del sector productivo.",
    metaDescription:
      "Poultry Track — Sistema de gestión integral para granjas avícolas con Laravel, React, TypeScript y PostgreSQL.",
    image: "/img/poultry-track.png",
    status: "En desarrollo",
    tags: [
      "Laravel",
      "React",
      "TypeScript",
      "PostgreSQL",
      "DDD",
      "Modular Architecture",
      "Docker",
    ],
    githubUrl: "https://github.com/chmalo/poultry-track",
    architecture: {
      summary:
        "Monolito modular modelado según Domain-Driven Design (DDD). Cada bounded context (Cría, Almacén, Inventario, Comercial) cuenta con entidades y agregados independientes sobre PostgreSQL.",
      keyPoints: [
        "Modelado de dominio biológico: cálculo preciso de índices de conversión alimenticia y tasas de supervivencia.",
        "Separación en módulos desacoplados (Cría, Almacenes, Inventario, Ventas) para evitar dependencias cruzadas.",
        "Manejo de transacciones ACID estrictas para despachos de inventario y liquidación de lotes.",
        "Contenedorización integral con Docker para despliegue reproducible en servidores locales o cloud.",
      ],
    },
    engineeringLessons: {
      challenge:
        "Gestionar reglas de negocio agroindustriales altamente variables (curvas de mortalidad biológica, conversiones de alimento balanceado, mermas de almacén) propensas a romper cálculos contables.",
      decision:
        "Desacoplé la lógica biológica y de inventario en Bounded Contexts independientes con Domain-Driven Design, separando las fórmulas matemáticas del ORM y la persistencia en PostgreSQL.",
      learned:
        "El acoplamiento temprano al framework es el principal generador de deuda técnica en Laravel. Mantener las reglas biológicas en código puro PHP permitió modificarlas sin tocar la base de datos.",
    },
    features: [
      "Monitoreo diario de lotes de aves: mortalidad, consumo de alimento balanceado y peso estimado.",
      "Control de inventario multialmacén: alimentos, vacunas y suministros con puntos de reorden.",
      "Módulo de comercialización y ventas con cálculo de margen operativo por lote finalizado.",
      "Dashboard analítico con gráficos de rendimiento y proyecciones de cosecha avícola.",
      "Diseño modular que permite incorporar nuevas etapas de producción sin tocar módulos existentes.",
    ],
    techStack: [
      {
        layer: "Backend Framework",
        tech: "Laravel + PHP 8.2",
        purpose: "Arquitectura modular DDD con comandos, eventos de dominio y casos de uso.",
      },
      {
        layer: "Frontend",
        tech: "React + TypeScript + Vite",
        purpose: "Vistas operativas rápidas para captura de datos en campo y dashboards analíticos.",
      },
      {
        layer: "Base de Datos",
        tech: "PostgreSQL",
        purpose: "Motor relacional para manejo de transacciones concurrentes e histórico de lotes.",
      },
      {
        layer: "Contenedores",
        tech: "Docker + Docker Compose",
        purpose: "Empaquetado y ejecución homogénea en desarrollo y producción.",
      },
    ],
    creationNotes: [
      "Nació para resolver los desajustes de costos e inventario en granjas de familiares y amigos del sector avícola.",
      "Aplica el enfoque de Clean Architecture para permitir que las reglas de negocio biológicas y contables permanezcan aisladas del framework.",
    ],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Lenguajes & Backend",
    items: [
      "TypeScript",
      "Node.js",
      "PHP 7.1+ / 8.2+",
      "Laravel",
      "Python (FastAPI / Scripts)",
      "JavaScript",
      "Next.js",
      "CodeIgniter",
    ],
  },
  {
    category: "Frontend & UI",
    items: [
      "React 18",
      "TypeScript",
      "Vue.js (v1/v2)",
      "Vite",
      "Tailwind CSS",
      "SPAs",
    ],
  },
  {
    category: "Arquitectura & Prácticas",
    items: [
      "Domain-Driven Design (DDD)",
      "Arquitectura Hexagonal",
      "SOLID & Clean Code",
      "OOP",
      "APIs RESTful",
      "Sistemas Multi-tenant",
    ],
  },
  {
    category: "Bases de Datos",
    items: [
      "MySQL",
      "PostgreSQL",
      "MariaDB",
      "Doctrine ORM",
      "Eloquent ORM",
      "Optimización SQL",
    ],
  },
  {
    category: "Testing & Calidad",
    items: [
      "PHPUnit",
      "TDD / ATDD",
      "BDD / Behat",
      "Playwright (E2E)",
      "PHPStan",
    ],
  },
  {
    category: "DevOps & Herramientas",
    items: [
      "Docker & Docker Compose",
      "Git & GitHub (PRs, Code Review)",
      "CI / CD Pipelines",
      "Claude Code (Desarrollo con IA)",
    ],
  },
];

export const education = {
  degree: "Licenciatura en Informática",
  status: "8.º semestre completado (2013)",
  institution: "Universidad de Oriente (UDO) · Carúpano, Venezuela",
};

export const certifications: { title: string; issuer: string; year: string }[] =
  [
    {
      title: "Domain-Driven Design (DDD), SOLID y Clean Code",
      issuer: "Codely",
      year: "Certificado",
    },
    {
      title: "Buenas prácticas de OOP y Testing en PHP",
      issuer: "Codely",
      year: "Certificado",
    },
    {
      title: "Docker, Node.js, React, NestJS, Next.js y Vue 3",
      issuer: "Formación Autodirigida (Udemy)",
      year: "Especialización",
    },
  ];

export const languages = [
  { name: "Español", level: "Nativo" },
  { name: "Inglés", level: "Básico (en mejora activa)" },
];

export const softSkills = [
  "Sistemas ERP y plataformas de facturación / inventario",
  "Refactorización de arquitecturas legacy sin downtime",
  "Modelado de dominio con Domain-Driven Design (DDD)",
  "Cultura de testing automatizado (TDD/BDD) y PHPStan",
  "Optimización de bases de datos relacionales (PostgreSQL/MySQL)",
  "Resolución de problemas críticos en entornos de producción",
];

export const navLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
];
