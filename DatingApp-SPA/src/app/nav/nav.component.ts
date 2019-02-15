import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService,
     private router: Router) { }

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('logged in successfully');
      this.alertify.success('Logged in successfully');
    }, error => {
      console.log(error);
      this.alertify.error('Login failed. Either your username or password maybe incorrect or you are yet to be registered.');

    }, () => {
      this.router.navigate(['/members']); // can also be in next
    });
  }

  // transferred to auth.service.ts since this will need to be
  // accessed by other components when they need to check whether
  // a user is logged in. Otherwise, this component itself will have to
  // be imported and that is a service's job.
  // loggedIn() {
  //     const token = localStorage.getItem('token');
  //     return !!token;
  // }

  loggedIn() {
      return this.authService.loggedIn();
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logged out');
    this.alertify.message('Logged out');
    this.router.navigate(['/home']);
  }
}
