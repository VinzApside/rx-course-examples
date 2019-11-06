import { add } from "./helpers";
import { interval } from "rxjs";
import { concatMap, map, take, tap } from "rxjs/operators";

interval(2000)
  .pipe(
    take(3),
    map(value => `${value * 100}`),
    concatMap(x => {
      return interval(1000).pipe(
        take(3),
        map(value => `innter(${value}), outer(${x})`)
      );
    })
  )
  .subscribe(add.li);
