import { add } from "./helpers";
import { range, of } from "rxjs";
import { delay, concatMap } from "rxjs/operators";

const numbers = range(50, 100);

numbers.subscribe(add.li);
