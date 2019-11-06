import { add } from "./helpers";

import { Subject, Observable } from "rxjs";
import {} from "rxjs/operators";

//hot || multicast

const sub = new Subject(); //subject is an observable and an observer

setTimeout(() => {
  sub.subscribe(x => add.li("S: " + x));
}, 1000);

setTimeout(() => {
  sub.subscribe(x => add.li("S: " + x));
}, 2001);

setTimeout(() => {
  sub.subscribe(x => add.li("S: " + x));
}, 3001);

// //show only one
// setTimeout(() => {
//   sub.next(new Date());
// }, 1000);

//show the three but all the same
setTimeout(() => {
  sub.next(new Date());
}, 3002);

// //cold Unicast

// const obs = new Observable(sub => sub.next(new Date()));

// setTimeout(() => {
//   obs.subscribe(add.li);
// }, 1000);

// setTimeout(() => {
//   obs.subscribe(add.li);
// }, 2001);

// setTimeout(() => {
//   obs.subscribe(add.li);
// }, 3001);
