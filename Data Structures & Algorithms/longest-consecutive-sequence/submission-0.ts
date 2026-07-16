class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        if (nums.length === 0 || nums === null) {
            return 0;
        }
        const numsSet = new Set(nums);
        let value = 0;
        for (const num of nums) {
            if (!numsSet.has(num - 1)) {
                let count = 0;
                while (numsSet.has(count + num)) {
                    count++;
                }
                value = Math.max(value, count);
            }
        }
        return value;
    }
}
