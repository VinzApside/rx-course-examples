import { add } from "./helpers";

import { mergeAll, tap, take, map } from "rxjs/operators";

import { interval, combineLatest, fromEvent } from "rxjs";

const button = document.getElementById("submit");
const clicks = fromEvent(button, "click");

const source = clicks.pipe(
  tap(ev => add.li("click")),
  map(ev => {
    return interval(1000).pipe(take(3));
  })
);

source.pipe(mergeAll()).subscribe(add.li);

// //same result as concatAll =>
// source.pipe(mergeAll(1)).subscribe(add.li);
