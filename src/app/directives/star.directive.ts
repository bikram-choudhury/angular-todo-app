import { Directive, OnInit, Input, ElementRef, Sanitizer, SecurityContext, OnChanges } from "@angular/core";
import { SafeHtml } from "@angular/platform-browser";

@Directive({
    selector: '[ratings]'
})
export class StarDirective implements OnChanges {
    star_html: string = '';

    @Input('maxRating') maxRating: number; // 5
    @Input('rating') rating: number; // 1

    constructor(private el: ElementRef, private _sanitizer: Sanitizer){}

    ngOnChanges() {
        /*if (this.rating > 5) {
            alert('rating can\'t be more than 5');
            return;
        }*/
        if (!isNaN(this.maxRating)) {
            this.star_html = '';
            for (let index = 1; index <= this.maxRating; index++) {
                if (index <= this.rating) {
                    this.star_html += `<span class="glyphicon glyphicon glyphicon-star" aria-hidden="true"></span>`;
                } else {
                    this.star_html += `<span class="glyphicon glyphicon glyphicon-star-empty" aria-hidden="true"></span>`;
                }
            }
        }
        const safeHTML = this.sanitizeHTML(this.star_html);
        this.el.nativeElement.innerHTML = safeHTML;
    }
    
  sanitizeHTML(html) : SafeHtml{
    if (html) {
      return this._sanitizer.sanitize(SecurityContext.HTML, html);
    }
  }
}