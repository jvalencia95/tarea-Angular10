import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Componente3Component } from './componente3/componente3.component';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Componente3Component,
    Componente1Component,
    Componente2Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    Componente3Component,
    Componente1Component,
    Componente2Component
  ]
})
export class SeccionesModule { }
