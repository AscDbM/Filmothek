import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import {MatDividerModule} from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';

//fake backend, only for testing
//import { fakeBackendProvider } from "./Interceptor/fakeBackend";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuard } from "./guard/auth.guard";
import { JwtInterceptor } from "./Interceptor/jwt.interceptor";
import { UserService } from "./services/user.service";
import { LoginService } from "./services/login.service";
import { RegisterComponent } from './register/register.component';
import { TestComponent } from './test/test.component';
import { UserpageComponent } from './userpage/userpage.component';
import { MovieComponent } from './movie/movie.component'; 



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    TestComponent,
    UserpageComponent,
    MovieComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatTabsModule,
    MatDividerModule,
    MatCardModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    //fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
