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
        
        console.log(photo.src);
        console.log(lightBoxImage);
    });
    

})
lightBox.addEventListener("click", (event) => {
        if(event.target === lightBox) {
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
