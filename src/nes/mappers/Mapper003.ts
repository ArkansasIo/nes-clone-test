import { Mapper } from "./Mapper.js";

export class Mapper003 implements Mapper {
  readonly id = 3;
  private chrBank = 0;
  constructor(private readonly prg: Uint8Array, private readonly chr: Uint8Array) {}
  cpuRead(address: number): number { return address >= 0x8000 && this.prg.length ? this.prg[(address - 0x8000) % this.prg.length] : 0; }
  cpuWrite(address: number, value: number): void { if (address >= 0x8000) this.chrBank = value & 3; }
  ppuRead(address: number): number { if (!this.chr.length) return 0; return this.chr[((this.chrBank * 0x2000) + address) % this.chr.length]; }
  ppuWrite(address: number, value: number): void { if (this.chr.length) this.chr[address % this.chr.length] = value & 0xFF; }
}
