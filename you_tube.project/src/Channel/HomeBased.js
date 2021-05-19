import React from 'react'
import{Route, Link} from "react-router-dom"
import About from './About.js'
import Home from './Home.js'

export default function HomeBased() {
    return (
        <div>
            <header>
                <Link to='/home'>Home</Link>
                <Link to='/about'>About</Link>
            </header>
            
            <div>
                
                    <Route path="/home" component={Home}/>
                    <Route path="/about" component={About}/>
                
            </div>
        </div>
    )
}
