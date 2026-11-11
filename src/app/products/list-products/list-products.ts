import { Component, inject } from '@angular/core';
import { GestionProducts } from '../../services/gestion-products';
import { NgClass } from '@angular/common';


@Component({
    selector: 'app-list-products',
    imports: [NgClass],
    templateUrl: './list-products.html',
    styleUrl: './list-products.css',
})
export class ListProducts {
    public productService = inject(GestionProducts);

}
