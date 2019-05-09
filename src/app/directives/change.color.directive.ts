import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[change-color]'
})
export class ChangeColorDirective {
    constructor(private _el: ElementRef){
        // _el.nativeElement.style.color = 'red';
    }
    @HostListener('click', ['$event'])
    clickEvent(event){
        event.preventDefault();
        event.stopPropagation();
        console.log('Click from Host Element!');
        if(this._el.nativeElement.style.color == 'red') {
            this._el.nativeElement.style.color = 'black';
        } else {
            this._el.nativeElement.style.color = 'red';
        }
    }

}