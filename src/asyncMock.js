const products = [
    {
        id: "1",
        name: "Manzana",
        price: 1500,
        category: "fruta",
        img: "../assets/manzana.png",
        stock: "42",
        description: "Roja delicia",
    },
    {
        id: "2",
        name: "Naranja",
        price: 1200,
        category: "fruta",
        img: "../assets/zanahoria.png",
        stock: "40",
        description: "Zanahoria de huerta",
    },
    {
        id: "3",
        name: "Zanahoria",
        price: 700,
        category: "verdura",
        img: "../assets/zanahoria.png",
        stock: "28",
        description: "Zanahoria de huerta",
    },
    {
        id: "4",
        name: "Lechuga",
        price: 7000,
        category: "verdura",
        img: "../assets/costilla.png",
        stock: "32",
        description: "Lechuga repollada",
    },
    {
        id: "5",
        name: "Vacio",
        price: 6000,
        category: "carne",
        img: "../assets/vacio.png",
        stock: "10",
        description: "Vacio de vaca",
    },
    {
        id: "6",
        name: "Costilla",
        price: 7000,
        category: "carne",
        img: "../assets/costilla.png",
        stock: "12",
        description: "Costilla de vaca",
    }
]
export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=> {
            resolve(products);
        },1000);
        })
    }

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter((prod)=> prod.category === categoryId))
        }, 100);
        })
    }

export const getProductsById = (productoId) => {
    return new Promise ((resolve) =>{
        setTimeout(()=> {
            resolve(products.find((prod)=> prod.id === productoId))
        })
    })
}