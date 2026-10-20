export class TriangleChannel {
  enabled = false;
  timer = 0;
  phase = 0;

  reset(): void { this.enabled = false; this.timer = 0; this.phase = 0; }
  clock(): void { if (!this.enabled) return; if (this.timer > 0) this.timer--; else this.phase = (this.phase + 1) & 31; }
  sample(): number { const p = this.phase; return p < 16 ? p : 31 - p; }
}
