import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Item } from '../item/item';
import { Candidat } from '../models/candidat.model';
import { First } from '../services/first';
import { GestionCandidats } from '../services/gestion-candidats';

@Component({
    selector: 'app-liste',
    imports: [Item],
    templateUrl: './liste.html',
    styleUrl: './liste.css',
    providers: [GestionCandidats]
})
export class Liste {
    //@Input() 
    tabCandidates: Candidat[] = [];
    @Output() eventToCv = new EventEmitter<Candidat>();
    private candidatSer = inject(GestionCandidats)

    ngOnInit() {
        this.tabCandidates = this.candidatSer.getAllCandidates()
    }

    showCandidatesList() {
        console.log(this.candidatSer.getAllCandidates())
    }

    sendEventToCv(clickedCandidat: Candidat) {
        this.eventToCv.emit(clickedCandidat);
    }
}
