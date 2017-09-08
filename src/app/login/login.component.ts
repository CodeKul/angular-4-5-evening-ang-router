import { RouterAppPage } from './../../../e2e/app.po';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    
  }

  onLogin(em: string, pass: string) {
    this.router.navigate(['/dash', em], {
      queryParams: {
        page: 1,
        items: 10
      }
    });
  }
}
