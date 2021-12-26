const PRODUCTS = [
    {
        id: 100,
        name: 'ReactProx Smartphone',
        price: 9000,
        image: require('../assets/products/1.jpg'),
        description: 'A latest smartphone having 16.55cm HD+ Infinity-v Display with 90Hz Screen refresh rate, Tru 48 Mp Quad Camera with Isocell GM@ sensor and 6000mAh long-lasting Battery with 15M Adaptibve Fast charing'
    },
    {
        id: 101,
        name: 'Battery Plan',
        price: 1450,
        image: require('../assets/products/2.jpg'),
        description: 'Saisha collections Airplan Toys for 1 2 3 4 5 6 7 8 years old and up Plane  Toy model with Lights and Music, Bump and go Air plane Toy for Boys and Girls'
    },
    {
        id: 102,
        name: 'HomeDecore Rugs',
        price: 125,
        image: require('../assets/products/3.jpg'),
        description: 'Hand-tutfed from a blend of durable wool and lustrone viscore, our flame rug creates a landscrpe full of the vibrant colour and rich texture. It is proof that are does not'
    }
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => {
        return product.id = id;
    })
}