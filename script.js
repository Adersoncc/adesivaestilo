// Atualiza automaticamente o ano no rodapé para manter o site sempre atualizado
document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("current-year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    console.log("Adesiva Estilo - Site carregado com sucesso!");
});
