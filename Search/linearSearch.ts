import { SearchFunction, MetaSearch } from 'Search/search';

// 線形探索
export class LinearSearch {

    private metaSearch: MetaSearch

    constructor() {
        this.metaSearch = new MetaSearch();
    }

    private init() {
        this.metaSearch.clear();
    }

    /**
     * 線形探索
     * 
     * @param list 探索対象リスト
     * @param target 探索要素
     */
    search: SearchFunction = (list, target) => {
        this.init();

        for (let i=0; i < list.length; i++) {

            this.metaSearch.recordSearchedItem(list[i]);

            if (list[i] === target) {
                return this.metaSearch.makeSearchResult(i);
            }
        }

        // ヒット無し
        return this.metaSearch.makeSearchResult(null);
    }
}

export const linearSearch = new LinearSearch();