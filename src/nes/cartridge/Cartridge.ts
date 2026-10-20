export type Mirroring="horizontal"|"vertical"|"four-screen";
export interface CartridgeHeader{format:"iNES"|"NES 2.0";mapper:number;submapper:number;prgRomSize:number;chrRomSize:number;mirroring:Mirroring;battery:boolean}
export class Cartridge{
 constructor(readonly header:CartridgeHeader,readonly prgRom:Uint8Array,readonly chrRom:Uint8Array){}
 static fromINES(bytes:Uint8Array):Cartridge{
 if(bytes.length<16||bytes[0]!==78||bytes[1]!==69||bytes[2]!==83||bytes[3]!==26)throw new Error("Invalid iNES file: missing NES signature.");
 const f6=bytes[6]!,f7=bytes[7]!;if((f7&12)===8)throw new Error("NES 2.0 size decoding is not implemented yet.");
 const trainer=(f6&4)!==0,prg=bytes[4]!*16384,chr=bytes[5]!*8192,start=16+(trainer?512:0);
 if(bytes.length<start+prg+chr)throw new Error("Truncated iNES ROM.");
 const mirroring:Mirroring=(f6&8)?"four-screen":(f6&1)?"vertical":"horizontal";
 return new Cartridge({format:"iNES",mapper:(f6>>4)|(f7&240),submapper:0,prgRomSize:prg,chrRomSize:chr,mirroring,battery:(f6&2)!==0},bytes.slice(start,start+prg),bytes.slice(start+prg,start+prg+chr))
 }
}