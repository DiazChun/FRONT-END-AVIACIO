import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  Inicio() {
    const nombre_usuario = this.email;
    const contrasena = this.password;

    this.http.get(`http://localhost:8080/usuarios/${nombre_usuario}/${contrasena}`)
      .subscribe(response => {
        if (response === 1) {
          
          this.router.navigateByUrl('/principal');

        } else {
          alert('Credenciales inválidas');
        }
      }, error => {
        console.error(error);
        alert('Ocurrió un error al procesar la solicitud');
      });
  }
}