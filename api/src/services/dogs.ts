import Dog, { DogType } from '../models/dog';

export async function fetchDogs(): Promise<DogType[]> {
  // const dogs = await Dog.aggregate([{ $sample: { size: 50 } }]);
  // get all 335 dogs
  // const dogs = await Dog.find({});
  // get all dogs after 165
  const dogs = await Dog.find({}).skip(310);

  return dogs as DogType[];
}
