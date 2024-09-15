export default(nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; i++) {
    for (let k = 0; k < nums.length; k++) {
      if (i === k) continue;

      if (nums[i] + nums[k] === target) return [i, k];
    }
  }

  return [];
};