import { interval } from "rxjs";

const body = document.querySelector("body");

const counter = interval(2000);

counter.subscribe(() => {
  const red = Math.random() * 255;
  const green = Math.random() * 255;
  const blue = Math.random() * 255;
  body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
});
