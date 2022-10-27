import { Component, OnInit } from '@angular/core';
import { filter, from, map, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-operator',
  templateUrl: './rxjs-operator.component.html',
  styleUrls: ['./rxjs-operator.component.css']
})
export class RxjsOperatorComponent implements OnInit {

  constructor() { }

  arr:any = [1,2,3,4,5,6];

  dataStream:any;

  ngOnInit(): void {
    this.dataStream = from(this.arr);
    console.log(this.arr);

    this.dataStream = of(1,2,3,4,5,6,7,8,9,10);
    console.log(this.dataStream);

    this.dataStream.subscribe(
      (res:any)=>{ console.log (res);  },
      (err:any)=>{ console.log (err ); }
    );

    this.dataStream.pipe(
      map( (x:any)=> x*5),
      filter ( ( y:any)=> y % 2 == 0)
    ).subscribe( 
      (res:any) => { console.log (res) }
    )
  }

}
