import { TestBed, inject } from '@angular/core/testing';
import { ConsulterAnnonceService } from './consulter-annonce.service';

describe('ConsulterAnnonceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConsulterAnnonceService]
    });
  });

  it('should ...', inject([ConsulterAnnonceService], (service: ConsulterAnnonceService) => {
    expect(service).toBeTruthy();
  }));
});
