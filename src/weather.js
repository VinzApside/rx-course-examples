import {
    fromEvent,
    BehaviorSubject,
    Subject
} from "rxjs";
import {} from "rxjs/operators";
import {
    add
} from "./helpers";


//handles to our elements
const searchBox = document.getElementById('search');
const resultsBox = document.getElementById('results-container')

//event handlers
const searchEvent = fromEvent(searchBox, 'keyUp');
const resultsEvent = fromEvent(resultsBox, 'click');

//subjects
const inputSubject = new BehaviorSubject('');
const placeSubject = new Subject();
const weatherSubject = new Subject();