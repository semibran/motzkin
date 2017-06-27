module.exports = function motzkin(n) {
  return n === 0 || n === 1 ? 1 : (2 * n + 1) / (n + 2) * motzkin(n - 1) + (3 * n - 3) / (n + 2) * motzkin(n - 2)
}
