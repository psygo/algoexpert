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

export const expect = (left: any, right: any): void => {
  console.log(left === right);
};
