import { TestBed, inject } from '@angular/core/testing';

import { ListeAnnonceService } from './liste-annonce.service';

describe('ListeAnnonceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListeAnnonceService]
    });
  });

  it('should be created', inject([ListeAnnonceService], (service: ListeAnnonceService) => {
    expect(service).toBeTruthy();
  }));
});
