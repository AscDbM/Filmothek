import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { LoginService } from '../services/login.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private LoginService: LoginService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ["", Validators.required],
      pw: ["", Validators.required],
    });

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  //quick access to loginForm content
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    //stop if form is not correctly filled out
    if(this.loginForm.invalid) {
      return;
    }

    this.LoginService.login(this.f.login.value, this.f.pw.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate([this.returnUrl]);
      },
    );
  } 

  

}
