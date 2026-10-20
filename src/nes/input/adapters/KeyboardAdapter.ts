import { Controller, ControllerButton } from "../Controller.js";

export class KeyboardAdapter {
  private readonly keys = new Map<string, ControllerButton>([
    ["ArrowUp", "up"], ["ArrowDown", "down"], ["ArrowLeft", "left"], ["ArrowRight", "right"],
    ["KeyZ", "b"], ["KeyX", "a"], ["Enter", "start"], ["ShiftLeft", "select"]
  ]);

  attach(target: Window, controller: Controller): () => void {
    const down = (event: KeyboardEvent) => { const button = this.keys.get(event.code); if (button) controller.setButton(button, true); };
    const up = (event: KeyboardEvent) => { const button = this.keys.get(event.code); if (button) controller.setButton(button, false); };
    target.addEventListener("keydown", down);
    target.addEventListener("keyup", up);
    return () => { target.removeEventListener("keydown", down); target.removeEventListener("keyup", up); };
  }
}
