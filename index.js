const EventEmitter = require("events");


class GameRoom extends EventEmitter{
    constructor(roomId) {
        super();
        this.roomId = roomId;
        this.players = [];
    }

    join(player){
        this.players.push(player);
        this.emit("player join", player);
    }

    leave(player) {
        const index = this.players.indexOf(player);
        if ( index!== -1){
            this.players.splice(index,1)
            this.emit("player left", player)
        }
    }
}

//create a game room

const room = new GameRoom("room1");

//Event listner
room.on("player join" , (player) => {
    console.log(`${player}  join the room`);
});

room.on("player left" , (player) => {
    console.log(`${player}  left the room`);
});

//players join and leave room

room.join("Player 1");
room.join("Player 2");
room.leave("Player 1");