import { add } from "./helpers";

import { ReplaySubject, interval, BehaviorSubject } from "rxjs";
import { take } from "rxjs/operators";

// const numss = new BehaviorSubject(10);
const numss = new ReplaySubject();

interval(1000).subscribe(value => {
  numss.next(value);
});

setTimeout(() => {
  numss.pipe(take(5)).subscribe(value => {
    add.li("first: " + value);
  });
}, 5000);

numss.pipe(take(5)).subscribe(value => {
  add.li("second: " + value);
});
