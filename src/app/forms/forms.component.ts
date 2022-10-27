import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  fn: any ="shweta";
  ln:any = "";
  age:any = "";
  DOB:any ="";
  edu:any ="";
  course:any =["BCA","BCS","MCA","MCS","M.COM"];


  reg:any;    
  showData:boolean = false;         
  student:any = [];
  ShowUpdate : boolean = false;
  // ShowTable : boolean = false;
  editIndex:any;
  showButton : boolean = false;
  submitButton: boolean =true;
  
  constructor() { }

  ngOnInit(): void {
    
  }
  // get f(){
  //   return this.reg.controls;
  

  onSubmitForm(frm:any){
    alert("Data save successfully");
    console.log("Form is submited succesfully");
    console.log(frm.value);
    let student = frm.value;
    console.log(frm.value.fname);
    this.student.push(frm.value);
    if(this.student.length > 0){

      this.showData = true;
    }

    console.log(this.student)
   
  }



  onDelete(i:any){

    console.log(i);
    this.student.forEach((element : any)=> {
      console.log(element);
      if(i.fname == element.fname){
        console.log(i);
        this.student.splice(this.student.indexOf(i),1)
      }
    })
      }



  onEdit(i:any){
    console.log("this will be edit");
    console.log(i);
    this.fn = i.fn
    this.ln = i.ln    
    this.age = i.age
    this.DOB = i.DOB
    this.edu = i.edu 
    this.course = i.course
    // this.ShowUpdate = true;
    this.editIndex = this.student.indexOf(i);
    this.showButton = true;
    this.submitButton = false;
  

    // this.student.splice(this.student.indexOf(i),1);
    
  }

  onUpdateTemp(upd:any){
    console.log("This is updated");
    console.log(upd.value);
    this.reg = upd.reg;
    // this.reg = this.student.indexOf(upd);
    this.student.splice(this.editIndex , 1, upd.value);
    this.showButton = false;
    this.submitButton = true;
  }


}
