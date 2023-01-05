import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

export default class CarController {
  constructor(private _service: IService <ICar>) {}

  public async create(request: Request & { body: ICar }, response: Response <ICar>) {
    const { model, year, color, buyValue, seatsQty, doorsQty } = request.body;
    const object = { model, year, color, buyValue, seatsQty, doorsQty };
    const DB = await this._service.create(object);
    return response.status(201).json(DB);
  }

  public async readOne(request: Request, response: Response <ICar>) {
    const DB = await this._service.readOne(request.params.id);
    return response.status(200).json(DB);
  }

  public async read(_request: Request, response: Response <ICar[]>) {
    const DB = await this._service.read();
    return response.status(200).json(DB);
  }

  public async update(request: Request, response: Response <ICar | null>) {
    const DB = await this._service.update(request.params.id, request.body);
    return response.status(200).json(DB);
  }

  public async delete(request: Request, response: Response <ICar | null>) {
    const DB = await this._service.delete(request.params.id);
    return response.status(204).json(DB);
  }
}
