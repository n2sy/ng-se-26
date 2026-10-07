import { Component } from '@angular/core';
import { Liste } from '../liste/liste';
import { Details } from '../details/details';
import { Candidat } from '../models/candidat.model';

@Component({
  selector: 'app-cv',
  imports: [Liste, Details],
  templateUrl: './cv.html',
  styleUrl: './cv.css',
})
export class Cv {
  allCandidates: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 23, 'Ing DevOps', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 44, 'Chef de projet', 'homer.png'),
    new Candidat(3, 'lisa', 'simpson', 21, 'Designer', 'lisa.png'),
  ];
  selCand: Candidat;

  recupererCandidat(cand: Candidat) {
    this.selCand = cand;
  }
}
