# Portfólio — Davi Tavares

Portfólio pessoal refatorado com design premium focado na stack principal:
**Java · Spring Boot · React · MySQL**

## Estrutura do projeto

```
portfolio/
├── index.html          # Página principal (Home, Stack, Projetos, Sobre, Contato)
├── curriculo.html      # Currículo completo (imprimível / PDF)
├── obrigado.html       # Página de confirmação do formulário
├── favicon.ico
│
├── assets/
│   ├── css/
│   │   ├── styles.css       # Estilos principais (toda a paleta e componentes)
│   │   └── curriculo.css    # Estilos exclusivos da página de currículo
│   │
│   ├── js/
│   │   ├── scripts.js       # Scripts principais (canvas, cursor, accordion, reveal)
│   │   └── curriculo.js     # Scripts da página de currículo (print, reveal)
│   │
│   └── images/
│       ├── perfil_photo.jpg
│       ├── logo.png
│       ├── projects/        # Screenshots dos projetos
│       └── technologies/    # SVGs das tecnologias
```

## Paleta de cores

| Variável   | Cor                      | Uso                    |
|------------|--------------------------|------------------------|
| `--blue`   | `#58A6FF` — Azul Dev     | Cor principal / accent |
| `--purple` | `#A371F7` — Roxo Tech    | Cor secundária         |
| `--java`   | `#F89820`                | Tag / card Java        |
| `--spring` | `#6DB33F`                | Tag / card Spring Boot |
| `--react`  | `#61DAFB`                | Tag / card React       |
| `--mysql`  | `#00A1C9`                | Tag / card MySQL       |

## Tecnologias utilizadas

- **HTML5** semântico
- **CSS3** puro com Custom Properties (sem frameworks)
- **JavaScript** vanilla (sem dependências externas)
- Google Fonts: Outfit + JetBrains Mono

## Como usar

1. Extraia o `.zip`
2. Abra `index.html` em qualquer browser
3. Para deploy: basta hospedar os arquivos em qualquer servidor estático (Vercel, Netlify, GitHub Pages)

## Funcionalidades

- ✅ Fundo animado com partículas e conexões (canvas)
- ✅ Cursor glow suave
- ✅ Animações de reveal no scroll (IntersectionObserver)
- ✅ Hero com texto digitando (typewriter effect)
- ✅ Cards de stack com hover glow por tecnologia
- ✅ Acordeão de certificações animado
- ✅ Formulário funcional via FormSubmit
- ✅ Responsivo (mobile-first com nav bottom)
- ✅ Currículo completo imprimível (Ctrl+P ou botão)
- ✅ Página de obrigado após envio

---

Desenvolvido por **Davi Tavares** · São Paulo, SP · 2026
