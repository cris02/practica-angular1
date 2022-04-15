import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

  horeos: string[] = ['Spiderman', 'Goku', 'Hullk', 'Iromen', 'Thor'];
  mostrarBorrado: string = '';

  borrarItem(): void {
    //elimina el primer elemento del arreglo
    this.mostrarBorrado = this.horeos.shift() || '';
  }

}
