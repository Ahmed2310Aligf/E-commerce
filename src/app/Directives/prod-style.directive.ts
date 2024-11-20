import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appProdStyle]',
  standalone: true
})
export class ProdStyleDirective implements OnChanges {
@Input()border1:string = 'red'
@Input()border2:string = 'green'
  constructor(private el:ElementRef) {
    this.el.nativeElement.style.border="  5px solid darkgray";
   }
  ngOnChanges(): void {
    this.el.nativeElement.style.border=` 5px solid ${this.border2}`;
    this.el.nativeElement.style.borderRadius = "25px"
  }

   @HostListener('mouseover')over(){
    this.el.nativeElement.style.border=` 5px solid ${this.border1}`;
     this.el.nativeElement.style.scale='1.1'
     this.el.nativeElement.style.transition= "1s"
  }
   @HostListener('mouseout')out(){
    this.el.nativeElement.style.border=` 5px solid ${this.border2}`;

     this.el.nativeElement.style.scale='1'
     this.el.nativeElement.style.transition= "1s"
  }

}
