import {
    add
} from './helpers';

import {
    from,
    fromEvent,
    interval
} from "rxjs";

import {
    take,
    skip,
    skipLast,
    skipWhile,
    skipUntil
} from 'rxjs/operators';

// from(["apple", "grapes", "oranges", "pears"]).pipe(skip(2)).subscribe(add.li);

// from(["apple", "grapes", "oranges", "pears"]).pipe(skipLast(2)).subscribe(add.li);

// interval(1000).pipe(
//     take(10),
//     skipWhile(
//         (number) => number < 2)
// ).subscribe(add.li);

const button = document.getElementById('submit');
const buttonEvents = fromEvent(button, 'click');

interval(1000).pipe(
    skipUntil(buttonEvents)
).subscribe(add.li);

//click on button to show li