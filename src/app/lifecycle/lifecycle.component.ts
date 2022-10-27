import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements  
OnInit,
OnChanges,
DoCheck,
AfterContentInit,
 AfterContentChecked,
 AfterViewInit,
 AfterViewChecked{

  constructor (){ }
  sample:any = "hello this is child";

  ngOnInit(): void {
    console.log("This is onInit Method");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("This is Onchange method");
  }

  ngDoCheck(): void {
    console.log("This is Docheck Method");
  }

  ngAfterContentInit(): void {
    console.log("This is afterContentInit method");
  }
  ngAfterContentChecked(): void {
    console.log("This is AfterContentCheck method");
  }
  ngAfterViewInit(): void {
    console.log("This is afterviewInit Method");
  }
  ngAfterViewChecked(): void {
    console.log("This is afterViewchecked Method");
  }

}
