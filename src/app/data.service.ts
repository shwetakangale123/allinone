import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data1="This is sample message from service ";

  constructor(private http: HttpClient) {
    console.log("This is constructor of service");
   }

   getData(){
     this.data1;
  return this.http.get('http://jsonplaceholder.typicode.com/users');

   }

   getRealTimeData(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
   }

   getPromData(){
    return this.http.get('https://dummyjson.com/products/categories').toPromise();
   }

} 
