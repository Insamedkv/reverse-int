module.exports = function reverse (n) {
    if (Math.sign(n) == -1) {
        n = n * -1;
    }
    let i = 0;
    while (n > 0) {
        i = i * 10 + n % 10;
        n = Math.floor((n / 10));
      }
    return i
}
