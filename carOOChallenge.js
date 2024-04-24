class Vehicle {
    constructor(make, model, year) { this.make = make, this.model = model, this.year = year; }

    honk() {
        return 'Beep.'
    }
    toString() {
        return `This vehichle is ${this.make} make, ${this.model}, ${this.year}`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 4
    }

}

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year)
        this.numWheels = 2
    }
    revEngine() {
        return 'VROOM!!!!'
    }
}

class Garage {
    constructor(capacity) {
        this.capacity = capacity
        this.listOfVehichles = ['car', 'motorcycle']
        this.vehichles = []
    }
    add(vehicle) {
        if (!(vehicle instanceof Vehicle)) {
            return 'Only vehicles are allowed in here!'
        }
        if (this.vehichles.length === this.capacity) {
            return 'no more vehicles we are full'
        }
        this.vehichles.push(vehicle)
        console.log(this.vehichles)
        return `vehicle added`


    }
}

let garage = new Garage(2);
