package main

import "math"

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	m, n := len(nums1), len(nums2)
	if m > n {
		return findMedianSortedArrays(nums2, nums1)
	}
	total := m + n
	half := total / 2
	left, right := 0, m
	for left <= right {
		i := left + (right-left)/2
		j := half - i
		aLeft := minValue(nums1, i)
		aRight := maxValue(nums1, i, m)
		bLeft := minValue(nums2, j)
		bRight := maxValue(nums2, j, n)
		if aLeft <= bRight && bLeft <= aRight {
			if total%2 == 1 {
				return float64(min2(aRight, bRight))
			}
			return float64(max2(aLeft, bLeft)+min2(aRight, bRight)) / 2
		}
		if aLeft > bRight {
			right = i - 1
		} else {
			left = i + 1
		}
	}
	return 0
}

func minValue(nums []int, index int) int {
	if index == 0 {
		return math.MinInt
	}
	return nums[index-1]
}

func maxValue(nums []int, index int, size int) int {
	if index == size {
		return math.MaxInt
	}
	return nums[index]
}

func min2(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max2(a, b int) int {
	if a > b {
		return a
	}
	return b
}
