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

const me = {
    "name": "Vinz"
}

// sampleData.pipe(
//     first(),
//     pluck('name')).subscribe(add.li)

// sampleData.pipe(
//     last(),
//     pluck('name')).subscribe(add.li)

sampleData.pipe(
    startWith(me),
    pluck('name')).subscribe(add.li)


//no such data in me
sampleData.pipe(
    startWith(me),
    pluck("company", 'name')).subscribe(add.li)