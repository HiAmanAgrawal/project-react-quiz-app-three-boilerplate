import React, {useState} from 'react';
import Data from "../resources/quizQuestion.js"
import {Link} from "react-router-dom"

const Quiz = () => {

    const [currQues , setCurrQues] = useState(0)
    const [score , setScore] = useState(0)

    let handleNext = () =>{
        if (currQues == Data.length - 1 ) {
            setCurrQues(0)
        }else{
            setCurrQues((prev)=>prev+1)
        }
    }
    let handlePrev = () =>{
        if (currQues == 0) {
            setCurrQues(Data.length - 1)
        }else{
            setCurrQues((prev)=>prev-1)
        }
    }

    let handleQuit = () =>{
        window.confirm("Do you want to Quit?")
    }

    let handleoption = (e) =>{
        if (e.target.textContent == Data[currQues].answer){
            alert("Correct Answer")
            setScore((prev)=>prev+1)   
            setCurrQues((prev)=>prev+1)
        }else{
            alert("Wrong Answer")
            setCurrQues((prev)=>prev+1)
        }
    }

    let handleFinish = ()=>{
        localStorage.setItem("score" , score)
        localStorage.setItem("currques" , currQues)
    }

    return (
        <div className='QuizSection flex-centered'>
            <div className='Quiz-container'>
                <h1>Question</h1>
                <div className='questionNumber'>
                    <p><span>{currQues + 1}</span> of 15</p>
                </div>
                <h2>{Data[currQues].question}</h2>
                <div className='optionsDiv'>

                    <button className='option' onClick={handleoption}>{Data[currQues].optionA}</button>
                    <button className='option' onClick={handleoption}>{Data[currQues].optionB}</button>
                    <button className='option' onClick={handleoption}>{Data[currQues].optionC}</button>
                    <button className='option' onClick={handleoption}>{Data[currQues].optionD}</button>
                </div>
                <div className='navigationOptions'>
                    <button className='navibtn prev' onClick={handlePrev}>Previous</button>
                    <button className='navibtn next' onClick={handleNext}>Next</button>
                    <button className='navibtn quit' onClick={handleQuit}>Quit</button>
                    <Link to={'/result'}><button className='navibtn finish' onClick={handleFinish}>Finish</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Quiz