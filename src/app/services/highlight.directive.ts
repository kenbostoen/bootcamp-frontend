import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
    selector: '[highlight]'
})
export class HighlightDirective implements OnInit {

    constructor(private el: ElementRef) { }

    ngOnInit() {
        this.el.nativeElement.style.backgroundColor = '#FFFF00';
        this.el.nativeElement.style.color = '#FF0000';
        this.el.nativeElement.textContent = this.el.nativeElement.textContent.toUpperCase();
    }
}