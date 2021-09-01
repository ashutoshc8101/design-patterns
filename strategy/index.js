/**
 * The Strategy Pattern deﬁnes a family of algorithms,
 * encapsulates each one, and makes them interchangeable.
 * Strategy lets the algorithm vary independently from
 * clients that use it.
 *
 * This design pattern advocates composition over inheritance.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Vehicle = /** @class */ (function () {
    function Vehicle(transmission) {
        this.transmission = transmission;
    }
    Vehicle.prototype.start = function () {
        this.transmission.start();
    };
    return Vehicle;
}());
var FourWheeler = /** @class */ (function (_super) {
    __extends(FourWheeler, _super);
    function FourWheeler(transmission) {
        var _this = _super.call(this, transmission) || this;
        _this.numTires = 4;
        return _this;
    }
    return FourWheeler;
}(Vehicle));
var TwoWheeler = /** @class */ (function (_super) {
    __extends(TwoWheeler, _super);
    function TwoWheeler(transmission) {
        var _this = _super.call(this, transmission) || this;
        _this.numTires = 2;
        return _this;
    }
    return TwoWheeler;
}(Vehicle));
var ManualTransmission = /** @class */ (function () {
    function ManualTransmission() {
    }
    ManualTransmission.prototype.start = function () {
        // Alogrithm
        // 1. Put the key in.
        console.log('Key in');
        // 2. Press the clutch.
        console.log('Clutch in');
        // 3. Put the gear to one.
        console.log('Gear 1');
        // 4. Accelerate.
        console.log('Accelerating');
    };
    return ManualTransmission;
}());
var AutoTransmission = /** @class */ (function () {
    function AutoTransmission() {
    }
    AutoTransmission.prototype.start = function () {
        // Alogrithm
        // 1. Put the key in.
        console.log('Key in');
        // 2. Accelerate.
        console.log('Accelerating');
    };
    return AutoTransmission;
}());
var car = new FourWheeler(new ManualTransmission());
var autoCar = new FourWheeler(new AutoTransmission());
var motorCyle = new TwoWheeler(new ManualTransmission());
var scooty = new TwoWheeler(new AutoTransmission());
car.start();
autoCar.start();
motorCyle.start();
scooty.start();
