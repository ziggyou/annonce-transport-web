import { Component, OnInit } from '@angular/core';
import {ConsulterAnnonceService} from "./consulter-annonce.service";

@Component({
  selector: 'app-consulter-annonce',
  templateUrl: './consulter-annonce.component.html',
  styleUrls: ['./consulter-annonce.component.css'],
  providers : [ConsulterAnnonceService]
})
export class ConsulterAnnonceComponent implements OnInit {

  annonces;
  constructor(private consulterAnnonceService : ConsulterAnnonceService) { }

  ngOnInit() {
    this.consulterAnnonceService.getAnnonces()
      .subscribe(
        data => this.handleAnnonces(data)
      );
  }

  handleAnnonces(data){
    console.log(data)
    this.annonces = data;
  }

  annonceSelected(annonce)
  {
    localStorage.setItem("annonceId", annonce.id);
  }

}
