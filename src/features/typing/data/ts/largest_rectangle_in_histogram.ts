function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [];
  let best = 0;
  const popArea = (right: number): void => {
    const h = heights[stack[stack.length - 1]];
    stack.pop();
    const width = stack.length === 0 ? right : right - stack[stack.length - 1] - 1;
    best = Math.max(best, h * width);
  };
  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[stack[stack.length - 1]] >= heights[i]) {
      popArea(i);
    }
    stack.push(i);
  }
  while (stack.length > 0) {
    popArea(heights.length);
  }
  return best;
}
