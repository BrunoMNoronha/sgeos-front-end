import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { AuthService } from '../Auth.service';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username!: string;
  password!: string;

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  login() {
    this.authService.authenticate(this.username, this.password).subscribe(
      (response) => {
        const token: string = jwt_decode(response.token);
        const id: any = token.sub;
        this.authService.setToken(response.token);
        this.userService.getUserById(id).subscribe((user) => {
          this.authService.setLoggedInUser(user);
          this.router.navigate(['/dashboard']);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
