// menu Burguer
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#main-menu");
const menuIcon = document.querySelector("#menu-icon");
const menuLabel = document.querySelector("#menu-label");

menuToggle.addEventListener("click", () => {
    const menuAberto = menu.classList.toggle("hidden");

    menuToggle.setAttribute("aria-expanded", !menuAberto);

    menuIcon.textContent = menuAberto ? "☰" : "x";
    menuLabel.textContent = menuAberto ? "MENU" : "FECHAR";
});



/* scroll page Photography */
const nav = document.getElementById("gallery-nav");
//console.log(nav);
const links = nav.querySelectorAll("a");
console.log(links);

const galleries = document.querySelectorAll(".gallery");
console.log(galleries);
/* galleries.forEach((gallery) => {
        console.log(gallery.id);
    }); */


const observer = new IntersectionObserver((entries) => { //	Elementos que tiveram mudança na interseção
    
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            links.forEach(link => {
                const active = link.href.endsWith(entry.target.id);

                link.classList.toggle("font-extrabold", active);
                
                link.classList.toggle("opacity-100", active);
                link.classList.toggle("opacity-70", !active);
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
    
