import { TestBed, inject } from '@angular/core/testing';
import { DetailsAnnonceService } from './details-annonce.service';

describe('DetailsAnnonceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsAnnonceService]
    });
  });

  it('should ...', inject([DetailsAnnonceService], (service: DetailsAnnonceService) => {
    expect(service).toBeTruthy();
  }));
});
