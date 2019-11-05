import { add } from "./helpers";

import { debounce } from "rxjs/operators";

import { interval, fromEvent } from "rxjs";

const inputBox = document.getElementById("input");
const renderBox = document.getElementById("display-content");

const submitButton = document.getElementById("submit");

const content = fromEvent(inputBox, "keyup");

const submit = fromEvent(submitButton, "click");

content.pipe(debounce(() => interval(1000))).subscribe(() => {
  renderBox.innerHTML = inputBox.value;
});

content.pipe(debounce(() => submit)).subscribe(() => {
  renderBox.innerHTML = inputBox.value;
});
