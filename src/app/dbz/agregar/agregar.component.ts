import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {

  //recibe un nuevo personaje del componente padre al hijo
  //@Input()
  nuevoPersonaje: Personaje = {
    nombre: '',
    poder: 0
  }

  //crear una evento del componente hijo al padre
  //@Output()
  //onNuevoPersona: EventEmitter<Personaje> = new EventEmitter;

  constructor(private servicioDbz: DbzService){}

  agregar() {
    if(this.nuevoPersonaje.nombre.trim().length === 0){return}
    //this.onNuevoPersona.emit(this.nuevoPersonaje); //emitimos el nuevo personaje
    
    this.servicioDbz.agregarNuevoPersonaje(this.nuevoPersonaje);
    
    this.nuevoPersonaje = {
      nombre: '',
      poder: 0
    }
  }
}
