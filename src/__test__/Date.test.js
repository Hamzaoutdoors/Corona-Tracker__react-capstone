import { transferDate } from '../utils/countries-api';

test('test formater works properly ', () => {
  const date = new Date(2021, 9, 14, 10, 33, 30, 0);
  const todayDate = transferDate(date);
  expect(todayDate).toEqual('2021-10-14');
});
