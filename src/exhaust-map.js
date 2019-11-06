import { fromEvent, interval, from } from "rxjs";
import { exhaustMap, switchMap, map, take } from "rxjs/operators";
import { add, animate } from "./helpers";

const startButton = document.getElementById("start");
const startClicked = fromEvent(startButton, "click");
const circle = document.getElementById("circle");

startClicked
  .pipe(
    exhaustMap(() => {
      return animate(5000);
    })
  )
  .subscribe(t => (circle.style.marginLeft = `${t * 450}px`));

// interval(1000)
//   .pipe(
//     take(3),
//     map(value => `source(${value})`),
//     exhaustMap(x => {
//       add.li(`Source: ${x}`);
//       /* this generated Observable has to complete
//       Before any value to the source is listened to.
//       If the values from the source complete before the generated Observable, they will be ignored.
//       */
//       //   return interval(10).pipe(
//       //   return interval(500).pipe(
//       return interval(10000).pipe(
//         take(5),
//         map(value => `inner(${value * 10})`)
//       );
//     })
//   )
//   .subscribe(value => add.li(`Emitted value: ${value}`));
