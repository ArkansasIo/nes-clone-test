export class VRAM {
  readonly nameTable = new Uint8Array(0x1000);
  readonly palette = new Uint8Array(0x20);

  reset(): void {
    this.nameTable.fill(0);
    this.palette.fill(0);
  }

  read(address: number): number {
    const a = address & 0x3FFF;
    if (a >= 0x3F00) return this.palette[(a - 0x3F00) & 0x1F];
    if (a >= 0x2000) return this.nameTable[(a - 0x2000) & 0x0FFF];
    return 0;
  }

  write(address: number, value: number): void {
    const a = address & 0x3FFF;
    if (a >= 0x3F00) this.palette[(a - 0x3F00) & 0x1F] = value & 0x3F;
    else if (a >= 0x2000) this.nameTable[(a - 0x2000) & 0x0FFF] = value & 0xFF;
  }
}
