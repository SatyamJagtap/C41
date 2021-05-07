class Game{
    constructor(){

    }

    getGameState(){
        var refGS = database.ref("gameState")
        refGS.on("value",(data)=>{
            gameState = data.val()
        })
    }

     updateGameState(state){
         database.ref("/").update({
             gameState:state
         });
     } 

    wait(){
      if(gameState == 0){
         form = new Form();
         form.display();
         player = new Player();
         player.getPlayerCount();
      }

    } 
    
    play(){
       form.hideForm()

       if(keyDown(UP_ARROW)){
           player.distance += 10
       }
    }
}