import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-direct',
  imports: [NgStyle, NgClass],
  templateUrl: './direct.html',
  styleUrl: './direct.css',
})
export class Direct {
    bgColor : string = 'pink';
    font : string = "Phosphate";
    
    class1 : boolean = true;
    class2 : boolean = false;
    class3 : boolean = false;
    
    switchClass() {
        if(this.class1) {
            this.class1 = false;
            this.class2 = true;
            
        }
        else if(this.class2) {
            this.class2 = false;
            this.class3 = true;
        }
        else  {
            this.class3 = false;
            this.class1 = true;
        }
    }
    
}
