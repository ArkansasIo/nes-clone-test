export enum AddressingMode {
  Implied = "IMP",
  Accumulator = "ACC",
  Immediate = "IMM",
  ZeroPage = "ZP",
  ZeroPageX = "ZPX",
  ZeroPageY = "ZPY",
  Relative = "REL",
  Absolute = "ABS",
  AbsoluteX = "ABSX",
  AbsoluteY = "ABSY",
  Indirect = "IND",
  IndexedIndirect = "INDX",
  IndirectIndexed = "INDY"
}

export interface AddressResult {
  address: number;
  pageCrossed: boolean;
}
