
// Lista de Produtos (em JSON)

// const productList =
// [
//     {
//        "id": 1,
//        "image": "https://cdn.pixabay.com/photo/2020/04/19/02/20/control-5061603_1280.jpg",
//        "name": "Xbox Series S",
//        "description": "Vero sequi laboriosam recusandae facere debitis beatae obcaecati.",
//        "price": "R$ 23.99",
//        "createdAt": "07/05/2025",
//        "updatedAt": "07/05/2025"
//     },
//     {
//         "id": 2,
//         "image": "https://cdn.pixabay.com/photo/2020/04/19/02/20/control-5061603_1280.jpg",
//         "name": "PlayStation 5",
//         "description": "Vero sequi laboriosam recusandae facere debitis beatae obcaecati.",
//         "price": "R$ 23.99",
//         "createdAt": "07/05/2025",
//         "updatedAt": "07/05/2025"
//      },
//      {
//         "id": 3,
//         "image": "https://cdn.pixabay.com/photo/2020/04/19/02/20/control-5061603_1280.jpg",
//         "name": "Nintendo Switch",
//         "description": "Vero sequi laboriosam recusandae facere debitis beatae obcaecati.",
//         "price": "R$ 23.99",
//         "createdAt": "07/05/2025",
//         "updatedAt": "07/05/2025"
//      },
//      {
//         "id": 4,
//         "image": "https://cdn.pixabay.com/photo/2020/04/19/02/20/control-5061603_1280.jpg",
//         "name": "PlayStation 5",
//         "description": "Vero sequi laboriosam recusandae facere debitis beatae obcaecati.",
//         "price": "R$ 23.99",
//         "createdAt": "07/05/2025",
//         "updatedAt": "07/05/2025"
//      },
//      {
//         "id": 5,
//         "image": "https://cdn.pixabay.com/photo/2020/04/19/02/20/control-5061603_1280.jpg",
//         "name": "Levy",
//         "description": "Vero sequi laboriosam recusandae facere debitis beatae obcaecati.",
//         "price": "R$ 23.99",
//         "createdAt": "07/05/2025",
//         "updatedAt": "07/05/2025"
//      },
// ];

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
        productList.push(... data);
        listProducts(productList);
    });
}

// Carrega os Produtos na tela
function listProducts(productList) {
    const sectionProducts = document.querySelector("#sectionProducts");

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
            h3.textContent = product.price;
            productAction.appendChild(h3);

            const btnAddCart = document.createElement('button');
            btnAddCart.setAttribute('onclick', `addCart(${product.id})`);
            btnAddCart.textContent = "Comprar";
            productAction.appendChild(btnAddCart);
    });
}

getProducts();
// listProducts();
