const path = require('path');
const fsPromises = require('fs/promises');

const serviceFileProducts = async () => {
  try {
    const filePath = path.resolve(__dirname, '../../__mock__/products.json');

    const data = await fsPromises.readFile(filePath);
    const { products } = JSON.parse(data);

    return products;
  } catch (error) {
    return new Error(error);
  }
};

module.exports = {
  serviceFileProducts,
};
