import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { Cafe } from '../cafe';
import { CafeService } from '../cafe.service';

@Component({
  selector: 'app-cafe-listar',
  standalone: false,
  templateUrl: './cafe-listar.html',
  styleUrl: './cafe-listar.css',
})
export class CafeListar implements OnInit {
  private cafeService = inject(CafeService);

  cafes = signal<Cafe[]>([]);

  totalOrigen = computed(
    () => this.cafes().filter((cafe) => cafe.tipo === 'Café de Origen').length
  );

  totalBlend = computed(
    () => this.cafes().filter((cafe) => cafe.tipo === 'Blend').length
  );

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes.set(cafes);
    });
  }
}
