import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  usuarioForm: FormGroup;

  constructor(private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router,) {
      this.usuarioForm = fb.group({
        correo: ['', Validators.required],
        password: ['', Validators.required]
      })
    }

  ngOnInit(): void {}

  logear(){


    if((this.usuarioForm.status == "VALID")){
      let user = {
        email: this.usuarioForm.get('correo')?.value,
        clave: this.usuarioForm.get('password')?.value
      }

      this.loginService.login(user).subscribe(data => {
  
        Swal.fire({
          title: "Procesando datos, un momento...",
          timer: 2000,
          didOpen: () =>{
            Swal.showLoading(null);
          }
        }).then((data) => {
          Swal.fire({
            title: "Inicio exitoso",
            icon: "success",
            //confirmButtonColor: "green"
          }).then((data) => {
            if(data.isConfirmed){
              this.router.navigate(['estudiante/welcome']);
              //location.pathname = '/estudiante';
            }
          })
        });
  
        localStorage.setItem('usuario', JSON.stringify(data));
  
      }, err => {
  
          Swal.fire({
            title: "Ha ocurrido un error",
            text: "Por favor verifica los datos",
            icon: "error"
          })
  
       });
    }else{

      Swal.fire({
        title: "Ha ocurrido un error",
        text: "Por favor verifica los datos",
        icon: "error"
      })

    }

    // let user = {
    //   email: this.usuarioForm.get('correo').value,
    //   clave: this.usuarioForm.get('password').value
    // }


  }

}

