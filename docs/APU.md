# APU Implementation

The audio processing unit should be clocked from the same master emulation timeline as the CPU and PPU.

## Planned channels

- Pulse 1
- Pulse 2
- Triangle
- Noise
- DMC

## Supporting state

- Frame counter.
- Length counters.
- Envelope generators.
- Sweep units.
- Timers.
- DMC sample address/length state.

The browser audio layer should consume generated samples through an AudioWorklet or equivalent buffered output path. Web Audio timing must never drive the emulator's deterministic state.
