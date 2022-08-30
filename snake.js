class Snake{
    constructor(ctx,teclado){
        this.ctx = ctx
        this.teclado = teclado
        this.altura = 20
        this.largura = 20
        this.x = this.ctx.canvas.width/2 - this.largura/2
        this.y = this.ctx.canvas.height/2 - this.altura/2
        this.inicioX = this.x
        this.inicioY = this.y
        this.velocidade = 2
      
    }
    gerenciar(){
        if(this.teclado.esquerda && this.x>0){
            this.x-= this.velocidade
        }
        if(this.teclado.direita){
            this.x+= this.velocidade
        }
        if(this.teclado.cima){
            this.y-=this.velocidade
        }
        if(this.teclado.baixo){
            this.y+=this.velocidade
        }
    }
    desenha(){
        this.gerenciar()
        this.ctx.fillStyle = "#0f0"
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }
}