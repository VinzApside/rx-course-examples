import { add } from "./helpers";

import { mergeMap, map, take, tap } from "rxjs/operators";

import { interval } from "rxjs";

interval(2000)
  .pipe(
    take(3),
    map(value => `${value * 100}`),
    mergeMap(x => {
      return interval(1000).pipe(
        take(3),
        map(value => `innter(${value}), outer(${x})`)
      );
    })
  )
  .subscribe(add.li);
