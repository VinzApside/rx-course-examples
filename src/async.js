import { add } from "./helpers";
import { Observable } from "rxjs";

const o = new Observable(observer => {
  setTimeout(() => {
    observer.next("We are complete observable !");
  }, 1000);
});

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("We are complete promise !");
  }, 5000);
});

//Promise
p.then(message => {
  add.li(message);
});

//Observable
o.subscribe(message => add.li(message));
