function ConvertHandler () {
  
  const re = /(\d+\.?\d*\/?\d*)(\w+)/;
  const units = {
    'gal': ['L', 'gallons', 3.78541],
    'lbs': ['kg', 'pounds', 0.453592],
    'mi': ['km', 'miles', 1.60934],
    'L': ['gal', 'litres', 1/1.60934],
    'kg': ['lbs', 'kilograms', 1/0.453592],
    'km': ['mi', 'kilometres', 1/1.60934],
  }

  this.getNum = (input) =>  {
    // Should return only the number component of the input
    return Number(input.match(re)[1]);
  };
  
  this.getUnit = (input) =>  {
    // Should return only the supplied unit
    return input.match(re)[2];
  };
  
  this.getReturnUnit = (initUnit) =>  {
    // Should return the target unit based on the input one
    return units[initUnit][0];
  };

  this.spellOutUnit = (unit) =>  {
    // Return the full spelling of a given unit
    return units[unit][1];
  };
  
  this.convert = (initNum, initUnit) =>  {
    // Convert supplied number and unit to its equivalent
    return initNum * units[initUnit][2];
  };
  
  this.getString = (initNum, initUnit, returnNum, returnUnit) =>  {
    const initUnitWord = this.spellOutUnit(initUnit);
    const returnUnitWord = this.spellOutUnit(returnUnit);
    return `${initNum} ${initUnitWord} converts to ${returnNum} ${returnUnitWord}`;
  };
  
}

module.exports = ConvertHandler;
