# Development Roadmap

## Phase 1 — Foundation

- TypeScript project and CI.
- Emulator component boundaries.
- iNES parser.
- NROM mapper.
- Category/catalog system.

## Phase 2 — CPU

- Complete opcode table.
- Addressing modes.
- Interrupts and reset.
- Cycle accuracy.
- CPU functional tests.

## Phase 3 — PPU

- VRAM and mirroring.
- Pattern tables.
- Nametables and attributes.
- Palette handling.
- Background and sprites.
- Scanline timing.

## Phase 4 — Input and APU

- Controller serial protocol.
- Keyboard/gamepad mapping.
- Pulse/triangle/noise/DMC channels.
- Audio buffering.

## Phase 5 — Cartridge expansion

Implement MMC1, UxROM, CNROM and MMC3 with mapper-specific tests.

## Phase 6 — User tools

- ROM import.
- Cartridge information panel.
- Save states.
- Debugger.
- Memory viewer.
- CPU trace viewer.
- Input recording/replay.

## Phase 7 — Compatibility

Run a broad collection of legal homebrew and public-domain test ROMs and document compatibility by mapper and region.
