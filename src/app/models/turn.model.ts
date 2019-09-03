export class Turn {
    numberOfTurn: number;
    scorePlayerOne: number;
    scorePlayerTwo: number;
    namePlayer1: string;
    namePlayer2: string;
    constructor(){
        this.scorePlayerOne = 0;
        this.scorePlayerTwo = 0;
        this.namePlayer1 = "Player 1";
        this.namePlayer2 = "Player 2";
    }
}
