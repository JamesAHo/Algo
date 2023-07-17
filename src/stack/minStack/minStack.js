/** 
 * @param {number} val
 * @return {void}
 */


export default function MinStack() {
    this.stack = [];
    this.minstack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push({
        value: val,
        min: this.stack.length === 0 ? val : Math.min(val, this.getMin())
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].value;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].min
};
