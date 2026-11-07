import { Component, OnInit, inject, signal } from '@angular/core';
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

  ngOnInit(): void {
    this.cafeService.getCafes().subscribe((cafes) => {
      this.cafes.set(cafes);
    });
  }
}
