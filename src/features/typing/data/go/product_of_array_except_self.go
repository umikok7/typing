package main

func productExceptSelf(nums []int) []int {
	n := len(nums)
	result := make([]int, n)
	prefix := 1
	for i, num := range nums {
		result[i] = prefix
		prefix *= num
	}
	suffix := 1
	for i := n - 1; i >= 0; i-- {
		result[i] *= suffix
		suffix *= nums[i]
	}
	return result
}
