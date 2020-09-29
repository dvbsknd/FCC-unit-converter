'use strict';

const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {

  const convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get((req, res) => {
      const input = req.query.input;
      const initNum = convertHandler.getNum(input);
      const initUnit = convertHandler.getUnit(input);
      const returnUnit = convertHandler.getReturnUnit(initUnit);
      const returnNum = convertHandler.convert(initNum, initUnit);
      const toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      if (!initNum && initUnit) res.json({ error: 'Invalid number' });
      if (initNum && !initUnit) res.json({ error: 'Invalid unit' });
      if (!initUnit && !initNum) res.json({ error: 'Invalid number and unit' });
      else res.json({ initNum, initUnit, returnNum, returnUnit, string: toString });
    });

};
