

class Point {
  x: number;
  y: number;
  readonly name: string = "world";
  private version = 0;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
    this.name = "john"
  }

  private debugLog(): void {
    console.log(this.version)
  }
}


const p = new Point(0, 0)