import { add } from "./helpers";

import { from } from "rxjs";

import { fromFetch } from "rxjs/fetch";

import { switchMap } from "rxjs/operators";

// // before
// const getUsers = fetch("https://jsonplaceholder.typicode.com/users");

// const users = from(getUsers);

// users.pipe(switchMap(response => response.json())).subscribe(users => {
//   users.forEach(user => {
//     add.li(user.name);
//   });
// });

const userss = fromFetch("https://jsonplaceholder.typicode.com/users");

userss.pipe(switchMap(response => response.json())).subscribe(users => {
  users.forEach(user => {
    add.li(user.name);
  });
});
