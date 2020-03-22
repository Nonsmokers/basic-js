module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let value = 1;
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                value = Math.max(this.calculateDepth(arr[i]) + 1, value);
            }
        };
        return value;
    }
};
