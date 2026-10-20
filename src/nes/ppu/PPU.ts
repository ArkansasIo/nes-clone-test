export class PPU {
 private readonly context:CanvasRenderingContext2D;private readonly image:ImageData;private readonly registers=new Uint8Array(8);
 constructor(private readonly canvas:HTMLCanvasElement){const c=canvas.getContext("2d");if(!c)throw new Error("Canvas 2D context unavailable.");this.context=c;this.context.imageSmoothingEnabled=false;this.image=c.createImageData(256,240)}
 reset():void{this.registers.fill(0);this.context.clearRect(0,0,this.canvas.width,this.canvas.height)}
 readRegister(address:number):number{return this.registers[address&7]!}
 writeRegister(address:number,value:number):void{this.registers[address&7]=value&255}
 /** Decorative test frame, not NES hardware rendering. */
 renderDemoFrame():void{for(let y=0;y<240;y++)for(let x=0;x<256;x++){const i=(y*256+x)*4,g=x%16===0||y%16===0;this.image.data[i]=g?39:16;this.image.data[i+1]=g?81:29;this.image.data[i+2]=g?96:42;this.image.data[i+3]=255}for(let y=92;y<148;y++)for(let x=42;x<214;x++){const i=(y*256+x)*4;this.image.data[i]=18;this.image.data[i+1]=34;this.image.data[i+2]=45;this.image.data[i+3]=255}this.context.putImageData(this.image,0,0)}
}