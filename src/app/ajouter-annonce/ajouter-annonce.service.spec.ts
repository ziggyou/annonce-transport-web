import { TestBed, inject } from '@angular/core/testing';
import { AjouterAnnonceService } from './ajouter-annonce.service';

describe('AjouterAnnonceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjouterAnnonceService]
    });
  });

  it('should ...', inject([AjouterAnnonceService], (service: AjouterAnnonceService) => {
    expect(service).toBeTruthy();
  }));
});
