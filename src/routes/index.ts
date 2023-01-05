import { Router } from 'express';

import CarModel from '../models/carModel';
import CarService from '../services/carService';
import CarController from '../controllers/carController';

import MotorcycleModel from '../models/motorcycleModel';
import MotorcycleService from '../services/motorcycleService';
import MotorcycleController from '../controllers/motorcycleController';

const routes = Router();

const carController = new CarController(new CarService(new CarModel()));

routes.get('/cars', (request, response) => carController.read(request, response));
routes.post('/cars', (request, response) => carController.create(request, response));
routes.get('/cars/:id', (request, response) => carController.readOne(request, response));
routes.put('/cars/:id', (request, response) => carController.update(request, response));
routes.delete('/cars/:id', (request, response) => carController.delete(request, response));

const MCL = '/motorcycles';
const motorcycleController = new MotorcycleController(new MotorcycleService(new MotorcycleModel()));

routes.get(MCL, (request, response) => motorcycleController.read(request, response));
routes.post(MCL, (request, response) => motorcycleController.create(request, response));
routes.get(`${MCL}/:id`, (request, response) => motorcycleController.readOne(request, response));
routes.put(`${MCL}/:id`, (request, response) => motorcycleController.update(request, response));
routes.delete(`${MCL}/:id`, (request, response) => motorcycleController.delete(request, response));

export default routes;
