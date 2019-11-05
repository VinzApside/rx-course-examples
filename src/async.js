import { add } from "./helpers";
import { Observable } from "rxjs";

const o = new Observable(observer => {
  setInterval(() => {
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
const subscription = o.subscribe({
  next: message => {
    add.li(message);
  },
  error: error => console.log(error),
  complete: () => add.li("complete")
});

setTimeout(() => {
  subscription.unsubscribe();
}, 3000);
