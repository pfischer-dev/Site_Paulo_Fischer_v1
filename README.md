# Site Paulo Fischer — Portfólio Pessoal

Portfólio pessoal desenvolvido para reunir duas áreas que fazem parte da minha trajetória: **Fotografia e Desenvolvimento de Software**.

A proposta é criar uma experiência visual em que o visitante possa escolher entre conhecer meu trabalho com fotografia ou acompanhar minha jornada na área de tecnologia.

O projeto está na versão **v1**, com a página inicial desenvolvida e as demais páginas em construção.

## Objetivo

Desenvolver um espaço pessoal para apresentar minha identidade visual, minha experiência com fotografia e minha evolução como estudante de Análise e Desenvolvimento de Sistemas.

## Funcionalidades

- Página inicial com apresentação visual (*Hero Section*).
- Área de navegação visual (*Hub*) com duas opções: Fotografia e Dev.
- Cabeçalho com comportamento sonoro durante a rolagem da página.
- Menu responsivo para dispositivos com telas menores.
- Efeito de desfoque na seção principal ao abrir o menu.
- Ícones de redes sociais com comportamento de ocultação ao chegar ao rodapé.
- Layout adaptável a diferentes tamanhos de tela.

## Em desenvolvimento

- **Fotografia:** criação de uma galeria para apresentar trabalhos fotográficos.
- **Dev:** apresentação da minha trajetória na tecnologia, projetos desenvolvidos e links para portfólio e repositórios.
- **Contato:** desenvolvimento de uma página dedicada aos canais de contato.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Google Fonts

## Recursos e conceitos aplicados

- CSS Flexbox.
- Variáveis CSS.
- Media Queries para responsividade.
- Manipulação de elementos e classes com JavaScript.
- Eventos de rolagem (*Scroll Events*).
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

Por ser desenvolvido com HTML, CSS e JavaScript, não é necessário instalar dependências para executar a versão atual.

1. Clone o repositório:

```bash
git clone https://github.com/pfischer-dev/Site_Paulo_Fischer_v1.git
```

2. Acesse a pasta do projeto:

```bash
cd Site_Paulo_Fischer_v1
```

3. Abra o arquivo `index.html` no navegador ou utilize a extensão Live Server no VS Code.

## Status do projeto

**Em desenvolvimento — versão 1.**

A versão atual representa a construção da identidade visual e da página inicial do portfólio. As demais páginas serão desenvolvidas progressivamente, ampliando a apresentação dos trabalhos fotográficos e projetos na área de tecnologia.
