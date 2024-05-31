const { MongoClient } = require('mongodb');
const dotenv = require('dotenv');

dotenv.config();

const uri = 'mongodb://localhost';

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

    const products = [
      {
        name: 'Smartphone',
        price: 699,
        status: 'in stock',
        quantity: 100,
        reviews: [
          {
            rating: 5,
            comment: 'Great phone!',
            date: new Date(),
          },
        ],
      },
      {
        name: 'Novel',
        price: 19.99,
        description: 'A best-selling novel',
        status: 'in stock',
        quantity: 50,
        reviews: [
          {
            rating: 4,
            comment: 'Interesting read',
            date: new Date(),
          },
        ],
      },
      {
        name: 'T-Shirt',
        price: 9.99,
        description: 'Comfortable cotton t-shirt',
        status: 'in stock',
        quantity: 200,
        reviews: [
          {
            rating: 4,
            comment: 'Good quality',
            date: new Date(),
          },
        ],
      },
    ];

    const result = await productsCollection.insertMany(products);
    console.log(`${result.insertedCount} products inserted.`);
  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await client.close();
  }
}

seedDatabase();
