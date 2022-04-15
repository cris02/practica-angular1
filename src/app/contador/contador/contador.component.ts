import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1>{{ titulo }}</h1>

        <h3>Base {{base}}</h3>

        <button (click)="contador(base)">+ {{ base }}</button>
        <span>{{ numero }}</span>
        <button (click)="contador(-base)">- {{ base }}</button>
    `
})
export class ContadorComponent {
    
    public titulo: string = 'Contador App';
    public numero: number = 10;
    public base: number = 5;

    //funciones en los componente
    contador(valor: number) {
        this.numero += valor;
    }
}