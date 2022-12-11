import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ChangeBgDirective } from "./change-bg.directive";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { es_ES } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LandingComponent } from './views/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footers/footer/footer.component';
import { FooterSmallComponent } from './components/footers/footer-small/footer-small.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { EstudianteComponent } from './layouts/estudiante/estudiante.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTableModule } from 'ng-zorro-antd/table';

import { UserDropdownComponent } from './components/dropdown/user-dropdown/user-dropdown.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { TemasComponent } from './views/temas/temas.component';
import { CalificacionesComponent } from './views/calificaciones/calificaciones.component';
import { QuestionComponent } from './views/question/question.component';
import { SubtemaComponent } from './views/subtema/subtema.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    FooterSmallComponent,
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    EstudianteComponent,
    SidebarComponent,
    UserDropdownComponent,
    WelcomeComponent,
    TemasComponent,
    CalificacionesComponent,
    QuestionComponent,
    ChangeBgDirective,
    SubtemaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
    NzDropDownModule,
    NzGridModule,
    NzProgressModule,
    NzButtonModule,
    NzTableModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: es_ES }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
