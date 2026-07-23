class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums: number[]): number[] {
        let map = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (!map.has(nums[i])) {
                map.set(nums[i], 1);
            } else {
                const count = map.get(nums[i]);
                map.set(nums[i], count + 1);
            }
        }
        nums.length = 0;

        while (map.size > 0) {
            let smallest = Infinity;

            for (const key of map.keys()) {
                smallest = Math.min(smallest, key);
            }

            const count = map.get(smallest)!;
            for (let i = 0; i < count; i++) {
                nums.push(smallest);
            }

            map.delete(smallest);
        }
        return nums;
    }
}
