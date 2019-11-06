import { add } from "./helpers";

import { fromFetch } from "rxjs/fetch";

import { of, pipe } from "rxjs";

import { switchMap, mergeMap, concatMap, delay, retry } from "rxjs/operators";
import { ajax } from "rxjs/ajax";

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

//an ohter way
const users = ajax
  .getJSON("https://jsonplaceholder.typicode.com/users")
  .pipe(retry(3))
  .subscribe(response => {
    response.forEach(user => add.li(user.name));
  });
