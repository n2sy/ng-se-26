import { Component, computed, inject, signal } from '@angular/core';
import { GestionProducts } from '../../services/gestion-products';

@Component({
    selector: 'app-dashboard',
    imports: [],
    templateUrl: './dashboard.html',
    styleUrl: './dashboard.css',
})
export class Dashboard {
    private productService = inject(GestionProducts)
    nbSelected = computed(() => {
        let productsSelected = this.productService.allProducts().filter(product => product.qty == true);
        return productsSelected.length
    });

    totalPrices = computed(() => {
        let productsSelected = this.productService.allProducts().filter(product => product.qty == true);

        return productsSelected.reduce((total, product) => total += product.price, 0);

    })
}
