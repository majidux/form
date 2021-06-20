import { handleFilterFalsy, handleArrayToObject } from '../utils';

describe('Test for tools', () => {
  test('handleFilterFalsy correctly rendered', () => {
    const list = [false, 'string', null, 2, undefined, 0];
    const changed = handleFilterFalsy({
      list,
    });
    const expected = ['string', 2];
    expect(changed).toStrictEqual(expected);
  });
  test('handleArrayToObject correctly rendered', () => {
    const list = [{ userName: 'name' }, { password: '1234' }];
    const changed = handleArrayToObject(list);
    const expected = { userName: 'name', password: '1234' };
    expect(changed).toStrictEqual(expected);
  });
});
