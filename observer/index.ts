/**
 * Observer pattern.
 *
 * Publisher + Subscriber = Observer Pattern.
 * If you understand the newspaper subscriptions, you pretty much understand the
 * observer pattern. We call the publisher the SUBJECT and the subscriber the
 * OBSERVERS.
 * This is example of push system.
 *
 * Video link: https://www.youtube.com/watch?v=_BpmfnqjgzQ&t=4s
 */

/**
 * @file Notes and implementation for observer pattern.
 */

/**
 * Pull system:
 *
 * Example: We make a function call every second to check whether the value has
 * changed.
 *
 * Push system:
 * We push the notification when the value is changed. This avoids unneccessary
 * polling. Need to know the subscribers.
 * one (SUBJECT) to many (SUBSCRIBERS) relationship.
 */

/**
 * Defination: The observer pattern defnies one to many depedency between
 * objects so that when one object changes, all of its depended objects are
 * notified and updated automatically.
 *
 * Loose Coupling:
 * The SUBJECT and Observers are loosly coupled in this pattern.
 *
 * The power of loose coupling:
 * When two objects are loosly coupled, they can interact, but have very little
 * knowledge of each other.
 *
 * How coupling is loose with observer pattern?
 * 1. The only thing, SUBJECT knows about the observers is that they implement
 * the Observer interface and have no nothing knowledge of inner implementation
 * of observer. (vice-versa)
 *
 * 2. The subjects and observers are interchangable.
 *
 * Design Principle: Strive for loosly coupled designs between object that
 * interacts.
 *
 * Loosly coupled designs allow to build flexible object oriented systems that
 * can handle change because they minimize the interdependence between objects.
 *
 */

/**
 * Example
 *
 * 1. Bad implementation (Pooling)
 */

// class WhetherStation {
//   private _temperature: number;

//   constructor(temperature: number) {
//     this._temperature = temperature;
//     setInterval(() => {
//       this._temperature++;
//     }, 2000);
//   }

//   get temperature(): number {
//     return this._temperature;
//   }
// }

// class WhetherApp {
//   temperature: number;
//   whetherStation: WhetherStation;

//   constructor(whetherStation: WhetherStation) {
//     this.whetherStation = whetherStation;
//   }

//   fetchTemperature(): number {
//     return this.whetherStation.temperature;
//   }

//   showTemperature(): void {
//     setInterval(() => {
//       if (!this.temperature ||
//         (this.temperature !== this.fetchTemperature())) {
//         this.temperature = this.fetchTemperature();
//         console.log('Temperature Updated : ' + this.temperature);
//       }
//     }, 100);
//   }
// }

// const whetherStation = new WhetherStation(20);
// const whetherApp = new WhetherApp(whetherStation);

// whetherApp.showTemperature();

/**
 * Issues with above design:
 * 1. Pooling (with pull system, we are asking unneccessary for temperature
 * even it is unchanged). This results in unnecssarly calls and increase load
 * on api servers.
 *
 * 2. Tight coupling: The whether app needs to know the api of whether station
 * and internal implementation. This can cause issues while making changes to
 * implmentation to either one of them as they are interdependent.
 *
 */

/**
 * Observer Pattern
 */

interface Subject<T> {
  registerObserver: (observer: Observer<T>) => void;
  removeObserver: (observer: Observer<T>) => void;
  notifyObservers: () => void;
  getState: () => T;
}

interface Observer<T> {
  update: () => void
  subject: Subject<T>;
  // Other approach would be (T) => void, but that will enfore sending updated
  // state to observers which don't need it.
}

class WhetherStation implements Subject<number> {
  private _temperature: number;
  // List of observers currently subscribed.
  private _observers: Observer<number>[];

  constructor(temperature: number) {
    this._temperature = temperature;
    this._observers = [];
    // Start the mock temperature updation process.
    this.updateTemperaturePeriodically();
  }

  getState(): number {
    return this._temperature;
  }

  updateTemperaturePeriodically(): void {
    setInterval(() => {
      this._temperature++;
      this.notifyObservers();
    }, 2000);
  }

  registerObserver(observer: Observer<number>): void {
    observer.subject = this;
    this._observers.push(observer);
  }

  removeObserver(observerToRemove: Observer<number>): void {
    this._observers.filter((observer) => observer !== observerToRemove);
  }

  notifyObservers(): void {
    this._observers.forEach((observer) => observer.update());
  }
}

class WhetherApp implements Observer<number> {
  subject: Subject<number>;

  update(): void {
    this.updateView();
  }

  updateView(): void {
    console.log('Temperature Updated : ' + this.subject.getState());
  }
}

const weatherStation = new WhetherStation(20);
const weatherApp = new WhetherApp();
weatherStation.registerObserver(weatherApp);

/**
 * Both problems are fixed with this pattern.
 * 1. There is no unneccessary pooling. No extra load on api.
 * 2. Loose coupling, the subject and observer have only knowledge of the
 * interfaces that they implement. Changes can be made easily as they are
 * less inter dependent.
 */
