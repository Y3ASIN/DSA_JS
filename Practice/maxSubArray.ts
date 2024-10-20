// naive approach O(n^3)
function maxSubArray(nums: number[]): number {
    const subArraySum: number[] = [];
  
    for (let i = 0; i < nums.length; i++) {
      for (let j = i; j < nums.length; j++) {
        const subArray = nums.slice(i, j + 1);
  
        const sum = subArray.reduce((acc, num) => acc + num, 0);
  
        subArraySum.push(sum);
      }
    }
    let max = subArraySum[0];
    for (let i = 1; i < subArraySum.length; i++) {
      if (max < subArraySum[i]) {
        max = subArraySum[i];
      }
    }
    return max;
  }
  
  console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
  
  // Kadane's Algorithm O(n)
  function MaxSubArray(nums: number[]): number {
    let currentMax = nums[0];
    let globalMax = nums[0];
  
    for (let i = 1; i < nums.length; i++) {
      currentMax = Math.max(nums[i], currentMax + nums[i]);
      if (currentMax > globalMax) globalMax = currentMax;
    }
    return globalMax;
  }
  