import { Component, EventEmitter, input, Input, output, Output } from '@angular/core';
import { Candidat } from '../models/candidat.model';
import { NoAvatarPipe } from '../pipes/no-avatar-pipe';
import { Highlight } from '../highlight';

@Component({
    selector: 'app-item',
    imports: [NoAvatarPipe, Highlight],
    templateUrl: './item.html',
    styleUrl: './item.css',
})
export class Item {
    oneCandidate = input.required<Candidat>();
    //@Input({required : true}) oneCandidate2: Candidat;

    //@Output() eventToListe = new EventEmitter<Candidat>();
    eventToListe = output<Candidat>()

    sendEventToListe() {
        this.eventToListe.emit(this.oneCandidate());
    }
}
