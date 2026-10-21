import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    @Input() oneCandidate: Candidat;

    @Output() eventToListe = new EventEmitter<Candidat>();

    sendEventToListe() {
        this.eventToListe.emit(this.oneCandidate);
    }
}
