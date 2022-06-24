const { serviceFileProducts } = require('../Services/serviceFileProducts');
const moduleGetProducts = async () => {
  try {

    const result= await serviceFileProducts();
    return result
  } catch (error) {
   throw error
  }
};

module.exports = { moduleGetProducts };
