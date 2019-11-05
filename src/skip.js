import {
    add
} from './helpers';

import {
    from,
    fromEvent
} from "rxjs";

import {
    skip,
    skipLast,
    skipWhile
} from 'rxjs/operators';

// from(["apple", "grapes", "oranges", "pears"]).pipe(skip(2)).subscribe(add.li);

from(["apple", "grapes", "oranges", "pears"]).pipe(skipLast(2)).subscribe(add.li);