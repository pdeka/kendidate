/**
 * @jest-environment jsdom
 */

const {parse} = require('./index');
const moment = require('moment')
window.moment = moment;

test('with Australian Locale', () => {
  moment.locale('en-AU')

  expect(parse('05/02/2021', 'en-AU').getFullYear()).toEqual(2021);
  expect(parse('05/02/2021', 'en-AU').getMonth()).toEqual(1);
  expect(parse('05/02/2021', 'en-AU').getDate()).toEqual(5);

  expect(parse('20/01/2022 09:14 PM', 'en-AU').getFullYear()).toEqual(2022);
  expect(parse('20/01/2022 09:14 PM', 'en-AU').getMonth()).toEqual(0);
  expect(parse('20/01/2022 09:14 PM', 'en-AU').getDate()).toEqual(20);

  expect(parse('1/1/2022 09:14 PM', 'en-AU').getFullYear()).toEqual(2022);
  expect(parse('1/1/2022 09:14 PM', 'en-AU').getMonth()).toEqual(0);
  expect(parse('1/1/2022 09:14 PM', 'en-AU').getDate()).toEqual(1);

  expect(parse('20/01/2022 23:14:24', 'en-AU').getFullYear()).toEqual(2022);
  expect(parse('20/01/2022 23:14:24', 'en-AU').getMonth()).toEqual(0);
  expect(parse('20/01/2022 23:14:24', 'en-AU').getDate()).toEqual(20);

  expect(parse('1/01/2022 23:14', 'en-AU').getFullYear()).toEqual(2022);
  expect(parse('1/01/2022 23:14', 'en-AU').getMonth()).toEqual(0);
  expect(parse('1/01/2022 23:14', 'en-AU').getDate()).toEqual(1);

  expect(parse('1/01/2022', 'en-AU').getFullYear()).toEqual(2022);
  expect(parse('1/01/2022', 'en-AU').getMonth()).toEqual(0);
  expect(parse('1/01/2022', 'en-AU').getDate()).toEqual(1);

  expect(parse('20/01/22', 'en-AU').getFullYear()).toEqual(2022);
  expect(parse('20/01/22', 'en-AU').getMonth()).toEqual(0);
  expect(parse('20/01/22', 'en-AU').getDate()).toEqual(20);

  expect(parse('1/01/22', 'en-AU').getFullYear()).toEqual(2022);
  expect(parse('1/01/22', 'en-AU').getMonth()).toEqual(0);
  expect(parse('1/01/22', 'en-AU').getDate()).toEqual(1);

  expect(parse('20/01/202223:14', 'en-AU').getFullYear()).toEqual(2022);
  expect(parse('20/01/202223:14', 'en-AU').getMonth()).toEqual(0);
  expect(parse('20/01/202223:14', 'en-AU').getDate()).toEqual(20);

  expect(parse('20/01/20221:14', 'en-AU').getFullYear()).toEqual(2022);
  expect(parse('20/01/20221:14', 'en-AU').getMonth()).toEqual(0);
  expect(parse('20/01/20221:14', 'en-AU').getDate()).toEqual(20);

  expect(parse('20/01/202201:14:20 PM', 'en-AU').getFullYear()).toEqual(2022);
  expect(parse('20/01/202201:14:20 PM', 'en-AU').getMonth()).toEqual(0);
  expect(parse('20/01/202201:14:20 PM', 'en-AU').getDate()).toEqual(20);

  expect(parse('20/01/202201:14:20PM', 'en-AU').getFullYear()).toEqual(2022);
  expect(parse('20/01/202201:14:20PM', 'en-AU').getMonth()).toEqual(0);
  expect(parse('20/01/202201:14:20PM', 'en-AU').getDate()).toEqual(20);

  expect(parse('20/01/20221:14:20 PM', 'en-AU').getFullYear()).toEqual(2022);
  expect(parse('20/01/20221:14:20 PM', 'en-AU').getMonth()).toEqual(0);
  expect(parse('20/01/20221:14:20 PM', 'en-AU').getDate()).toEqual(20);

  expect(parse('20/01/20221:14:20PM', 'en-AU').getFullYear()).toEqual(2022);
  expect(parse('20/01/20221:14:20PM', 'en-AU').getMonth()).toEqual(0);
  expect(parse('20/01/20221:14:20PM', 'en-AU').getDate()).toEqual(20);

  expect(parse('2020-01-20', 'en-AU').getFullYear()).toEqual(2020);
  expect(parse('2020-01-20', 'en-AU').getMonth()).toEqual(0);
  expect(parse('2020-01-20', 'en-AU').getDate()).toEqual(20);

  expect(parse('20/01/2022 1:14', 'en-AU').getFullYear()).toEqual(2022);
  expect(parse('20/01/2022 1:14', 'en-AU').getMonth()).toEqual(0);
  expect(parse('20/01/2022 1:14', 'en-AU').getDate()).toEqual(20);
});

