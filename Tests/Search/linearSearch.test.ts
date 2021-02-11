import { linearSearch } from 'Search/linearSearch';
import { dataSearch} from 'Tests/Search/linearSearch_data';
import { TestData } from 'Tests/Search/search_data';

describe('線形探索', () => {

    describe.each([
        ['先頭', dataSearch.getHead()],
        ['中間', dataSearch.getMid()],
        ['末尾', dataSearch.getTail()],
    ])('%s_', (_, param: TestData) => {
        test('探索要素がリストに存在するとき、探索回数と要素のインデックスが得られること', () => {

            const actual = linearSearch.search(param.list, param.target);
            expect(actual).toEqual(param.expected);
        });
    });

    test('探索要素がリストに存在しないとき、探索回数とnullが得られること', () => {

        const param = dataSearch.getNoHit();
        const actual = linearSearch.search(param.list, param.target);
        expect(actual).toEqual(param.expected);
    });
});