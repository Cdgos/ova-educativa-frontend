import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  nombreUsuario = this.getNombreUser();

  getNombreUser() {
    let user = JSON.parse(localStorage.getItem("usuario")!);
    return user;
  }

}
