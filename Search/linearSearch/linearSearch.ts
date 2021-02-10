// 探索結果
export type SearchResult = {
    // 探索回数
    count: number,
    // 探索要素インデックス
    targetIndex: number | null
};

/**
 * 線形探索
 * 
 * @param list 探索対象リスト
 * @param target 探索要素
 */
export const linearSearch = (list: number[], target: number): SearchResult => {

    let searchCount = 0;

    for (let i=0; i < list.length; i++) {
        searchCount++;

        if (list[i] === target) {
            return {
                count: searchCount,
                targetIndex: i
            };
        }
    }

    // ヒット無し
    return {
        count: searchCount,
        targetIndex: null
    };
};