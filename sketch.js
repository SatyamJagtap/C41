var gameState = 0;
var playerCount;
var database;
var game,form;
var player
var allPlayer
var car1,car2,car3,car4,car
function setup(){
    
    createCanvas(windowWidth,windowHeight);
    database = firebase.database();
    game = new Game();
    game.getGameState();
    game.wait();
}

function draw(){ 
    if(playerCount ==4){
        game.updateGameState(1)
    }

    if(gameState == 1){
        game.play();
    }
}

