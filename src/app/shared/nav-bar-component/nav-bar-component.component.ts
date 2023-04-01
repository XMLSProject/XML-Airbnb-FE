import { ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { LoginRegisterService } from '../service/login-register.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar-component.component.html',
  styleUrls: ['./nav-bar-component.component.css'],
})

export class NavBarComponent implements OnInit  {
  isLoged = false;
  isAdmin = false;
  isUser = false;
  inited = false;

  constructor(private router: Router,private loginRegisterService:LoginRegisterService) {}

  logoff(){
    localStorage.clear();
    this.isLoged = false;
  }

  ngOnInit() {
    this.loginRegisterService.isLoggedIn$.subscribe(isLoggedIn => {
      this.isLoged = isLoggedIn;
      this.isLoged = (localStorage.getItem('token') != null);
    this.isAdmin = (localStorage.getItem('role') == 'Admin');
    this.isUser = (localStorage.getItem('role') == 'User');
    });
    this.isLoged = (localStorage.getItem('token') != null);
    this.isAdmin = (localStorage.getItem('role') == 'Admin');
    this.isUser = (localStorage.getItem('role') == 'User');

    // Hide the navigation links when navigating to a different route
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.router.url)
      )
      .subscribe(() => {
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach((link) => link.classList.remove('active'));
      });
  }
}