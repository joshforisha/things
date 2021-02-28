export function draw<T>(xs: T[]): T {
  return xs[Math.floor(Math.random() * xs.length)];
}
