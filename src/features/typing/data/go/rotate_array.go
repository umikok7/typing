package main

func rotate(nums []int, k int) {
	k %= len(nums)
	reverse := func(a []int) {
		for i, j := 0, len(a)-1; i < j; i, j = i+1, j-1 {
			a[i], a[j] = a[j], a[i]
		}
	}
	reverse(nums)
	reverse(nums[:k])
	reverse(nums[k:])
}
