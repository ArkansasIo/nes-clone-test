export type Mirroring = "horizontal" | "vertical" | "four-screen";
export interface CartridgeHeader {
  format: "iNES" | "NES 2.0";
  mapper: number; submapper: number; prgRomSize: number; chrRomSize: number;
  mirroring: Mirroring; battery: boolean;
}

export class Cartridge {
  constructor(readonly header: CartridgeHeader, readonly prgRom: Uint8Array, readonly chrRom: Uint8Array) {}

  static fromINES(bytes: Uint8Array): Cartridge {
    if (bytes.length < 16 || bytes[0] !== 0x4e || bytes[1] !== 0x45 || bytes[2] !== 0x53 || bytes[3] !== 0x1a) {
      throw new Error("Invalid iNES file: missing NES signature.");
    }
    const flags6 = bytes[6]!, flags7 = bytes[7]!;
    const nes2 = (flags7 & 0x0c) === 0x08;
    if (nes2) throw new Error("NES 2.0 size decoding is not implemented yet.");
    const trainer = (flags6 & 0x04) !== 0;
    const prgSize = bytes[4]! * 16 * 1024, chrSize = bytes[5]! * 8 * 1024;
    const start = 16 + (trainer ? 512 : 0);
    if (bytes.length < start + prgSize + chrSize) throw new Error("Truncated iNES ROM.");
    const mirroring: Mirroring = (flags6 & 0x08) ? "four-screen" : (flags6 & 1) ? "vertical" : "horizontal";
    const header: CartridgeHeader = {
      format: "iNES", mapper: (flags6 >> 4) | (flags7 & 0xf0), submapper: 0,
      prgRomSize: prgSize, chrRomSize: chrSize, mirroring, battery: (flags6 & 2) !== 0
    };
    return new Cartridge(header, bytes.slice(start, start + prgSize), bytes.slice(start + prgSize, start + prgSize + chrSize));
  }
}
