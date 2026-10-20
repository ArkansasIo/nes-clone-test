import { Mapper } from "./Mapper.js";
import { Mapper000 } from "./Mapper000.js";

export function createMapper(number: number, prg: Uint8Array, chr: Uint8Array): Mapper {
  switch (number) {
    case 0: return new Mapper000(prg, chr);
    default: throw new Error(`Unsupported mapper: ${number}`);
  }
}
