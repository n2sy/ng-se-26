import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-exp-signals',
  imports: [],
  templateUrl: './exp-signals.html',
  styleUrl: './exp-signals.css',
})
export class ExpSignals {
  prenom = signal('Hechmi');
  tab = signal([5, 3, 1, 5, 66, 32, 344]);
  year = signal(2026);
  age = computed(() => {
    return this.year() - 1990;
  });

  constructor() {
    effect(() => {
      console.log(`La valeur de 'year' a été modifié en ${this.year()} `);
    });
  }

  increment() {
    this.tab().splice(2, 1);
    console.log(this.tab());
    this.year.update((prevValue) => {
      return prevValue + 1;
    });
  }

  ngOnInit() {
    // this.prenom();
  }

  updatePrenom() {
    //this.prenom() = 'Nidhal';
    this.prenom.set('Nidhal');
  }

  updatePrenom2() {
    this.prenom.update((previousValue) => {
      return previousValue + ' et Nidhal';
    });
  }
}
