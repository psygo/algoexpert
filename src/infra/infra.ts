type TestFunc = () => void;

export const customTest = (description: string, testFunc: TestFunc): void => {
  const dashNum: number = 40;

  console.log("-".repeat(dashNum));
  console.log(description);
  console.log("-".repeat(dashNum));
  console.log("");

  testFunc();

  console.log("");
  console.log("-".repeat(dashNum));
};

export const shallowExpect = (left: any, right: any): void => {
  console.log(`Is the left equal to the right?\n${left === right}`);
};

export const arrayExpect = <T>(leftArray: T[], rightArray: T[]): void => {
  let areEqual: boolean = true;
  const leftArrayLength: number = leftArray.length;
  const rightArrayLength: number = rightArray.length;

  if (leftArrayLength !== rightArrayLength) {
    console.log(`Arrays are not even of equal length`);
  } else {
    for (let i: number = 0; i < leftArrayLength; i++) {
      if (leftArray[i] !== rightArray[i]) {
        areEqual = false;
        break;
      }
    }

    console.log(`Arrays are equal?\n${areEqual}`);
  }
};
