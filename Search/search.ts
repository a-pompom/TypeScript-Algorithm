// 探索結果
export type SearchResult = {
    // 探索回数
    count: number,
    // 探索済要素
    searchedList: number[],
    // 探索要素インデックス
    targetIndex: number | null
};

// 探索関数
export type SearchFunction = (list: number[], target: number) => SearchResult;

// 探索回数・探索済み要素といった、探索のメタ情報を記録
export class MetaSearch {

    // 探索済み回数
    private searchedCount: number;
    // 探索済み要素
    private searchedList: number[];

    constructor() {
        this.searchedCount = 0;
        this.searchedList = [];
    }

    /**
     * 初期化
     */
    clear() {
        this.searchedCount = 0;
        this.searchedList = [];
    }

    /**
     * 探索済み要素を記録
     * 
     * @param item 探索済み要素
     */
    recordSearchedItem(item: number) {
        this.searchedCount++;
        this.searchedList.push(item);
    }

    /**
     * 探索結果をコンソールへ出力し、探索結果オブジェクトを返却
     * 
     * @param targetIndex リスト内の探索要素インデックス 一致無しの場合はnull
     */
    makeSearchResult(targetIndex: number | null): SearchResult {
        console.log('--------------------------------------------------')
        console.log(targetIndex === null ? '探索要素は見つかりませんでした。': `${targetIndex}番目に見つかりました。`);

        console.log(`探索回数: ${this.searchedCount}回`);
        console.log(`探索リスト: ${this.searchedList}`);

        return {
            count: this.searchedCount,
            searchedList: this.searchedList,
            targetIndex
        };
    }
}