import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    email: string = '';
    password: string = '';

    constructor(
        private http: HttpClient
    ) { }

    ngOnInit() {
    }

    login(form) {
        console.log(form);

        // this.http.get('./includes/login.php').subscribe(data => {
        //     console.log(data);
        // });
    }

}
