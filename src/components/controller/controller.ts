import AppLoader from './appLoader';

import { NewsResponse, SourcesResponse, NewsCallback, SourcesCallback } from '../../types/news';

class AppController extends AppLoader {
    getSources(callback: SourcesCallback) {
        super.getResp<SourcesResponse>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: MouseEvent, callback: NewsCallback) {
        let target = e.target;
        const newsContainer = e.currentTarget;
        if (!(newsContainer instanceof HTMLElement)) {
            return;
        }
        while (target !== newsContainer) {
            if (!(target instanceof HTMLElement)) {
                return;
            }

            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');

                if (sourceId === null) {
                    return;
                }

                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId);
                    super.getResp<NewsResponse>(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode;
        }
    }
}

export default AppController;
