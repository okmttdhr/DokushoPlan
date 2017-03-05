import test from 'ava';
import * as moment from 'moment';
import { pagesForOneDay, daysToBeRead } from './index';

const MOCK_END_DATE = moment().startOf('day').add(5, 'days');

test('今日から読了日までの日数が計算できる', (t) => {
    t.is(daysToBeRead(MOCK_END_DATE), 5);
});

test('1日に読むページ数を返却できる', (t) => {
    t.is(pagesForOneDay(100, 50, MOCK_END_DATE), 10);
});
