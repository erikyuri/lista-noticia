import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NewsArticles } from 'src/app/news.model';
import { RequestService } from 'src/app/request.service';

@Component({
  templateUrl: './pagina-noticia.component.html',
  styleUrls: ['./pagina-noticia.component.css'],
  providers: [RequestService]
})
export class PaginaNoticiaComponent implements OnInit {

  newsArray?: NewsArticles[] = [];
  totalRecords?: any;
  first: number = 1;
  form = new FormGroup({
    searchTerm: new FormControl('Apple')
  });

  constructor(
    private requestService: RequestService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.routing();
    this.getNews(this.first.toString());
  }

  getNews(page: string) {
    this.requestService.getNews(page, this.form.value.searchTerm!).subscribe(res => {
      this.totalRecords = res.totalResults;
      this.newsArray = res.articles;
    })
  }

  onPageChange(event: any) {
    this.first = event.page + 1;
    this.getNews(this.first.toString());
  }

  routing() {
    this.route.queryParams.subscribe(params => {
      this.first = params['page'];
      if (!this.first) {
        this.first = 1
      }
    })
  }

  search() {
    this.getNews('1');
  }

}
