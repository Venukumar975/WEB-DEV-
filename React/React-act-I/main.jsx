import React from "react";
import { createRoot } from "react-dom/client"
import WelcomeFun , { LoadReactIcon as LoadImg } from "./index.jsx"

const root = createRoot(document.getElementById("root"))



// JS doesnt hoist arrow functions
const AboutReact = ()=> {
    return (
   <main>
        <WelcomeFun/>

        <LoadImg/>
        <h1>
           Fun facts about <span />React!
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

const Page = () => {
    return (
        <main>
             <h1> Why am I excited to work with React </h1>

            <ol>
                <li>React is very popular </li>
                <li>It has good abstraction </li>
                <li>Has large developing community</li>
                <li>Used by tech Giants</li>
                <li>Fun to work with</li>
            </ol>
        </main>
       
    )
}
// In react when we want to return multiple elements we should wrap them up in a parent element like div ( this is called random housekeeping )
root.render(
    <main>
        <AboutReact/>
        <Page/>
    </main>
    
    
)
