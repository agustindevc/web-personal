# Web personal · Agustín Díaz

Mi portfolio, hecho a mano con **HTML, CSS y JavaScript**, sin frameworks ni dependencias.

**Demo:** https://agustindevc.github.io/web-personal/

## Qué incluye
- Presentación, habilidades, proyectos y trayectoria.
- Cambio de idioma ES/EN (se recuerda la elección y usa el idioma del navegador al entrar).
- Descarga del CV en español e inglés (sin teléfono, por ser público).
- Diseño responsive y modo claro/oscuro automático según el sistema.
- Accesible: enlace "saltar al contenido", foco visible y respeto de "reducir movimiento".

## Cómo está hecho
- `index.html`: contenido semántico (`header`, `main`, `section`, `footer`).
- `css/style.css`: variables CSS para los colores, CSS Grid para las tarjetas, `prefers-color-scheme` para el modo oscuro.
- `js/main.js`: un diccionario `TEXT` con los textos en ambos idiomas; cada elemento con `data-i18n` se traduce al cambiar de idioma.

## Probarlo en local
```bash
python -m http.server 8765
```
Y abrir http://localhost:8765.

## Cómo se hizo
Desarrollado con ayuda de IA (Claude). Revisé, probé y puedo explicar cada parte.

## Qué aprendí
- Estructurar una página con HTML semántico y accesible.
- Hacer un diseño responsive con CSS Grid y variables CSS.
- Gestionar traducciones y preferencias del usuario con JavaScript y `localStorage`.
