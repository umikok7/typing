package main

func largestRectangleArea(heights []int) int {
	stack := []int{}
	best := 0
	popArea := func(right int) {
		h := heights[stack[len(stack)-1]]
		stack = stack[:len(stack)-1]
		width := right
		if len(stack) > 0 {
			width = right - stack[len(stack)-1] - 1
		}
		if h*width > best {
			best = h * width
		}
	}
	for i := 0; i < len(heights); i++ {
		for len(stack) > 0 && heights[stack[len(stack)-1]] >= heights[i] {
			popArea(i)
		}
		stack = append(stack, i)
	}
	for len(stack) > 0 {
		popArea(len(heights))
	}
	return best
}
