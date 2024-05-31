const { MongoClient } = require('mongodb');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../../.env') });
const { faker } = require('@faker-js/faker');

const uri = process.env.DATABASE_URL;

if (!uri) {
  console.error('DATABASE_URL environment variable is not set.');
  process.exit(1);
}

async function seedDatabase() {
  const client = new MongoClient(uri, {});

  try {
    await client.connect();
    const database = client.db('penny-task');
    const productsCollection = database.collection('products');
    const products = [];
    const status = ['in stock', 'out of stock'];
    for (let i = 1; i <= 100; i++) {
      products.push({
        name: faker.commerce.productName(),
        price: faker.commerce.price({ min: 50, max: 200, dec: 0 }),
        status: status[Math.floor(Math.random() * status.length)],
        quantity: faker.commerce.price({ min: 100, max: 500, dec: 0 }),
        reviews: [
          {
            rating: faker.commerce.price({ min: 0, max: 5 }),
            comment: 'Great product',
            date: new Date(),
          },
        ],
      });
    }

    const result = await productsCollection.insertMany(products);
    console.log(`${result.insertedCount} products inserted.`);
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}
seedDatabase();
