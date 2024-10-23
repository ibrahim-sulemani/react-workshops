import Field from "./Field";
import { useState } from "react";
import checkWinner from "./Utils/checkWinner";

const Board = () => {
  const [boardArray, setBoardArray] = useState(Array(9).fill(null));
  const [isCurrentPlayerX, setIsCurrentPlayerX] = useState(true);

  const fieldClick = (index) => {

    setBoardArray((previousBoardArray)=>{
      let newBoardArray = [...previousBoardArray];

      if(previousBoardArray[index] === null) {
        newBoardArray[index] = isCurrentPlayerX ? 'X' : 'O';
        setIsCurrentPlayerX(!isCurrentPlayerX);
        
      }
      return newBoardArray;
    });
    const winner = checkWinner(boardArray);

    if(winner!==null) {
      alert(`Winner: ${winner}`);
    }

  }

  return (
    <>
      {
        boardArray.map((field, index) => {
          if(index % 3 === 0) {
            return <div>
              {
                [0, 1, 2].map(i => 
                  <Field 
                    key={index + i} 
                    element={boardArray[index + i]}
                    index={index + i} 
                    clickFieldHandler={fieldClick} />
                  
                  
                )
              }
              {/* <Field key={index} index={index} clickFieldHandler={fieldClick} /> */}
              {/* <Field key={index+2} index={index+2} clickFieldHandler={fieldClick} /> */}
            </div>
          }
        
      })
      }
      {/* <div>
        <Field index={0} />
        <Field />
        <Field />
      </div>

      <div>
        <Field />
        <Field />
        <Field />
      </div>

      <div>
        <Field />
        <Field />
        <Field />
      </div> */}
    </>
  );
};

export default Board;
