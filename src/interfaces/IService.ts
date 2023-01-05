export default interface IService<T> {
  read(): Promise <T[]>,
  create(obj:T): Promise <T>,
  readOne(_id: string): Promise <T>,
  update(_id: string, obj: T): Promise <T | null>,
  delete(_id: string): Promise <T | null>,
}
