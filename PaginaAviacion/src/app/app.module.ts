import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { ReservacionComponent } from './reservacion/reservacion.component';
import { InsertarComponent } from './insertar/insertar.component';
import { PersonasComponent } from './personas/personas.component';
import { VuelosComponent } from './vuelos/vuelos.component';
import { EquipajeComponent } from './equipaje/equipaje.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PaginaprincipalComponent,
    ReservacionComponent,
    InsertarComponent,
    PersonasComponent,
    VuelosComponent,
    EquipajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
