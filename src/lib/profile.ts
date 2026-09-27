export const profile = {
  name: "Christian Fernández",
  role: "Senior Full-Stack Developer",
  headline:
    "Senior Full-Stack Developer | Sistemas ERP & Transaccionales · PHP/Laravel · React · DDD",
  valueProposition:
    "Desarrollo y modernizo sistemas ERP empresariales, módulos de facturación y plataformas transaccionales de alta criticidad con PHP/Laravel, React y Arquitectura Hexagonal. Disponible como B2B Contractor con solapamiento EST.",
  stack: "PHP/Laravel · React · Domain-Driven Design (DDD)",
  location: "Sucre, Venezuela",
  availability: "Disponible para contratación remota / B2B Contractor (Solapamiento EST)",
  contractor: {
    modality: "B2B Contractor / Remoto Full-time",
    timezone: "UTC-4 (Solapamiento directo con Costa Este EE. UU. / EST)",
    billing: "Facturación internacional en USD / Inicio inmediato",
  },
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
    "Soy Christian Fernández. Llevo más de 6 años desarrollando y manteniendo sistemas ERP empresariales multi-tenant y plataformas web transaccionales en producción para empresas de América Latina. Me especializo en construir y modernizar software de gestión donde la consistencia de los datos, la facturación y el inventario son críticos. Trabajo con PHP/Laravel y React aplicando Domain-Driven Design (DDD) y Arquitectura Hexagonal para desacoplar las reglas de negocio del framework y permitir que el sistema evolucione sin acumular deuda técnica. En Medine.tech formé parte de la mesa técnica asignada a un banco corporativo en Panamá bajo estrictos estándares de seguridad bancaria, optimicé consultas de reportes reduciendo tiempos de minutos a segundos y migré el portal de compras empresarial de Vue a React con cero tiempo de inactividad para más de 100 empresas clientes.",
  philosophy:
    "El buen software resuelve problemas de negocio reales y tolera el cambio. Priorizo código limpio y testeable, modelos de dominio que reflejen la realidad operativa de la empresa y una comunicación directa y transparente con los equipos de producto.",
  highlights: [
    { value: "6+", label: "años construyendo en producción" },
    { value: "Banca Corp.", label: "mesa técnica en Panamá" },
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
    role: "Desarrollador Full-Stack Senior",
    company: "Medine.tech",
    period: "Jun 2020 — Ago 2026 (6 años)",
    current: true,
    bullets: [
      "<strong>Desarrollo en la mesa técnica de un banco corporativo en Panamá:</strong> atendí y resolví incidencias operativas de alta criticidad, implementando mejoras continuas bajo rigurosos controles de seguridad y auditoría bancaria.",
      "<strong>Optimicé el motor de reportes contables e inventario:</strong> reduje los tiempos de generación de minutos a segundos para más de 100 empresas clientes en Latinoamérica, reestructurando índices y consultas complejas en PostgreSQL.",
      "<strong>Lideré la migración técnica del portal de compras:</strong> migré la plataforma desde Vue hacia una SPA en React 18 con TypeScript sin interrumpir la operación continua de los clientes corporativos, acelerando el ciclo de entrega de nuevas funciones.",
      "<strong>Modernicé el núcleo transaccional del ERP:</strong> refactoricé módulos monolíticos heredados aplicando Domain-Driven Design (DDD) y Arquitectura Hexagonal, aislando las reglas de negocio del framework y reduciendo la deuda técnica acumulada.",
      "<strong>Implementé testing automatizado y calidad estática:</strong> introduje análisis con PHPStan y cobertura de pruebas con PHPUnit y Playwright para asegurar despliegues confiables y prevenir regresiones en producción.",
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
};

export const companies: Company[] = [
  {
    name: "Medine.tech",
    role: "Desarrollador Full-Stack Senior",
    period: "2020 — 2026",
    logo: "/img/logo-medineTech.png",
    logoBg: "bg-[#090a0c]",
    description:
      "Desarrollo principal de ERP empresarial multi-tenant (100+ empresas en LatAm), modernización a DDD y migración frontend de compras de Vue a React.",
    url: "https://medine.tech",
  },
  {
    name: "Cliente Bancario Corporativo",
    role: "Desarrollador en Mesa Corporativa",
    period: "Mesa Panamá",
    logo: "/img/logo-medineTech.png",
    logoBg: "bg-neutral-900",
    description:
      "Desarrollo y soporte técnico en la mesa asignada a un banco corporativo en Panamá, con entregas bajo rigurosos estándares de seguridad y calidad bancaria.",
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
    slug: "siscav",
    title: "Siscav",
    tagline: "Sistema de Gestión de Casos y Conflictos Educativos con WebSockets y 2FA",
    description:
      "Plataforma institucional para la resolución y seguimiento de conflictos estudiantiles y laborales. Diseñada para alta confidencialidad y coordinación inmediata entre departamentos escolares, cuenta con autenticación de dos factores (2FA), control de acceso granular por permisos (RBAC), actualizaciones en tiempo real y generación de reportes en PDF y Excel.",
    metaDescription:
      "Siscav — Sistema para instituciones educativas que gestiona casos de conflicto con Laravel, React, TypeScript y WebSockets.",
    image: "/img/plenitudaa.png",
    status: "Completado",
    tags: [
      "Laravel",
      "React",
      "TypeScript",
      "MariaDB",
      "WebSockets",
      "2FA Security",
      "Tailwind CSS",
      "Hexagonal Architecture",
    ],
    githubUrl: "https://github.com/chmalo",
    architecture: {
      summary:
        "Arquitectura desacoplada en capas guiada por el dominio con Laravel en el backend y React en el frontend. Implementa comunicación bidireccional mediante WebSockets para sincronización de estados y bitácora forense de casos.",
      keyPoints: [
        "Aislamiento de la lógica de expediente escolar y transiciones de estado de casos dentro del dominio.",
        "Autenticación segura en dos factores (2FA) y control RBAC con permisos atómicos por rol.",
        "Eventos en tiempo real distribuidos mediante WebSockets para alertas de resolución instantánea.",
        "Pipeline de exportación asíncrona de expedientes legales a PDF y Excel con almacenamiento seguro en la nube.",
      ],
    },
    engineeringLessons: {
      challenge:
        "Coordinar expedientes confidenciales y resoluciones de casos entre múltiples departamentos escolares sin riesgo de fuga de datos ni pérdida de trazabilidad temporal.",
      decision:
        "Implementé un modelo de permisos atómicos RBAC con autenticación de dos factores (2FA) forzosa y sincronización de eventos de resolución en tiempo real mediante WebSockets.",
      learned:
        "En sistemas de alta sensibilidad, la seguridad y la auditoría forense no pueden ser un parche posterior: deben estar intrínsecas en el modelo de dominio desde el día uno.",
    },
    features: [
      "Gestión integral de expedientes confidenciales con control granular de accesos por rol.",
      "Autenticación de dos factores (2FA) para proteger la privacidad de la información estudiantil.",
      "Actualizaciones y notificaciones en tiempo real sin recargar la interfaz mediante WebSockets.",
      "Generación de reportes detallados en formatos PDF y Excel.",
      "Almacenamiento y resguardo cifrado de evidencias documentales en la nube.",
    ],
    techStack: [
      {
        layer: "Backend Framework",
        tech: "Laravel + PHP 8.2",
        purpose: "Casos de uso, servicios de dominio, gestión de sesiones seguras y generación de reportes.",
      },
      {
        layer: "Frontend",
        tech: "React + TypeScript + Tailwind CSS",
        purpose: "Interfaz SPA tipada, accesible y reactiva a eventos en vivo.",
      },
      {
        layer: "Tiempo Real",
        tech: "WebSockets (Event Broadcast)",
        purpose: "Transmisión bidireccional instantánea de estados de resolución y alertas.",
      },
      {
        layer: "Base de Datos",
        tech: "MariaDB",
        purpose: "Persistencia relacional estructurada con integridad referencial estricta.",
      },
      {
        layer: "Testing & Calidad",
        tech: "PHPUnit + Playwright",
        purpose: "Pruebas unitarias de reglas de negocio y pruebas E2E de flujos de casos.",
      },
    ],
    creationNotes: [
      "Desarrollado para resolver la falta de trazabilidad y retrasos en la atención de casos sensibles en instituciones educativas.",
      "La prioridad fundamental fue garantizar la confidencialidad absoluta mediante cifrado y auditoría inmutable de accesos.",
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
    image: "/img/aamexico.png",
    status: "Producción",
    tags: [
      "Laravel",
      "React",
      "TypeScript",
      "PostgreSQL",
      "DDD",
      "Modular Architecture",
      "Docker",
    ],
    githubUrl: "https://github.com/chmalo",
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
  {
    slug: "medine-erp-portal",
    title: "Medine ERP — Portal de Compras & Modernización",
    tagline: "Migración de Vue a React y Modernización Arquitectónica Hexagonal",
    description:
      "Caso de estudio técnico sobre la modernización del portal de compras y optimización de reportes críticos en un sistema ERP multi-tenant empresarial que da servicio a más de 100 empresas en Latinoamérica.",
    metaDescription:
      "Modernización de ERP en Medine.tech — Migración de Vue a React y arquitectura hexagonal en Laravel con PHP 8.2.",
    image: "/img/plenitudaa.png",
    status: "Producción",
    tags: [
      "PHP 8.2",
      "Laravel",
      "React 18",
      "Vue.js",
      "Hexagonal Architecture",
      "PostgreSQL",
      "Optimization",
    ],
    liveUrl: "https://medine.tech",
    architecture: {
      summary:
        "Reestructuración progresiva de módulos monolíticos heredados hacia Arquitectura Hexagonal y migración completa del portal de compras desde Vue.js hacia una SPA en React 18 con TypeScript.",
      keyPoints: [
        "Desacoplamiento de controladores saturados mediante la introducción de puertos, adaptadores y casos de uso.",
        "Optimización de consultas SQL complejas en PostgreSQL, reduciendo el tiempo de generación de reportes de horas a segundos.",
        "Migración frontend fluida sin interrupción operativa para las empresas clientes.",
        "Implementación de buenas prácticas bajo estándares Codely y control de calidad con PHPStan.",
      ],
    },
    engineeringLessons: {
      challenge:
        "Reemplazar un portal de compras legado en Vue y refactorizar controladores monolíticos mientras más de 100 empresas operaban transacciones reales en simultáneo.",
      decision:
        "Apliqué el patrón Strangler Fig: migración incremental por pantallas con contratos tipados en TypeScript y adaptadores REST para convivir con los endpoints legados hasta completar la transición a React 18.",
      learned:
        "Una migración técnica exitosa no se juzga por lo novedoso del stack, sino por su invisibilidad operativa para los usuarios que dependen del sistema para facturar.",
    },
    features: [
      "Portal de compras modernizado en React 18 con validaciones en tiempo real y UX fluida.",
      "Módulo de reportes contables e inventario optimizado para procesar grandes volúmenes transaccionales.",
      "Módulos desacoplados y testeados bajo arquitectura hexagonal con PHPUnit.",
      "Integración continua y estándares de calidad para clientes corporativos de alta demanda.",
    ],
    techStack: [
      {
        layer: "Backend Framework",
        tech: "Laravel + PHP 8.2",
        purpose: "Arquitectura hexagonal, microservicios internos y optimización de procesamiento.",
      },
      {
        layer: "Frontend Modernizado",
        tech: "React 18 + TypeScript",
        purpose: "Reemplazo de la interfaz legacy en Vue con arquitectura de componentes reutilizables.",
      },
      {
        layer: "Bases de Datos",
        tech: "PostgreSQL & MySQL",
        purpose: "Almacenamiento multi-tenant con índices de alto rendimiento para contabilidad.",
      },
      {
        layer: "Calidad de Código",
        tech: "PHPStan + PHPUnit",
        purpose: "Análisis estático de tipos y cobertura de pruebas de regresión.",
      },
    ],
    creationNotes: [
      "Representó uno de los mayores hitos de ingeniería en Medine.tech: eliminar la deuda técnica sin detener la operación de las empresas.",
      "Los estándares de confiabilidad implementados aquí fueron clave para atender la mesa corporativa bancaria de Panamá.",
    ],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Lenguajes & Backend",
    items: [
      "PHP 7.1+ / 8.2+",
      "Laravel",
      "TypeScript",
      "JavaScript",
      "Node.js",
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
      "PostgreSQL",
      "MySQL",
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
  "Liderazgo técnico en mesas bancarias corporativas",
  "Refactorización de arquitecturas legacy sin downtime",
  "Modelado de dominio con Domain-Driven Design (DDD)",
  "Cultura de calidad: TDD/BDD, PHPStan y Playwright",
  "Optimización de bases de datos relacionales de alto volumen",
  "Comunicación fluida con stakeholders y directores de negocio",
];

export const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#empresas", label: "Empresas" },
  { href: "#arquitectura", label: "Arquitectura" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#formacion", label: "Formación" },
  { href: "#contacto", label: "Contacto" },
];
