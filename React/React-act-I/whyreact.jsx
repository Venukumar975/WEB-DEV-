import {Header} from './header.jsx'
import React from "react"
import Footer from './footer.jsx'

const WhyReact = () => {
    return (
        <main>
             <Header/>
             <h1> Why am I excited to work with <span>React!</span> </h1>

            <ol>
                <li>React is very popular </li>
                <li>It has good abstraction </li>
                <li>Has large developing community</li>
                <li>Used by tech Giants</li>
                <li>Fun to work with</li>
            </ol>
            <Footer/>
        </main>
       
    )
}

export default WhyReact;