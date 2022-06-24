const { request, response } = require('express');
const { moduleGetProduct } = require('../Modules/moduleGetProduct');
const controllerGetProduct = async (req = request, res = response) => {
  try {
    const { id } = req.params;
    const result = await moduleGetProduct(parseInt(id));

    if (!result) {
      res.status(404).json({ mesaje: 'product not available' });
    }

    res.status(200).json(result);

    res.send();
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  controllerGetProduct,
};
