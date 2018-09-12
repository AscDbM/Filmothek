import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AuthGuard} from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RegisterComponent} from './register/register.component';
import { TestComponent} from './test/test.component';
import { UserpageComponent } from './userpage/userpage.component';
import { DoubleLoginGuard } from './guard/doubleLogin.guard';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent, canActivate: [DoubleLoginGuard] },
    { path: 'logout', component: LogoutComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'test', component: TestComponent, canActivate: [AuthGuard]},
    { path: 'myPage', component: UserpageComponent, canActivate: [AuthGuard]},
    { path: 'movies', component: MovieComponent},
    { path: '**', redirectTo: '/home', pathMatch: 'full' },
]

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)],
})


export class AppRoutingModule {}
