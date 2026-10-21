import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat.model';

@Injectable({
    providedIn: 'root',
})
export class GestionCandidats {
    private allCandidates: Candidat[] = [
        new Candidat(1, 'bart', 'simpson', 23, 'Ing DevOps', 'bart.jpeg'),
        new Candidat(2, 'homer', 'simpson', 44, 'Chef de projet', 'homer.png'),
        new Candidat(3, 'lisa', 'simpson', 21, 'Designer', 'lisa.png'),
        new Candidat(4, 'marge', 'simpson', 48, 'Designer'),
    ];

    addNewCandidate() {
        this.allCandidates.push(new Candidat(3, 'NEW', 'CANDIDATE', 21, 'Designer', 'lisa.png'),
        )
    }

    getAllCandidates() {
        return this.allCandidates;
    }
}
