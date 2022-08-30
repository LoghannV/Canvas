class Jogador{
    constructor(ctx,teclado){
        this.ctx = ctx
        this.teclado = teclado
        this.vel=3
        this.nave = new Image()
        this.nave.src = 'nave.png'
        this.x=(this.ctx.canvas.width/2)-(this.nave.width/2)
        this.y=this.ctx.canvas.height-this.nave.height
        this.nave.addEventListener('load',()=>{
            this.desenhar()
        })
    }

    gerenciar(){
        if(this.teclado.esquerda && this.x>0){
            this.x-=this.vel
        }
        if(this.teclado.direita && (this.x+this.nave.width)<this.ctx.canvas.width){
            this.x+=this.vel
        }
        if(this.teclado.cima && this.y>0){
            this.y-=this.vel
        }
        if(this.teclado.baixo && (this.y+this.nave.height)<this.ctx.canvas.height){
            this.y+=this.vel
        }
     
    }

    desenhar(){
        this.gerenciar()
        this.ctx.drawImage(this.nave,this.x,this.y)
    }
}