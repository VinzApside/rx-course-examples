import { add } from "./helpers";

import { scan, reduce, take, concatMap } from "rxjs/operators";

import { interval, from } from "rxjs";

//create finobacci sequence show each sequence
// const FS = interval(1000)
//   .pipe(
//     take(10),
//     scan(
//       (acc, value) => {
//         const n = value + 1;
//         const last = acc[n];
//         const beforeLast = acc[n - 1];
//         return [...acc, last + beforeLast];
//       },
//       [0, 1]
//     )
//   )
//   .subscribe(add.li);

//create finobacci sequence show final sequence only
const FS = interval(1000)
  .pipe(
    take(20),
    reduce(
      (acc, value) => {
        const n = value + 1;
        const last = acc[n];
        const beforeLast = acc[n - 1];
        return [...acc, last + beforeLast];
      },
      [0, 1]
    )
  )
  .subscribe(add.li);