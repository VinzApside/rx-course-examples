import { add } from "./helpers";

add.li("line 3");

async function runPromise() {
  add.li("line 6");
  const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("We are complete !");
    }, 5000);
  });
  const message = await p;
  add.li("line 13 ");
}
runPromise();

add.li("line 17");
