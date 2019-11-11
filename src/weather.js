import { fromEvent, BehaviorSubject, Subject, from } from "rxjs";
import { debounceTime, switchMap, tap, skip } from "rxjs/operators";
import { add } from "./helpers";
import { ajax } from "rxjs/ajax";

//handles to our elements
const searchBox = document.getElementById("search");
const resultsBox = document.getElementById("results-container");
const spinner = document.getElementById("spinner");

//event handlers
const searchEvent = fromEvent(searchBox, "keyUp");
const resultsEvent = fromEvent(resultsBox, "click");

//subjects
const inputSubject = new BehaviorSubject("");
const placeSubject = new Subject();
const weatherSubject = new Subject();

inputSubject
  .pipe(
    skip(1),
    tap(() => {
      spinner.className = "spinner";
      console.log("+++");
    }),
    debounceTime(1000),
    switchMap(searchTerm => {
      return ajax
        .getJSON(`http://localhost:3000/autocomplete/${searchTerm}`)
        .pipe(
          tap(() => {
            spinner.className = "";
          }),
          switchMap(results => {
            return from(results);
          })
        );
    })
  )
  .subscribe(result => {
    add.result(result.description, result.place_id);
  });

searchEvent.subscribe(event => {
  inputSubject.next(searchBox.value);
});