test('with US Locale', () => {
  moment.locale('en-US')

  expect(parse('02/05/2021', 'en-US').getFullYear()).toEqual(2021);
  expect(parse('02/05/2021', 'en-US').getMonth()).toEqual(1);
  expect(parse('02/05/2021', 'en-US').getDate()).toEqual(5);

  expect(parse('01/20/2022 09:14 PM', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('01/20/2022 09:14 PM', 'en-US').getMonth()).toEqual(0);
  expect(parse('01/20/2022 09:14 PM', 'en-US').getDate()).toEqual(20);

  expect(parse('1/1/2022 09:14 PM', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('1/1/2022 09:14 PM', 'en-US').getMonth()).toEqual(0);
  expect(parse('1/1/2022 09:14 PM', 'en-US').getDate()).toEqual(1);

  expect(parse('01/20/2022 23:14:24', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('01/20/2022 23:14:24', 'en-US').getMonth()).toEqual(0);
  expect(parse('01/20/2022 23:14:24', 'en-US').getDate()).toEqual(20);

  expect(parse('1/01/2022 23:14', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('1/01/2022 23:14', 'en-US').getMonth()).toEqual(0);
  expect(parse('1/01/2022 23:14', 'en-US').getDate()).toEqual(1);

  expect(parse('1/01/2022', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('1/01/2022', 'en-US').getMonth()).toEqual(0);
  expect(parse('1/01/2022', 'en-US').getDate()).toEqual(1);

  expect(parse('01/20/22', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('01/20/22', 'en-US').getMonth()).toEqual(0);
  expect(parse('01/20/22', 'en-US').getDate()).toEqual(20);

  expect(parse('1/01/22', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('1/01/22', 'en-US').getMonth()).toEqual(0);
  expect(parse('1/01/22', 'en-US').getDate()).toEqual(1);

  expect(parse('01/20/202223:14', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('01/20/202223:14', 'en-US').getMonth()).toEqual(0);
  expect(parse('01/20/202223:14', 'en-US').getDate()).toEqual(20);

  expect(parse('01/20/20221:14', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('01/20/20221:14', 'en-US').getMonth()).toEqual(0);
  expect(parse('01/20/20221:14', 'en-US').getDate()).toEqual(20);

  expect(parse('01/20/202201:14:20 PM', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('01/20/202201:14:20 PM', 'en-US').getMonth()).toEqual(0);
  expect(parse('01/20/202201:14:20 PM', 'en-US').getDate()).toEqual(20);

  expect(parse('01/20/202201:14:20PM', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('01/20/202201:14:20PM', 'en-US').getMonth()).toEqual(0);
  expect(parse('01/20/202201:14:20PM', 'en-US').getDate()).toEqual(20);

  expect(parse('01/20/20221:14:20 PM', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('01/20/20221:14:20 PM', 'en-US').getMonth()).toEqual(0);
  expect(parse('01/20/20221:14:20 PM', 'en-US').getDate()).toEqual(20);

  expect(parse('01/20/20221:14:20PM', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('01/20/20221:14:20PM', 'en-US').getMonth()).toEqual(0);
  expect(parse('01/20/20221:14:20PM', 'en-US').getDate()).toEqual(20);

  expect(parse('01/20/202201:14:20 PM', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('01/20/202201:14:20 PM', 'en-US').getMonth()).toEqual(0);
  expect(parse('01/20/202201:14:20 PM', 'en-US').getDate()).toEqual(20);

  expect(parse('01/20/202201:14:20PM', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('01/20/202201:14:20PM', 'en-US').getMonth()).toEqual(0);
  expect(parse('01/20/202201:14:20PM', 'en-US').getDate()).toEqual(20);

  expect(parse('01-20-2020', 'en-US').getFullYear()).toEqual(2020);
  expect(parse('01-20-2020', 'en-US').getMonth()).toEqual(0);
  expect(parse('01-20-2020', 'en-US').getDate()).toEqual(20);

  expect(parse('01/20/2022 1:14', 'en-US').getFullYear()).toEqual(2022);
  expect(parse('01/20/2022 1:14', 'en-US').getMonth()).toEqual(0);
  expect(parse('01/20/2022 1:14', 'en-US').getDate()).toEqual(20);
});
