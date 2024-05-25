
// Constructor de producto
class Product {
    constructor(id, title, price, stock, img, color, description) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.stock = stock;
        this.img = img;
        this.color = color;
        this.description = description;
    }
    sellUnits(units) {
        if(units <= 0) {
            console.log("Error, valor negativo o 0")
        } else if(units > this.stock){
            console.log("No hay sufiente stock")
        } else {
            this.stock -= units
        }
    }
};


//Prodcutos
const prod1 = new Product("01","Iphone 11",700,3,[ "./assets/products/iphone11__blanco.png"], ["Blanco", "Morado"], "Un excelente teléfono con pantalla HD.");
const prod2 = new Product("02","Iphone 12",1600,3,["./assets/products/iphone12__blanco.png"], ["Negro", "Blanco"], "Gran rendimiento a un precio asequible.");
const prod3 = new Product("03","Iphone 13",1800,2,["./assets/products/iphone13__negro.png"], ["Negro", "Azul"], "Diseño elegante.");
const prod4 = new Product("04","Iphone 14ProMax",2400,2,["./assets/products/iphone14__purple.png"], ["Blanco", "Azul"], "Uno de los último modelos con cámara de alta resolución.");

let productsArray = [prod1, prod2, prod3, prod4];