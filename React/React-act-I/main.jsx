import React from "react";
import { createRoot } from "react-dom/client"
import Myfun from "./index.jsx"

const root = createRoot(document.getElementById("root"))

// In react when we want to return multiple elements we should wrap them up in a parent element like div ( this is called random housekeeping )
root.render(
    <div>
        <Myfun/>
        <Myfun/>
        

    </div>
    
)