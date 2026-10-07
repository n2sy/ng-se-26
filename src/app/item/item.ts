import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat.model';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.html',
  styleUrl: './item.css',
})
export class Item {
  @Input() oneCandidate: Candidat;
}
