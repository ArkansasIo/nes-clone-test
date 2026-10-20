# Cartridge and Mapper Design

## Header formats

Support iNES first, then NES 2.0. Header parsing must validate file length before exposing PRG/CHR regions.

## Cartridge state

- PRG ROM
- CHR ROM or CHR RAM
- Optional PRG RAM
- Battery-backed save RAM metadata
- Mirroring mode
- Mapper number
- NES 2.0 submapper

## Mapper interface

A mapper translates CPU and PPU address-space accesses into cartridge memory accesses. Mapper implementations should not know about the browser UI.

## Initial mapper set

- Mapper 000 / NROM
- Mapper 001 / MMC1
- Mapper 002 / UxROM
- Mapper 003 / CNROM
- Mapper 004 / MMC3

Add additional mappers only after the mapper contract has regression tests.
