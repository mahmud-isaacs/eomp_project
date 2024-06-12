
class Product {
    constructor(id, name, image, quantity, price) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.quantity = quantity;
        this.price = price;
    }
}

const products = [
    new Product(1, 'MANCHESTER UNITED 1998 HOME RETRO KIT', 'https://mahmud-isaacs.github.io/ecomHostedImages/manUnited.jpg', 1, 1200),
    new Product(2, '1996/1997 REAL MADRID RETRO JERSEY', 'https://mahmud-isaacs.github.io/ecomHostedImages/realMadrid.jpg', 1, 2000),
    new Product(3,'TOTTENHAM HOTSPUR 1994 RETRO JERSEY','https://mahmud-isaacs.github.io/ecomHostedImages/spurs.jpg',1,600),
    new Product(4,'MANCHESTER CITY HOME 1997 99 RETRO JERSEY','https://mahmud-isaacs.github.io/ecomHostedImages/manCity.jpg',1,1100),
    new Product(5,'ARSENAL 2002-23 HOME KIT RETRO JERSEY','https://mahmud-isaacs.github.io/ecomHostedImages/aresnal.jpg',1,900),
    new Product(6,'FC BARCELONA HOME 2010 11 RETRO JERSEY','https://mahmud-isaacs.github.io/ecomHostedImages/barce.jpg',1,850),
    new Product(7,'CHELSEA AWAY 2003-04 RETRO JERSEY','https://mahmud-isaacs.github.io/ecomHostedImages/chelsea.jpg',1,1250),
    new Product(8,'ENGLAND 1990 RETRO JERSEY','https://mahmud-isaacs.github.io/ecomHostedImages/images%20(1).jpg',1,1300),
    new Product(9,'1998 SOUTH AFRICA HOME RETRO JERSEY','https://mahmud-isaacs.github.io/ecomHostedImages/SA.jpg',1,700),
];


localStorage.setItem('products', JSON.stringify(products));



function addToCart(id) {
    const product = products.find(product => product.id === id);
    if (product) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existingProductIndex = cart.findIndex(item => item.id === id);
        if (existingProductIndex !== -1) {
            cart[existingProductIndex].quantity++;
        } else {
            product.quantity = 1;
            cart.push(product);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log('Product added to cart:', product);
    } 
}

document.querySelectorAll('.addToCart').forEach(button => {
    button.addEventListener('click', event => {
        const productId = parseInt(event.target.dataset.id);
        addToCart(productId);
    });
});


