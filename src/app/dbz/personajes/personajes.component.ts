import { Component, Input } from '@angular/core';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

  constructor(private servicioDbz: DbzService) {}

  //@Input()
  //personajes: Personaje [] = [];

  // crear un metodo get para obtener los personajes por el servicio
  get personajes() {
    return this.servicioDbz.personajes;
  }
}
