import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class GestionProducts {
    allProducts = signal([])

    constructor() {
        this.allProducts.set([
            { id: '1', name: 'PC', price: 1000, qty: true },
            { id: '2', name: 'SMARTPHONE', price: 800, qty: false },
            { id: '3', name: 'TABLETTE', price: 600, qty: true },
        ])
    }

    addProduct(newProduct) {
        newProduct.id = crypto.randomUUID().substring(0, 4)
        newProduct.price = Number(newProduct.price)
        this.allProducts.update(previousTab => {
            return [...previousTab, newProduct]
        })
    }

    deleteProduct(productId: string) {
        // this.allProducts.update((products) => products.filter((product) => product.id !== id));
        let i = this.allProducts().findIndex(product => product.id == productId)
        this.allProducts.update(prevTabProducts => {
            return prevTabProducts.filter(product => product.id != productId)
            // return prevTabProducts;
        })

    }

    toggleSelected(productId: string) {
        let i = this.allProducts().findIndex(product => product.id == productId);
        this.allProducts.update(previousTab => {
            previousTab[i].qty = !previousTab[i].qty;
            return [...previousTab]
        })
    }
}
