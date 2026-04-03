export const fact = (n: number): number => {
  let r = 1;
  for (let i = 2; i <= n; i++) r *= i;
  return r;
};

export const besselJ = (m: number, x: number) => {
  if (x === 0) return m === 0 ? 1 : 0;
  let s = 0;
  for (let k = 0; k < 25; k++) {
    s +=
      (Math.pow(-1, k) * Math.pow(x / 2, 2 * k + m)) / (fact(k) * fact(k + m));
  }
  return s;
};

// Bessel zeros for rectangular plate — use sine modes (more square-plate-like)
// For rectangular Chladni: f(x,y) = sin(m*pi*x)*sin(n*pi*y) ± sin(n*pi*x)*sin(m*pi*y)
// This gives the proper square plate patterns from the cymatics reference images
export const chladniRect = (
  px: number,
  py: number,
  m: number,
  n: number,
  t: number,
) => {
  // px, py in [-1,1] (rectangular domain)
  const x = (px + 1) / 2; // [0,1]
  const y = (py + 1) / 2; // [0,1]
  const A = Math.sin(m * Math.PI * x) * Math.sin(n * Math.PI * y);
  const B = Math.sin(n * Math.PI * x) * Math.sin(m * Math.PI * y);
  // Mix with slow time oscillation for breathing
  const mix = Math.cos(t * 0.18);
  return A + mix * B;
};
