export const profile = {
  name: "Christian Fernández",
  role: "Desarrollador Full-Stack & Team Lead",
  stack: "PHP/Laravel · React · Domain-Driven Design (DDD)",
  location: "Sucre, Venezuela",
  availability: "Disponible para trabajo remoto / Nuevos retos",
  email: "chmalo.f@gmail.com",
  phone: "+58 424 895 1914",
  phoneHref: "tel:+584248951914",
  cvUrl: "/cv_christian_fernandez.pdf",
  social: {
    linkedin: "https://linkedin.com/in/christian-fernandez-dev",
    github: "https://github.com/chmalo",
  },
  summary:
    "Desarrollador Full-Stack y Team Lead con más de 6 años de experiencia, especializado en sistemas de planificación de recursos empresariales (ERP) multi-tenant y entornos web de alta criticidad. Experto en construir soluciones escalables con PHP/Laravel y React, aplicando Domain-Driven Design (DDD), Arquitectura Hexagonal y testing automatizado (TDD/BDD). Lideró el equipo de desarrollo asignado a la mesa corporativa de un importante banco en Panamá bajo estándares bancarios de calidad y seguridad, y dirigió la modernización frontend de plataformas críticas de Vue a React.",
  highlights: [
    { value: "6+", label: "años de experiencia" },
    { value: "Banca Corp.", label: "mesa corporativa en Panamá" },
    { value: "DDD & Hexagonal", label: "arquitectura en producción" },
    { value: "Vue ➔ React", label: "migración de core frontend" },
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
    role: "Desarrollador Full-Stack y Team Lead",
    company: "Medine.tech",
    period: "Jun 2020 — Ago 2026 (6 años)",
    current: true,
    bullets: [
      "Desarrollador principal de un sistema ERP empresarial multi-tenant con servicio activo para empresas de toda Latinoamérica.",
      "Modernización de la arquitectura: migré módulos heredados a Domain-Driven Design (DDD) y Arquitectura Hexagonal, mejorando la mantenibilidad y reduciendo drásticamente la deuda técnica.",
      "Cliente bancario corporativo (Panamá): lideré el equipo de desarrollo asignado a la mesa operativa de un importante banco comercial, entregando mejoras continuas y correcciones bajo rigurosos estándares de calidad y auditoría de nivel bancario.",
      "Optimización de rendimiento: ajusté y optimicé consultas SQL y procesamiento de reportes de contabilidad e inventario, reduciendo sustancialmente los tiempos de generación.",
      "Migración de frontend (2023): dirigí la migración tecnológica del portal de compras empresarial desde Vue a React con TypeScript, modernizando toda su interfaz y flujo de usuario.",
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
    role: "Full-Stack & Team Lead",
    period: "2020 — 2026",
    logo: "/img/logo-medineTech.png",
    logoBg: "bg-[#090a0c]",
    description:
      "Desarrollo principal de ERP empresarial multi-tenant (100+ empresas en LatAm), modernización a DDD y migración frontend de compras de Vue a React.",
    url: "https://medine.tech",
  },
  {
    name: "Cliente Bancario Corporativo",
    role: "Líder de Desarrollo asignado",
    period: "Mesa Panamá",
    logo: "/img/logo-medineTech.png",
    logoBg: "bg-neutral-900",
    description:
      "Liderazgo técnico en la mesa asignada de un banco corporativo en Panamá, con entregas bajo rigurosos estándares de seguridad y calidad bancaria.",
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
  "Liderazgo técnico de equipos",
  "Comunicación con clientes corporativos",
  "Resolución de problemas críticos",
  "Reducción de deuda técnica",
  "Mentoría y code review riguroso",
  "Enfoque en valor de negocio",
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
