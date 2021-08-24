const oldCivic = {
  name: 'civic',
  year: 2000,
  broken: true,
};

// general name with Captal letter start
interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
}

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`name: ${vehicle.name}`);
  console.log(`year: ${vehicle.year}`);
  console.log(`broken: ${vehicle.broken}`);
};
