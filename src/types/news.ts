export interface NewsArticle {
    title: string;
    urlToImage: string | null;
    author: string | null;
    source: {
        name: string;
    };
    publishedAt: string;
    description: string;
    url: string;
}

export interface NewsResponse {
    articles: NewsArticle[];
}

export interface NewsSource {
    name: string;
    id: string;
}

export interface SourcesResponse {
    sources: NewsSource[];
}

export type NewsCallback = (data: NewsResponse) => void;

export type SourcesCallback = (data: SourcesResponse) => void;
