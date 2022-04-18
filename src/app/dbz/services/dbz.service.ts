import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje [] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegueta',
          poder: 8500
        }
      ];

    // metodo que retorne los personajes
    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor(){
    }

    agregarNuevoPersonaje(personaje: Personaje): void {
        this._personajes.push(personaje);
    }

    
}