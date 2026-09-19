import 'dart:math';

class Solution {
  int maxProfit(List<int> prices) {
    int minPrice = prices[0];
    int best = 0;
    for (var price in prices) {
      if (price < minPrice) {
        minPrice = price;
      } else {
        best = max(best, price - minPrice);
      }
    }
    return best;
  }
}
