export interface OpcodeDefinition {
  code: number;
  mnemonic: string;
  mode: string;
  bytes: number;
  cycles: number;
  pageCrossPenalty?: boolean;
}

export const OPCODES: OpcodeDefinition[] = [
  { code: 0x00, mnemonic: "BRK", mode: "IMM", bytes: 1, cycles: 7 },
  { code: 0x20, mnemonic: "JSR", mode: "ABS", bytes: 3, cycles: 6 },
  { code: 0x40, mnemonic: "RTI", mode: "IMP", bytes: 1, cycles: 6 },
  { code: 0x60, mnemonic: "RTS", mode: "IMP", bytes: 1, cycles: 6 },
  { code: 0x69, mnemonic: "ADC", mode: "IMM", bytes: 2, cycles: 2 },
  { code: 0x85, mnemonic: "STA", mode: "ZP", bytes: 2, cycles: 3 },
  { code: 0x8D, mnemonic: "STA", mode: "ABS", bytes: 3, cycles: 4 },
  { code: 0xA9, mnemonic: "LDA", mode: "IMM", bytes: 2, cycles: 2 },
  { code: 0xAA, mnemonic: "TAX", mode: "IMP", bytes: 1, cycles: 2 },
  { code: 0xE8, mnemonic: "INX", mode: "IMP", bytes: 1, cycles: 2 },
  { code: 0xEA, mnemonic: "NOP", mode: "IMP", bytes: 1, cycles: 2 },
  { code: 0xF0, mnemonic: "BEQ", mode: "REL", bytes: 2, cycles: 2, pageCrossPenalty: true }
];

export function opcodeByCode(code: number): OpcodeDefinition | undefined {
  return OPCODES.find((opcode) => opcode.code === (code & 0xff));
}
