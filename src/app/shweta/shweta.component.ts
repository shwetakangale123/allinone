import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,} from '@angular/forms';

@Component({
  selector: 'app-shweta',
  templateUrl: './shweta.component.html',
  styleUrls: ['./shweta.component.css']
})
export class ShwetaComponent implements OnInit {
myForm:any;
isFormSubmitted:boolean= false;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myForm=this.fb.group({
      fname:['siya',Validators.required],
      lname:['',[Validators.required, Validators.maxLength(5)]],
      email:['', [Validators.required, Validators.pattern(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)]],
      pass:[''],
      cpass:['']

    })
  }

    get f(){
      return this.myForm.controls;
    }

    onSubmitReactiveForm(){
      console.log("form is submited");
      console.log(this.myForm);
      // console.log(this.myForm.value);
      this.isFormSubmitted = true;
    }
  

}
