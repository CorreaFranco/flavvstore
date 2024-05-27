
// Crea carta de prodcuto
function createCard(product) {
    return `
    <a class="product-card" href="./details.html?id=${product.id}">
        <img
            class="product-img"
            src="${product.img[0]}"
            alt="${product.id}"
        />
        <div class="product-info">
            <span class="product-title">${product.title}</span>
        </div>
        <span class="product-description">${product.color.join(", ")}</span>
        <div class="product-price-block">
        <span class="product-price">${product.price}</span>
        </div>
        <div class="product-tax-policy">
            Incluye impuesto.
        </div>
    </a>
    `;
};

// Crea cartas con array e insercion al documento
function printCards (arrayOfProducts, idSelector) {
    let productsTemplate = "";
    for (element of arrayOfProducts) {
        productsTemplate = productsTemplate + createCard(element);
    }
    const productsSelector = document.getElementById(idSelector);
    productsSelector.innerHTML = productsTemplate;
}

printCards(productsArray, "products");
