class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [];

    push(val: number): void {
        this.stack.push(val);
        let min = val;
        if (this.minStack.length > 0 && this.minStack[this.minStack.length - 1] < min) {
            min = this.minStack[this.minStack.length - 1];
        }
        this.minStack.push(min);
    }

    pop(): void {
        this.stack.pop();
        this.minStack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}
