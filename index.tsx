import React, { useContext, useState } from 'react';


const Array21 = () => {
    const [isActive, setIsActive] = useState(false);
    const [jumpingPiece, setJumpingPiece] = useState(null);
    const [jumpedPiece, setJumpedPiece] = useState(null);
    
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
	
    const numero = [1, 2, 3, 4, 5];
	
    const [element1, setElement1] = useState(1);

    const handleElement1 = (value: string) => {
        var y: number = +value; 
        setElement1(y);
    };
    
    //pawn=0,rook=1,knight=2,bishop=3,queen=4,king=5    
    const randomBoard = [[
        [null, null, null, null],
        [null, null, null, null],
        [null, null, ["rook", 2, 2], null],
        [["knight", 3, 0], ["pawn", 3, 1], null, ["bishop", 3, 3]]        
    ],[
        [null, null, ["rook", 0, 2], null],
        [["knight", 1, 0], ["pawn", 1, 1], null, ["bishop", 1, 3]],
        [null, null, null, null],
        [null, null, null, null]
    ],[
        [null, null, null, null],
        [null, null, ["rook", 1, 2], null],
        [["knight", 2, 0], ["pawn", 2, 1], null, ["bishop", 2, 3]],
        [null, null, null, null]        
    ]];
	
	
    const [board, setBoard] = useState([
        [null, null, ["rook", 0, 2], null],
        [["knight", 1, 0], ["pawn", 1, 1], null, ["bishop", 1, 3]],
        [null, null, null, null],
        [null, null, null, null]
    ]);

    const flat = board.reduce((arr, it) => [...arr, ...it], []); 
    
    //first click 'activates' the square being clicked (IF it has a game piece in it). 
    //On the second click, if you have isActive set to true, checks to see if the
    //second click is on an occupied square. If so, and provided it passes validation as a legal move,
    //the code will 'replace' the piece with the jumnping piece
    const activate = (value: any) => {
	//REJ DO - some code demo-ing the use of getRandomInt()
	const randomInt = numero[getRandomInt(1, 5)];   
	console.log("random Integer: " + randomInt);
	    
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

            board[newValue1][newValue2] = null; //set the old abandoned spot to null           
        }

        let flat = board.reduce((arr, it) => [...arr, ...it], []);   

        console.log("The board after piece change: " + board);        
        setBoard(board);

        setIsActive(false);        
    };   
    
    return(
        <div>
            <p>Array21</p>
	    <button onClick={() => setBoard(randomBoard[element1])}> initialize or reset board </button>                
            use this board:<input type="text" id="element1" value={element1} onChange={(e) => handleElement1(e.target.value)} /><br />    
            <div style={{width:"260px", height:"260px", display: "flex", alignItems: "center", flexWrap: "wrap"}}>
                {flat.map((value) => {
                  return <button style={{width: "25%", height: "25%"}} onClick={() => activate(value)}> {value} </button>;                    
                })}
            </div>
            <br />
        </div>
    );
};
export default Array21;
