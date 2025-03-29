import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaCarritoPage } from './pagina-carrito.page';

describe('PaginaCarritoPage', () => {
  let component: PaginaCarritoPage;
  let fixture: ComponentFixture<PaginaCarritoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
