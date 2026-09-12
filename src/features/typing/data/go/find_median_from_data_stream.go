package main

import "sort"

type MedianFinder struct {
	sorted []int
}

func MedianFinderConstructor() MedianFinder {
	return MedianFinder{}
}

func (f *MedianFinder) AddNum(num int) {
	idx := sort.SearchInts(f.sorted, num)
	f.sorted = append(f.sorted, 0)
	copy(f.sorted[idx+1:], f.sorted[idx:])
	f.sorted[idx] = num
}

func (f *MedianFinder) FindMedian() float64 {
	n := len(f.sorted)
	if n%2 == 1 {
		return float64(f.sorted[n/2])
	}
	return float64(f.sorted[n/2-1]+f.sorted[n/2]) / 2
}
