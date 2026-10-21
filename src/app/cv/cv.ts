import { Component, inject } from '@angular/core';
import { Liste } from '../liste/liste';
import { Details } from '../details/details';
import { Candidat } from '../models/candidat.model';
import { First } from '../services/first';
import { GestionCandidats } from '../services/gestion-candidats';
import { Recrues } from '../recrues/recrues';

@Component({
    selector: 'app-cv',
    imports: [Liste, Details, Recrues],
    templateUrl: './cv.html',
    styleUrl: './cv.css',
    providers: [First]
})
export class Cv {
    allCandidates: Candidat[] = [
    ];
    selCand: Candidat;

    //constructor(private firstSer: First) { }
    private firstSer = inject(First)
    private candidatSer = inject(GestionCandidats)

    ngOnInit() {
        this.firstSer.showInfos()
        this.allCandidates = this.candidatSer.getAllCandidates()
    }

    addCandidate() {
        this.candidatSer.addNewCandidate();
    }

    showCandidatesList() {
        console.log(this.candidatSer.getAllCandidates())
    }

    recupererCandidat(cand: Candidat) {
        this.selCand = cand;
    }
}
