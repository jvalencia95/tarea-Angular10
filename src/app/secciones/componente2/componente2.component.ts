import { Component } from '@angular/core';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component {
 array = new Array
  tarea = ""
  descripcion = ""

  Agregar() {
    if (this.tarea !== "") {
      this.array.push({ 'Nombre': this.tarea, 'Descripcion': this.descripcion })
      this.tarea = ""
      this.descripcion = ""
    }
  }
}
