// general name with Captal letter start
interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'civic',
  year: new Date(),
  broken: true,
  summary(): string {
    return `name: ${this.name}`;
  },
};

const drink = {
  color: 'brown',
  sugar: 60,
  summary(): string {
    return `color: ${this.color}, sugar: ${this.sugar}`;
  },
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
