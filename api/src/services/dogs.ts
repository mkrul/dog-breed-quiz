import Dog, { DogType } from '../models/dog';

export async function fetchDogs(): Promise<DogType[]> {
  const dogs = await Dog.aggregate([{ $sample: { size: 5 } }]);

  return dogs as DogType[];
}
