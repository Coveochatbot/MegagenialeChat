import { Router } from '@angular/router';
import { LoginService } from './../services/login.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
    selector: 'whisper-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    private user: User;
    private error: string;

    constructor(private loginService: LoginService, private router: Router) {
        this.user = new User();
        this.error = '';
    }

    public ngOnInit(): void {
    }

    public onConnect(): void {
        if (!this.user.name || this.user.name.length < 1) {
            this.error = 'Veuillez entrer un nom';
            return;
        }  
        this.loginService.connect(this.user);
        this.router.navigate(['/']);
    }
}