import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { IMotorcycle } from '../interfaces/IMotorcycle';

export default class MotorcycleController {
  constructor(private _service: IService <IMotorcycle>) {}

  public async create(request: Request & { body: IMotorcycle }, response: Response <IMotorcycle>) {
    const { model, year, color, buyValue, category, engineCapacity } = request.body;
    const object = { model, year, color, buyValue, category, engineCapacity };
    const DB = await this._service.create(object);
    return response.status(201).json(DB);
  }

  public async readOne(request: Request, response: Response <IMotorcycle>) {
    const DB = await this._service.readOne(request.params.id);
    return response.status(200).json(DB);
  }

  public async read(_request: Request, response: Response <IMotorcycle[]>) {
    const DB = await this._service.read();
    return response.status(200).json(DB);
  }

  public async update(request: Request, response: Response <IMotorcycle | null>) {
    const DB = await this._service.update(request.params.id, request.body);
    return response.status(200).json(DB);
  }

  public async delete(request: Request, response: Response <IMotorcycle | null>) {
    const DB = await this._service.delete(request.params.id);
    return response.status(204).json(DB);
  }
}
