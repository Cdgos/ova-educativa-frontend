import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// No layout views:
import { LandingComponent } from './views/landing/landing.component';

const routes: Routes = [
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
