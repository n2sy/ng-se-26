import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { First } from './first/first';
import { Second } from './second/second';
import { Cv } from './cv/cv';
import { HomeAccounts } from './accounts/home-accounts/home-accounts';

@Component({
  selector: 'app-root',
  imports: [First, Second, Cv, HomeAccounts],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('ng-sof-26');

  recupererMsg(msg: string) {
    console.log(msg);
  }
}
