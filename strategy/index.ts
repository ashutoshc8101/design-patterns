/**
 * The Strategy Pattern deﬁnes a family of algorithms,
 * encapsulates each one, and makes them interchangeable.
 * Strategy lets the algorithm vary independently from
 * clients that use it.
 *
 * This design pattern advocates composition over inheritance.
 * Video lecture: https://www.youtube.com/watch?v=v9ejT8FO-7I&list=PLrhzvIcii6GNjpARdnO4ueTUAVR9eMBpc&index=1
 */

/**
 * @file File defines and implements strategy pattern.
 */

/**
 * Conventions
 * Inheritance: is-a
 * Composition: has-a
 */

/**
 * General implementation using inheritance.
 */

// class Vehicle {
//   numTires: number;
//   start(): void {
//     console.error('Not implemented');
//   }
// }

// class FourWheeler extends Vehicle {
//   numTires = 4;
// }

// class TwoWheeler extends Vehicle {
//   numTires = 2;
// }

// class Car extends FourWheeler {
//   start(): void {
//     // Alogrithm
//     // 1. Put the key in.
//     // 2. Press the clutch.
//     // 3. Put the gear to one.
//     // 4. Accelerate.
//   }
// }

// class AutoCar extends Car {
//   start(): void {
//     // Alogrithm
//     // 1. Put the key in.
//     // 2. Accelerate.
//   }
// }

// class Scooty extends TwoWheeler {
//   start(): void {
//     // Alogrithm
//     // 1. Put the key in.
//     // 2. Accelerate.
//   }
// }

// class MotorCycle extends TwoWheeler {
//   start(): void {
//     // Alogrithm
//     // 1. Put the key in.
//     // 2. Press the clutch.
//     // 3. Put the gear to one.
//     // 4. Accelerate.
//   }
// }

/**
 * The above example shows the issue with inheritance.
 * You cannot avoid duplicating code down the chain but cannot share common
 * code with classes on the same level in the heirarchy.
 * There is no way to only write the alogrithms once in this heirarchy.
 */

/**
 * Strategy patterns advocates to abstract the alogrithms, encalpsulate them and
 * isolate them from the caller.
 */

class Vehicle {
  numTires: number;
  transmission: Transmission;

  constructor(transmission: Transmission) {
    this.transmission = transmission;
  }

  start(): void {
    this.transmission.start();
  }
}

class FourWheeler extends Vehicle {
  numTires = 4;

  constructor(transmission: Transmission) {
    super(transmission);
  }
}

class TwoWheeler extends Vehicle {
  numTires = 2;

  constructor(transmission: Transmission) {
    super(transmission);
  }
}

interface Transmission {
  start: () => void
}

class ManualTransmission implements Transmission {
  start(): void {
    // Alogrithm
    // 1. Put the key in.
    console.log('Key in');
    // 2. Press the clutch.
    console.log('Clutch in');
    // 3. Put the gear to one.
    console.log('Gear 1');
    // 4. Accelerate.
    console.log('Accelerating');
  }
}

class AutoTransmission implements Transmission {
  start(): void {
    // Alogrithm
    // 1. Put the key in.
    console.log('Key in');
    // 2. Accelerate.
    console.log('Accelerating');
  }
}

const car = new FourWheeler(new ManualTransmission());
const autoCar = new FourWheeler(new AutoTransmission());
const motorCyle = new TwoWheeler(new ManualTransmission());
const scooty = new TwoWheeler(new AutoTransmission());

car.start();
autoCar.start();
motorCyle.start();
scooty.start();
