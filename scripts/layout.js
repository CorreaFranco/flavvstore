
// Barra de navegación
const navSelector = document.getElementById("nav")
const options = [
        { title: "Cómo comprar", linkTo: "https://www.youtube.com/", opts: ["Formas de pago", "Envios"] },
        { title: "Costos y tarifas", linkTo: "https://www.youtube.com/", opts: ["Impuestos", "Facturacion"] },
        { title: "Mis pedidos", linkTo: "https://www.youtube.com/", opts: ["Pedir nuevamente", "Lista de deseos"] },
];

for (option of options) {
    let anchor = document.createElement("a");
    anchor.className = "nav-button"
    anchor.textContent = option.title
    anchor.href = option.linkTo
    anchor.target = "blank"
    navSelector.appendChild(anchor)
}


// Pie de página
let footerSelector = document.querySelector("#footer");

for (option of options) {
    // Creando el elemento <ul>
    let linkElement = document.createElement("ul");

    // Creando el elemento <a>
    let listContenElement = document.createElement("a");
    listContenElement.textContent = option.title;
    listContenElement.href = option.linkTo;
    listContenElement.target = "blank"

    // Agregar el elemento <a> como hijo del elemento <ul>
    linkElement.appendChild(listContenElement)

    for (option of option.opts) {
        // Creando el elemento <li>
        let linkLi = document.createElement("li");
        
        // Creando el elemento <a>
        let listProducts = document.createElement("a")
        listProducts.textContent = option;
        listProducts.href = "https://www.youtube.com/watch?v=ry2jz_uadLA"; // Makanaki
        listProducts.target = "blank"

        // Agregar el elemento <li> tenga como hijo al elemento <a>
        linkLi.appendChild(listProducts)

        //
        linkElement.appendChild(linkLi)
    }

    footerSelector.appendChild(linkElement)
}