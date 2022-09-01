class Player {
  constructor(){
    this.name = null
    this.positionX = 0
    this.positionY = 0
    this.index = null
    this.rank = 0
    this.fuel = 185
    this.life = 185
    this.score = 0
  }

  getCount(){
    var playerCountRef = database.ref("playerCount")
    playerCountRef.on("value",(data)=>{playerCount = data.val()})
  }

  updateCount(count){
    database.ref("/").update({playerCount:count})
  }

  addPlayer(){
    var playerIndex = "players/player"+this.index
    if(this.index==1){
      this.positionX = width/2-100
    }
    else{
     this.positionX = width/2+100
    }

    database.ref(playerIndex).set({
      name:this.name,
      positionX:this.positionX,
      positionY:this.positionY, 
      rank:this.rank,
      score:this.score,
      life:this.life,
    })
  }

  getDistance(){
    var distance = database.ref("players/player"+this.index)
    distance.on("value",(data)=>{
      var data = data.val()
      this.positionX = data.positionX;
      this.positionY = data.positionY;
      
    })
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref("players")
    playerInfoRef.on("value",(data)=>{allPlayers = data.val()})
  }

  update() {
    var playerIndex = "players/player"+this.index
    database.ref(playerIndex).update({
      positionX:this.positionX,
      positionY:this.positionY,
      rank:this.rank,
      score:this.score,
      life:this.life,
    })
  }

}
