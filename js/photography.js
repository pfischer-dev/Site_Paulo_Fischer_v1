// menu Burguer
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#main-menu");
const menuIcon = document.querySelector("#menu-icon");


menuToggle.addEventListener("click", () => {
    const menuAberto = menu.classList.toggle("hidden");

    menuToggle.setAttribute("aria-expanded", !menuAberto);
    menuIcon.textContent = menuAberto ? "☰" : "x";

    document.body.classList.toggle('menu_open');

});

/* ===================================================================== */
//                      scroll page Photography
//=======================================================================
const nav = document.getElementById("gallery-nav");
const links = nav.querySelectorAll("a");
const galleries = document.querySelectorAll(".gallery");

const observer = new IntersectionObserver((entries) => { //	Elementos que tiveram mudança na interseção

    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            links.forEach(link => {
                const active = link.href.endsWith(entry.target.id);

                link.classList.toggle("font-extrabold", active);

                link.classList.toggle("opacity-100", active);
                link.classList.toggle("opacity-60", !active);
            })
        }
        console.log(
            entry.target.id,
            entry.isIntersecting
        );
    });

}, {
    root: document.querySelector("#gallery-container"), //Área que será usada como referência
    threshold: 0.5 //Quanto do elemento precisa estar visível 0.5: considera 50% de visibilidade como referência.
})
galleries.forEach(gallery => {
    observer.observe(gallery);

});



/* ===================================================================== */
//                      Abrir Foto IndivIduaL
//======================================================================= 
const lightBox = document.getElementById("lightBox");
const lightBoxImage = document.getElementById("lightBox-image");
const photos = document.querySelectorAll(".gallery img");
const lightBoxCaption = document.getElementById("lightBox-caption");


photos.forEach((photo) => {
    photo.addEventListener("click", () => {
        lightBoxImage.setAttribute("src", photo.src);

        const figure = photo.closest("figure");
        const caption = figure.querySelector("figcaption");
        lightBoxCaption.innerHTML = caption.innerHTML.trim();


        lightBox.classList.remove(
            "hidden",
            "opacity-0",
            "invisible",
            "pointer-events-none"
        );
        lightBox.classList.add(
            "opacity-100",
            "visible",
            "pointer-events-auto",
        );
        document.body.classList.toggle("menu_open");


    });


})
lightBox.addEventListener("click", (event) => {
    if (event.target === lightBox) {
        lightBox.classList.add(
            "opacity-0",
            "invisible",
            "pointer-events-none"
        );
        lightBox.classList.remove(
            "opacity-100",
            "visible",
            "pointer-events-auto"
        )

        document.body.classList.remove("menu_open");
    }

})

/* ===================================================================== */
//                      Marcadores Fotos Galeria
//======================================================================= 
const galerias = document.querySelectorAll("section");

galerias.forEach(galeria => {
    const indicadores = galeria.querySelector(".indicadores");
    const todasFotosGaleria = galeria.querySelectorAll("img");

    for (let i = 0; i < todasFotosGaleria.length; i++) {
        const marcador = document.createElement("span");
        indicadores.appendChild(marcador);
        marcador.classList.add(
            "w-3",
            "h-3",
            "rounded-full",
            "bg-white",
            "inline-block",
            "opacity-60",
            "transition-all",
            "duration-300",
            "shadow-[0_1px_4px_rgba(0,0,0,0.8)]"
        );
    }


    const containerHorizontal = galeria.querySelector(".overflow-x-auto");

    function atualizarIndicadores() {
        const indice = Math.round(
            containerHorizontal.scrollLeft / containerHorizontal.clientWidth
        );
        const filhos = Array.from(indicadores.children);
        console.log("Scroll:", containerHorizontal.scrollLeft);
        console.log("Índice:", indice);
        console.log("Bolinha:", filhos[indice]);

        filhos.forEach((filho, posicao) => {


            if (posicao === indice) {
                filho.classList.remove("opacity-60")
                filho.classList.add("opacity-100", "scale-125")

            } else {
                filho.classList.remove("opacity-100", "scale-125")
                filho.classList.add("opacity-60")
            }
        });
    }
    containerHorizontal.addEventListener("scroll", atualizarIndicadores);
    atualizarIndicadores();
})