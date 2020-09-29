function ConvertHandler () {
  
  const re = /^(\d+\.?\d*\/?\d*)([a-zA-Z]+)/;
  const units = {
    'gal': ['L', 'gallons', 3.78541],
    'lbs': ['kg', 'pounds', 0.453592],
    'mi': ['km', 'miles', 1.60934],
    'L': ['gal', 'litres', 1/1.60934],
    'kg': ['lbs', 'kilograms', 1/0.453592],
    'km': ['mi', 'kilometres', 1/1.60934],
  }

  const validUnit = (unit) => Object.keys(units).indexOf(unit) >= 0;
  const validNumber = (number) => typeof number === 'number';

  this.getNum = (input) =>  {
    // Should return only the number component of the input
    return input.match(re) ? Number(eval(input.match(re)[1])) : null;
  };
  
  this.getUnit = (input) =>  {
    // Should return only the supplied unit
    const inputUnit = input.match(re)[2];
    return validUnit(inputUnit) ? inputUnit : null;
  };
  
  this.getReturnUnit = (initUnit) =>  {
    // Should return the target unit based on the input one
    return validUnit(initUnit) ? units[initUnit][0] : null;
  };

  this.spellOutUnit = (unit) =>  {
    // Return the full spelling of a given unit
    return validUnit(unit) ? units[unit][1] : null;
  };
  
  this.convert = (initNum, initUnit) =>  {
    // Convert supplied number and unit to its equivalent
    return (validNumber(initNum) && validUnit(initUnit)) ? initNum * units[initUnit][2] : null;
  };
  
  this.getString = (initNum, initUnit, returnNum, returnUnit) =>  {
    if (validNumber(initNum) && validUnit(initUnit)) {
      const initUnitWord = this.spellOutUnit(initUnit);
      const returnUnitWord = this.spellOutUnit(returnUnit);
      return `${initNum} ${initUnitWord} converts to ${returnNum} ${returnUnitWord}`;
    } else {
      return null;
    }
  };
  
}

module.exports = ConvertHandler;
