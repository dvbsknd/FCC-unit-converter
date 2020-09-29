function ConvertHandler () {
  
  const re = /^([\d/.]+)?([a-zA-Z]+)/;
  const units = {
    'gal': ['l', 'gallons', 3.78541],
    'lbs': ['kg', 'pounds', 0.453592],
    'mi': ['km', 'miles', 1.60934],
    'l': ['gal', 'litres', 1/3.78541],
    'kg': ['lbs', 'kilograms', 1/0.453592],
    'km': ['mi', 'kilometers', 1/1.60934],
  }

  const validUnit = (unit) => unit ? Object.keys(units).indexOf(unit.toLowerCase()) >= 0 : null;
  const validNumber = (number) => typeof number === 'number';
  const validInput = (input) => {
    const slashes = input.match(/\//g);
    return (slashes && slashes.length !== 1) ? false : true;
  }

  this.getNum = (input) =>  {
    // Should return only the number component of the input
    if (validInput(input)) {
      return input.match(re)[1] ? Number(eval(input.match(re)[1])) : 1;
    } else return null;
  };
  
  this.getUnit = (input) =>  {
    // Should return only the supplied unit
    if (input.match(re)) {
      const inputUnit = input.match(re)[2].toLowerCase();
      return validUnit(inputUnit) ? inputUnit : null;
    }
    return null;
  }
  
  this.getReturnUnit = (initUnit) =>  {
    // Should return the target unit based on the input one
    return validUnit(initUnit) ? units[initUnit.toLowerCase()][0] : null;
  };

  this.spellOutUnit = (unit) =>  {
    // Return the full spelling of a given unit
    return validUnit(unit) ? units[unit.toLowerCase()][1] : null;
  };
  
  this.convert = (initNum, initUnit) =>  {
    // Convert supplied number and unit to its equivalent
    return (validNumber(initNum) && validUnit(initUnit)) ? Number((initNum * units[initUnit.toLowerCase()][2]).toFixed(5)) : null;
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
