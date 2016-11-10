
import { Directive, ElementRef, Renderer} from '@angular/core';

@Directive({
    selector: '[morejs]'
})
export class MyHighLight{
    constructor(el: ElementRef, render: Renderer){
        render.setElementStyle(el.nativeElement, 'backgroundColor','yellow');
    }
}