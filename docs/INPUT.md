# Input System

The NES controller exposes eight buttons through a serial shift-register protocol.

## Buttons

A, B, Select, Start, Up, Down, Left and Right.

## Architecture

`HostInput -> ControllerState -> NES Controller Port -> CPU Bus`

Browser keyboard and Gamepad API adapters should only mutate host/controller state. The emulated controller port remains deterministic and is read through CPU memory-mapped I/O.

## Planned features

- Keyboard mapping.
- Browser Gamepad API mapping.
- Two controller ports.
- Strobe handling.
- Serial button reads.
- Configurable bindings.
- Input recording/replay for deterministic tests.
