import { useEffect, useState } from "react";
import "../styles/resultstyle.css";

const ResultComponent = () => {
  const [finalResult, setFinalResult] = useState()

  useEffect(()=>{

   let result =  localStorage.getItem("quizPercentage")
    setFinalResult(result)
  },[])
    return (
      <div>
        <div className="result">
          <h3>Result</h3>
        </div>
        <div className="score">
          <div style={{ textAlign: "center" }}>
            <p>You need more practice!</p>
            <h2 style={{ color: "#0000FF" }}>Your Score is 20%</h2>
          </div>
          <div >
            <div>
              <p>Total number of questions{finalResult}</p>
              <p>Total number of attempted questions</p>
              <p>Number of correct answers</p>
              <p>Number of wrong answers</p>
            </div>
            <div>
              <p>15</p>
              <p>9</p>
              <p>3</p>
              <p>6</p>
            </div>
          </div>
        </div>
        <div>
          <button>Play Again</button>
          <button >Back to Home</button>
        </div>
      </div>
    );
  }

export default ResultComponent;
