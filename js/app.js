
/*
// Atualiza a página a cada N segundos
setInterval(() => {
    console.log("Buenas");
    getProducts();
}, 3000);   // 1 segundo == 1000 mili
*/

// Busca os produtos na API
function getProducts() {
    // Usa a API Fetch (nativa do JS) para conectar na MockAPI (online)
    const linkAPI = "https://67620a7446efb3732373870b.mockapi.io/api/product";

    // Faz a conexão com a API
    fetch(linkAPI)
    // Se tiver sucesso, converte o retorno (response) para JSON
    .then((response) => response.json())
    // Percorre a lista de produtos
    .then(data => {
        const productList = [];
        // Adiciona os objetos no array
        productList.push(... data); // Spread operator
        listProducts(productList);
    });
}

// Carrega os Produtos na tela
function listProducts(productList) {
    const sectionProducts = document.querySelector("#sectionProducts");
    sectionProducts.innerHTML = '';

    productList.forEach((product) => {
        // Cria o article (Card)
        const card = document.createElement('article');
        card.setAttribute('class', 'product-card');
        card.setAttribute('id', product.id);
        sectionProducts.appendChild(card);

        // Adiciona os elementos do Card
        const productImg = document.createElement('div');
        productImg.setAttribute('class', 'product-img');
        card.appendChild(productImg);

            // Adiciona a imagem
            const img = document.createElement('img');
            img.setAttribute('src', product.image);
            img.setAttribute('alt', product.name);
            productImg.appendChild(img);

        // Adiciona as informações
        const productInfo = document.createElement('div');
        productInfo.setAttribute('class', 'product-info');
        card.appendChild(productInfo);

            const h2 = document.createElement('h2');
            h2.textContent = product.name;
            productInfo.appendChild(h2);

            const p = document.createElement('p');
            p.textContent = product.description;
            productInfo.appendChild(p);
        
        // Adiciona o preço e o botão Comprar
        const productAction = document.createElement('div');
        productAction.setAttribute('class', 'product-action');
        card.appendChild(productAction);

            const h3 = document.createElement('h3');
            h3.textContent = product.price.toLocaleString("pt-br", {
                style: "currency", currency: "BRL"
            });
            productAction.appendChild(h3);

            const btnAddCart = document.createElement('button');
            btnAddCart.setAttribute('onclick', `addCart(${product.id})`);
            btnAddCart.textContent = "Comprar";
            productAction.appendChild(btnAddCart);
    });
}

// getProducts();
// listProducts();
