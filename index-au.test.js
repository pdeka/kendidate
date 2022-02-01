const parse = require('./index');
const moment = require('moment')

moment.locale('en-AU')

test('Australian Date', () => {
  expect(parse('05/02/2021', 'en-AU')).toEqual(new Date(2021, 1, 5));
});
