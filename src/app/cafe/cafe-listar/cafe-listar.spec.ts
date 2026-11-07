import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeListar } from './cafe-listar';

describe('CafeListar', () => {
  let component: CafeListar;
  let fixture: ComponentFixture<CafeListar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeListar],
    }).compileComponents();

    fixture = TestBed.createComponent(CafeListar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
