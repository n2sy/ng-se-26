import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat.model';


export class GestionRecrues {
    private allRecrues: Candidat[] = [];

    getAllRecrues() {
        return this.allRecrues;
    }

    addRecrue(newRecrue: Candidat) {
        if (this.allRecrues.indexOf(newRecrue) == -1)
            this.allRecrues.push(newRecrue);
        else
            alert("Ce candidat a deja été recruté")
    }
}
