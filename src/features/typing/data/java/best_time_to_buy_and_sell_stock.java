class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = prices[0];
        int best = 0;
        for (int price : prices) {
            if (price < minPrice) {
                minPrice = price;
            } else {
                best = Math.max(best, price - minPrice);
            }
        }
        return best;
    }
}
