function greet(name: string) {
  return "Hello " + name;
}

// const johnGreet = greet("john");

function consoleGreatJohn(name: String) {
  console.log("Hello " + name.toUpperCase());
}

const greetMultiple = (...names: string[]) => {
  names.forEach((name) => {
    consoleGreatJohn(name);
  });
};
greetMultiple("Hello", "Niranjan");
