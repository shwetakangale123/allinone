import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data2Service } from '../service Data 2/data2.service';

@Component({
  selector: 'app-servicedata',
  templateUrl: './servicedata.component.html',
  styleUrls: ['./servicedata.component.css']
})
export class ServicedataComponent implements OnInit {
  postData:any;
  productData: any;

  constructor(private mySer:DataService, private mySer2 : Data2Service) {
    console.log(this.mySer.data1);
    this.dataFromService();
    this.dataFromBackend();
    this.getDataFromService2();
    this.getDtofProducts();
   }

  ngOnInit(): void {
   
  }

  dataFromService(){
    let result =this.mySer.getData().subscribe (
      (res:any)=>{
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }


    )
    
  }

dataFromBackend(){
  console.log("This is from angular component");
  this.mySer.getRealTimeData().subscribe(
    (res:any)=>{
      console.log(res);
      this.postData= res;
    },

    (err:any)=>{
      console.log(err);
    }
  )
}


getDataFromService2(){
  this.mySer2.getData().subscribe(
    (res)=>{
      console.log(res);
    },
    (err)=>{
      console.log(err);
    }
  )

  console.log(this.mySer2.getData());
}


getDtofProducts(){
  this.mySer2.getProductData().subscribe(
    (res:any)=>{console.log(res);
      this.productData = res.products;
      this.productData.map((x:any)=>{
        console.log(x);
        x.yor=2008;
      })
      console.log(this.productData);

    },

    (err:any)=>{console.log(err)}
      
  )
  
}

}