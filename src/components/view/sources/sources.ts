import './sources.css';
import { NewsSource } from '../../../types/news';

class Sources {
    draw(data: NewsSource[]) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');
        if (sourceItemTemp instanceof HTMLTemplateElement) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;
                const sourceName = sourceClone.querySelector('.source__item-name');
                const sourceItem = sourceClone.querySelector('.source__item');
                if (sourceName !== null) {
                    sourceName.textContent = item.name;
                }

                if (sourceItem !== null) {
                    sourceItem.setAttribute('data-source-id', item.id);
                }

                fragment.append(sourceClone);
            });
        }

        const sources = document.querySelector('.sources');

        if (sources !== null) {
            sources.append(fragment);
        }
    }
}

export default Sources;
