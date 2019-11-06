import { add } from "./helpers";

import { take, map } from "rxjs/operators";

import { interval, concat, fromEvent } from "rxjs";

const button = document.getElementById("submit");
const streamOne = interval(1000).pipe(take(10));
const streamTwo = fromEvent(button, "click").pipe(map(e => "clicked"));

//nothing interrupt streamOne until it completed
concat(streamOne, streamTwo).subscribe(add.li);
