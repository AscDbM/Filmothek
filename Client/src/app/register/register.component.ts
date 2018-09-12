import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { UserService } from '../services/user.service';
import { invalid } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(        
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  //conveniecne, its called a couple times in the html
  get f() {return this.registerForm.controls}

  onSubmit() {
    this.submitted = true;

    //stop if form is filled incorectly
    if (this.registerForm.invalid) return;

    this.userService.register(this.registerForm.value)
    .pipe(first())
    .subscribe(
        data => {
            this.router.navigate(['/login']);
        }
    )
    
  }
  
}
