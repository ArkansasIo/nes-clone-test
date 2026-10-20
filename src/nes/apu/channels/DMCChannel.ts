export class DMCChannel {
  enabled = false;
  outputLevel = 0;
  currentAddress = 0xC000;
  remainingBytes = 0;

  reset(): void { this.enabled = false; this.outputLevel = 0; this.currentAddress = 0xC000; this.remainingBytes = 0; }
  clock(): void { if (this.remainingBytes > 0) this.remainingBytes--; }
  sample(): number { return this.enabled ? this.outputLevel & 0x7F : 0; }
}
