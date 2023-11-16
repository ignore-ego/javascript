//  syntactical sugar
// js nu are clase
class Car {
  // notatia 1
  topSpeed = 160;
  topReverseSpeed = -50;
  isTrunkOpen = false;
  areLightsOn = false;
  constructor(make, color, wheels, speed) {
    this.make = make;
    this.color = color;
    this.speed = speed;
    this.wheels = wheels;
  }

  accelerate() {
    this.speed++;
  }

  decelerate() {
    this.speed--;
  }

  stop() {
    this.speed = 0;

    console.log(`Viteza noua este ${this.speed}.`);
  }

  setSpeed(speed) {
    if (speed > this.topSpeed) {
      speed = this.topSpeed;
    }
    if (speed < this.topReverseSpeed) {
      speed = this.topReverseSpeed;
    }

    this.speed = speed;
  }

  openTrunk() {
    this.isTrunkOpen = true;
  }

  closeTrunk() {
    this.isTrunkOpen = false;
  }

  turnLightsOn() {
    this.areLightsOn = true;
  }

  turnLightsOff() {
    this.areLightsOn = false;
  }

  flashLights() {
    this.turnLightsOn();
    window.setTimeout(function () {
      this.turnLightsOff(), 1000;
    });
  }
}

const audi = new Car('Audi', 'black', 4, 50);

const opel = new Car('Opel', 'red', 4, 3);

const cars = [audi, opel];

// sa vedem bucla pe tema

cars.forEach(function (car) {
  cars.speed = -5;

  console.log(`Viteza noua este ${car.speed} km/h.`);
});
