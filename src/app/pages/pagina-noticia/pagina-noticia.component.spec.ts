import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNoticiaComponent } from './pagina-noticia.component';

describe('PaginaNoticiaComponent', () => {
  let component: PaginaNoticiaComponent;
  let fixture: ComponentFixture<PaginaNoticiaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaNoticiaComponent]
    });
    fixture = TestBed.createComponent(PaginaNoticiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
