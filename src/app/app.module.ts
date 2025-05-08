import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';

//Angular material
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';

//Para usar el mask
import {NgxMaskDirective, provideNgxMask} from 'ngx-mask';

//Componentes de la app - screens
import {RegistroScreenComponent} from './screens/registro-screen/registro-screen.component';
import { LeftSidebarComponent } from './partials/left-sidebar/left-sidebar.component';
import { HeaderAppComponent } from './partials/header-app/header-app.component';
import { FooterAppComponent } from './partials/footer-app/footer-app.component';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { BasesPromocionScreenComponent } from './screens/bases-promocion-screen/bases-promocion-screen.component';
import { PoliticasPrivacidadScreenComponent } from './screens/politicas-privacidad-screen/politicas-privacidad-screen.component';
import { TerminosCondicionesScreenComponent } from './screens/terminos-condiciones-screen/terminos-condiciones-screen.component';
import { InstruccionesScreenComponent } from './screens/instrucciones-screen/instrucciones-screen.component';
import { NuevoLookScreenComponent } from './screens/nuevo-look-screen/nuevo-look-screen.component';
import { PerfilUsuarioScreenComponent } from './screens/perfil-usuario-screen/perfil-usuario-screen.component';
import { TiendasScreenComponent } from './screens/tiendas-screen/tiendas-screen.component';
import { JuegoTerminadoScreenComponent } from './screens/juego-terminado-screen/juego-terminado-screen.component';
import { JuegoScreenComponent } from './screens/juego-screen/juego-screen.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginScreenComponent,
    RegistroScreenComponent,
    LeftSidebarComponent,
    HeaderAppComponent,
    FooterAppComponent,
    HomeScreenComponent,
    BasesPromocionScreenComponent,
    PoliticasPrivacidadScreenComponent,
    TerminosCondicionesScreenComponent,
    InstruccionesScreenComponent,
    NuevoLookScreenComponent,
    PerfilUsuarioScreenComponent,
    TiendasScreenComponent,
    JuegoTerminadoScreenComponent,
    JuegoScreenComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    NgxMaskDirective,
    MatSidenavModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [
    provideNgxMask()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
