import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../item/item';
import { Candidat } from '../models/candidat.model';

@Component({
  selector: 'app-liste',
  imports: [Item],
  templateUrl: './liste.html',
  styleUrl: './liste.css',
})
export class Liste {
  @Input() tabCandidates: Candidat[] = [];
  @Output() eventToCv = new EventEmitter<Candidat>();

  sendEventToCv(clickedCandidat: Candidat) {
    this.eventToCv.emit(clickedCandidat);
  }
}
