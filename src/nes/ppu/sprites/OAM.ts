export interface SpriteEntry {
  y: number;
  tile: number;
  attributes: number;
  x: number;
}

export class OAM {
  readonly data = new Uint8Array(256);

  reset(): void { this.data.fill(0); }

  getSprite(index: number): SpriteEntry {
    const i = (index & 63) * 4;
    return { y: this.data[i], tile: this.data[i + 1], attributes: this.data[i + 2], x: this.data[i + 3] };
  }

  setByte(index: number, value: number): void { this.data[index & 0xFF] = value & 0xFF; }
  getByte(index: number): number { return this.data[index & 0xFF]; }
}
