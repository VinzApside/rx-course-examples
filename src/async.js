import { add } from "./helpers";

add.li("line 3");

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("We are complete !");
  }, 5000);
});

p.then(message => add.li(message));

add.li("line 12");
