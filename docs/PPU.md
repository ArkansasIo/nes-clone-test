# PPU Implementation

The PPU renders a 256×240 logical picture using NES tile, nametable, palette and sprite state. The renderer should separate emulated PPU memory/register state from the browser canvas output.

## Planned modules

- PPU registers and latches.
- Pattern-table memory.
- Nametable/attribute memory with cartridge mirroring.
- Palette RAM and palette lookup.
- Object Attribute Memory (OAM).
- Background tile fetch pipeline.
- Sprite evaluation and sprite-zero behavior.
- Scanline/dot timing.
- VBlank/NMI generation.
- Framebuffer conversion to Canvas/ImageData.

## Timing target

Model PPU dots and scanlines explicitly. Do not use `requestAnimationFrame` as the emulation clock; it should only present completed frames.

## Rendering stages

1. Fetch tile/attribute information.
2. Shift background pattern/attribute data.
3. Evaluate sprites for the next scanline.
4. Produce one pixel per PPU dot during visible rendering.
5. Generate VBlank and NMI at the correct boundary.
