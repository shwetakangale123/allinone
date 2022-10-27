import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivs',
  templateUrl: './directivs.component.html',
  styleUrls: ['./directivs.component.css']
})
export class DirectivsComponent implements OnInit {
  age:number = 19;
  showData:boolean=true;
  stud:any=['shweta','sai','nisha','shree']
  num:any=15;


  testclass1:any;
  testclass:any;


  myStyle:any;
  myStyle1:any;

  constructor() { }

  ngOnInit(): void {
    this.myStyle= {'background-color':'orange', 'font-weight':'bold' };
    this.myStyle1= {'background-color':'pink', 'font-weight':'italic' };


    if(this.age > 18){
      this.testclass= "test1";
      this.testclass1 = "test2";
    }

  }

}
