import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  imports: [],
  templateUrl: './first.html',
})
export class First {
  prenom: string = 'Lotfi';
  section: string = 'SE';
  bgColor: string = 'pink';
  hide: boolean = true;
}
