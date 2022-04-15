import {Component} from '@angular/core';

@Component({
    selector: 'app-hereo',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent {

    nombre: string = 'Iromen';
    edad: number = 30;

    
    public get capitalizable() : string {
        return this.nombre.toLocaleUpperCase();
    }
    

    obtenerNombre(): string {
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarHeroe(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 50;
    }

}