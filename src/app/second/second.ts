import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class Second {
  @Input({ required: true }) txtColor: string = 'red';

  @Output() eventToParent = new EventEmitter<string>();

  sendEvent() {
    this.eventToParent.emit('Message de la part du Second Component');
  }
}
