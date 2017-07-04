import { TestBed, inject } from '@angular/core/testing';

import { FavorisAnnonceService } from './favoris-annonce.service';

describe('FavorisAnnonceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavorisAnnonceService]
    });
  });

  it('should be created', inject([FavorisAnnonceService], (service: FavorisAnnonceService) => {
    expect(service).toBeTruthy();
  }));
});
