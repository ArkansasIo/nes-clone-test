export enum Button { A, B, Select, Start, Up, Down, Left, Right }

export class Controller {
  private readonly pressed = new Set<Button>();
  private shiftRegister = 0;
  private strobe = false;

  press(button: Button): void { this.pressed.add(button); }
  release(button: Button): void { this.pressed.delete(button); }
  setButton(button: Button, pressed: boolean): void { pressed ? this.press(button) : this.release(button); }
  isPressed(button: Button): boolean { return this.pressed.has(button); }
  clear(): void { this.pressed.clear(); this.shiftRegister = 0; }

  writeStrobe(value: number): void {
    const next = (value & 1) !== 0;
    if (next || (!this.strobe && next)) this.latch();
    this.strobe = next;
    if (this.strobe) this.latch();
  }

  read(): number {
    if (this.strobe) return this.isPressed(Button.A) ? 1 : 0;
    const value = this.shiftRegister & 1;
    this.shiftRegister = (this.shiftRegister >> 1) | 0x80;
    return value;
  }

  private latch(): void {
    const buttons = [Button.A, Button.B, Button.Select, Button.Start, Button.Up, Button.Down, Button.Left, Button.Right];
    this.shiftRegister = buttons.reduce((bits, button, index) => bits | (this.isPressed(button) ? 1 << index : 0), 0);
  }
}
