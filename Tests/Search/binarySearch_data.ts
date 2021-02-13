import { TestData } from 'Tests/Search/search_data';

type DataSearch = {
    getHead: () => TestData,
    getMid: () => TestData,
    getTail: () => TestData,

    getEven: () => TestData,
    getOdd: () => TestData,
    
    getNoExists: () => TestData,
};

const evenList = [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024];
const oddList = [3, 9, 27, 81, 243, 729, 2187, 6581, 19683];

export const dataForwardSearch: DataSearch = {

    getHead: () => {
        return {
            list: evenList, target: 2,
            expected: {
                count: 4, searchedList: [32, 256, 512, 1024], targetIndex: null
            }
        };
    },
    getMid: () => {
        return {
            list: evenList, target: 32,
            expected: {
                count: 1, searchedList: [32], targetIndex: 4
            }
        };
    },
    getTail: () => {
        return {
            list: evenList, target: 1024,
            expected: {
                count: 4, searchedList: [32, 256, 512, 1024], targetIndex: 9
            }
        };
    },

    getEven: () => {
        return {
            list: evenList, target: 256,
            expected: {
                count: 2, searchedList: [32, 256], targetIndex: 7
            }
        };
    },
    getOdd: () => {
        return {
            list: oddList, target: 2187,
            expected: {
                count: 2, searchedList: [243, 2187], targetIndex: 6
            }
        };
    },

    getNoExists: () => {
        return {
            list: evenList, target: 255,
            expected: {
                count: 4, searchedList: [32, 256, 512, 1024], targetIndex: null
            }
        };
    }
};

export const dataBackwardSearch: DataSearch = {

    getHead: () => {
        return {
            list: evenList, target: 2,
            expected: {
                count: 3, searchedList: [32, 4, 2], targetIndex: 0
            }
        };
    },
    getMid: () => {
        return {
            list: evenList, target: 32,
            expected: {
                count: 1, searchedList: [32], targetIndex: 4
            }
        };
    },
    getTail: () => {
        return {
            list: evenList, target: 1024,
            expected: {
                count: 3, searchedList: [32, 4, 2], targetIndex: null
            }
        };
    },

    getEven: () => {
        return {
            list: evenList, target: 256,
            expected: {
                count: 3, searchedList: [32, 4, 2], targetIndex: null
            }
        };
    },
    getOdd: () => {
        return {
            list: oddList, target: 9,
            expected: {
                count: 2, searchedList: [243, 9], targetIndex: 1
            }
        };
    },

    getNoExists: () => {
        return {
            list: evenList, target: 3,
            expected: {
                count: 3, searchedList: [32, 4, 2], targetIndex: null
            }
        };
    }
};

export const dataSearch: DataSearch = {

    getHead: () => {
        return {
            list: evenList, target: 2,
            expected: {
                count: 3, searchedList: [32, 4, 2], targetIndex: 0
            }
        };
    },
    getMid: () => {
        return {
            list: evenList, target: 32,
            expected: {
                count: 1, searchedList: [32], targetIndex: 4
            }
        };
    },
    getTail: () => {
        return {
            list: evenList, target: 1024,
            expected: {
                count: 4, searchedList: [32, 256, 512, 1024], targetIndex: 9
            }
        };
    },

    getEven: () => {
        return {
            list: evenList, target: 128,
            expected: {
                count: 4, searchedList: [32, 256, 64, 128], targetIndex: 6
            }
        };
    },
    getOdd: () => {
        return {
            list: oddList, target: 9,
            expected: {
                count: 2, searchedList: [243, 9], targetIndex: 1
            }
        };
    },

    getNoExists: () => {
        return {
            list: evenList, target: 3,
            expected: {
                count: 3, searchedList: [32, 4, 2], targetIndex: null
            }
        };
    }
};