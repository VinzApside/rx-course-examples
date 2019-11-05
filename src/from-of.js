import { add } from "./helpers";
import { of, from, fromEvent } from "rxjs";

const submit = document.getElementById("submit");
const clicks = fromEvent(submit, "click").subscribe(event => {
  add.li("clicked !");
});

// of = for list
const numbers = of(1, 2, 3, 4).subscribe(add.li);

// from = for array
const fruits = from(["apples", "bananas", "oranges"]).subscribe(add.li);
