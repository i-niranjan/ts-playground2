export {};

function toArray<T>(arg: T): [T] {
  return [arg];
}

const myArray = toArray<string>("My Name");
const myArray2 = toArray(2);
