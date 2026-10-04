import fs from "node:fs";
import path from "node:path";
import PDFDocument from "pdfkit";
import {
  profile,
  education,
  certifications,
  languages,
} from "../src/lib/profile.ts";

const OUTPUT_PATH = path.resolve(process.cwd(), "public/cv_christian_fernandez.pdf");

const FONT_REGULAR = path.resolve(
  process.cwd(),
  "node_modules/@fontsource/geist-sans/files/geist-sans-latin-400-normal.woff"
);
const FONT_SEMIBOLD = path.resolve(
  process.cwd(),
  "node_modules/@fontsource/geist-sans/files/geist-sans-latin-600-normal.woff"
);
const FONT_BOLD = path.resolve(
  process.cwd(),
  "node_modules/@fontsource/geist-sans/files/geist-sans-latin-700-normal.woff"
);
const FONT_MONO = path.resolve(
  process.cwd(),
  "node_modules/@fontsource/geist-mono/files/geist-mono-latin-400-normal.woff"
);

function createCV() {
  const doc = new PDFDocument({
    size: "LETTER",
    margins: { top: 30, bottom: 20, left: 38, right: 38 },
    info: {
      Title: `${profile.name} - Curriculum Vitae`,
      Author: profile.name,
      Subject: "Desarrollador Full-Stack CV / Resumen Profesional",
      Keywords: "Desarrollador Full-Stack, Laravel, React, TypeScript, Next.js, PostgreSQL, DDD, ERP",
      Creator: "portfolio-generator",
    },
    bufferPages: true,
  });

  doc.registerFont("Geist", FONT_REGULAR);
  doc.registerFont("Geist-SemiBold", FONT_SEMIBOLD);
  doc.registerFont("Geist-Bold", FONT_BOLD);
  doc.registerFont("Geist-Mono", FONT_MONO);

  const stream = fs.createWriteStream(OUTPUT_PATH);
  doc.pipe(stream);

  const pageWidth = 612;
  const pageHeight = 792;
  const margin = 38;
  const contentWidth = pageWidth - margin * 2;

  const colorTitle = "#090a0c";
  const colorText = "#1e293b";
  const colorMuted = "#475569";
  const colorSubtle = "#64748b";
  const colorAccent = "#0284c7";
  const colorBorder = "#cbd5e1";

  function drawSectionHeader(title: string) {
    doc.x = margin;
    doc.moveDown(0.55);

    const headerY = doc.y;

    doc.save();
    doc.roundedRect(margin, headerY + 1, 2.5, 9.5, 1).fillColor(colorAccent).fill();
    doc.restore();

    doc
      .font("Geist-Bold")
      .fontSize(9.4)
      .fillColor(colorTitle)
      .text(title.toUpperCase(), margin + 8, headerY, {
        characterSpacing: 0.8,
        width: contentWidth - 8,
      });

    const lineY = doc.y + 2.5;
    doc
      .strokeColor(colorBorder)
      .lineWidth(0.5)
      .moveTo(margin, lineY)
      .lineTo(pageWidth - margin, lineY)
      .stroke();

    doc.x = margin;
    doc.moveDown(0.28);
  }

  doc
    .font("Geist-Bold")
    .fontSize(19)
    .fillColor(colorTitle)
    .text(profile.name.toUpperCase(), margin, doc.y, {
      align: "left",
      characterSpacing: 0.5,
      width: contentWidth,
    });

  doc
    .font("Geist-SemiBold")
    .fontSize(9.8)
    .fillColor(colorAccent)
    .text(
      "Desarrollador Full-Stack | Sistemas ERP, APIs & Arquitectura de Software",
      margin,
      doc.y,
      { align: "left", width: contentWidth }
    );

  doc.moveDown(0.18);

  const contactY = doc.y;
  doc.font("Geist").fontSize(8.5).fillColor(colorText);

  const contactText = `Correo: ${profile.email}   ·   Tel: ${profile.phone}   ·   Ubicación: ${profile.location}`;
  doc.text(contactText, margin, contactY, { width: contentWidth });

  doc.moveDown(0.12);
  const linksY = doc.y;

  doc.font("Geist").fontSize(8.5);
  doc.fillColor(colorAccent).text("GitHub: github.com/chmalo", margin, linksY, {
    link: profile.social.github,
    continued: false,
  });

  const ghWidth = doc.widthOfString("GitHub: github.com/chmalo");
  const sep1 = "   ·   ";
  const sep1Width = doc.widthOfString(sep1);

  doc.fillColor(colorSubtle).text(sep1, margin + ghWidth, linksY, { continued: false });

  const liStart = margin + ghWidth + sep1Width;
  doc.fillColor(colorAccent).text("LinkedIn: linkedin.com/in/christian-fernandez-dev", liStart, linksY, {
    link: profile.social.linkedin,
    continued: false,
  });

  const liWidth = doc.widthOfString("LinkedIn: linkedin.com/in/christian-fernandez-dev");
  const sep2 = "   ·   ";
  const sep2Width = doc.widthOfString(sep2);

  doc.fillColor(colorSubtle).text(sep2, liStart + liWidth, linksY, { continued: false });

  const webStart = liStart + liWidth + sep2Width;
  doc.fillColor(colorAccent).text("Portafolio: christianfernandez.dev", webStart, linksY, {
    link: "https://christianfernandez.dev",
    continued: false,
  });

  doc.x = margin;

  drawSectionHeader("Resumen Profesional");

  doc
    .font("Geist")
    .fontSize(8.6)
    .fillColor(colorText)
    .text(profile.cvSummary, margin, doc.y, {
      align: "justify",
      lineGap: 2.0,
      width: contentWidth,
    });

  drawSectionHeader("Experiencia Laboral");

  const allJobs = [
    {
      role: "Desarrollador Full-Stack",
      company: "Platzilla",
      period: "2026 - Presente",
      bullets: [
        "Desarrollo full-stack de módulos core para plataforma de organización de rutinas, datos e indicadores de gestión empresarial.",
        "Diseño e integración de APIs RESTful desacopladas con validación estricta y UI interactiva en React 18 y TypeScript.",
      ],
      stack: "PHP 8.4 · React 18 · TypeScript · PostgreSQL · Docker · Playwright",
    },
    {
      role: "Desarrollador Full-Stack & Consultor Técnico",
      company: "Pensanómica (Flexio ERP, Panamá)",
      period: "Jun 2020 - Ago 2026",
      bullets: [
        "Optimización de reportes de contabilidad e inventario y consultas SQL en MySQL para Flexio ERP, reduciendo tiempos de 3 horas a 1.4 segundos.",
        "Liderazgo técnico en la migración de frontend hacia SPA en React 18 con TypeScript con cero downtime para clientes corporativos y bancarios en Panamá.",
      ],
      stack: "PHP · Laravel · React 18 · TypeScript · Vue.js · MySQL · Docker",
    },
    {
      role: "Desarrollador Full-Stack & Team Lead",
      company: "Medine.tech",
      period: "Jun 2020 - Ago 2026",
      bullets: [
        "Desarrollo y modernización de ERP multi-tenant en LATAM: refactorización hacia Domain-Driven Design (DDD) y Arquitectura Hexagonal.",
        "Aseguramiento de calidad continua: implementación de análisis estático con PHPStan y cobertura de pruebas automatizadas con PHPUnit y Playwright.",
      ],
      stack: "PHP · Laravel · React · TypeScript · MySQL · PostgreSQL · Docker",
    },
  ];

  allJobs.forEach((job, idx) => {
    const jobY = doc.y;
    const dateWidth = 110;
    const roleWidth = contentWidth - dateWidth - 10;

    doc
      .font("Geist-Bold")
      .fontSize(9.6)
      .fillColor(colorTitle)
      .text(job.role, margin, jobY, {
        width: roleWidth,
        continued: false,
      });

    doc
      .font("Geist-SemiBold")
      .fontSize(8.5)
      .fillColor(colorMuted)
      .text(job.period, pageWidth - margin - dateWidth, jobY, {
        width: dateWidth,
        align: "right",
        continued: false,
      });

    doc.x = margin;
    doc.moveDown(0.12);

    doc
      .font("Geist-SemiBold")
      .fontSize(9.0)
      .fillColor(colorAccent)
      .text(job.company, margin, doc.y, { width: contentWidth });

    doc.moveDown(0.14);

    job.bullets.forEach((bullet) => {
      doc
        .font("Geist")
        .fontSize(8.3)
        .fillColor(colorText)
        .text(`•  ${bullet}`, margin, doc.y, {
          indent: 6,
          lineGap: 1.8,
          align: "justify",
          width: contentWidth,
        });
    });

    doc.moveDown(0.14);

    doc
      .font("Geist-SemiBold")
      .fontSize(7.8)
      .fillColor(colorMuted)
      .text(`Stack: `, margin, doc.y, { indent: 6, continued: true });
    doc
      .font("Geist-Mono")
      .fontSize(7.6)
      .fillColor(colorText)
      .text(job.stack, { indent: 6, width: contentWidth });

    if (idx < allJobs.length - 1) {
      doc.moveDown(0.5);
    }
  });

  drawSectionHeader("Proyectos Destacados");

  const featuredProjects = [
    {
      title: "Moto Taxi Finance",
      status: "En Producción",
      url: "https://moto-taxi-finance.vercel.app/",
      github: "https://github.com/chmalo/moto-taxi-finance",
      bullet:
        "PWA financiera multi-tenant con aislamiento por PostgreSQL Row-Level Security (RLS) en base de datos, liquidación diaria parametrizada y sincronización programada con tasa oficial BCV.",
      stack: "Next.js 16 · React 19 · TypeScript · PostgreSQL (Neon) · Drizzle ORM · Better-Auth · PWA",
    },
    {
      title: "INDACSA - Planificación Agroindustrial",
      status: "En Producción (On-Premise)",
      bullet:
        "Sistema de programación agroindustrial con modelado de dominio complejo que optimiza la secuenciación de 4 centros de maquinaria especializada, eliminando hojas de cálculo manuales.",
      stack: "Laravel 13 · PHP 8.3 · Inertia.js 3 · React 19 · TypeScript · PostgreSQL 17 · Docker",
    },
    {
      title: "Poultry Track",
      status: "En Desarrollo",
      github: "https://github.com/chmalo/poultry-track",
      bullet:
        "Monolito modular desacoplado en Bounded Contexts independientes (DDD) para gestión integral avícola con cálculo automatizado de curvas biológicas y márgenes operativos.",
      stack: "Laravel · React · TypeScript · PostgreSQL · Docker · Domain-Driven Design (DDD)",
    },
  ];

  featuredProjects.forEach((proj, idx) => {
    const projY = doc.y;
    const titleText = `${proj.title}  (${proj.status})`;

    doc
      .font("Geist-Bold")
      .fontSize(9.6)
      .fillColor(colorTitle)
      .text(titleText, margin, projY, {
        width: contentWidth - 130,
        continued: false,
      });

    const afterTitleY = doc.y;

    if (proj.url || proj.github) {
      doc.font("Geist-SemiBold").fontSize(7.8);
      const linkBoxWidth = 125;
      const linkX = pageWidth - margin - linkBoxWidth;

      if (proj.url && proj.github) {
        doc.fillColor(colorAccent).text("[Demo en vivo]", linkX, projY + 1.2, {
          link: proj.url,
          width: 60,
          align: "right",
          continued: false,
        });
        doc.fillColor(colorSubtle).text("·", linkX + 62, projY + 1.2, {
          width: 8,
          align: "center",
          continued: false,
        });
        doc.fillColor(colorAccent).text("[GitHub]", linkX + 72, projY + 1.2, {
          link: proj.github,
          width: 53,
          align: "right",
          continued: false,
        });
      } else if (proj.github) {
        doc.fillColor(colorAccent).text("[GitHub]", linkX, projY + 1.2, {
          link: proj.github,
          width: linkBoxWidth,
          align: "right",
          continued: false,
        });
      }
    }

    doc.x = margin;
    doc.y = afterTitleY;
    doc.moveDown(0.12);

    doc
      .font("Geist")
      .fontSize(8.3)
      .fillColor(colorText)
      .text(`•  ${proj.bullet}`, margin, doc.y, {
        indent: 6,
        lineGap: 1.8,
        align: "justify",
        width: contentWidth,
      });

    doc.moveDown(0.14);

    doc
      .font("Geist-SemiBold")
      .fontSize(7.8)
      .fillColor(colorMuted)
      .text(`Tecnologías: `, margin, doc.y, { indent: 6, continued: true });
    doc
      .font("Geist-Mono")
      .fontSize(7.6)
      .fillColor(colorText)
      .text(proj.stack, { indent: 6, width: contentWidth });

    if (idx < featuredProjects.length - 1) {
      doc.moveDown(0.5);
    }
  });

  drawSectionHeader("Habilidades Técnicas");

  const skillGroups = [
    {
      name: "Backend & APIs",
      items: "PHP (8.2+, 8.4), Laravel, TypeScript, Node.js, Python (FastAPI), RESTful APIs, CodeIgniter",
    },
    {
      name: "Frontend & UI",
      items: "React (18/19), TypeScript, Inertia.js 3, Vue.js, Vite, Tailwind CSS, SPAs, Progressive Web Apps (PWA)",
    },
    {
      name: "Arquitectura & Datos",
      items: "Domain-Driven Design (DDD), Arquitectura Hexagonal, SOLID, Clean Code, PostgreSQL (RLS), MySQL, Drizzle ORM",
    },
    {
      name: "Testing & DevOps",
      items: "PHPUnit, Pest, TDD, Playwright (E2E), PHPStan (Análisis Estático), Docker, Docker Compose, CI/CD, Git",
    },
  ];

  skillGroups.forEach((group) => {
    doc.x = margin;
    doc.font("Geist-SemiBold").fontSize(8.3).fillColor(colorTitle).text(`•  ${group.name}: `, {
      continued: true,
      lineGap: 1.8,
    });
    doc.font("Geist").fontSize(8.3).fillColor(colorText).text(group.items, {
      continued: false,
      lineGap: 1.8,
    });
    doc.moveDown(0.14);
  });

  drawSectionHeader("Educación, Certificaciones & Idiomas");

  doc
    .font("Geist-SemiBold")
    .fontSize(8.3)
    .fillColor(colorTitle)
    .text("•  Educación: ", margin, doc.y, { continued: true, lineGap: 1.8 });
  doc
    .font("Geist")
    .fontSize(8.3)
    .fillColor(colorText)
    .text(`${education.degree} (${education.status}) — ${education.institution}`, {
      continued: false,
      lineGap: 1.8,
    });

  doc.moveDown(0.14);

  const certText = certifications.map((c) => `${c.title} (${c.issuer}, ${c.year})`).join("  ·  ");
  doc
    .font("Geist-SemiBold")
    .fontSize(8.3)
    .fillColor(colorTitle)
    .text("•  Certificaciones: ", margin, doc.y, { continued: true, lineGap: 1.8 });
  doc
    .font("Geist")
    .fontSize(8.3)
    .fillColor(colorText)
    .text(certText, {
      continued: false,
      lineGap: 1.8,
    });

  doc.moveDown(0.14);

  const langText = languages.map((l) => `${l.name}: ${l.level}`).join("  ·  ");
  doc
    .font("Geist-SemiBold")
    .fontSize(8.3)
    .fillColor(colorTitle)
    .text("•  Idiomas: ", margin, doc.y, { continued: true, lineGap: 1.8 });
  doc
    .font("Geist")
    .fontSize(8.3)
    .fillColor(colorText)
    .text(langText, {
      continued: false,
      lineGap: 1.8,
    });

  const range = doc.bufferedPageRange();
  for (let i = range.start; i < range.start + range.count; i++) {
    doc.switchToPage(i);
    const prevBottom = doc.page.margins.bottom;
    doc.page.margins.bottom = 0;
    doc
      .font("Geist")
      .fontSize(7.5)
      .fillColor(colorMuted)
      .text(
        "Christian Fernández — Desarrollador Full-Stack   |   Portafolio: christianfernandez.dev   |   GitHub: github.com/chmalo",
        margin,
        pageHeight - 16,
        {
          align: "center",
          width: contentWidth,
          lineBreak: false,
        }
      );
    doc.page.margins.bottom = prevBottom;
  }

  doc.end();

  stream.on("finish", () => {
    console.log(`CV PDF generado exitosamente en: ${OUTPUT_PATH} (${range.count} páginas)`);
  });
}

createCV();
