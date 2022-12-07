import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//layouts
import { AuthComponent } from './layouts/auth/auth.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';

// No layout views:
import { LandingComponent } from './views/landing/landing.component';

const routes: Routes = [
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      //{ path: "estudiante", component: EstudianteComponent},
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  
    // No layout views:
    { path: "landing", component: LandingComponent },
    { path: "", component: LandingComponent },
    { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
