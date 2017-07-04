import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ConsulterAnnonceComponent } from './consulter-annonce/consulter-annonce.component';
import { AjouterAnnonceComponent } from './ajouter-annonce/ajouter-annonce.component';
import { DetailsAnnonceComponent } from './details-annonce/details-annonce.component';
import {routing} from "./app.routing";
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {ToasterModule} from 'angular2-toaster';
import { ListeAnnonceComponent } from './liste-annonce/liste-annonce.component';
import { FavorisAnnonceComponent } from './favoris-annonce/favoris-annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsulterAnnonceComponent,
    AjouterAnnonceComponent,
    DetailsAnnonceComponent,
    LoginComponent,
    ListeAnnonceComponent,
    FavorisAnnonceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    ToasterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
