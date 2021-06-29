const detectTriangle = (sideA, sideB, sideC) => {
  if(sideA === sideB && sideB === sideC) {
    return 'Segitiga sama sisi';
  }

  if(sideA === sideB || sideA === sideC || sideB === sideC) {
    return 'Segitiga sama kaki';
  }

  return 'Segitiga sembarang';
};

module.exports = detectTriangle;
