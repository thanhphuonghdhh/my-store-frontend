export interface Product {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    quantity?: number;
}

export interface UserInfo {
    userName: string;
    address: string;
    creditNumber: string;
}