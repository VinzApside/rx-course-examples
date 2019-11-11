import { fromEvent, BehaviorSubject, Subject, from, combineLatest } from "rxjs";
import {
  debounceTime,
  switchMap,
  tap,
  skip,
  pluck,
  skipWhile
} from "rxjs/operators";
import { add } from "./helpers";
import { ajax } from "rxjs/ajax";

const lastSearch = localStorage.getItem("lastSearch");
const firstTerm = lastSearch !== undefined ? lastSearch : undefined;

//handles to our elements
const searchBox = document.getElementById("search");
const resultsBox = document.getElementById("results-container");
const spinner = document.getElementById("spinner");

//event handlers
const searchEvent = fromEvent(searchBox, "keyUp");
const resultsEvent = fromEvent(resultsBox, "click");

//subjects
const inputSubject = new BehaviorSubject(firstTerm);
const placeSubject = new Subject();
const weatherSubject = new Subject();

const inputData = inputSubject
  .pipe(
    skipWhile(value => value === null || value.length < 3),
    tap(() => {
      spinner.className = "spinner";
      resultsBox.innerHTML = "";
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
    localStorage.setItem("lastSearch", searchBox.value);
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

const weatherData = placeSubject.pipe(
  // tap(place => {
  //   console.log(place);
  // }),
  pluck("geometry", "location"),
  switchMap(coords => {
    return ajax
      .getJSON(`http://localhost:3000/weather/${coords.lat}/${coords.lng}`)
      .pipe(pluck("currently"));
  })
);
// .subscribe(stream => {
//   console.log(stream);
// });

combineLatest(weatherData, placeSubject).subscribe(result => {
  const weather = result[0];
  const place = result[1];

  document.getElementById("image-container").innerHTML = "";

  if (place.photo !== undefined) {
    add.div(``);
  } else {
    add.div(
      `<div>
    <p>feel like : ${Math.round(weather.apparentTemperature)}&deg</p>
    <p>Current conditions: ${weather.summary}</p>
    <p>Chance of rain : ${weather.precipProbability}</p>
    </div>`
    );
  }
});
