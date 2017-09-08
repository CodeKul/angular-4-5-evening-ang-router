import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {

  sm: string;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.routerState.root.queryParams.subscribe(
      quPrm => {
        this.sm = `../../assets/${quPrm['to']}.svg`;
      }
    );
  }
}
