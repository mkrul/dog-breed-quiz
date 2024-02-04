import { MongoClient } from 'mongodb';
import env from '../util/validateEnv'
import User from "../components/interfaces/user.interface";

async function createUser(user: User) {
  const uri = env.MONGO_URI;
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('user-data');
    const collection = database.collection('results');
    const result = await collection.insertOne(user);
    console.log('User created:', result.insertedId);
  } catch (error) {
    console.error('Error creating user:', error);
  } finally {
    await client.close();
  }
}

const newUser: User = {
  ipAddress: '',
  createdAt: new Date(),
  updatedAt: new Date(),
};

createUser(newUser);
