/**
 * @jest-environment jsdom
 */

const {kenektDateParser} = require('./index');
const moment = require('moment')
window.moment = moment;

moment.locale('en-AU')

test('Australian Date', () => {
  expect(kenektDateParser('05/02/2021', 'en-AU')).toEqual(new Date(2021, 1, 5));
});
