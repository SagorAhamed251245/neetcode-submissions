class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean { 
       let isTrue = false;
    for (let index = 0; index < nums.length && isTrue === false; index++) {
      const element = nums[index] as number;
      const checkTrue = check(element);

      if (checkTrue) {
        isTrue = true;
        return true;
      }
    }

    function check(value: number) {
      const count = nums.filter((num) => num === value);
      if (count.length > 1) {
        return true;
      } else {
        return false;
      }
    }
    return isTrue;
    }
}
