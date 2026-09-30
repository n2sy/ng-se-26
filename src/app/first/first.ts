import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Second } from '../second/second';
import { Candidat } from '../models/candidat.model';

@Component({
  selector: 'app-first',
  imports: [FormsModule, Second],
  templateUrl: './first.html',
})
export class First {
  prenom: string = 'Lotfi';
  section: string = 'SE';
  bgColor: string = 'pink';
  hide: boolean = false;

  clickHandler() {
    alert('Click detected');
  }

  updatePrenom(inp: any) {
    console.log(inp);

    this.prenom = inp.value;
  }

  lireMessage(msg: string) {
    alert(msg);
  }
}
