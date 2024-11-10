interface LightningOptions {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    xRange: number;
    yRange: number;
    path: { x: number; y: number }[];
    ttl: number;
  }
  
  export class Lightning {
    startX: number;
    startY: number;
    endX: number;
    endY: number;
    xRange: number;
    yRange: number;
    path: { x: number; y: number }[];
    ttl: number;
    opacity: number;
  
    constructor({
      startX,
      startY,
      endX,
      endY,
      xRange,
      yRange,
      path,
      ttl,
    }: LightningOptions) {
      this.startX = startX;
      this.startY = startY;
      this.endX = endX;
      this.endY = endY;
      this.xRange = xRange;
      this.yRange = yRange;
      this.path = path;
      this.ttl = ttl;
      this.opacity = 1;
    }
  
    draw(ctx: CanvasRenderingContext2D) {
      ctx.beginPath();
      ctx.save();
      ctx.strokeStyle = ctx.shadowColor = "#cfebff";
      ctx.shadowBlur = 20;
      ctx.lineWidth = 3;
      ctx.lineJoin = "miter";
      ctx.globalAlpha = this.opacity;
      ctx.moveTo(this.startX, this.startY);
  
      for (let pc = 0; pc < this.path.length; pc++) {
        ctx.lineTo(this.path[pc].x, this.path[pc].y);
      }
  
      ctx.stroke();
      ctx.restore();
      ctx.closePath();
    }
  
    update(ctx: CanvasRenderingContext2D) {
      const lastPoint = this.path[this.path.length - 1];
      const dx = this.endX - lastPoint.x;
      const dy = this.endY - lastPoint.y;
  
      this.path.push({
        x: lastPoint.x + dx * 0.1 + getRandomArbitrary(-this.xRange, this.xRange, 2),
        y: lastPoint.y + dy * 0.1 + getRandomArbitrary(-this.yRange, this.yRange, 2),
      });
  
      this.ttl -= 1;
      this.opacity -= 1 / this.ttl;
      if (this.opacity < 0) this.opacity = 0;
  
      this.draw(ctx);
    }
  
    static createNewLightning(
      startX: number,
      startY: number,
      endX: number,
      endY: number
    ): Lightning {
      const options: LightningOptions = {
        startX,
        startY,
        endX,
        endY,
        xRange: getRandomArbitrary(5, 30, 2),
        yRange: getRandomArbitrary(10, 25, 2),
        path: [{ x: startX, y: startY }],
        ttl: getRandomInt(20, 100),
      };
      return new Lightning(options);
    }
  }
  
  export const getRandomArbitrary = (
    min: number,
    max: number,
    roundN: number = 0
  ): number => {
    roundN = Number(`1e${roundN}`);
    return Math.floor((Math.random() * (max - min) + min) * roundN) / roundN;
  };
  
  export const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  