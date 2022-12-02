function sales(carsSold) {
  const cars = {};
  carsSold.forEach((car) => {
    if (cars[car.make]) {
      return (cars[car.make] += car.price);
    }
    cars[car.make] = car.price;
  });
  return cars;
}

module.exports = sales;
