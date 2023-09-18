import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { DatosComponent } from './component/page/datos/datos.component';
import { GaleriaComponent } from './component/page/galeria/galeria.component';
import { InicioComponent } from './component/page/inicio/inicio.component';
import { MapaComponent } from './component/page/mapa/mapa.component';
import { App1Component } from './app1/app1.component';
import { FooterComponent } from './component/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DatosComponent,
    GaleriaComponent,
    InicioComponent,
    MapaComponent,
    App1Component,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
