class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const result: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    let res = 1;
    for (let j = 0; j < nums.length; j++) {
      const element: number = nums[j] as number;
      if (j !== i) {
        res = res * element;
      }
    }
    result.push(res);
  }

  return result;
    }
}
