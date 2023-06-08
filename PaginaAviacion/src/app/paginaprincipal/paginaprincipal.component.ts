import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paginaprincipal',
  templateUrl: './paginaprincipal.component.html',
  styleUrls: ['./paginaprincipal.component.css']
})
export class PaginaprincipalComponent {

  constructor(private http: HttpClient, private router: Router) { }
  
  realizarOperacion(operacion: string) {
    console.log('Operación seleccionada:', operacion);
  
    // Lógica adicional para cada operación
    switch (operacion) {
      case 'Operación 1':
        // Lógica para la operación 1
        this.router.navigateByUrl('/persona');
        // Aquí puedes agregar la lógica específica para la operación 1
        break;
  
      case 'Operación 2':
        this.router.navigateByUrl('/reservacion');
        break;
  
      case 'Operación 3':
        // Lógica para la operación 3
        this.router.navigateByUrl('/vuelo');
        // Aquí puedes agregar la lógica específica para la operación 3
        break;
  
      case 'Operación 4':
        // Lógica para la operación 4
        this.router.navigateByUrl('/equipaje');
        // Aquí puedes agregar la lógica específica para la operación 4
        break;
  
      default:
        // Operación desconocida
        console.log('Operación desconocida');
        break;
    }
  }
  
}
