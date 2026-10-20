import type{Cartridge}from"../cartridge/Cartridge.js";import type{Mapper}from"./Mapper.js";
export class Mapper000 implements Mapper{
 readonly id=0;constructor(private readonly cartridge:Cartridge){if(![16384,32768].includes(cartridge.prgRom.length))throw new Error("NROM PRG-ROM must be 16 KiB or 32 KiB.")}
 cpuRead(a:number):number{return a<32768||a>65535?0:this.cartridge.prgRom[(a-32768)%this.cartridge.prgRom.length]!}
 cpuWrite(_a:number,_v:number):void{}
 ppuRead(a:number):number{return a<0||a>8191?0:(this.cartridge.chrRom[a]??0)}
 ppuWrite(_a:number,_v:number):void{}
}