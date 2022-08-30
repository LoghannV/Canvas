class Comida{
    constructor(ctx,snake){
        this.snake = snake
        this.ctx = ctx
        this.altura = 10
        this.largura = 10
        this.x = Math.random()*this.ctx.canvas.width - this.largura
        this.y = Math.random()*this.ctx.canvas.height - this.altura
    }
    gerenciar(){
        if(
            this.snake.x+this.snake.largura>=this.x
            &&
            this.snake.y+this.snake.altura<=this.y+this.altura
        ){
            this.x = Math.random()*this.ctx.canvas.width 
            this.y = Math.random()*this.ctx.canvas.height
        }else{
            console.log((this.snake.x+this.snake.largura)+' = '+this.x)
        }
    }
    desenha(){
        this.gerenciar()
        this.ctx.fillStyle="#fff"
        this.ctx.fillRect(this.x,this.y,this.largura,this.altura)
    }
}