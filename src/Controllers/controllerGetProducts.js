const { request, response } = require('express');
const { moduleGetProducts } = require('../Modules/moduleGetProducts');
const controllerGetProducts = async (req = request, res = response) => {
  try {
    const result = await moduleGetProducts();
    if (!result) {
      res.status(500).json({ message: 'Service Error' });
    }
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  controllerGetProducts,
};
