import React, { Component } from 'react';
import {Link} from "react-router-dom"

export default class Home extends Component{
    constructor(){
        super()
    }

    render(){
        return (
            <div className='HomeContainer flex-centered'>
                <h2>Quiz App</h2>
                <Link to={"/Quiz"}><button>Play</button></Link>
            </div>
        )
    }
} 