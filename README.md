# Site Paulo Fischer — Portfólio Pessoal

Portfólio pessoal desenvolvido para reunir duas áreas que fazem parte da minha trajetória: **Fotografia e Desenvolvimento de Software**.

A proposta do projeto é criar uma experiência visual em que o visitante possa escolher entre conhecer meu trabalho com fotografia ou acompanhar minha jornada na área de tecnologia.

O projeto está na versão **v1**, com a página inicial desenvolvida e as demais páginas em construção.

## Objetivo

Desenvolver um espaço pessoal para apresentar minha identidade visual, minha experiência com fotografia e minha evolução como estudante de Análise e Desenvolvimento de Sistemas.

## Funcionalidades implementadas

- Página inicial com apresentação visual (*Hero Section*).
- Área de navegação visual (*Hub*) com duas opções: Photography e Dev.
- Cabeçalho com comportamento dinâmico durante a rolagem da página.
- Menu responsivo para dispositivos com telas menores.
- Efeito de desfoque na seção principal ao abrir o menu.
- Ícones de redes sociais com comportamento de ocultação ao chegar ao rodapé.
- Layout adaptável a diferentes tamanhos de tela.

## Em desenvolvimento

- **Photography:** criação de uma galeria para apresentar trabalhos fotográficos.
- **Dev:** apresentação da minha trajetória na tecnologia, projetos desenvolvidos e links para demonstrações ou repositórios.
- **Contact:** desenvolvimento de uma página para contato.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Google Fonts

### Recursos e conceitos aplicados

- CSS Flexbox.
- Variáveis CSS.
- Media Queries para responsividade.
- Manipulação de elementos e classes com JavaScript.
- Eventos de rolagem (*Scroll Event*).
- API IntersectionObserver para detectar a entrada do rodapé na área visível da tela.
- Transições e efeitos visuais em CSS.

## Estrutura do projeto

```text
Site_Paulo_Fischer_v1/
│
├── assets/
│   ├── icons/
│   └── img/
│
├── css/
│   ├── contato.css
│   ├── dev.css
│   ├── globals.css
│   ├── home.css
│   └── photografy.css
│
├── js/
│   └── main.js
│
├── pages/
│   ├── contact.html
│   ├── dev.html
│   └── photografy.html
│
├── referencias/
├── index.html
└── README.md
```

## Como executar o projeto

Por ser um projeto desenvolvido com HTML, CSS e JavaScript, não é necessário instalar dependências.

1. Clone o repositório:

```bash
git clone https://github.com/pfischer-dev/Site_Paulo_Fischer_v1.git
```

2. Acesse a pasta:

```bash
cd Site_Paulo_Fischer_v1
```

3. Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server no VS Code.

## Status do projeto

**Em desenvolvimento — versão 1.**

A versão atual representa a construção da identidade visual e da página inicial do portfólio. As demais seções serão desenvolvidas progressivamente.

## Autor

**Paulo Fischer**

[GitHub](https://github.com/pfischer-dev)