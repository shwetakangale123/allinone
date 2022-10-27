import { Component, OnInit } from '@angular/core';
import { __values } from 'tslib';

@Component({
  selector: 'app-livecoading',
  templateUrl: './livecoading.component.html',
  styleUrls: ['./livecoading.component.css']
})
export class LivecoadingComponent implements OnInit {

  name:any="shweta";
  Age:any="24";
  DOB:any="14-2-1998";
  Education:any="M.sc(Elect)"

  constructor() { }

  ngOnInit(): void {
    this.name;
    this.Age;
    this.DOB;
    this.Education;
  }

  onSubmitForm(frm:any){
    console.log("Hello form is submitted");
    console.log(frm.name);
    // console.log(frm.Age);
    // console.log(frm.DOB);
    // console.log(frm.Education);
  }
  
}
