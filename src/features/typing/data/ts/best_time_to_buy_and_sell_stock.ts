function maxProfit(prices: number[]): number {
  let minPrice = prices[0];
  let best = 0;
  for (const price of prices) {
    if (price < minPrice) {
      minPrice = price;
    } else {
      best = Math.max(best, price - minPrice);
    }
  }
  return best;
}
