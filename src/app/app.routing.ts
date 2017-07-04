import {RouterModule, Routes} from '@angular/router';
import {AjouterAnnonceComponent} from "./ajouter-annonce/ajouter-annonce.component";
import {DetailsAnnonceComponent} from "./details-annonce/details-annonce.component";
import {ConsulterAnnonceComponent} from "./consulter-annonce/consulter-annonce.component";
import {FavorisAnnonceComponent} from "./favoris-annonce/favoris-annonce.component";
import {ListeAnnonceComponent} from "./liste-annonce/liste-annonce.component";



const APP_ROUTES : Routes = [
  {path:'', component: ConsulterAnnonceComponent},
  {path:'annonce/ajouter', component: AjouterAnnonceComponent},
  {path:'annonce/details', component: DetailsAnnonceComponent},
  {path:'annonce/favoris', component: FavorisAnnonceComponent},
  {path:'annonce/liste', component: ListeAnnonceComponent}

];
export const routing = RouterModule.forRoot(APP_ROUTES);
