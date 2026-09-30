import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first',
  imports: [FormsModule],
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
}
