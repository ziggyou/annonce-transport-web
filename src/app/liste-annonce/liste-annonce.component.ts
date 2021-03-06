import { Component, OnInit } from '@angular/core';
import {ListeAnnonceService} from "./liste-annonce.service";

@Component({
  selector: 'app-liste-annonce',
  templateUrl: './liste-annonce.component.html',
  styleUrls: ['./liste-annonce.component.css'],
  providers : [ListeAnnonceService]
})
export class ListeAnnonceComponent implements OnInit {

  annonces;
  constructor(private listeAnnonceService : ListeAnnonceService) { }

  ngOnInit() {
    this.listeAnnonceService.getAnnonces(localStorage.getItem("userId"))
      .subscribe(
        data => this.handleListes(data)
      );
  }

  handleListes(data){
    console.log("getAnnonces of user",data)
    this.annonces = data;
  }

  annoncedetails(annonce)
  {
    localStorage.setItem("annonceId", annonce.id);
  }

}

