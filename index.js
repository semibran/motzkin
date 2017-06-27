module.exports = function motzkin(n) {
  if (n === 0 || n === 1) return 1
  if (n < 0) return NaN
  return (2 * n + 1) / (n + 2) * motzkin(n - 1) + (3 * n - 3) / (n + 2) * motzkin(n - 2)
}
