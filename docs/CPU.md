# CPU / 6502 Implementation

The NES CPU is based on the MOS 6502 family with NES-specific decimal-mode behavior. The project should model the CPU as a deterministic clocked component rather than as a generic JavaScript interpreter.

## Planned components

- Registers: A, X, Y, SP, PC, P.
- Addressing modes: immediate, zero-page, zero-page indexed, absolute, absolute indexed, indirect, indexed indirect, indirect indexed, relative, accumulator and implied.
- Instruction decoder and opcode table.
- Status flags: N, V, unused, B, D, I, Z, C.
- Stack operations at `$0100-$01FF`.
- Reset, IRQ and NMI handling.
- Page-crossing and branch cycle penalties.
- Deterministic cycle counter.

## Implementation rule

Each instruction should have an explicit addressing-mode operation and cycle behavior. Avoid a giant untyped switch as the final architecture; a typed opcode table makes coverage and tests easier to audit.

## Test requirements

Add instruction-level tests for registers, flags, memory effects, PC movement and cycle counts. Then add known 6502 functional-test ROM support without bundling copyrighted ROM images.
