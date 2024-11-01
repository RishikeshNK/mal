function read(input: string): string {
  return input;
}

function evaluate(input: string): string {
  return input;
}

function print(input: string): string {
  return input;
}

function rep(input: string): string {
  return print(evaluate(read(input)));
}

function main() {
  while (true) {
    const input = prompt("user> ");
    if (input === null) {
      break;
    }
    console.log(rep(input));
  }
}

main();
