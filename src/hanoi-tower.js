module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    var step = Math.pow(2, disksNumber) - 1;
    var shift = step / (turnsSpeed / 3600);
    return {
        turns: step,
        seconds: shift
    };
}