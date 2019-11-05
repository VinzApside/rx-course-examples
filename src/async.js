import { add } from "./helpers";
import { Observable } from "rxjs";

const o = new Observable(observer => {
  setTimeout(() => {
    observer.next("We are complete observable !");
    observer.next("We are complete observable !");
    observer.complete();
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
o.subscribe({
  next: message => {
    add.li(message);
  },
  error: error => console.log(error),
  complete: () => add.li("complete")
});
