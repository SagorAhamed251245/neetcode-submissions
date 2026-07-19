class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let l = 0;
        let r = heights.length - 1;

        let maxArea = 0;

        while (l < r) {
            const w = r - l;
            const h = Math.min(heights[l]!, heights[r]!);

            const area = w * h;
            maxArea = Math.max(maxArea, area);

            if (heights[l]! < heights[r]!) {
                l++;
            } else {
                r--;
            }
        }

        return maxArea;
    }
}
