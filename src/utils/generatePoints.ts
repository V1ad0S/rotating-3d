import { Vec3 } from "../types";

function generatePoints(n: number): Vec3[] {
  return Array(n).fill(null).map(() => ({
    x: Math.random() * 2 - 1,
    y: Math.random() * 2 - 1,
    z: Math.random() * 2 - 1,
  }))
}

// function mock(): Vec3[] {
//   return [
//     { x: 0.5, y: 0.5, z: 0.5 },
//     { x: 0.5, y: 0.5, z: -0.5 },
//     { x: 0.5, y: -0.5, z: 0.5 },
//     { x: 0.5, y: -0.5, z: -0.5 },
//     { x: -0.5, y: 0.5, z: 0.5 },
//     { x: -0.5, y: 0.5, z: -0.5 },
//     { x: -0.5, y: -0.5, z: 0.5 },
//     { x: -0.5, y: -0.5, z: -0.5 },
//   ];
// }

export { generatePoints };
