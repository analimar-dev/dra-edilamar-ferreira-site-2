
/* ============================================
   SITE: DRA. EDILAMAR FERREIRA
   FUNÇÃO: MENU HAMBÚRGUER RESPONSIVO
============================================ */

document.addEventListener("DOMContentLoaded", () => {

    /* 1. Selecionar o botão e o menu */

    const botaoMenu = document.querySelector(
        ".cabecalho__menu-toggle"
    );

    const menuPrincipal = document.querySelector(
        "#menu-principal"
    );

    /* 2. Verificar se os elementos existem */

    if (!botaoMenu || !menuPrincipal) {
        console.error(
            "Menu não encontrado. Confira as classes no HTML."
        );
        return;
    }

    /* 3. Função para abrir e fechar o menu */

    function alternarMenu() {

        const estaAberto =
            botaoMenu.getAttribute("aria-expanded") === "true";

        const novoEstado = !estaAberto;

        botaoMenu.setAttribute(
            "aria-expanded",
            String(novoEstado)
        );

        botaoMenu.setAttribute(
            "aria-label",
            novoEstado
                ? "Fechar menu de navegação"
                : "Abrir menu de navegação"
        );
    }

    /* 4. Abrir ou fechar ao clicar no botão */

    botaoMenu.addEventListener("click", alternarMenu);

    /* 5. Fechar o menu ao selecionar um link */

    const linksMenu = menuPrincipal.querySelectorAll("a");

    linksMenu.forEach((link) => {

        link.addEventListener("click", () => {

            botaoMenu.setAttribute(
                "aria-expanded",
                "false"
            );

            botaoMenu.setAttribute(
                "aria-label",
                "Abrir menu de navegação"
            );
        });
    });

    /* 6. Fechar o menu com a tecla Escape */

    document.addEventListener("keydown", (evento) => {

        if (evento.key === "Escape") {

            botaoMenu.setAttribute(
                "aria-expanded",
                "false"
            );

            botaoMenu.setAttribute(
                "aria-label",
                "Abrir menu de navegação"
            );
        }
    });

    /* 7. Fechar o menu ao voltar para tela grande */

    window.addEventListener("resize", () => {

        if (window.innerWidth > 850) {

            botaoMenu.setAttribute(
                "aria-expanded",
                "false"
            );

            botaoMenu.setAttribute(
                "aria-label",
                "Abrir menu de navegação"
            );
        }
    });

});

/* ========================================
   ANIMAÇÃO SUAVE DO BANNER
======================================== */

document.addEventListener("DOMContentLoaded", () => {
    const bannerTexto = document.querySelector(".banner__conteudo");
    const bannerImagem = document.querySelector(".banner__imagem");

    if (!bannerTexto || !bannerImagem) return;

    // Respeita a preferência de quem reduz animações.
    const movimentoReduzido = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (movimentoReduzido) return;

    bannerTexto.classList.add("banner__animar-texto");
    bannerImagem.classList.add("banner__animar-imagem");
});
