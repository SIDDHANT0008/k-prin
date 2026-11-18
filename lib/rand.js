// Deterministic pseudo-random so server and client render the same values (no hydration mismatch)
export function rnd(i, salt = 1) {
  const x = Math.sin(i * 127.1 + salt * 311.7) * 43758.5453;
  return x - Math.floor(x);
}
