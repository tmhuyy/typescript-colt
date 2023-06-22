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

type PersonInfor = {
  name: {
    firstName: string;
    lastName: string;
  };
  age: number;
  address?: {
    street: string;
    country: string;
  };
};

const payloadInfor = (enteredInput: PersonInfor): void => {
  console.log(
    `My name is ${enteredInput.name.firstName}, I'm ${enteredInput.age} years old`
  );
};

const huyInput: PersonInfor = {
  name: {
    firstName: "Huy",
    lastName: "Tran",
  },
  age: 20,
};

payloadInfor(huyInput);
type Game = {
  name: string;
  releasedYear: number;
  //   readonly: mark the propertiy just can be read
  readonly author: string;
  stars?: number;
};
const pokemon: Game = {
  name: "Pokemon",
  releasedYear: 1995,
  author: "Huy",
};

console.log(pokemon);
// pokemon.author = "Tu";

type Summer = {
  isHot: boolean;
};

type Winter = {
  isCold: boolean;
};

type Autumn = Summer &
  Winter & {
    isWindy: boolean;
  };
// combine them by &
const autumn2023: Autumn = {
  isCold: true,
  isHot: false,
  isWindy: false,
};
