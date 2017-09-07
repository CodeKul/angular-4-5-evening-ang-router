import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  usNm: string;

  myObj = {
    hi: '123'
  };
  constructor(
    private acRt: ActivatedRoute
  ) {
    console.log(this.myObj.hi);
    console.log(this.myObj['hi']);
    console.log(this.myObj[0]);
  }

  ngOnInit() {
    //this.usNm = this.acRt.snapshot.params['usNm'];

    this.acRt.params.subscribe(
      params => this.usNm = params['usNm']
    );
  }
}
