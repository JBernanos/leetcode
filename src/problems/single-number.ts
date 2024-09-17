export default (nums: number[]): number => {
  const stash: any = {};

  for (let i = 0; i < nums.length; i++) {
    if (!stash.hasOwnProperty(nums[i])) stash[nums[i]] = 1;
    else delete stash[nums[i]];
  }

  return Number(Object.keys(stash)[0]);
};
