import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaNoticiaComponent } from './pages/pagina-noticia/pagina-noticia.component';

const routes: Routes = [
  { path: 'noticias', component: PaginaNoticiaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'noticias' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
