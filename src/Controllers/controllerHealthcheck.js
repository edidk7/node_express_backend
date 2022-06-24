const { request, response } = require('express');

const controllerHealthcheck = (req = request, res = response) => {
  try {
    res.status(200).send();
  } catch (error) {
    console.log(error);
    res.status(500).send('Server Error');
  }
};

module.exports = {
  controllerHealthcheck,
};
