import { add } from "./helpers";

add.li("line 3");

function callback(message) {
  add.li(message);
}
callback("hi");

function greeting(message, cb) {
  let start = Date.now();
  for (let i = 0; i < 10000000000; i++) {
    //do nothing
  }
  add.li(`took: ${Date.now() - start} ms`);
  cb(message);
}
greeting("hello from here", callback);

add.li("line 5");
