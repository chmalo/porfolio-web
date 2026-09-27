---
target: src/pages/index.astro
total_score: 25
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 2
timestamp: 2026-09-27T19-36-26Z
slug: src-pages-index-astro
---
# Impeccable Design Critique Report: Portfolio Web Christian Fernández
**Target:** `src/pages/index.astro`  
**Method:** dual-agent (A: be94f0b7-daa6-4c33-917f-365e47c82e45 · B: ce1f99c2-ed23-45ce-b1da-a4e03e13aa09)  
**Surface Mode:** Persuade / Experience  

---

### Design Health Score

| # | Heurística | Puntaje (0-4) | Hallazgo Clave |
|---|---|:---:|---|
| **1** | Visibilidad del estado del sistema | **3 / 4** | Indicador de disponibilidad con ping animado; falta scrollspy en nav para marcar sección activa. |
| **2** | Coincidencia sistema — mundo real | **3 / 4** | Dominio y terminología técnica impecable; choque por H1 en inglés (`Full—Stack Developer.`) en un sitio 100% en español. |
| **3** | Control y libertad del usuario | **4 / 4** | Navegación fluida por anclas; toggle de tema claro/oscuro instantáneo con persistencia en LocalStorage. |
| **4** | Consistencia y estándares | **3 / 4** | Plaxila es un `<article>` inerte mientras las otras son enlaces `<a>`; botón de GitHub apunta a perfil general y no a repositorios. |
| **5** | Prevención de errores | **4 / 4** | Enlaces externos con `rel="noopener noreferrer"`; esquemas nativos `tel:` y `mailto:` funcionales. |
| **6** | Reconocimiento antes que recuerdo | **2 / 4** | 9 ítems de menú saturan la memoria; proyectos sin thumbnail visual obligan a leer bloques de texto para reconocerlos. |
| **7** | Flexibilidad y eficiencia de uso | **n/a** | *(Superficie de persuasión / Portfolio: no aplican aceleradores ni atajos de software de productividad).* |
| **8** | Estética y diseño minimalista | **2 / 4** | Sobredosis de badges monoespaciados y tarjetas idénticas; redundancia entre Hero, Empresas y Experiencia. |
| **9** | Recuperación de errores | **4 / 4** | Página 404 personalizada con enlace de retorno. |
| **10**| Ayuda y documentación | **n/a** | *(No aplicable para landing page personal).* |
| **Total** | | **25 / 32** | **78.1% (Good)** |

---

### Design Specificity Verdict

**LLM Assessment:**  
El posicionamiento narrativo y el tono de Christian son sobresalientes: no es un portfolio genérico de "apasionado del código", sino la carta de presentación de un desarrollador especializado en ERPs multi-tenant, refactorizaciones a DDD y optimizaciones PostgreSQL de horas a segundos.  
Sin embargo, a nivel de interfaz física, la composición sufre del "síndrome de plantilla modular": una secuencia de tarjetas rectangulares idénticas sin diagramas, esquemas ni capturas de pantalla reales en la home.

**Deterministic Scan & Technical Evidence:**  
El escáner mecánico `detect.mjs` reportó 0 hallazgos en AST estático, pero sobre artefactos renderizados se confirmaron:
1. `overused-font`: Uso de Geist Sans / Geist Mono (cliché visual común de frameworks modernos).
2. `radial-halo`: Resplandor radial decorativo en el Hero.
3. `gray-on-color`: Falso positivo causado por minificación HTML en una sola línea.
4. **Fallas críticas de runtime detectadas:**
   - **404 en descarga de CV:** El enlace apunta a `/cv_christian_fernandez.pdf`, pero en `public/` el archivo se llama `cv_ggomez.pdf`.
   - **Fuga de identidad en SEO:** `public/robots.txt` y `public/llms.txt` todavía contienen datos del portafolio anterior de Gibmyx Gómez (`ggomez.website`).
   - **Contraste en Tema Claro (WCAG AA Fail):** `text-subtle` (`#94a3b8`) sobre `#f8fafc` tiene un ratio de **2.45:1** (exige 4.5:1); `text-accent` (`#d97706`) tiene **3.04:1**; badges de proyectos (`#d97706` sobre `#fef3c7`) tienen **2.86:1**.
   - **Supresión de foco:** `focus:outline-hidden` en enlaces de proyectos suprime el anillo nativo de foco (viola WCAG 2.4.7).
   - **Targets táctiles móviles:** Botones secundarios e iconos sociales a 32-36px (inferior a los 44x44px recomendados).

---

### Overall Impression

