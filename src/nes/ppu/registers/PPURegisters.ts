export interface PPURegisterState {
  ctrl: number;
  mask: number;
  status: number;
  oamAddress: number;
}

export class PPURegisters {
  private state: PPURegisterState = { ctrl: 0, mask: 0, status: 0xA0, oamAddress: 0 };

  reset(): void {
    this.state = { ctrl: 0, mask: 0, status: 0xA0, oamAddress: 0 };
  }

  readStatus(): number {
    const value = this.state.status & 0xFF;
    this.state.status &= 0x7F;
    return value;
  }

  writeControl(value: number): void { this.state.ctrl = value & 0xFF; }
  writeMask(value: number): void { this.state.mask = value & 0xFF; }
  writeOAMAddress(value: number): void { this.state.oamAddress = value & 0xFF; }
  incrementOAMAddress(): void { this.state.oamAddress = (this.state.oamAddress + 1) & 0xFF; }
  setVBlank(active: boolean): void { this.state.status = active ? this.state.status | 0x80 : this.state.status & 0x7F; }
  snapshot(): PPURegisterState { return { ...this.state }; }
}
