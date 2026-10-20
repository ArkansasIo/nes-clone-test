# Architecture and implementation status

- **CPU6502**: register/reset-vector shell; NOP is the only implemented opcode.
- **Bus**: internal RAM and PPU-register mirroring; cartridge/APU/controller mapping pending.
- **PPU**: demo-frame output and register shell, not hardware-accurate rendering.
- **APU**: interface placeholder.
- **Cartridge**: iNES v1 parser; NES 2.0 size decoding not implemented.
- **Mapper000**: NROM PRG/CHR read-mapping foundation.
- **Controller**: button state; serial read protocol pending.
- **Catalog**: typed catalog, category validation and query.

## Roadmap
1. Complete CPU instructions, flags, addressing modes, interrupts, DMA timing and tests.
2. Finish cartridge parsing: NES 2.0, CHR-RAM, battery-backed RAM and edge cases.
3. Integrate mapper 0 into CPU and PPU buses.
4. Implement PPU VRAM, palettes, scrolling, background, sprites and scanline timing.
5. Implement APU pulse, triangle, noise, DMC and frame sequencer.
6. Implement controller strobe/serial reads and keyboard/gamepad support.
7. Synchronize CPU, PPU and APU timing.
8. Add ROM loading UI, save states, debugger and compatibility tests.
9. Add more mappers only after mapper 0 tests pass.

Use clean-room code and legally obtained ROM images. Do not ship copyrighted ROMs or proprietary assets.
