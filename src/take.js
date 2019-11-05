import {
    add
} from './helpers';

import {
    interval,
    fromEvent
} from 'rxjs';

import {
    take,
    takeWhile,
    takeUntil,
    takeLast
} from 'rxjs/operators'

// interval(500).pipe(take(10)).subscribe(add.li)

// interval(500).pipe(
//     takeWhile(
//         (numbers) => numbers < 5)
// ).subscribe(add.li);

interval(500).pipe(
    take(10),
    takeLast(5)
).subscribe(add.li);