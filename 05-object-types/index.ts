const printName = function (person: {
  firstName: string;
  lastName: string;
}): void {
  console.log(`Hello ${person.firstName} ${person.lastName}`);
};

const payload: { id: string; value: number } = {
  id: "asdas",
  value: 2022,
};

const userName = { name: "huy", year: 2002 };
// printName({ firstName: "Huy", lastName: "Tran", age: 12 });
// printName(userName);

type Person = {
  name: string;
  year: number;
};
const sendName = function (person: Person): Person {
  return {
    name: person.name,
    year: person.year,
  };
};

sendName(userName);
