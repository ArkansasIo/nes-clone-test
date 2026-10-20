export class NoiseChannel {
  enabled = false;
  volume = 0;
  period = 0;
  shiftRegister = 1;

  reset(): void { this.enabled = false; this.volume = 0; this.period = 0; this.shiftRegister = 1; }
  clock(): void {
    if (!this.enabled) return;
    const feedback = (this.shiftRegister ^ (this.shiftRegister >> 1)) & 1;
    this.shiftRegister = (this.shiftRegister >> 1) | (feedback << 14);
  }
  sample(): number { return this.enabled && (this.shiftRegister & 1) === 0 ? this.volume : 0; }
}
