import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor(private ser :DataService) { }

  ngOnInit(): void {

    const prom = new Promise ((resolve,reject) => {
      setTimeout(()=>{
        resolve("promise resolved ++2");
        reject("promise rejected++2");
      },4000

      );
    }
      
    );

    prom.then((value:any)=>{
      console.log("promise Executed "+ value);
    })

    .catch(function (value: any) {
      console.log("promise not executed "+ value);
    })
    
    this.getDataFromPromise();
  }

  getDataFromPromise(){
    this.ser.getPromData()
    .then((res:any)=>{
      console.log(res);
    })
    .catch((err:any)=>{
      console.log(err);
    })

  }
  



  }







