

export interface ProductsType {
    _id:string
    title: string;
    price: number;
    image: string;
    description: string;
    category: string;
}


export interface CartT extends ProductsType {
    quantity:number;
}