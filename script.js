document.addEventListener("DOMContentLoaded", () => {
    // Referência dos botões
    const btnContraste = document.getElementById("btn-contraste");
    const btnAumentar = document.getElementById("btn-aumentar-texto");
    const btnDiminuir = document.getElementById("btn-diminuir-texto");

    // Percentual base da fonte
    let tamanhoAtualFonte = 100;

    // Alternar Alto Contraste
    if (btnContraste) {
        btnContraste.addEventListener("click", () => {
            document.body.classList.toggle("alto-contraste");

            // Atualiza o estado acessível para leitores de tela
            const ativo = document.body.classList.contains("alto-contraste");
            btnContraste.setAttribute("aria-pressed", ativo);
        });
    }

    // Aumentar o tamanho da fonte (limite máximo de 150%)
    if (btnAumentar) {
        btnAumentar.addEventListener("click", () => {
            if (tamanhoAtualFonte < 150) {
                tamanhoAtualFonte += 10;
                document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
            }
        });
    }

    // Diminuir o tamanho da fonte (limite mínimo de 80%)
    if (btnDiminuir) {
        btnDiminuir.addEventListener("click", () => {
            if (tamanhoAtualFonte > 80) {
                tamanhoAtualFonte -= 10;
                document.documentElement.style.fontSize = `${tamanhoAtualFonte}%`;
            }
        });
    }
});