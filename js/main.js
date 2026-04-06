/*
====================================================
                Animação Header 
==================================================== */
if ('scrollRestoration' in history) { //desativa o scroll restore automatico do navegador
    history.scrollRestoration = 'manual';
}

window.addEventListener("load", () => {//garantir que comece sempre no topo
    if (window.location.hash) {
        history.replaceState(null, null, ' ');
    }
    setTimeout(() => {  // adiciona um tempo ate recalcular a pagina
        window.scrollTo(0, 0);
    }, 50);

});

let scrollInicial = window.scrollY; //valor onde qdo estamos no topo da pagina ScrollY(inicio)
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    const scrollAtual = window.scrollY;

    if(scrollAtual > scrollInicial && scrollAtual > 30) {
        header.classList.add('hidden');
    }
    else {
        header.classList.remove('hidden');
    }
    scrollInicial = scrollAtual;
});

/*
====================================================
                Menu Burger
==================================================== */
const menu = document.querySelector('.menu-toggle');
const closeMenu = document.querySelector('.close-toggle')

const nav = document.querySelector('.nav_bar');
const blur = document.querySelector('.hero');

menu.addEventListener('click', () => {
    nav.classList.toggle('active'); /* add a classe active em nav_bar */
    menu.innerHTML = nav.classList.contains('active') ? 'X' : '☰'; /* confirmo se nav tem a classe active, se tiver troca o texto para X */
    blur.classList.toggle('blur'); /* tranforma o fundo e o hero_title em blur */
    document.body.classList.toggle('menu_open');
});

/* 
====================================================
                Aside OFF no FOOTER
==================================================== */

const aside = document.querySelector('.hero-social');
const footer = document.querySelector('.footer_container');

/* intersectionObserver é uma API do navegador, detecta qdo um ELEMENTO ENTRA NA TELA */
const observador = new IntersectionObserver((entries) => { /* CALL BACK, funcao q roda automaticamente, uma lista de eventos de interseccao */
    entries.forEach(entry => { /* percorre cada item observado; entry=info sobre os elementos observados(footer)*/
        if(entry.isIntersecting) {/* condicional se entrou na interseccao */
            aside.classList.add('hide'); /* add class para remove lo */

        }
        else {
            aside.classList.remove('hide'); /* senao remove classe para esconde lo */
        }
    });
}, {threshold: 0.1   /* configuracao do observer| 0.1 quer dizer se 10% do observado entrar na tela ele ativa; 0.5 é metade do footer visivel e ele some */
});

observador.observe(footer);

/* 
====================================================
                
==================================================== */
