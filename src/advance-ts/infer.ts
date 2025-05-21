export {};

function printArray(args: Array<string>) {
  args.forEach((arg, index) => {
    console.log(`Arg at index ${index} is ${arg}`);
  });
}

printArray(["first", "second", "third"]);

type UnpackArray<T extends Array<any>> = T extends Array<infer R> ? R : never;

let someStringType: UnpackArray<Array<string>> = "hello";
