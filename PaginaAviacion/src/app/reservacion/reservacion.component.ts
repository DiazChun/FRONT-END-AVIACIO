import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reservacion',
  templateUrl: './reservacion.component.html',
  styleUrls: ['./reservacion.component.css']
})
export class ReservacionComponent {
  reservaciones: any[] = [];
  nuevaReservacion: any = null; 

  constructor(private http: HttpClient, private router: Router) { }


  ngOnInit() {
    this.obtenerreservacion();
  }

  obtenerreservacion() {

    this.http.get('http://localhost:8080/reservaciones').subscribe(
      (response: any) => {
        this.reservaciones = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  asignarVuelos() {
    this.router.navigateByUrl('/insertar');
  }

  editarReservacion(reservacion: any) {
 
    this.http.put(`http://localhost:8080/reservaciones/${reservacion.id}`, reservacion).subscribe(
      (response: any) => {
        alert('Cambio exitoso:');
      },
      (error: any) => {
        alert('Error al guardar los cambios:');
       
      }
    );
  }


  eliminarReservacion(reservacion: any) {
    this.http.delete(`http://localhost:8080/reservaciones/${reservacion.id}`, reservacion).subscribe(
      () => {
        const index = this.reservaciones.indexOf(reservacion);
        if (index !== -1) {
          this.reservaciones.splice(index, 1);
          alert("Vuelo eliminado exitosamente");
        }
      },
      (error: any) => {
        console.error(error);
        alert("Ocurrió un error al eliminar el vuelo");
      }
    );
  }  

  
  
}
