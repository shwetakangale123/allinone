import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustDirective]'
})
export class CustDirectiveDirective {

  constructor(private ele:ElementRef) {
    // console.log(this.ele);
    // console.log(this.ele.nativeElement);

    this.ele.nativeElement.style.background = "yellow";

    this.ele.nativeElement.style.color = "Red";

    // this.ele.nativeElement.style.background = "green";


    


   }

}
