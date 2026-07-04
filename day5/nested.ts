interface ShippingAddress {
    street: string;
    city: string;
    zipCode: number;
}
interface CustomerOrder {
    orderId: string;
    totalAmount: number;
    deliveryAddress: ShippingAddress;
}

const activeOrder: CustomerOrder = {
    orderId: "OOA1",
    totalAmount: 2000,
    deliveryAddress: {street: "behram baug",city: "Mumbai", zipCode: 400062}
}

function printReceipt(order: CustomerOrder): void{
    console.log(order.deliveryAddress.city)
}

printReceipt(activeOrder)