Un portafolio con excelente solidez técnica en el fondo (Astro 5 estático, tipografías locales, copy maduro y sin clichés inflados), pero con inconsistencias críticas en activos heredados (`cv_christian_fernandez.pdf` en 404, `llms.txt` y `robots.txt` desactualizados), severas deficiencias de contraste en modo claro, y una necesidad urgente de "mostrar en lugar de solo contar" en la sección de proyectos y arquitectura.

---

### What's Working

1. **Mensaje de posicionamiento claro y diferenciador:** Comunica experiencia real en ERP y bases de datos transaccionales, alejándose del perfil de desarrollador genérico.
2. **Arquitectura técnica en Astro:** Carga instantánea, sin JavaScript innecesario en el cliente, soporte nativo de tema oscuro/claro con script anti-FOUC y metadatos Schema.org completos.
3. **Condiciones de contacto transparentes:** Disponibilidad inmediata, ubicación clara y canales directos accesibles sin fricción.

---

### Priority Issues

- **[P1] Archivos rotos y fuga de identidad heredada:**
  - *Por qué importa:* El botón principal "Descargar CV" da error 404. Además, `robots.txt` y `llms.txt` referencian a otro desarrollador y otro dominio.
  - *Fix:* Renombrar o enlazar el CV correcto en `public/` y sanitizar `robots.txt` y `llms.txt` con la identidad real de Christian.
  - *Comando sugerido:* `/impeccable harden`

- **[P1] Falla severa de contraste en Tema Claro (WCAG AA):**
  - *Por qué importa:* En exteriores o con modo claro activo, fechas, métricas, subtítulos y badges de tags caen hasta 2.45:1 de contraste, haciéndose ilegibles.
  - *Fix:* Recalibrar tokens de color en `globals.css`: oscurecer `--accent` a `#b45309` y `--subtle` a mínimo `#64748b` en modo claro.
  - *Comando sugerido:* `/impeccable colorize`

- **[P2] Síndrome de "Decir en vez de Mostrar" en Proyectos:**
  - *Por qué importa:* Los 3 proyectos son cajas de texto con tags. No hay capturas de pantalla de interfaces ni diagramas de dominio en la página principal.
  - *Fix:* Incorporar previsualizaciones visuales o esquemas funcionales en las tarjetas de proyectos.
  - *Comando sugerido:* `/impeccable bolder`

- **[P2] Sobredosis de Geist Mono y supresión de foco:**
  - *Por qué importa:* Usar tipografía monoespaciada para H1, H2, botones y párrafos satura la vista. `focus:outline-hidden` excluye usuarios de teclado.
  - *Fix:* Limitar `font-mono` a datos técnicos/código y reemplazar `focus:outline-hidden` con anillos visibles `:focus-visible:ring-2`.
  - *Comando sugerido:* `/impeccable typeset`

- **[P3] Saturación de la barra de navegación (9 enlaces):**
  - *Por qué importa:* En tablets y pantallas medianas (768px - 1080px), 9 enlaces apiñan el header y compiten por atención.
  - *Fix:* Condensar el menú en 4-5 secciones esenciales y activar scrollspy para feedback de ubicación.
  - *Comando sugerido:* `/impeccable distill`

---

### Persona Red Flags

- **Jordan (Reclutadora no técnica / 30 segundos):**
  Intenta descargar el CV desde el botón del Hero y recibe un error 404; además, se topa con un muro de siglas densas en los primeros 5 segundos sin una bajada en lenguaje simple.
- **Riley (Tech Lead auditor):**
  Clica en los iconos de GitHub de las tarjetas de proyectos y es enviada al perfil general en lugar del repositorio con el código; nota que la arquitectura se describe con texto pero sin diagramas C4 ni snippets de código.
- **Casey (Usuario móvil en tránsito):**
  Con luz solar y tema claro, los textos secundarios y badges son casi invisibles por bajo contraste; el Hero le exige dos desplazamientos completos antes de ver el primer contenido relevante.

---

### Minor Observations

1. Typo en H1: `Full—Stack` utiliza em-dash en lugar de guión estándar.
2. Inconsistencia de idioma: Titular `Full—Stack Developer.` en inglés dentro de un portfolio 100% en español.
3. Área táctil móvil de botones e iconos por debajo de 44×44px.
4. Falta de `<meta name="theme-color">` para la barra de navegación en navegadores móviles.

---

### Questions to Consider

- ¿Por qué el logro técnico más impactante (reducir reportes de horas a segundos) está en un texto secundario en vez de ser un benchmark visual protagonista?
- ¿Debería la home incluir diagramas esquemáticos de arquitectura o capturas de UI de los proyectos para convertir la promesa técnica en evidencia inmediata?
