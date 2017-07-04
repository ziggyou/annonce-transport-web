import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavorisAnnonceComponent } from './favoris-annonce.component';

describe('FavorisAnnonceComponent', () => {
  let component: FavorisAnnonceComponent;
  let fixture: ComponentFixture<FavorisAnnonceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavorisAnnonceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavorisAnnonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
