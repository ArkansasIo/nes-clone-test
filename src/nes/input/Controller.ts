export enum Button { A, B, Select, Start, Up, Down, Left, Right }
/** Button state foundation; NES serial shift-register protocol remains pending. */
export class Controller {
  private readonly pressed = new Set<Button>();
  press(button: Button): void { this.pressed.add(button); }
  release(button: Button): void { this.pressed.delete(button); }
  isPressed(button: Button): boolean { return this.pressed.has(button); }
  clear(): void { this.pressed.clear(); }
}
