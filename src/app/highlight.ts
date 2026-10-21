import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]',
})
export class Highlight {
    @HostBinding("style.backgroundColor") bgcolor;// = 'red';
    @HostBinding("style.color") txtColor;// = 'blue';
    constructor() { }

    @HostListener("mouseenter") mouseEnter() {
        this.bgcolor = "grey";
        this.txtColor = "white"
    }
    @HostListener("mouseleave") mouseleave() {
        this.bgcolor = "pink";
        this.txtColor = "green"
    }
}
