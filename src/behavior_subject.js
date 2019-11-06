import { add } from "./helpers";

import { BehaviorSubject, interval } from "rxjs";
import { take } from "rxjs/operators";

// const nums = new BehaviorSubject(100); //add 100 before the other number

// interval(1000).subscribe(value => {
//   nums.next(value);
// });

// nums.subscribe(add.li);

const numss = new BehaviorSubject(10);

interval(1000).subscribe(value => {
  numss.next(value);
});

numss.pipe(take(10)).subscribe(add.li);
numss.pipe(take(5)).subscribe(value => {
  add.li("second: " + value);
});
