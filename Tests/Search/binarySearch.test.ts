import { binarySearch } from 'Search/binarySearch';
import { TestData } from 'Tests/Search/search_data';
import { dataBackwardSearch, dataForwardSearch, dataSearch } from 'Tests/Search/binarySearch_data';

describe('二分探索', () => {

    describe('前方探索', () => {
        describe.each([
            ['先頭', dataForwardSearch.getHead()],
            ['中間', dataForwardSearch.getMid()],
            ['末尾', dataForwardSearch.getTail()],
            ['偶数リスト', dataForwardSearch.getEven()],
            ['奇数リスト', dataForwardSearch.getOdd()],
        ])('%s_', (_, param: TestData) => {
            test('探索処理から、探索回数・探索済み要素・探索対象のインデックスが得られること', () => {

                const actual = binarySearch.searchForward(param.list, param.target);
                expect(actual).toEqual(param.expected);
            });
        });
        
        test('探索対象がリストに存在しないとき、探索回数とnullが得られること', () => {

            const param = dataForwardSearch.getNoExists();
            const actual = binarySearch.searchForward(param.list, param.target);
            expect(actual).toEqual(param.expected);
        });
    });


    describe('後方探索', () => {
        describe.each([
            ['先頭', dataBackwardSearch.getHead()],
            ['中間', dataBackwardSearch.getMid()],
            ['末尾', dataBackwardSearch.getTail()],
            ['偶数リスト', dataBackwardSearch.getEven()],
            ['奇数リスト', dataBackwardSearch.getOdd()],
        ])('%s_', (_, param: TestData) => {
            test('探索処理から、探索回数・探索済み要素・探索対象のインデックスが得られること', () => {

                const actual = binarySearch.searchBackward(param.list, param.target);
                expect(actual).toEqual(param.expected);
            });
        });

        test('探索対象がリストに存在しないとき、探索回数とnullが得られること', () => {

            const param = dataBackwardSearch.getNoExists();
            const actual = binarySearch.searchBackward(param.list, param.target);
            expect(actual).toEqual(param.expected);
        });
    });


    describe('二分探索', () => {
        describe.each([
            ['先頭', dataSearch.getHead()],
            ['中間', dataSearch.getMid()],
            ['末尾', dataSearch.getTail()],
            ['偶数リスト', dataSearch.getEven()],
            ['奇数リスト', dataSearch.getOdd()],
        ])('%s_', (_, param: TestData) => {
            test('探索処理から、探索回数・探索済み要素・探索対象のインデックスが得られること', () => {

                const actual = binarySearch.search(param.list, param.target);
                expect(actual).toEqual(param.expected);
            });
        });

        test('探索対象がリストに存在しないとき、探索回数とnullが得られること', () => {

            const param = dataSearch.getNoExists();
            const actual = binarySearch.search(param.list, param.target);
            expect(actual).toEqual(param.expected);
        });
    });
});