class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
     const NewSet = new Set();

    for (let index = 0; index < nums.length; index++) {
      const element = nums[index];
      NewSet.add(element);
    }

    return NewSet.size !== nums.length;}
}
