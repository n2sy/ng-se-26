import { RouterModule, Routes } from "@angular/router";
import { Accueil } from "./accueil/accueil";
import { Cv } from "./cv/cv";
import { HomeAccounts } from "./accounts/home-accounts/home-accounts";
import { HomeProducts } from "./products/home-products/home-products";


export const myroutes: Routes = [
    { path: "", loadComponent: () => import('./accueil/accueil').then(c => c.Accueil) },
    { path: "cv", loadComponent: () => import('./cv/cv').then(c => c.Cv) },
    { path: "cv/:candidatId", loadComponent: () => import('./infos/infos').then(c => c.Infos) },
    { path: "accounts", loadComponent: () => import('./accounts/home-accounts/home-accounts').then(c => c.HomeAccounts) },
    { path: "products", loadComponent: () => import('./products/home-products/home-products').then(c => c.HomeProducts) },
]


