interface Product {
    id: string;
    price: number;
}

interface CustomizableProduct extends Product {
    printType: string;
}

const orderItem: CustomizableProduct = {
    id: "P001",
    price: 1540,
    printType: "Bool"
}

console.log(orderItem)