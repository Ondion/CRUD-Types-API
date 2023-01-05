import IService from '../interfaces/IService';
import { IMotorcycle, MotorcycleZodSchema } from '../interfaces/IMotorcycle';
import { ErrorTypes } from '../routes/getError';
import { IModel } from '../interfaces/IModel';

class MotorcyclesService implements IService <IMotorcycle> { 
  private _motorcycles: IModel <IMotorcycle>;

  constructor(model: IModel <IMotorcycle>) {
    this._motorcycles = model;
  }

  public async create(obj: IMotorcycle): Promise <IMotorcycle> {
    const parsed = MotorcycleZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    return this._motorcycles.create(obj);
  }

  public async readOne(_id: string): Promise <IMotorcycle> {
    const DB = await this._motorcycles.readOne(_id);
    if (!DB) throw new Error(ErrorTypes.EntityNotFound);
    return DB;
  }

  public async read(): Promise <IMotorcycle[]> {
    return this._motorcycles.read();
  }

  public async update(_id: string, obj: IMotorcycle): Promise <IMotorcycle | null> {
    const parsed = MotorcycleZodSchema.safeParse(obj);
    if (!parsed.success) throw parsed.error;
    await this.readOne(_id);
    return this._motorcycles.update(_id, obj);
  }

  public async delete(_id:string):Promise<IMotorcycle | null> {
    await this.readOne(_id);
    return this._motorcycles.delete(_id);
  }
}

export default MotorcyclesService;
