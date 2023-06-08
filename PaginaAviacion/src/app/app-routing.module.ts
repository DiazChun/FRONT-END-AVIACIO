import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { InsertarComponent } from './insertar/insertar.component';
import { PersonasComponent } from './personas/personas.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { EquipajeComponent } from './equipaje/equipaje.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'principal', component: PaginaprincipalComponent},
  { path: 'reservacion', component: ReservacionComponent},
  { path: 'insertar', component: InsertarComponent},
  { path: 'persona', component: PersonasComponent},
  { path: 'vuelo', component: VuelosComponent},
  { path: 'equipaje', component: EquipajeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
