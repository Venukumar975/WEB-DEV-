import { LoadReactIcon as LoadImg } from "./index.jsx"
import React from "react"


export const Header =() =>{
    return (
            <header className="header">
                        <LoadImg/>
                        <nav className="nav-bar">
                            <ul className="nav-list">
                                <li>Pricing</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </nav>
            </header>
           
    )
}