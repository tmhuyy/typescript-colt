const calcNumber = (a: number, b: number = 12): number => {
  const sum: number = a + b;
  return a + b;
};
// a:number -> we annotate the a
calcNumber(12);

const remixReturn = (num: number) => {
  if (num < 0.5) return num.toString();
  return num;
};

const colors: string[] = ["red", "blue"];
const upperCaseColors = colors.map((color) => color.toUpperCase());

const addNumber = (a: number, b: number): void => {
  console.log(a + b);
};

const showErrors = (): never => {
  throw new Error("AN ERROR");
};

const gameLoop = (): never => {
  while (true) {
    console.log("asdds");
  }
};
