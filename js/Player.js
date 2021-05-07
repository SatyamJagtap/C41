class Player{
    constructor(){
      this.index = null;
      this.name = null;
      this.distance = 0;

    }

    getPlayerCount(){
        var refGS = database.ref("playerCount")
        refGS.on("value",function(data){
            playerCount = data.val()
        })
    }

     updatePlayerCount(c){
         database.ref("/").update({
             playerCount:c
         });
     } 

    update(){
        database.ref("Players/player"+this.index).set({
            name:this.name,distance:this.distance
        });
    } 

    static getPlayerInfo(){
        var playInfo = database.ref("Players")
        playInfo.on("value",function(data){
            allPlayers = data.val();
        })
    }
}