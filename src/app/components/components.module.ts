import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { CardNoticiaComponent } from './card-noticia/card-noticia.component';




@NgModule({
  declarations: [
    CardNoticiaComponent,
  ],
  imports: [
    CommonModule,
    CardModule,
  ],
  exports: [
    CardNoticiaComponent,
  ]
})
export class ComponentsModule { }
