import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    private loginService: LoginService,
    private router: Router,
    ) { }

  ngOnInit() {
    this.loginService.logout();

    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 5000);
  }

}
