import { Mapper } from "./Mapper.js";

export class Mapper004 implements Mapper {
  readonly id = 4;
  private bank = 0;
  constructor(private readonly prg: Uint8Array, private readonly chr: Uint8Array) {}
  cpuRead(address: number): number { if (address < 0x8000 || !this.prg.length) return 0; const bankSize = 0x2000; const base = address < 0xA000 ? (this.bank * bankSize) % this.prg.length : Math.max(0, this.prg.length - bankSize); return this.prg[(base + (address & 0x1FFF)) % this.prg.length]; }
  cpuWrite(address: number, value: number): void { if (address >= 0x8000) this.bank = value & 0x3F; }
  ppuRead(address: number): number { return this.chr.length ? this.chr[address % this.chr.length] : 0; }
  ppuWrite(address: number, value: number): void { if (this.chr.length) this.chr[address % this.chr.length] = value & 0xFF; }
}
