const element = document.getElementById("app-shop-list");
const searchInput = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestions");
const searchBtn = document.getElementById("searchButton");

/**
 * @param {number} id Id do elemento que vai ser renderizado
 * @param {string} nome Nome do Produto
 * @param {string} desc Descrição do Produto
 * @param {number} shop Preço do produto 
 * @param {string} link Link de redirecionamento do Produto
 * @param {string[]} imag Array de String
 * @returns {HTMLDivElement}
 */
function createElement(id, nome, desc, shop, link, imag) {
    // Criando o Container
    let container = document.createElement("div");
    container.className = "card shadow-sm flex-fill col-12 col-md-5 card p-3";
    container.style.width = "18rem";

    if (imag.length > 1) {
        let header = document.createElement("div");
        header.id = `carousel-${id}`;
        header.className = "carousel slide";
        header.setAttribute("data-bs-ride", "carousel");

        let inner = document.createElement("div");
        inner.className = "carousel-inner";

        let isFirst = true;

        imag.forEach(img => {
            let elementImg = document.createElement("div");
            elementImg.className = "carousel-item";
            if (isFirst) {
                elementImg.classList.add("active");
                isFirst = false;
            }
            elementImg.innerHTML = `<img src="${img}" class="d-block w-100" alt="">`;
            inner.appendChild(elementImg);
        });

        header.appendChild(inner);

        let prev = document.createElement("button");
        prev.className = "carousel-control-prev";
        prev.setAttribute("type", "button");
        prev.setAttribute("data-bs-target", `#carousel-${id}`);
        prev.setAttribute("data-bs-slide", "prev");

        let prevSpan = document.createElement("span");
        prevSpan.className = "carousel-control-prev-icon";
        prevSpan.innerHTML = "";
        prev.appendChild(prevSpan);

        // Button Next
        let next = document.createElement("button");
        next.className = "carousel-control-next";
        next.setAttribute("type", "button");
        next.setAttribute("data-bs-target", `#carousel-${id}`);
        next.setAttribute("data-bs-slide", "next");

        let nextSpan = document.createElement("span");
        nextSpan.className = "carousel-control-next-icon";
        nextSpan.innerHTML = "";
        next.appendChild(nextSpan);

        header.appendChild(prev);
        header.appendChild(next);
        container.appendChild(header);
    } else {
        let header = document.createElement("div");
        let elementImg = document.createElement("div");
        elementImg.innerHTML = `<img src="${imag[0]}" class="d-block w-100" alt="">`;

        header.appendChild(elementImg);
        container.appendChild(header);
    }

    let body = document.createElement("div");
    body.className = "card-body";

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
    elementButton.className = "btn app-btn-primary btn-sm";
    elementButton.setAttribute("href", link);
    elementButton.setAttribute("target", "_blank");

    divContent.appendChild(elementShop);
    divContent.appendChild(elementButton);

    body.appendChild(elementNome);
    body.appendChild(elementDesc);
    body.appendChild(divContent);

    container.appendChild(body);

    return container;
}

function updateList(values) {
    values.forEach((item, index) => {
        element.appendChild(createElement(index, item.nome, item.desc, item.shop, item.link, item.imag));
    });
}

function searchText() {
    suggestionsBox.innerHTML = "";

    const query = searchInput.value.toLowerCase();

    if (query.length === 0) {
        suggestionsBox.classList.add("d-none");
        return;
    }

    const matches = data.produtos.filter(item =>
        item.nome.toLowerCase().includes(query)
    );

    if (matches.length > 0) {
        matches.forEach(match => {
            const li = document.createElement("li");
            li.classList.add("list-group-item", "list-group-item-action");

            const link = document.createElement("a");
            link.textContent = match.nome;
            link.href = match.link;
            link.target = "_blank";

            li.appendChild(link);
            suggestionsBox.appendChild(li);
        });
        suggestionsBox.classList.remove("d-none");
    } else {
        suggestionsBox.classList.add("d-none");
    }
}

searchInput.addEventListener("input", searchText);
updateList(data.produtos);