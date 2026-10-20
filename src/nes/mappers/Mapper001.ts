import { Mapper } from "./Mapper.js";

export class Mapper001 implements Mapper {
  readonly id = 1;
  private control = 0x0C;
  private shift = 0x10;
  constructor(private readonly prg: Uint8Array, private readonly chr: Uint8Array) {}
  cpuRead(address: number): number { const a = address & 0xFFFF; if (a < 0x8000) return 0; const bank = this.prg.length > 0x4000 ? ((this.control >> 2) & 3) * 0x4000 : 0; const offset = a < 0xC000 ? bank + (a - 0x8000) : this.prg.length - 0x4000 + (a - 0xC000); return this.prg[offset % this.prg.length]; }
  cpuWrite(address: number, value: number): void { if (address < 0x8000) return; if (value & 0x80) { this.shift = 0x10; this.control |= 0x0C; return; } const complete = this.shift & 1; this.shift >>= 1; this.shift |= (value & 1) << 4; if (complete) this.shift = 0x10; }
  ppuRead(address: number): number { return this.chr.length ? this.chr[address % this.chr.length] : 0; }
  ppuWrite(address: number, value: number): void { if (this.chr.length) this.chr[address % this.chr.length] = value & 0xFF; }
}
