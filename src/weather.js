import { fromEvent, BehaviorSubject, Subject, from } from "rxjs";
import { debounceTime, switchMap, tap, skip, pluck } from "rxjs/operators";
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

const inputData = inputSubject
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

const placeData = resultsEvent
  .pipe(
    switchMap(ev => {
      const id = ev.target.getAttribute("data");
      return ajax.getJSON(`http://localhost:3000/place/${id}`);
    })
  )
  .subscribe(place => {
    console.log(place);
    placeSubject.next(place);
  });

const weathData = placeSubject
  .pipe(
    tap(place => {
      console.log(place);
    }),
    pluck("geometry", "location"),
    switchMap(coords => {
      return ajax
        .getJSON(`http://localhost:3000/weather/${coords.lat}/${coords.lng}`)
        .pipe(pluck("currently"));
    })
  )
  .subscribe(stream => {
    console.log(stream);
  });
