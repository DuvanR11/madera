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
import {MatCardModule} from '@angular/material/card';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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
    EquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    CarouselModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
