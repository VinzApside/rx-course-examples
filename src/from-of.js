import { add } from "./helpers";
import { of, from, fromEvent } from "rxjs";
import { fromFetch } from "rxjs/fetch";
import { switchMap } from "rxjs/operators";

// fromEvent waiting for an event
const submit = document.getElementById("submit");
const clicks = fromEvent(submit, "click").subscribe(event => {
  add.li("clicked !");
});

// of = for list
const numbers = of(1, 2, 3, 4).subscribe(add.li);

// from = for array
const fruits = from(["apples", "bananas", "oranges"]).subscribe(add.li);

const users = fromFetch("https://jsonplaceholder.typicode.com/users")
  .pipe(
    switchMap(response => {
      console.log(response);
      return response.json();
    })
  )
  .subscribe(result => {
    result.forEach(user => {
      add.li(user.name);
    });
  });
