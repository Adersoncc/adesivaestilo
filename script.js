document.addEventListener("DOMContentLoaded", () => {
    // Atualiza automaticamente o ano no rodapé
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Lógica opcional para efeitos na navbar ao rolar (se necessário futuramente)
    const navbar = document.getElementById("navbar");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 150) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    console.log("Adesiva Estilo - Navbar fixa e estilizada carregada com sucesso!");
});
