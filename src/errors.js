import { add } from "./helpers";

import { fromFetch } from "rxjs/fetch";
import { switchMap, catchError } from "rxjs/operators";
import { of, pipe, EMPTY, throwError } from "rxjs";

function checkStatus() {
  return switchMap(response => {
    return response.status === 400 ? throwError() : of("Looks good");
  });
}

// const users = fromFetch("https://httpbin.org/status/200")
const users = fromFetch("https://httpbin.org/status/400")
  .pipe(
    checkStatus(),
    catchError(err => {
      return EMPTY;
    })
  )
  .subscribe(
    response => {
      console.log(response);
    },
    error => {
      console.log(error);
    }
  );
