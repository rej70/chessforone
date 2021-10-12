import React, { useContext, useState } from 'react';
//import * as Bishop from 'array21/bishop.png';

const Array21 = () => {

    const [chessImagePawn, setChessImagePawn] = useState("/assets/images/pawn.png");

    /**
    * Gets random int
    * @param min 
    * @param max 
    * @returns random int - min & max inclusive
    */
    const getRandomInt = (min: number, max: number) => {
	    min = Math.ceil(min);
	    max = Math.floor(max);
	    return Math.floor(Math.random() * (max - min + 1)) + min; 
    }
	
    const numero = [1, 2];//, 3, 4, 5];
    
    const [isActive, setIsActive] = useState(false);
    const [jumpingPiece, setJumpingPiece] = useState(null);
    const [jumpedPiece, setJumpedPiece] = useState(null);
    //pawn=0,rook=1,knight=2,bishop=3,queen=4,king=5
    
    //const [stars, setStars] = useState(utils.random(1, 9));

    const randomBoard = [[
        [["/assets/images/blank.png", 0, 0], ["/assets/images/blank.png", 0, 1], ["/assets/images/blank.png", 0, 2], ["/assets/images/blank.png", 0, 3]],
        [["/assets/images/blank.png", 1, 0], ["/assets/images/blank.png", 1, 1], ["/assets/images/blank.png", 1, 2], ["/assets/images/blank.png", 1, 3]],
        [["/assets/images/blank.png", 2, 0], ["/assets/images/blank.png", 2, 1], ["/assets/images/rook.png", 2, 2], ["/assets/images/blank.png", 2, 3]],
        [["/assets/images/knight.png", 3, 0], ["/assets/images/pawn.png", 3, 1], ["/assets/images/blank.png", 3, 2], ["/assets/images/bishop.png", 3, 3]]        
    ],[
        [["/assets/images/blank.png", 0, 0], ["/assets/images/blank.png", 0, 1], ["/assets/images/rook.png", 0, 2], ["/assets/images/blank.png", 0, 3]],
        [["/assets/images/knight.png", 1, 0], ["/assets/images/pawn.png", 1, 1], ["/assets/images/blank.png", 1, 2], ["/assets/images/bishop.png", 1, 3]],
        [["/assets/images/blank.png", 2, 0], ["/assets/images/blank.png", 2, 1], ["/assets/images/blank.png", 2, 2], ["/assets/images/blank.png", 2, 3]],
        [["/assets/images/blank.png", 3, 0], ["/assets/images/blank.png", 3, 1], ["/assets/images/blank.png", 3, 2], ["/assets/images/blank.png", 3, 3]]
    ],[
        [["/assets/images/blank.png", 0, 0], ["/assets/images/blank.png", 0, 1], ["/assets/images/blank.png", 0, 2], ["/assets/images/blank.png", 0, 3]],
        [["/assets/images/blank.png", 1, 0], ["/assets/images/blank.png", 1, 1], ["/assets/images/rook.png", 1, 2], ["/assets/images/blank.png", 1, 3]],
        [["/assets/images/knight.png", 2, 0], ["/assets/images/pawn.png", 2, 1], ["/assets/images/blank.png", 2, 2], ["/assets/images/bishop.png", 2, 3]],
        [["/assets/images/blank.png", 3, 0], ["/assets/images/blank.png", 3, 1], ["/assets/images/blank.png", 3, 2], ["/assets/images/blank.png", 3, 3]]
    ]];
    //if it might vary
    const foo: (string|number|null)[][] = [[ "message", 7, 5 ],[ "griff", 2, 3 ], [null]];
    //if its definite
    //[[string, string, number, number]] = [    ["aliceblue", "#f0f8ff", 240, 248, 255], ... ];

    // const [board, setBoard] = useState([]);

    const [element1, setElement1] = useState(1);

    const handleElement1 = (value: string) => {
        var y: number = +value; 
        setElement1(y);
    };
    
    const [board, setBoard] = useState([
        [["/assets/images/blank.png", 0, 0], ["/assets/images/blank.png", 0, 1], ["/assets/images/rook.png", 0, 2], ["/assets/images/blank.png", 0, 3]],
        [["/assets/images/knight.png", 1, 0], ["/assets/images/pawn.png", 1, 1], ["/assets/images/blank.png", 1, 2], ["/assets/images/bishop.png", 1, 3]],
        [["/assets/images/blank.png", 2, 0], ["/assets/images/blank.png", 2, 1], ["/assets/images/blank.png", 2, 2], ["/assets/images/blank.png", 2, 3]],
        [["/assets/images/blank.png", 3, 0], ["/assets/images/blank.png", 3, 1], ["/assets/images/blank.png", 3, 2], ["/assets/images/blank.png", 3, 3]]
    ]);
    
    //const [board, setBoard] = useState(randomBoard[getRandomInt(1, 2)]);

    const flat = board.reduce((arr, it) => [...arr, ...it], []); 
    
    //first click 'activates' the square being clicked (IF it has a game piece in it). 
    //On the second click, if you have isActive set to true, checks to see if the
    //second click is on an occupied square. If so, and provided it passes validation as a legal move,
    //the code will 'replace' the piece with the jumnping piece
    const activate = (value: any) => {
        //REJ DO - some code demo-ing the use of getRandomInt()
	    //const randomInt = numero[getRandomInt(1, 5)];   
	    //console.log("random Integer: " + randomInt);
        console.log("foo: " + foo);  
        console.log("value: " + value);  
        
        if(isActive){  //if true, this is a 'jump' move           
            setIsActive(false);
            jump(value, jumpingPiece, jumpedPiece);
        }
        else{       
            setIsActive(true);
            console.log("we just set isActive to true");
            setJumpingPiece(value);
            setJumpedPiece(value);
        }      
    };

    const jump = (value: any, jumpingPiece: any, jumpedPiece: any) => {      
        console.log("The board before piece change: " + board);
        
        if(value != null){  //this really needs to check if value[0] is null (value[0]) is the Name, or something like that          
            jumpingPiece = [jumpingPiece[0], value[1], value[2]];                    
            console.log("jumpingPiece: " + jumpingPiece);            
            
            board[value[1]][value[2]] = jumpingPiece; //set the spot you're jumping to, to null [this actually works]
            console.log("old spot: " + board[jumpingPiece[1]][jumpingPiece[2]]);
            let newValue1 = jumpedPiece[1];
            let newValue2 = jumpedPiece[2];          

            let abandonedSpace = ["/assets/images/blank.png", value[1], value[2]];

            board[newValue1][newValue2] = abandonedSpace; //set the old abandoned spot to null           
        }

        let flat = board.reduce((arr, it) => [...arr, ...it], []);   

        console.log("The board after piece change: " + board);
        console.log("board's type is: " + typeof board);
        setBoard(board);
        //setBoard(randomBoard);

        setIsActive(false);        

        //<img src={Bishop} alt="" />
    };    

    return(
        <div>
            <p>Array21</p>
            <img src="/assets/images/rook.png" alt="" />
            <img src={chessImagePawn} alt="" />         
            <button onClick={() => setBoard(randomBoard[element1])}> initialize or reset board </button>                
            use this board:<input type="text" id="element1" value={element1} onChange={(e) => handleElement1(e.target.value)} /><br />        
            <div style={{width:"260px", height:"260px", display: "flex", alignItems: "center", flexWrap: "wrap"}}>
                {flat.map((value) => {
                  return <button style={{width: "25%", height: "25%"}} onClick={() => activate(value)}> {value} <img src="/assets/images/bishop.png" alt="" /></button>;                    
                })}
            </div>
            <br />                                    
            <b>conditional 'src=' object - could be null, could have an image file location string</b>
        
            <img src="/assets/images/bishop.png" alt="" />
            <img src='{chessImagePawn}==null ? null : {chessImagePawn}' />            
            <img src={chessImagePawn} />
        </div>
        
    );
};

export default Array21;
