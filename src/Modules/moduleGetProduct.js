const { serviceFileProducts } = require('../Services/serviceFileProducts');
const moduleGetProduct = async (id) => {
  try {
    const products = await serviceFileProducts();
    return (result = products.filter((product) => product.id === id)[0]);
  } catch (error) {
    throw error;
  }
};
module.exports = { moduleGetProduct };
