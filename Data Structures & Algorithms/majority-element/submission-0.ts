class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums: number[]): number {
        if (nums.length < 1) {
            return 0;
        }
        const map = new Map();

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];
            if (!map.has(num)) {
                map.set(num, 1);
            } else {
                map.set(num, map.get(num) + 1);
            }
        }
        let longest = 0;
        let longestKey = 0;
        for (const [key, val] of map) {
            console.log({ key, val });

            if (longest < val) {
                longest = val;
                longestKey = key;
            }
        }

        console.log({ longestKey, longest });

        return longestKey;
    }
}
