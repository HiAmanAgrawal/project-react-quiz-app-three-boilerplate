import React, { Component } from 'react';
import {Link} from "react-router-dom"


export default class Result extends Component{
    
    constructor(){
        super()
    }
    
    render(){

        let score = localStorage.getItem("score")
        let attemped = localStorage.getItem("currques")

        return (
            <div className='result flex-centered'>
                <h2 style={{color:"green" , marginBottom:"50px"}}>Result</h2>

                <div className='resultSection'>
                    <h4>You need more practice!</h4>
                    <h2 style={{color:"blue" , marginTop:"30px" , fontSize:"35px"}}>Your Score is {score}</h2>
                    <div>
                        <div className='flex-centered resultOption'>
                            <p style={{fontWeight:"bold"}}>Total No of Questions</p>
                            <p>15</p>
                        </div>
                        <div className='flex-centered resultOption'>
                            <p style={{fontWeight:"bold"}}>Number of Attempted Questions</p>
                            <p>{attemped}</p>
                        </div>
                        <div className='flex-centered resultOption'>
                            <p style={{fontWeight:"bold"}}>Number of Correct Answers</p>
                            <p>{score}</p>
                        </div>
                        <div className='flex-centered resultOption'>
                            <p style={{fontWeight:"bold"}}>Number of Wrong Answers</p>
                            <p>{attemped - score}</p>
                        </div>
                        
                    </div>
                </div>

                <div className='buttons'>
                    <Link to={"/quiz"}><button className='playagain'>Play Again</button></Link>
                    <Link to={"/"}><button className='backtohome'>Back to Home</button></Link>
                </div>
            </div>
        )
    }
}