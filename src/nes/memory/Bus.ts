import type { PPU } from "../ppu/PPU.js";

export class Bus {
  private readonly ram = new Uint8Array(0x800);
  constructor(private readonly ppu: PPU) {}
  reset(): void { this.ram.fill(0); }

  read(address: number): number {
    const a = address & 0xffff;
    if (a < 0x2000) return this.ram[a & 0x7ff]!;
    if (a < 0x4000) return this.ppu.readRegister(0x2000 | (a & 7));
    if (a === 0x4015) return 0;
    return 0; // Cartridge/APU/input address mapping is not implemented yet
  }

  write(address: number, value: number): void {
    const a = address & 0xffff, v = value & 0xff;
    if (a < 0x2000) this.ram[a & 0x7ff] = v;
    else if (a < 0x4000) this.ppu.writeRegister(0x2000 | (a & 7), v);
  }

  read16(address: number): number { return this.read(address) | (this.read((address + 1) & 0xffff) << 8); }
}
