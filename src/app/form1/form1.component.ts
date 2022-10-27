import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {

  courses: any = ['BE', 'BCA', 'BTECH', 'BSC'];
  fn: any = "shweta";

  data: any = [];
  showData: boolean = false;

  fna: any;
  ln: any;
  mail: any
  edu: any
  editIndex: any
  showButton: boolean = false
  submitButton: boolean = true
   constructor() { }

   defaultCourse = "BE"//default select course
  ngOnInit(): void {
}

onSubmitForm(frm: any) {
  console.log(frm.value);
  let data = frm.value;
  // console.log(frm.value.fname);
  this.data.push(frm.value)
  if (this.data.length > 0) {
    this.showData = true;
  }
  console.log(this.data)
}

onDelete(dat: any) {
  // console.log(dat);
  this.data.forEach((element: any) => {
    console.log(element);
    if (dat.fname == element.fname) {
      console.log(dat);
      this.data.splice(this.data.indexOf(dat), 1)
    }
  })


}

onEdit(x: any) {
  // console.log("EDITED")
  // console.log(x)
  this.fna = x.fname
  this.ln = x.lname
  this.mail = x.email
  this.edu = x.course
  // console.log(this.dataArr.indexOf(x))
  this.editIndex = this.data.indexOf(x)
  this.showButton = true
  this.submitButton = false
}

onUpdateTemp(myForm1: any) {
  console.log("Updated");console.log(myForm1.value)
  this.data.splice(this.editIndex, 1, myForm1.value)
  this.showButton = false
    this.submitButton = true
  }

}
