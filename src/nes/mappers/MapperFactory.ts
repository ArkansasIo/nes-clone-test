import { Mapper } from "./Mapper.js";
import { Mapper000 } from "./Mapper000.js";
import { Mapper001 } from "./Mapper001.js";
import { Mapper002 } from "./Mapper002.js";
import { Mapper003 } from "./Mapper003.js";
import { Mapper004 } from "./Mapper004.js";

export function createMapper(number: number, prg: Uint8Array, chr: Uint8Array): Mapper {
  switch (number) {
    case 0: return new Mapper000(prg, chr);
    case 1: return new Mapper001(prg, chr);
    case 2: return new Mapper002(prg, chr);
    case 3: return new Mapper003(prg, chr);
    case 4: return new Mapper004(prg, chr);
    default: throw new Error(`Unsupported mapper: ${number}`);
  }
}
