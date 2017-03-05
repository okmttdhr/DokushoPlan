import test from 'ava';
import { fn, stringtest } from './test';

test(async (t) => {
    t.is(await fn(), 'foo');
});

test((t) => {
    t.is(stringtest, 'string');
});