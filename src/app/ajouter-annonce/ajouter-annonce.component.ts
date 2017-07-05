import { Component, OnInit } from '@angular/core';
import {AjouterAnnonceService} from "./ajouter-annonce.service";
import {Http, Headers, Response} from "@angular/http";
import {Observable} from "rxjs";
import { Router } from '@angular/router';
import { ToasterService} from 'angular2-toaster';

@Component({
  selector: 'app-ajouter-annonce',
  templateUrl: './ajouter-annonce.component.html',
  styleUrls: ['./ajouter-annonce.component.css'],
  providers: [AjouterAnnonceService]
})
export class AjouterAnnonceComponent implements OnInit {
	categories = {
		id: "",
		libelle: ""
	}

	annonce = {
  	libelle : "" ,
  	description: "",
  	prix : "" ,
  	quantite : "",
  	typeannonceId: ""
  }

  constructor(private ajouterAnnonceService:AjouterAnnonceService, private router: Router) { }

  ngOnInit() {
  	this.ajouterAnnonceService.getAnnonceType()
	.subscribe(
		data => this.HandleTypeannonce(data)
		)
  }

  HandleTypeannonce(data){
  	this.categories=data
  	console.log(this.categories)
  }

  ajouterAnnonce(){
  	console.log("test",this.annonce)
  	if (this.annonce.libelle!= "") {

  		this.ajouterAnnonceService.ajouter(this.annonce)
  		.subscribe(
  			data=>this.handleAjouterAnnonce(data)
  			)
  	 } //console.log("ehhhhh do remplir weuuu")

  	
  }

  handleAjouterAnnonce(data){
  		 if (data) {
  			console.log("test1",data)
  			this.router.navigate(["annonce/liste"])
  		}
  }
}
