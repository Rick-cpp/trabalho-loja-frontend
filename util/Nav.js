class AppNavbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        let nav = document.createElement("nav");
        nav.className = "navbar navbar-expand-lg app-nav";

        let div = document.createElement("div");
        div.className = "container-fluid";

        let brand = document.createElement("a");
        brand.className = "navbar-brand text-white";
        brand.href = "./index.html";
        brand.innerText = "COP30 Shop";

        let loja = document.createElement("a");
        loja.className = "nav-link btn app-btn-primary text-white px-4 py-2";
        loja.href = "#";

        let icon = document.createElement("i");
        icon.className = "bi bi-basket-fill";

        loja.appendChild(icon);
        loja.appendChild(document.createTextNode(" Loja"));

        div.appendChild(brand);
        div.appendChild(loja);
        nav.appendChild(div);

        this.appendChild(nav);
    }
}

customElements.define("app-navbar", AppNavbar);