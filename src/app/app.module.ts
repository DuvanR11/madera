import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TestimoniosComponent } from './components/testimonios/testimonios.component';
import { AgendayaComponent } from './components/agendaya/agendaya.component';
import { EquipoComponent } from './components/equipo/equipo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { CategoriasComponent } from './sliders/categorias/categorias.component';
import { AsociadosComponent } from './sliders/asociados/asociados.component';
import { ProductosComponent } from './pages/productos/productos.component';
import {MatBadgeModule} from '@angular/material/badge';
import { GaleriaComponent } from './components/galeria/galeria.component';
import {MatCardModule} from '@angular/material/card';
import { CardProductosComponent } from './components/card-productos/card-productos.component';
import { SolicitudComponent } from './pages/solicitud/solicitud.component';
import { FormSolicitudComponent } from './forms/form-solicitud/form-solicitud.component';
import { LoginComponent } from './forms/login/login.component';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    ServiciosComponent,
    WhatsappComponent,
    NosotrosComponent,
    TestimoniosComponent,
    AgendayaComponent,
    EquipoComponent,
    CategoriasComponent,
    AsociadosComponent,
    ProductosComponent,
    GaleriaComponent,
    CardProductosComponent,
    SolicitudComponent,
    FormSolicitudComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CarouselModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    MatCardModule,
    MatSelectModule,
    MatRadioModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
