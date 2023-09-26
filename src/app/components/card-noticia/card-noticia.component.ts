import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NewsArticles } from 'src/app/news.model';

@Component({
  selector: 'app-card-noticia',
  templateUrl: './card-noticia.component.html',
  styleUrls: ['./card-noticia.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardNoticiaComponent {

  @Input() data: NewsArticles = new NewsArticles();


  redirectTo(link:string) {
    window.open(link, "_blank")
  }
}
