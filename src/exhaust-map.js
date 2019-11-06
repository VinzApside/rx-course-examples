import { fromEvent, interval, from } from "rxjs";
import { exhaustMap, switchMap, map, take } from "rxjs/operators";
import { add } from "./helpers";

const startButton = document.getElementById("start");
const startClicked = fromEvent(startButton, "click");
const circle = document.getElementById("circle");

interval(1000)
  .pipe(
    take(3),
    map(value => `source(${value})`),
    exhaustMap(x => {
      add.li(`Source: ${x}`);
      /* this generated Observable has to complete 
      Before any value to the source is listened to.
      If the values from the source complete before the generated Observable, they will be ignored.
      */
      //   return interval(10).pipe(
      //   return interval(500).pipe(
      return interval(10000).pipe(
        take(5),
        map(value => `inner(${value * 10})`)
      );
    })
  )
  .subscribe(value => add.li(`Emitted value: ${value}`));
