import { linearSearch } from './linearSearch';
import { TestData, dataSearch} from './linearSearch_data';

describe('線形探索', () => {

    describe.each([
        ['先頭', dataSearch.getHead()],
        ['中間', dataSearch.getMid()],
        ['末尾', dataSearch.getTail()],
    ])('%s_', (_, param: TestData) => {
        test('探索要素がリストに存在するとき、探索回数と要素のインデックスが得られること', () => {

            const actual = linearSearch(param.list, param.target);
            expect(actual).toEqual(param.expected);
        });
    });

    test('探索要素がリストに存在しないとき、探索回数とnullが得られること', () => {

        const param: TestData = dataSearch.getNoHit();
        const actual = linearSearch(param.list, param.target);
        expect(actual).toEqual(param.expected);
    });
});