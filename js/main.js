// Cambio de idioma ES/EN sin librerías: cada elemento con data-i18n se traduce desde este diccionario.
const TEXT = {
  es: {
    skip: "Saltar al contenido", nav_about: "Sobre mí", nav_skills: "Habilidades", nav_projects: "Proyectos",
    nav_path: "Trayectoria", nav_contact: "Contacto",
    hero_eyebrow: "Hola, soy", hero_role: "Desarrollador web junior",
    hero_lead: "Construyo aplicaciones con React, TypeScript, Python y SQL. Busco un puesto 100% remoto donde seguir aprendiendo y aportar desde el primer día.",
    cta_projects: "Ver proyectos", cta_cv: "Descargar CV",
    about_h: "Sobre mí",
    about_p1: "Soy desarrollador web junior, egresado de la FP de Grado Superior en Desarrollo de Aplicaciones Web (MEDAC Nova, Málaga, 2025). Trabajo con Python, JavaScript/TypeScript, React, SQL (Supabase/PostgreSQL) y Odoo, y uso herramientas de IA como apoyo para programar, depurar y aprender más rápido.",
    about_p2: "Antes de entrar en tecnología fundé y dirigí una marca de indumentaria durante tres años y capacité a unas 300 personas en Argentina y México. Eso me dejó autonomía, orden y mucha práctica tratando con clientes.",
    skills_h: "Habilidades", skills_data: "Datos", skills_tools: "Herramientas", basic: "(básico)", intro: "(introductorio)",
    projects_h: "Proyectos",
    p1_desc: "App que consume la PokéAPI: tarjetas con paginación, popup de detalles y buscador. Datos en caché con React Query y despliegue automático con GitHub Actions.",
    demo: "Demo", code: "Código",
    p2_title: "Gestor de tareas", p2_desc: "App full stack con registro, inicio de sesión y gestión de tareas. En construcción.", soon: "Próximamente",
    p3_title: "App de leads con IA (cliente)", p3_desc: "Proyecto freelance en desarrollo: analiza conversaciones de ventas con IA y sugiere el siguiente paso para cerrar la venta. Código privado.",
    p4_title: "SaaS de sincronización de stock", p4_desc: "Mantiene el stock de una tienda física y de su tienda online sincronizado y avisa para preparar los pedidos web. Código privado.",
    private: "Privado · en desarrollo",
    path_h: "Trayectoria",
    t1: "Desarrollador freelance (proyecto Odoo)", t1d: "App de gestión de leads con IA para un cliente.",
    t2: "FP en Desarrollo de Aplicaciones Web",
    t3: "Capacitador · Amazing Floor", t3d: "Unos 15 cursos para unas 300 personas en Argentina y México.",
    t4: "Fundador · CLASE A", t4d: "Marca de indumentaria con unos 15 puntos de venta en 3 ciudades.",
    contact_h: "Contacto", contact_p: "Estoy abierto a puestos remotos de desarrollo web, soporte técnico o QA junior, y a encargos freelance.",
    foot: "Hecho con HTML, CSS y JavaScript, sin frameworks."
  },
  en: {
    skip: "Skip to content", nav_about: "About", nav_skills: "Skills", nav_projects: "Projects",
    nav_path: "Background", nav_contact: "Contact",
    hero_eyebrow: "Hi, I'm", hero_role: "Junior web developer",
    hero_lead: "I build applications with React, TypeScript, Python and SQL. I'm looking for a 100% remote role where I can keep learning and contribute from day one.",
    cta_projects: "View projects", cta_cv: "Download CV",
    about_h: "About me",
    about_p1: "I'm a junior web developer with a Higher Vocational Degree in Web Application Development (MEDAC Nova, Málaga, 2025). I work with Python, JavaScript/TypeScript, React, SQL (Supabase/PostgreSQL) and Odoo, and I use AI tools to code, debug and learn faster.",
    about_p2: "Before moving into tech I founded and ran a clothing brand for three years and trained around 300 people in Argentina and Mexico. That gave me autonomy, organization and plenty of customer-facing experience.",
    skills_h: "Skills", skills_data: "Data", skills_tools: "Tools", basic: "(basic)", intro: "(introductory)",
    projects_h: "Projects",
    p1_desc: "An app that consumes the PokéAPI: card grid with pagination, details popup and search. Data cached with React Query and deployed automatically with GitHub Actions.",
    demo: "Demo", code: "Code",
    p2_title: "Task manager", p2_desc: "Full stack app with sign-up, login and task management. Work in progress.", soon: "Coming soon",
    p3_title: "AI lead management app (client)", p3_desc: "Freelance project in development: it analyzes sales conversations with AI and suggests the next step to close the sale. Private code.",
    p4_title: "Stock sync SaaS", p4_desc: "Keeps a physical store and its online shop in sync and alerts staff to prepare web orders. Private code.",
    private: "Private · in development",
    path_h: "Background",
    t1: "Freelance developer (Odoo project)", t1d: "AI-powered lead management app for a client.",
    t2: "Vocational Degree in Web Application Development",
    t3: "Trainer · Amazing Floor", t3d: "About 15 courses for roughly 300 people in Argentina and Mexico.",
    t4: "Founder · CLASE A", t4d: "Clothing brand with about 15 points of sale in 3 cities.",
    contact_h: "Contact", contact_p: "I'm open to remote web development, technical support or junior QA roles, and to freelance work.",
    foot: "Built with HTML, CSS and JavaScript, no frameworks."
  }
};

const CV = { es: "assets/cv/Agustin_Diaz_CV_ES.pdf", en: "assets/cv/Agustin_Diaz_CV_EN.pdf" };

function apply(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = TEXT[lang][el.dataset.i18n];
    if (value !== undefined) el.textContent = value;
  });
  document.getElementById("cv").href = CV[lang];
  document.getElementById("lang").textContent = lang === "es" ? "EN" : "ES";
  document.title = lang === "es"
    ? "Agustín Díaz · Desarrollador web junior"
    : "Agustín Díaz · Junior web developer";
}

function initialLang() {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "es" || saved === "en") return saved;
  } catch (e) { /* sin almacenamiento: seguimos */ }
  return navigator.language && navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

document.addEventListener("DOMContentLoaded", () => {
  let lang = initialLang();
  apply(lang);
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lang").addEventListener("click", () => {
    lang = lang === "es" ? "en" : "es";
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignorar */ }
    apply(lang);
  });
});
