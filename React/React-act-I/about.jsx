import WelcomeFun, {LoadReactIcon as LoadImg} from "./index.jsx";
import React from "react"


const AboutReact = ()=> {
    return (
   <main>
        <WelcomeFun/>

        <LoadImg/>
        <h1>
           Fun facts about <span>React!</span>
        </h1>
        <ul>
            <li>First release in 2013</li>
            <li>Was originally created by Jordan Walker</li>
            <li>Has well over 200k stars on GitHub</li>
            <li>Is mainted by Meta</li>
            <li>Powers , thousands of enterprise apps , including mobile apps</li>
        </ul>
        

    </main>
    )
}

export default AboutReact;
