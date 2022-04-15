import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    //declaramos nuestros componentes
    declarations: [
        HeroeComponent,
        ListadoComponent,
    ],
    // componentes que deseamos compartir afuera del modulo
    exports: [
        ListadoComponent,
    ],
    //modulos que importamos
    imports: [
        CommonModule,
    ]
})
export class HeroesModule {}