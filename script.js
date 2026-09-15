// Arquivo script.js - Adesiva Estilo

document.addEventListener("DOMContentLoaded", function() {
    console.log("Site da Adesiva Estilo carregado com sucesso!");

    // Exemplo de interação: efeito suave ao clicar em links internos (se houver)
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });
});
