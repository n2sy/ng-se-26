import { Injectable } from '@angular/core';
import { GestionCandidats } from './gestion-candidats';

@Injectable()
export class First {

    constructor(private candidateSer: GestionCandidats) {

    }

    showInfos() {
        console.log("Je suis le First Service")
        console.log(this.candidateSer.getAllCandidates());
    }
}
