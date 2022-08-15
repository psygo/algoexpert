type TestFunc = () => void;

export const test = (description: string, testFunc: TestFunc): void => {
  console.log(description);

  testFunc();
};

export const expect = (left: any, right: any): void => {
  console.log(left === right);
};
