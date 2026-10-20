import type { Cartridge } from "../cartridge/Cartridge.js";
import type { Mapper } from "./Mapper.js";

/** NROM (mapper 0) PRG/CHR read mapping foundation. */
export class Mapper000 implements Mapper {
  readonly id = 0;
  constructor(private readonly cartridge: Cartridge) {
    if (![16 * 1024, 32 * 1024].includes(cartridge.prgRom.length)) throw new Error("NROM PRG-ROM must be 16 KiB or 32 KiB.");
  }
  cpuRead(address: number): number {
    if (address < 0x8000 || address > 0xffff) return 0;
    return this.cartridge.prgRom[(address - 0x8000) % this.cartridge.prgRom.length]!;
  }
  cpuWrite(_address: number, _value: number): void {}
  ppuRead(address: number): number {
    if (address < 0 || address > 0x1fff) return 0;
    return this.cartridge.chrRom[address] ?? 0;
  }
  ppuWrite(_address: number, _value: number): void { /* CHR-RAM integration remains to be added. */ }
}
