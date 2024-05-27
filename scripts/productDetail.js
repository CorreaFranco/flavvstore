


const query = location.search;
const params = new URLSearchParams(query);
const id = params.get('id');
console.log(productsArray)

function printDetails(id) {
    const product = productsArray.find((each) => each.id === id);
    const detailsTemplate = `
        <div class="details-container">
        <div id="details" class="columns-container">
            <section class="product-images-block">
                <div class="product-images">
                ${product.img.map(each => `<img class="mini-img" src="${each}" alt="mini" />`).join("")}
                ${product.img.map(each => `<img class="mini-img" src="${each}" alt="mini" />`).join("")}
                </div>
                ${product.img.map(each => `<img class="big-img" src="${each}" alt="mini" />`).join("")}
            </section>
            <div class="product-description-block">
                <h1 class="product-title">${product.title}</h1>
                <form class="product-selector">
                    <fieldset class="product-fieldset">
                        <label class="product-label" for="color">${product.color.join(", ")}</label>
                        <select class="product-select" type="text" placeholder="Selecciona un color" id="color">
                            ${product.color.map((each) => `<option value=${each}>${each}</option>`).join("")}
                        </select>
                    </fieldset>
                </form>
                <div class="product-description">
                    <span class="product-label">Descripción</span>
                    <p>${product.description}</p>
                </div>
            </div>
            <div class="product-checkout-block">
                <div class="checkout-container">
                    <span class="checkout-total-label">Total:</span>
                    <h2 id="price" class="checkout-total-price">${product.price} so</h2>
                    <p class="checkout-description">
                        Incluye impuesto.
                    </p>
                    <ul class="checkout-policy-list">
                        <li>
                            <span class="policy-icon"><img src="./assets/truck.png" alt="Truck"/></span>
                            <span class="policy-desc">Agrega el producto al carrito para conocer los costos deenvío</span>
                        </li>
                        <li>
                            <span class="policy-icon"><img src="./assets/plane.png" alt="Plane"/></span>
                            <span class="policy-desc">Envios Lima y Provincia</span>
                        </li>
                    </ul>
                    <div class="checkout-process">
                        <div class="top">
                            <input type="number" min="1" value="1" />
                            <button type="button" class="cart-btn">
                                Añadir al Carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    const detailsSelector = document.querySelector("#details");
    detailsSelector.innerHTML = detailsTemplate;
    };
    printDetails(id)

// // Detalles de producto}
// let iphone11 = productsArray[0]
// function createDetalis(product) {
//     return `

//     `;
// };

// let pruebaDePuesta = document.querySelector("#main__detail")

// pruebaDePuesta.innerHTML = createDetalis(iphone11)