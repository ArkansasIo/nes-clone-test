import type { Bus } from "../memory/Bus.js";

/** Initial 6502 CPU shell. Full instruction and interrupt coverage is a roadmap item. */
export class CPU6502 {
  pc = 0;
  sp = 0xfd;
  a = 0;
  x = 0;
  y = 0;
  p = 0x24;
  cycles = 0;

  constructor(private readonly bus: Bus) {}

  reset(): void {
    this.a = this.x = this.y = 0;
    this.sp = 0xfd;
    this.p = 0x24;
    this.pc = this.bus.read16(0xfffc);
    this.cycles = 7;
  }

  step(): number {
    const opcode = this.bus.read(this.pc);
    // Do not silently claim accuracy: unknown instructions stop execution.
    if (opcode !== 0xea) throw new Error("Unimplemented opcode $" + opcode.toString(16).padStart(2, "0") + " at $" + this.pc.toString(16));
    this.pc = (this.pc + 1) & 0xffff;
    this.cycles += 2;
    return 2; // NOP only
  }
}
