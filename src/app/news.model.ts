export class News {
    status?: string;
    totalResults?: number;
    articles?: NewsArticles[]
}

export class NewsArticles {

    source?: { id?: string, name?: string };
    author?: string;
    title?: string;
    description?: string;
    url?: string;
    urlToImage?: string;
    publishedAt?: string;
    content?: string

}


