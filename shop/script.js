class AppList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        data.produtos.forEach((produto, index) => {
            let { nome, desc, shop, link, imag } = produto;

            let div = document.createElement("div");
            div.className = "card shadow-sm flex-fill col-12 col-md-5 card p-3";
            div.style.width = "18rem";

            let carouselId = `carousel-${index}`;

            div.appendChild(this.createItemHeader(imag, carouselId));
            div.appendChild(this.createItemBody(nome, desc, shop, link));
            
            this.appendChild(div);
        });
    }

    createItemBody(nome, desc, shop, link) {
        let div = document.createElement("div");
        div.className = "card-body";

        let elementNome = document.createElement("h5");
        elementNome.innerText = nome;
        elementNome.className = "card-title";

        let elementDesc = document.createElement("p");
        elementDesc.innerText = desc;
        elementDesc.className = "card-text text-muted small";

        let divContent = document.createElement("div");
        divContent.className = "d-flex justify-content-between align-items-center";

        let elementShop = document.createElement("span");
        elementShop.innerText = `R$${shop.toFixed(2)}`;
        elementShop.className = "fw-bold text-success";

        let elementButton = document.createElement("a");
        elementButton.innerText = "Comprar";
        elementButton.className = "btn btn-primary btn-sm";
        elementButton.setAttribute("href", link)

        divContent.appendChild(elementShop);
        divContent.appendChild(elementButton);

        div.appendChild(elementNome);
        div.appendChild(elementDesc);
        div.appendChild(divContent);

        return div;
    }

    /**
     * @param {string[]} links
     * @param {string} carouselId
     * @returns {HTMLDivElement}
     */
    createItemHeader(links, carouselId) {
        let div = document.createElement("div");
        div.id = carouselId;
        div.className = "carousel slide";
        div.setAttribute("data-bs-ride", "carousel");

        // Inner
        let inner = document.createElement("div");
        inner.className = "carousel-inner";

        let isFirst = true;
        links.forEach(img => {
            let elementImg = document.createElement("div");
            elementImg.className = "carousel-item";
            if (isFirst) {
                elementImg.classList.add("active");
                isFirst = false;
            }
            elementImg.innerHTML = `<img src="${img}" class="d-block w-100" alt="">`;
            inner.appendChild(elementImg);
        });

        div.appendChild(inner);

        // Button Prev
        let prev = document.createElement("button");
        prev.className = "carousel-control-prev";
        prev.setAttribute("type", "button");
        prev.setAttribute("data-bs-target", `#${carouselId}`);
        prev.setAttribute("data-bs-slide", "prev");

        let prevSpan = document.createElement("span");
        prevSpan.className = "carousel-control-prev-icon";
        prevSpan.innerHTML = "";
        prev.appendChild(prevSpan);

        // Button Next
        let next = document.createElement("button");
        next.className = "carousel-control-next";
        next.setAttribute("type", "button");
        next.setAttribute("data-bs-target", `#${carouselId}`);
        next.setAttribute("data-bs-slide", "next");
        
        let nextSpan = document.createElement("span");
        nextSpan.className = "carousel-control-next-icon";
        nextSpan.innerHTML = "";
        next.appendChild(nextSpan);

        div.appendChild(prev);
        div.appendChild(next);

        console.log(prev.innerHTML);

        return div;
    }
}

customElements.define("app-list", AppList);