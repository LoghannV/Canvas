class Cometa{
    constructor(ctx){
        this.ctx = ctx
        this.cometa = new Image()
        this.cometa.src='asteroide.png'
        this.x=this.ctx.canvas.width-this.cometa.width
        this.y=0
        this.velocidade = 3
        this.cometa.addEventListener("load",()=>{
            this.desenha()
        })
    }
    gerenciar(){
        if(this.x>=0 && this.x+this.cometa.width/2<this.ctx.canvas.width/2){
            this.x+=this.velocidade
            this.y+=this.velocidade
        }
        this.x+=this.velocidade
        this.y+=this.velocidade
      
    }
    desenha(){
        this.gerenciar()
        this.ctx.drawImage(this.cometa,this.x,this.y)
       
        console.log("passou aqui "+this.x)
    }
}