import { Button, Controller } from "../Controller.js";

export class KeyboardAdapter {
  private readonly keys = new Map<string, Button>([
    ["ArrowUp", Button.Up], ["ArrowDown", Button.Down], ["ArrowLeft", Button.Left], ["ArrowRight", Button.Right],
    ["KeyZ", Button.B], ["KeyX", Button.A], ["Enter", Button.Start], ["ShiftLeft", Button.Select]
  ]);

  attach(target: Window, controller: Controller): () => void {
    const down = (event: KeyboardEvent) => { const button = this.keys.get(event.code); if (button !== undefined) controller.press(button); };
    const up = (event: KeyboardEvent) => { const button = this.keys.get(event.code); if (button !== undefined) controller.release(button); };
    target.addEventListener("keydown", down);
    target.addEventListener("keyup", up);
    return () => { target.removeEventListener("keydown", down); target.removeEventListener("keyup", up); };
  }
}
