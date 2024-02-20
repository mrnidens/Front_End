type Engine = "electric" | "petrol" | "diesel";

interface Car {
    brand: string,
    engine: Engine,
    power: number;
}

interface FirefighterCar extends Car {
    waterTank: number;
}
const engine1: Engine = "petrol";
const engine2: Engine = "diesel";

const car1: Car = {
    brand: "BMW",
    engine: engine1,
    power: 249
}

const firefighter : FirefighterCar = {
    brand: "Volvo",
    engine: engine2,
    power: 350,
    waterTank: 3000
}