package main

func maxArea(height []int) int {
	left, right := 0, len(height)-1
	best := 0
	for left < right {
		w := right - left
		h := height[left]
		if height[right] < h {
			h = height[right]
		}
		if w*h > best {
			best = w * h
		}
		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}
	return best
}
