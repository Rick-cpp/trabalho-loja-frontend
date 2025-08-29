function onReady() {
    const root = document.getElementById("list");
    createItem(root);
}

/**
 * @param {HTMLElement} root 
 */
function createItem(root) {
    
    data.produtos.forEach(produto => {
        let {nome, desc, shop, link, imag} = produto;

        let div = createItemDiv();
        div.appendChild(createItemHeader(nome, desc, shop));
        
        root.appendChild(div);
    });
}

/**
 * @returns {HTMLDivElement}
 */
function createItemDiv() {
    let div = document.createElement("div");
    div.className = "card shadow-sm";

    return div;
}

/**
 * @param {string} nome 
 * @param {string} desc 
 * @param {number} shop
 * @returns {HTMLDivElement} 
 */
function createItemHeader(nome, desc, shop) {
    let div = document.createElement("div");
    div.className = "card-body";

    let elementNome = document.createElement("h3");
    elementNome.innerText = nome;
    elementNome.className = "card-title";
    
    let elementDesc = document.createElement("p");
    elementDesc.innerText = desc;
    elementDesc.className = "card-text text-muted small";
    
    
    let divContent = document.createElement("div");
    divContent.className = "d-flex justify-content-between align-items-center";
    
    let elementShop = document.createElement("p");
    elementShop.innerText = `R$${shop.toFixed(2)}`;
    
    

    div.appendChild(elementNome);
    div.appendChild(elementDesc);
    div.appendChild(elementShop);

    return div;
}

/**
<div class="card shadow-sm" style="width: 18rem;">

    <!-- Carrossel -->
    <div id="carouselProduto" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://via.placeholder.com/300x200" class="d-block w-100" alt="Imagem 1">
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/300x200/ffcccc" class="d-block w-100" alt="Imagem 2">
        </div>
        <div class="carousel-item">
          <img src="https://via.placeholder.com/300x200/ccffcc" class="d-block w-100" alt="Imagem 3">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselProduto" data-bs-slide="prev">
        <span class="carousel-control-prev-icon"></span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselProduto" data-bs-slide="next">
        <span class="carousel-control-next-icon"></span>
      </button>
    </div>

    <!-- Conteúdo -->
    <div class="card-body">
      <h5 class="card-title">NOME DO PRODUTO</h5>
      <p class="card-text text-muted small">Uma mini descrição do produto vai aqui.</p>

      <div class="d-flex justify-content-between align-items-center">
        <span class="fw-bold text-success">R$ 0,25</span>
        <button class="btn btn-primary btn-sm">Comprar</button>
      </div>
    </div>
  </div>

 */