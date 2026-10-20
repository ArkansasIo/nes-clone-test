import { describe, expect, it } from "vitest";
import { Cartridge } from "../src/nes/cartridge/Cartridge.js";

describe("Cartridge parser", () => {
  it("rejects files without an iNES signature", () => {
    expect(() => Cartridge.fromINES(new Uint8Array(16))).toThrow("Invalid iNES file");
  });
  it("parses a minimal NROM iNES image", () => {
    const bytes = new Uint8Array(16 + 0x4000);
    bytes.set([0x4e, 0x45, 0x53, 0x1a, 1, 0, 0, 0]);
    const cart = Cartridge.fromINES(bytes);
    expect(cart.header.mapper).toBe(0);
    expect(cart.prgRom.length).toBe(0x4000);
    expect(cart.header.mirroring).toBe("horizontal");
  });
});
