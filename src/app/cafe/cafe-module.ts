import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeListar } from './cafe-listar/cafe-listar';

@NgModule({
  declarations: [CafeListar],
  imports: [CommonModule],
  exports: [CafeListar],
})
export class CafeModule {}
