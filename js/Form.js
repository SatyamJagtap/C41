class Form{
    constructor(){
        this.title = createElement("h1","Car Racing")
        this.input = createInput("name");
        this.button = createButton("Start the Race");
        this.greeting = createElement("h2");
    }

    hideForm(){
        this.title.hide();
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        
        this.title.position(windowWidth/2,200);
        this.input.position(windowWidth/2,windowHeight/2);  
        this.button.position(windowWidth/2,windowHeight/2+100)

        

        this.button.mousePressed(()=>{
            this.input.hide();
            this.title.hide();
            this.button.hide();
            this.greeting.position(windowWidth/2,200)
            player.name = this.input.value();
            playerCount = playerCount+1;
            player.index = playerCount;
            player.update();
            player.updatePlayerCount(playerCount)            
            this.greeting.html("Hello "+player.name);
        });
    }
}