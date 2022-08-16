type TestFunc = () => void;

export const test = (description: string, testFunc: TestFunc): void => {
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
  console.log(left === right);
};

export const arrayExpect = (leftArray: any, rightArray: any): void => {
  let areEqual: boolean = true;
  const leftArrayLength: number = leftArray.length;
  const rightArrayLength: number = rightArray.length;

  if (leftArrayLength !== rightArrayLength) {
    console.log(false);
  } else {
    for (let i: number = 0; i < leftArrayLength; i++) {
      if (leftArray[i] !== rightArray[i]) {
        areEqual = false;
        break;
      }
    }

    console.log(areEqual);
  }
};
