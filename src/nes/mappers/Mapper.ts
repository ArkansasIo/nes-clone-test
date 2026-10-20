export interface Mapper {
  readonly id: number;
  cpuRead(address: number): number; cpuWrite(address: number, value: number): void;
  ppuRead(address: number): number; ppuWrite(address: number, value: number): void;
}
