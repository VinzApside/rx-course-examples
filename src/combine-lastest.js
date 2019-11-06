import { add } from "./helpers";

import { take, map } from "rxjs/operators";

import { interval, combineLatest, fromEvent } from "rxjs";

const button = document.getElementById("submit");
const streamOne = interval(1000).pipe(take(10));
const streamTwo = fromEvent(button, "click").pipe(map(e => "clicked"));

const streamThree = interval(10).pipe(take(50));
const streamFour = interval(2500).pipe(take(3));

//wait for all value (so click is needed)
combineLatest(streamOne, streamTwo, streamThree, streamFour).subscribe(add.li);
