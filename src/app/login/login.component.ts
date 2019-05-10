import { Component, OnInit } from '@angular/core';

import { Http } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string = '';
    password: string = '';

    constructor(
        private http: Http
    ) { }

    ngOnInit() {
    }

    login(form) {
        console.log(form);

        this.http.get('./includes/login.php').subscribe(data => {
            console.log(data);
        });
    }

}
