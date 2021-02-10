import { SearchResult } from './linearSearch';

export type TestData = {
    list: number[],
    target: number,

    expected: SearchResult
};

type DataSearch = {
    getHead: () => TestData,
    getMid: () => TestData,
    getTail: () => TestData,
    getNoHit: () => TestData,
};

export const dataSearch: DataSearch = {
    getHead: () => {
        return {
            list: [1,2,3,4,5],
            target: 1,

            expected: {
                count: 1,
                targetIndex: 0
            }
        };
    },
    getMid: () => {
        return {
            list: [10,4,30,16,90,11,99,100],
            target: 90,

            expected: {
                count: 5,
                targetIndex: 4
            }
        };
    },
    getTail: () => {
        return {
            list: [1,2,3,4,5,6,7,8,9,10],
            target: 10,

            expected: {
                count: 10,
                targetIndex: 9
            }
        }
    },
    getNoHit: () => {
        return {
            list: [1,2,3,4,5],
            target: 0,

            expected: {
                count: 5,
                targetIndex: null
            }
        };
    }
};