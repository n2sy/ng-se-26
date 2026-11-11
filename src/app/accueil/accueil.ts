import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-accueil',
    imports: [RouterLink],
    templateUrl: './accueil.html',
    styleUrl: './accueil.css',
})
export class Accueil {
    targetId = 4;
    private router = inject(Router)

    goToAccounts() {
        this.router.navigateByUrl("accounts")
        // this.router.navigateByUrl("/accounts")
    }

    goToInfos() {
        this.router.navigate(["cv", this.targetId])

    }
}
