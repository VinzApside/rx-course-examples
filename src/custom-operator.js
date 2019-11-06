import { add } from "./helpers";

import { fromFetch } from "rxjs/fetch";

import { of, pipe } from "rxjs";

import { switchMap, mergeMap, concatMap, delay } from "rxjs/operators";

//custom operators
function getJSON() {
  return switchMap(response => response.json());
}

function emitEach(d) {
  return pipe(
    mergeMap(response => {
      return of(...response);
    }),
    concatMap(response => {
      return of(response).pipe(delay(d));
    })
  );
}

//better
const userss = fromFetch("https://jsonplaceholder.typicode.com/users");

userss
  .pipe(
    getJSON(),
    emitEach(2000)
  )
  .subscribe(user => {
    add.li(user.name);
  });
