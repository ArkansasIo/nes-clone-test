# NES Clone Test

A clean-room Nintendo Entertainment System (NES) emulator scaffold and retro-game catalog.

> This project is an emulator foundation, not a complete or accuracy-tested emulator yet. Do not distribute copyrighted ROMs or proprietary game assets.

## Features in this scaffold
- TypeScript + Vite frontend
- CPU, memory bus, PPU, APU, cartridge, mapper and controller module boundaries
- ROM game catalog and genre/category taxonomy
- Basic tests and architecture roadmap

## Run locally
```bash
npm install
npm run dev
```

Build and test:
```bash
npm run build
npm test
```

## Game categories
Action, Adventure, Arcade, Platformer, Role-Playing, Strategy, Puzzle, Sports, Racing, Shooter, Simulation, Education, and Homebrew/Utility.

## Roadmap
1. Implement the complete 6502 instruction set and flags.
2. Parse iNES and NES 2.0 cartridge headers.
3. Implement NROM (mapper 0), PRG/CHR memory and mirroring.
4. Implement PPU registers, scrolling, background and sprite rendering.
5. Add controller serial protocol and APU channels.
6. Synchronize CPU/PPU/APU clocks and implement frame timing.
7. Add save states, debugger, and emulator compatibility tests.
