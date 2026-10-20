# Testing Strategy

## Unit tests

Test CPU instructions, addressing modes, flags, stack behavior, cartridge parsing, mapper behavior, PPU registers, controller serialization and APU counters independently.

## Integration tests

Verify CPU↔Bus↔Cartridge, CPU↔PPU register access, NMI delivery, controller reads and frame synchronization.

## Regression tests

Every emulator bug should produce a deterministic regression test. Keep tests small and named after the hardware behavior they protect.

## Compatibility tests

Support externally supplied legal test ROMs through a local test-ROM directory or CI artifact. Never commit copyrighted commercial ROMs to this repository.

## Browser tests

The UI should verify that the emulator initializes, the canvas is present, categories load, filtering works and invalid ROMs produce user-visible errors without crashing the page.
