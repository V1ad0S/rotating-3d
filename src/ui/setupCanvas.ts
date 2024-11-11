import { CanvasAxes } from "../canvas/axes";
import type { State } from "../state";
import { rotationMatrix, matrixByVec } from "../utils/matrix";

function draw(axes: CanvasAxes, state: State) {
  axes.clear();
  const { points, angles } = state;
  const matrix = rotationMatrix(angles);
  for (const point of points) {
    const { x, y, z } = matrixByVec(matrix, point);
    const sizeModifier = z / 2;
    axes.pointCircle(x, y, sizeModifier);
  }
}

function setupCanvas(canvas: HTMLCanvasElement, state: State) {
  const axes = new CanvasAxes(canvas);
  draw(axes, state);
  state.onChange = (state) => draw(axes, state);
}

export { setupCanvas };
