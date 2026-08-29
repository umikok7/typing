package main

func maxProfit(prices []int) int {
	minPrice := prices[0]
	best := 0
	for _, price := range prices {
		if price < minPrice {
			minPrice = price
		} else if price-minPrice > best {
			best = price - minPrice
		}
	}
	return best
}
