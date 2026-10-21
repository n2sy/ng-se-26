import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat.model';
import { NoAvatarPipe } from '../pipes/no-avatar-pipe';

@Component({
    selector: 'app-details',
    imports: [NoAvatarPipe],
    templateUrl: './details.html',
    styleUrl: './details.css',
})
export class Details {
    @Input() selectedCandidate: Candidat;
}
