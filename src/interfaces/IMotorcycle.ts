import { z } from 'zod';
import { VehicleZodSchema } from './IVehicle';

const MotorcycleZodSchema = z.object({
  category: z.enum(['Street', 'Custom', 'Trail']),
  engineCapacity: z.number().gte(1).lte(2500),
}).merge(VehicleZodSchema);

export type IMotorcycle = z.infer<typeof MotorcycleZodSchema>;
export { MotorcycleZodSchema };
