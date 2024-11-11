import { Vec3 } from "../types";

type Matrix = number[][];

function rotationMatrix({ x, y, z }: Vec3): Matrix {
  const angles = [x, y, z];
  const [sinX, sinY, sinZ] = angles.map(Math.sin);
  const [cosX, cosY, cosZ] = angles.map(Math.cos);

  return [
    [cosY * cosZ,                      /* */ -sinZ * cosY,                      /* */ sinY],
    [sinX * sinY * cosZ + sinZ * cosX, /* */ -sinX * sinY * sinZ + cosX * cosZ, /* */ -sinX * cosY],
    [sinX * sinZ - sinY * cosX * cosZ, /* */ sinX * cosZ + sinY * sinZ * cosX,  /* */ cosX * cosY],
  ];
}

function matrixByVec(matrix: Matrix, v: Vec3): Vec3 {
  const axes = ['x', 'y', 'z'] as const;
  const [x, y, z] = matrix.map((row) => row.reduce(
    (acc, cur, i) => acc + cur * v[axes[i]], 0
  ));

  return { x, y, z };
}

export { rotationMatrix, matrixByVec };
