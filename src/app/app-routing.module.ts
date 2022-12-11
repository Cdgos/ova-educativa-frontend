import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//layouts
import { AuthComponent } from './layouts/auth/auth.component';
import { EstudianteComponent } from './layouts/estudiante/estudiante.component';

// auth views
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { CalificacionesComponent } from './views/calificaciones/calificaciones.component';

// No layout views:
import { LandingComponent } from './views/landing/landing.component';
import { QuestionComponent } from './views/question/question.component';
import { SubtemaComponent } from './views/subtema/subtema.component';
import { TemasComponent } from './views/temas/temas.component';
import { WelcomeComponent } from './views/welcome/welcome.component';

const routes: Routes = [
  
  //estudiante views
  {
    path: "estudiante",
    component: EstudianteComponent,
    children: [
      { path: "welcome", component: WelcomeComponent },
      { path: "calificaciones", component: CalificacionesComponent },
      { path: "tema/:idTema", component: TemasComponent},
      { path: "subtema/:idSubtema", component: SubtemaComponent}
    ]
  },
  
  // auth views
  {
    path: "auth",
    component: AuthComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  
    // No layout views:
    { path: "landing", component: LandingComponent },
    { path: "question/:idTema", component: QuestionComponent },
    { path: "", component: LandingComponent },
    { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
