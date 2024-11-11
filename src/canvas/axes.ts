const POINT_SIZE = 5;

class CanvasAxes {
  private ctx: CanvasRenderingContext2D;
  private shape: [width: number, height: number];

  constructor(canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d")!;
    this.shape = [canvas.width, canvas.height]
  }

  private transform(x: number, y: number): [x: number, y: number] {
    const [x0, y0] = this.shape;
    return [
      x0 / 2 * (1 + x),
      y0 / 2 * (1 - y),
    ];
  }

  private pointSize(sizeModifier: number): number {
    return POINT_SIZE * (1 + sizeModifier);
  }

  public point(x: number, y: number, sizeModifier: number = 0) {
    this.ctx.fillStyle = 'white';
    const [x1, y1] = this.transform(x, y);
    const sub = POINT_SIZE / 2;
    const size = this.pointSize(sizeModifier);
    this.ctx.fillRect(x1 - sub, y1 - sub, size, size);
  }

  public pointCircle(x: number, y: number, sizeModifier: number = 0) {
    const [x1, y1] = this.transform(x, y);
    this.ctx.beginPath();
    const radius = this.pointSize(sizeModifier);
    this.ctx.arc(x1, y1, radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = 'white';
    this.ctx.fill();
  }

  public clear() {
    this.ctx.clearRect(0, 0, ...this.shape);
  }
}

export { CanvasAxes };
