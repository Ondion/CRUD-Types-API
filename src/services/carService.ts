import IService from '../interfaces/IService';
import { ICar, CarZodSchema } from '../interfaces/ICar';
import { IModel } from '../interfaces/IModel';
import { ErrorTypes } from '../routes/getError';

class CarService implements IService <ICar> { 
  private _car: IModel <ICar>;

  constructor(model: IModel <ICar>) {
    this._car = model;
  }

  public async create(obj: ICar): Promise <ICar> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._car.create(obj);
  }

  public async readOne(_id: string): Promise <ICar> {
    const DB = await this._car.readOne(_id);
    if (!DB) throw new Error(ErrorTypes.EntityNotFound);
    return DB;
  }

  public async read(): Promise <ICar[]> {
    return this._car.read();
  }

  public async update(_id: string, obj: ICar): Promise <ICar | null> {
    const parsed = CarZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    await this.readOne(_id);
    return this._car.update(_id, obj);
  }

  public async delete(_id: string): Promise <ICar | null> {
    await this.readOne(_id);
    return this._car.delete(_id);
  }
}

export default CarService;
