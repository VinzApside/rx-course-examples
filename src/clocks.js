import { add, update, buildArray, Clock, moveTime } from "./helpers";
import { of, from, interval, range } from "rxjs";
import { map } from "rxjs/operators";

const clock = new Clock("chart");

const seconds = buildArray(60);
