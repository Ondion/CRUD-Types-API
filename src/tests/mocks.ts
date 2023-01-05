import { ICar } from '../interfaces/ICar';
import { IMotorcycle } from "../interfaces/IMotorcycle";

const carXample: ICar = {
  model: "Ferrari Maranello",
  year: 1963,
  color: "red",
  buyValue: 3500000,
  seatsQty: 2,
  doorsQty: 2
};

const carXampleId: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Fiat Uno',
  year: 2002,
  color: 'White',
  buyValue: 10000,
  doorsQty: 4,
  seatsQty: 4,
};

const carXampleValue: ICar = {
  model: 'Fiat Uno 1.4',
  year: 2005,
  color: 'Black',
  buyValue: 20000,
  doorsQty: 4,
  seatsQty: 4,
  status: true,
};

const carIdValue: ICar & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  model: 'Fiat Uno 1.4',
  year: 2005,
  color: 'Black',
  buyValue: 20000,
  doorsQty: 4,
  seatsQty: 4,
  status: true,
};

const carsXamples: ICar[] & { _id: string }[] = [
  {
    _id: "4edd40c86762e0fb12000003",
    model: "Ferrari Maranello",
    year: 1963,
    color: "red",
    buyValue: 3500000,
    seatsQty: 2,
    doorsQty: 2
  },
  {
    _id: "62cf1fc6498565d94eba52cd",
    model: 'Fiat Uno 1.4',
    year: 2005,
    color: 'Black',
    buyValue: 20000,
    doorsQty: 4,
    seatsQty: 4
  }
];

const motorcycleXamples: IMotorcycle = {
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}

const motorcycleXamplesII: IMotorcycle & { _id: string } = {
  _id: "4edd40c86762e0fb12000003",
  model: "Honda CG Titan 125",
  year: 1963,
  color: "red",
  buyValue: 3500,
  category: "Street",
  engineCapacity: 125
}

const motorcycleXamplesIII: IMotorcycle[] = [
  {
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  },
  {
    model: "Honda CG Titan 125",
    year: 1963,
    color: "red",
    buyValue: 3500,
    category: "Street",
    engineCapacity: 125
  }
] 

export {
  carXample,
  carXampleId,
  carXampleValue,
  carIdValue,
  carsXamples,
  motorcycleXamples,
  motorcycleXamplesII,
  motorcycleXamplesIII,
};
