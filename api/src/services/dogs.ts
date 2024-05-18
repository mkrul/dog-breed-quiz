import Dog, { DogType } from '../models/dog';

export async function fetchDogs(): Promise<DogType[]> {
  const dogs = await Dog.aggregate([{ $sample: { size: 60 } }]);
  return dogs as DogType[];
}
