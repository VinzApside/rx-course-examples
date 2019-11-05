import { add } from "./helpers";

// function Observable(subscriber) {
//   subscriber.next("Hello universe");
// }

const observer = {
  next: add.li,
  error: add.li,
  complete: () => {
    add.li("There are no more values!");
  }
};

// Observable(observer);

class Observable {
  constructor(subscribeTo) {
    this.subscribeTo = subscribeTo;
  }

  subscribe(observer) {
    return this.subscribeTo(observer);
  }
}

const producer = new Observable(subscribe => {
  subscribe.next("Hello from the observable class");
  subscribe.complete();
  subscribe.next("something I forgot");
});

producer.subscribe(observer);
