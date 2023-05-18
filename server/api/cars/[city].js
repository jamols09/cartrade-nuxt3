import cars from "@/data/cars.json";
//defineEventHandler() - used for handing api or returning api results
export default defineEventHandler((event) => {
  const { city } = event.context.params;
  let filteredCars = cars;
  const { make, minPrice, maxPrice } = getQuery(event); //auto imported retrives the parameters on the url

  filteredCars = filteredCars.filter((car) => {
    return car.city.toLowerCase() === city.toLowerCase();
  });

  if (make) {
    filteredCars = filteredCars.filter((car) => {
      return car.make.toLocaleLowerCase() === make.toLocaleLowerCase();
    });
  }

  if (minPrice) {
    filteredCars = filteredCars.filter((car) => {
      return car.price >= minPrice;
    });
  }

  if (maxPrice) {
    filteredCars = filteredCars.filter((car) => {
      return car.price <= parseInt(maxPrice);
    });
  }

  return filteredCars;
});
