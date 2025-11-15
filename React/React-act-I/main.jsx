import React from "react"
import { createRoot } from "react-dom/client"
import WelcomeFun , { LoadReactIcon as LoadImg } from "./index.jsx"
import AboutReact from "./about.jsx" 
import WhyReact from "./whyreact.jsx"


const root = createRoot(document.getElementById("root"))



// JS doesnt hoist arrow functions
// Also React components ( functions which return react elements ) should follow PascalCase convention
// In react when we want to return multiple elements we should wrap them up in a parent element like div ( this is called random housekeeping )

root.render(
    <>
        {/*<AboutReact/>*/}
        <WhyReact/>  {/* tags can be either self closing or paired tags */}
    </>
    
    
)
