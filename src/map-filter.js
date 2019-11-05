import {
  add
} from "./helpers";

import {
  interval
} from 'rxjs';

// import {
//   fromEventPattern
// } from '../node_modules/rxjs'

import {
  map,
  filter,
  take
} from 'rxjs/operators'

const numbers = ['one', "two", "three", "four"];

const counter$ = interval(1000).pipe(take(4));

counter$.pipe(filter((value) => {
  return value % 2 === 0
})).subscribe(add.li)


/*les deux code dessous ne donne pas le même ordre car ordre different*/
const otherCounter$ = interval(1000);
// otherCounter$.pipe(filter((value) => {
//   return value % 2 === 0
// }), (take(4))).subscribe(add.li)

// otherCounter$.pipe((take(4)), filter((value) => {
//   return value % 2 === 0
// })).subscribe(add.li)