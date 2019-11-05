import {
    add,
    sampleData
} from './helpers';

import {
    pluck,
    first,
    last,
    startWith
} from "rxjs/operators"


sampleData.pipe(
    first(),
    pluck('name')).subscribe(add.li)

sampleData.pipe(
    last(),
    pluck('name')).subscribe(add.li)