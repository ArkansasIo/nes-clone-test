export class PulseChannel {
  enabled = false;
  duty = 0;
  volume = 0;
  timer = 0;
  phase = 0;

  reset(): void { this.enabled = false; this.duty = 0; this.volume = 0; this.timer = 0; this.phase = 0; }
  clock(): void { if (this.enabled && this.timer > 0) this.timer--; else if (this.enabled) this.phase = (this.phase + 1) & 7; }
  sample(): number { return this.enabled && this.phase < [1,2,4,6][this.duty & 3] ? this.volume : 0; }
}
