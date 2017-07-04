import { Component, OnInit } from '@angular/core';
import {DetailsAnnonceService} from "./details-annonce.service";

@Component({
  selector: 'app-details-annonce',
  templateUrl: './details-annonce.component.html',
  styleUrls: ['./details-annonce.component.css'],
  providers : [DetailsAnnonceService]
})
export class DetailsAnnonceComponent implements OnInit {

  idAnnonce;
  annonce;
  user;
  typeannonce;
  constructor(private detailsAnnonceService : DetailsAnnonceService) { }

  ngOnInit() {
    this.idAnnonce = localStorage.getItem("annonceId");

    this.detailsAnnonceService.getAnnonce(this.idAnnonce)
      .subscribe(
        data => this.annonce = data
      );

    this.detailsAnnonceService.getUser(this.idAnnonce)
      .subscribe(
        data => this.user = data
      );

    this.detailsAnnonceService.getAnnonceType(this.idAnnonce)
      .subscribe(
        data => this.typeannonce = data
      );
  }

}
