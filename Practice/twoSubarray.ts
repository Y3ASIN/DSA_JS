function twoSubArray(arr: number[]): number[] | number {
  const totalSum = arr.reduce((sum, num) => sum + num, 0);

  if (totalSum % 2 !== 0) return -1;

  const targetSum = totalSum / 2;
  let leftSum = 0;
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i];

    if (leftSum === targetSum) {
      console.log("Subarray 1 :", arr.slice(0, i + 1));
      console.log("Subarray 1 :", arr.slice(i + 1));
      return arr.slice(0, i + 1);
    }
  }

  return -1;
}

console.log(twoSubArray([1, 2, 3, 4, 5, 5]));
