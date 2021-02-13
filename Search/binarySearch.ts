import { SearchFunction, MetaSearch } from './search';

// 二分探索
class BinarySearch {

    private head: number=0;
    private tail: number=0;

    private metaSearch: MetaSearch

    constructor() {
        this.metaSearch = new MetaSearch();
    }

    /**
     * 初期化処理
     * 
     * @param list 探索対象リスト
     */
    private init(list: number[]) {

        // 二分探索が適用できるよう昇順でソートしておく
        list.sort((former, latter) => former - latter);

        this.head = 0;
        this.tail = list.length-1;

        this.metaSearch.clear();
    }

    /**
     * 前方のみを探索
     * 
     * @param list 探索対象リスト
     * @param target 探索要素
     */
    searchForward: SearchFunction = (list, target) => {

        this.init(list);
        // 末尾に探索要素が存在する可能性もあるので、末尾自体も含む
        while (this.head <= this.tail) {

            const midIndex = Math.floor((this.head + this.tail) / 2);
            this.metaSearch.recordSearchedItem(list[midIndex]);

            // 探索要素合致
            if (list[midIndex] === target) {
                return this.metaSearch.makeSearchResult(midIndex);
            }

            // 末尾手前での無限ループを防ぐために加算
            this.head = midIndex + 1;
        }

        return this.metaSearch.makeSearchResult(null);
    }

    /**
     * 後方のみを探索
     * 
     * @param list 探索対象リスト
     * @param target 探索要素
     */
    searchBackward: SearchFunction = (list, target) => {

        this.init(list);
        // 先頭に探索要素が存在する可能性もあるので、先頭自体も含める
        while (this.head <= this.tail) {

            const midIndex = Math.floor((this.head + this.tail) / 2);
            this.metaSearch.recordSearchedItem(list[midIndex]);

            // 探索要素合致
            if (list[midIndex] === target) {
                return this.metaSearch.makeSearchResult(midIndex);
            }

            // 先頭手前での無限ループを防ぐために加算
            this.tail = midIndex - 1;
        }

        return this.metaSearch.makeSearchResult(null);
    }

    /**
     * 二分探索
     * 
     * @param list 探索対象リスト
     * @param target 探索要素
     */
    search: SearchFunction = (list, target) => {

        this.init(list);

        while (this.head <= this.tail) {

            const midIndex = Math.floor((this.head + this.tail) / 2);
            this.metaSearch.recordSearchedItem(list[midIndex]);

            // 探索要素合致
            if (list[midIndex] === target) {
                return this.metaSearch.makeSearchResult(midIndex);
            }

            // 前方を探索
            if (list[midIndex] < target) {
                this.head = midIndex + 1;
                continue;
            }

            // 後方を探索
            if (list[midIndex] > target) {
                this.tail = midIndex - 1;
                continue;
            }
        }
        return this.metaSearch.makeSearchResult(null);
    }
}

export const binarySearch = new BinarySearch();