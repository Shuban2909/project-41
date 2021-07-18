class Player {
    constructor() {
        this.index = null;
        this.distance = 0;
        this.name = null;
        this.SCORE = 0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance,
            SCORE:this.SCORE
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }

    // fruitNumber(){
    //     var count= database.ref("score");
    //     count.on("value",(data)=>{
    //     this.SCORE = data.val();
        
    //      } )
    
      //}
    
    //   static updateFruits(counts){
    //     database.ref('/').update({
    //     count:counts
    //     });
    //   }

    
}

