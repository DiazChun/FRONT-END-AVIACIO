import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent {

  reservacion: any = {};

  constructor(private http: HttpClient) {}

  guardarReservacion() {
    const url = 'http://localhost:8080/reservaciones/';
    this.http.post(url, this.reservacion)
      .subscribe(
        (response) => {
          alert('Registro guardado con éxito.');
        },
        (error) => {
          alert('Error al insertar.');
          // Manejar el error adecuadamente
        }
      );
  }

}
