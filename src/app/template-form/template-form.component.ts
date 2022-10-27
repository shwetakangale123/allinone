import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  courses:any=['BCA','BA','BSC','MSC']
  fn:any="shweta";
  ln:any="kangale";
  email:any="";
  pass:any="";
  cpass:any="";

  constructor() { }

  ngOnInit(): void {
    this.fn;
    this.ln;
    this.email;
    this.pass;
    this.cpass;

  }

  onSubmitForm(frm:any){
    console.log(frm.value);
    // console.log(frm.value.fname);
    console.log("Hello form is submitted");
  }

}
