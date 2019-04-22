import React, { Component } from "react";
import Square from "../components/Square";

class GameBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: []
    };
  }

  componentDidMount() {
    // Generate Board and state
    //const player_1 = players[0];
    //const player_2 = players[1];
    //const { players: [player_1, player_2] } = this.props;

    //const squares = [];
  }

  render() {
    // const divStyle = {
    //     backgroundImage: 'url(' + post.featured_image_src + ')'
    //   }

    // const indexToCoord = (i) => {
    //     return [i%12, Math.floor(i/12)];
    //  }

    const tileSet = [
      "row-1-col-1.png", //0
      "row-1-col-3.png", //1
      "row-4-col-3.png", //2
      "row-2-col-2.png", //3
      "row-2-col-5.png", //4
      "row-1-col-6.png", //5
      "row-2-col-6.png", //6
      "row-1-col-7.png", //7
      "row-2-col-7.png", //8
      "row-1-col-4.png", //9
      "row-2-col-4.png", //10
      "row-4-col-4.png", //11
      "row-2-col-3.png", //12
      "row-4-col-8.png", //13
      "row-4-col-10.png", //14
      "row-1-col-8.png", //15
      "row-1-col-10.png", //16
      "row-2-col-8.png", //17
      "row-2-col-10.png", //18
      "row-3-col-8.png", //19
      "row-3-col-10.png", //20
      "row-3-col-5.png", //21
      "row-3-col-2.png", //22
      "row-1-col-11.png", //23
      "row-2-col-11.png", //24
      "row-1-col-12.png", //25
      "row-2-col-12.png" //26

    ];
    let squareBackground = tileSet[0];
    let gameMap = [
      0,0,0,0,0,0,0,0,0,0,0,0,0,
      0,5,1,1,1,1,9,1,1,1,1,7,0,
      0,3,0,0,0,0,10,0,0,0,0,4,0,
      0,3,1,25,0,15,13,16,0,23,1,4,0,
      0,3,0,10,0,17,12,18,0,10,0,4,0,
      0,3,2,26,0,19,14,20,0,24,2,4,0,
      0,3,0,0,0,0,10,0,0,0,0,4,0,
      0,6,2,2,2,2,11,2,2,2,2,8,0,
      0,0,0,0,0,0,0,0,0,0,0,0,0
    ];
    //let i = 0;
    //const coord = indexToCoord(gameMap[i]);

    return (
        <div className="row board mt-3 mb-3">
          {gameMap.map(e => {
        switch (e) {
            case 0:
                //row-1-col-1.png";
                squareBackground = tileSet[0];
                break;
            case 1:
                //row-1-col-3.png";
                squareBackground = tileSet[1];
                break;
            case 2:
                //row-4-col-3.png";
                squareBackground = tileSet[2];
                break;
            case 3:
                //row-2-col-2.png";
                squareBackground = tileSet[3];
                break;
            case 4:
                //row-2-col-5.png";
                squareBackground = tileSet[4];
                break;
            case 5:
                //row-1-col-6.png";
                squareBackground = tileSet[5];
                break;
            case 6:
                //row-2-col-6.png";
                squareBackground = tileSet[6];
                break;
            case 7:
                //row-1-col-7.png";
                squareBackground = tileSet[7];
                break;
            case 8:
                //row-2-col-7.png";
                squareBackground = tileSet[8];
                break;
            case 9:
                //row-1-col-4.png
                squareBackground = tileSet[9];
                break;
            case 10:
                //row-2-col-4.png
                squareBackground = tileSet[10];
                break;
            case 11:
                //row-4-col-4.png
                squareBackground = tileSet[11];
                break;
            case 12:
                //row-2-col-3.png
                squareBackground = tileSet[12];
                break;
            case 13:
                //row-4-col-8.png
                squareBackground = tileSet[13];
                break;
            case 14:
                //row-4-col-10.png
                squareBackground = tileSet[14];
                break;
            case 15:
                //row-1-col-8.png
                squareBackground = tileSet[15];
                break;
            case 16:
                //row-1-col-10.png
                squareBackground = tileSet[16];
                break;
            case 17:
                //row-2-col-8.png
                squareBackground = tileSet[17];
                break;
            case 18:
                //row-2-col-10.png
                squareBackground = tileSet[18];
                break;
            case 19:
                //row-3-col-8.png
                squareBackground = tileSet[19];
                break;
            case 20:
                //row-3-col-10.png
                squareBackground = tileSet[20];
                break;
            case 21:
                //row-3-col-5.png
                squareBackground = tileSet[21];
                break;
            case 22:
                //row-3-col-2.png
                squareBackground= tileSet[22];
                break;
            case 23:
                //row-3-col-11.png
                squareBackground = tileSet[23];
                break;
            case 24:
                //row-4-col-11.png
                squareBackground = tileSet[24];
                break;
            case 25:
                //row-3-col-12.png
                squareBackground = tileSet[25];
                break;
            case 26:
                //row-4-col-12.png
                squareBackground= tileSet[26];
                break;
            default:
                //row-1-col-1.png";
                squareBackground = tileSet[0];
            }
            return (
              
            <Square imgSrc={squareBackground} />
                
            );
          })}
        </div>
    );
  }
}
export default GameBoard;
