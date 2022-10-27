import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {
  public sampleText:string = "";
  public link:string="";
  public fullName:string="kiyara";

  constructor() { }

  ngOnInit(): void {
    this.sampleText ="Hello Angular ";

    this.link = "https://www.google.com/";

    this.fullName="";
  }
  clickEvent(){
    console.log("hiee this is for event");
  }

}

