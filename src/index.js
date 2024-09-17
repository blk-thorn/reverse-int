module.exports = function reverse(n) {
    const reversedString = String(Math.abs(n)).split('').reverse().join('');
    return Number(reversedString);
}
