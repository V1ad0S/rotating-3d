import type { Axis, Vec3 } from "./types";
import { generatePoints } from "./utils/generatePoints";

class State {
  public readonly angles: Record<Axis, number> = {
    x: 0,
    y: 0,
    z: 0,
  }

  public readonly points: Vec3[];

  constructor(pointsCount: number) {
    this.points = generatePoints(pointsCount);
  }

  public setAngle(axis: Axis, value: number) {
    this.angles[axis] = value;
    this.onChange?.(this);
  }

  public onChange?: (state: State) => void;
}

export { State };
