import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { CafeListar } from './cafe-listar';
import { Cafe } from '../cafe';

describe('CafeListar', () => {
  let component: CafeListar;
  let fixture: ComponentFixture<CafeListar>;
  let debug: HTMLElement;

  const cafesPrueba: Cafe[] = [
    new Cafe(1, 'Café de prueba uno', 'Blend', 'Salento, Quindío', 'Chocolate', 1700, 'https://ejemplo.com/1.jpg'),
    new Cafe(2, 'Café de prueba dos', 'Café de Origen', 'Pitalito, Huila', 'Frutal', 1600, 'https://ejemplo.com/2.jpg'),
    new Cafe(3, 'Café de prueba tres', 'Café de Origen', 'Jardín, Antioquia', 'Caramelo', 1900, 'https://ejemplo.com/3.jpg'),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CafeListar],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(CafeListar);
    component = fixture.componentInstance;

    component.cafes.set(cafesPrueba);
    fixture.detectChanges();

    debug = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a table with a header row', () => {
    const filasEncabezado = debug.querySelectorAll('thead tr');
    expect(filasEncabezado.length).toBe(1);
    expect(debug.querySelectorAll('thead th').length).toBe(4);
  });

  it('should have 3 rows in the table body, one per cafe', () => {
    const filas = debug.querySelectorAll('tbody tr');
    expect(filas.length).toBe(3);
  });

  it('should have 4 rows in total (header + 3 cafes)', () => {
    expect(debug.querySelectorAll('table tr').length).toBe(4);
  });

  it('should show the data of each cafe in its row', () => {
    const filas = debug.querySelectorAll('tbody tr');
    cafesPrueba.forEach((cafe, i) => {
      const celdas = filas[i].querySelectorAll('th, td');
      expect(celdas[0].textContent).toContain(String(cafe.id));
      expect(celdas[1].textContent).toContain(cafe.nombre);
      expect(celdas[2].textContent).toContain(cafe.tipo);
      expect(celdas[3].textContent).toContain(cafe.region);
    });
  });
});
