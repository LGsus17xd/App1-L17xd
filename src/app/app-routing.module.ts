import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{DatosComponent} from './component/page/datos/datos.component';
import{GaleriaComponent} from './component/page/galeria/galeria.component';
import { InicioComponent } from './component/page/inicio/inicio.component';
import {MapaComponent} from './component/page/mapa/mapa.component'
const routes: Routes = [
{path:'datos',component:DatosComponent},
{path:'galeria',component:GaleriaComponent},
{path:'inicio',component:InicioComponent},
{path:'mapa',component:MapaComponent},
{path:'**',component:InicioComponent}

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
