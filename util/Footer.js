// app-footer.js
class AppFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let footer = document.createElement("footer");
        footer.className = "mt-5 p-4 text-center container-fluid app-footer";

        let p1 = document.createElement("p");
        p1.className = "text-white";
        p1.textContent = "© 2025 COP30 Shop. Todos os direitos reservados.";

        let p2 = document.createElement("p");

        let link = document.createElement("a");
        link.href = "https://github.com/Rick-cpp/trabalho-loja-frontend/tree/vendas";
        link.className = "text-white mx-2";
        link.textContent = "Github";
        link.target = "_blank"

        p2.appendChild(link);

        footer.appendChild(p1);
        footer.appendChild(p2);

        this.appendChild(footer);
    }
}

customElements.define("app-footer", AppFooter);
