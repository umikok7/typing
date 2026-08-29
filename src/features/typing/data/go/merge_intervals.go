package main

import "sort"

func merge(intervals [][]int) [][]int {
	sort.Slice(intervals, func(i, j int) bool {
		return intervals[i][0] < intervals[j][0]
	})
	result := [][]int{}
	for _, interval := range intervals {
		n := len(result)
		if n == 0 || result[n-1][1] < interval[0] {
			result = append(result, interval)
			continue
		}
		if interval[1] > result[n-1][1] {
			result[n-1][1] = interval[1]
		}
	}
	return result
}
