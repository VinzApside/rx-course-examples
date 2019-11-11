import {
    fromEvent,
    BehaviorSubject,
    Subject
} from "rxjs";
import {
    debounceTime,
    switchMap
} from "rxjs/operators";
import {
    add
} from "./helpers";
import {
    ajax
} from "rxjs/ajax";


//handles to our elements
const searchBox = document.getElementById('search');
const resultsBox = document.getElementById('results-container');
const spinner = document.getElementById('spinner');

//event handlers
const searchEvent = fromEvent(searchBox, 'keyUp');
const resultsEvent = fromEvent(resultsBox, 'click');

//subjects
const inputSubject = new BehaviorSubject('');
const placeSubject = new Subject();
const weatherSubject = new Subject();

inputSubject.pipe(
    tap(
        () => {
            spinner.className = "spinner";
        }
    ),
    debounceTime(1000),
    switchMap(
        searchTerm => {
            return ajax.getJSON('http://localhost:300/autocomplente/${searchTerm}')
        }
    )
);