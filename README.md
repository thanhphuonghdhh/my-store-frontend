# MyStoreFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.2.

## Development server

First run `npm install` to install all required dependencies. Then run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Models used in project
Product {
    id: number;
    name: string;
    price: number;
    url: string;
    description: string;
    quantity?: number;
}

UserInfo {
    userName: string;
    address: string;
    creditNumber: string;
}

## URL to test project

- Product list: http://localhost:4200/
- Product list in cart: http://localhost:4200/cart
- Product detail: http://localhost:4200/product/:id
- Checkout confirmation: http://localhost:4200/confirmation