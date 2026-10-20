import { CPU6502 } from "./cpu/CPU6502.js";
import { Bus } from "./memory/Bus.js";
import { PPU } from "./ppu/PPU.js";
import { APU } from "./apu/APU.js";

export class NES {
  readonly ppu: PPU;
  readonly bus: Bus;
  readonly cpu: CPU6502;
  readonly apu = new APU();

  constructor(canvas: HTMLCanvasElement) {
    this.ppu = new PPU(canvas);
    this.bus = new Bus(this.ppu);
    this.cpu = new CPU6502(this.bus);
  }

  reset(): void {
    this.bus.reset();
    this.cpu.reset();
    this.ppu.reset();
    this.apu.reset();
  }

  renderDemoFrame(): void { this.ppu.renderDemoFrame(); }
}
