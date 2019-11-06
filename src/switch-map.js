import { add } from "./helpers";

import { map, switchMap, takeUntil, tap } from "rxjs/operators";
import { fromEvent } from "rxjs";

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const moves = fromEvent(canvas, "mousemove");

const down = fromEvent(canvas, "mousedown");
const up = fromEvent(canvas, "mouseup");

function brush(coords) {
  context.lineWidth = 5;
  context.lineTo(coords.x, coords.y);
  context.stroke();
}

down
  .pipe(
    tap(event => {
      context.strokeStyle = "blue";
      context.beginPath();
      context.moveTo(event.offSetX, event.offSetY);
    }),
    switchMap(evt =>
      moves.pipe(
        map(evt => {
          return { x: evt.x, y: evt.y };
        }),
        takeUntil(up)
      )
    )
  )
  .subscribe(coords => {
    brush(coords);
  });
