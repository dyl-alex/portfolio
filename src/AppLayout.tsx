import React, { useState } from "react";
import Nav from "./Components/Nav";
import HomePage from "./Components/HomePage";
import AboutMePage from "./Components/AboutMePage";
import ProjectPage from "./Components/ProjectPage";

const AppLayout = () => {
    const [currentPage, setCurrentPage] = useState(0);
    
    const buildPage = () => {
        switch (currentPage) {
            case (0): return(<HomePage/>)
            case (1): return(<AboutMePage/>)
            case (2): return(<ProjectPage/>)
            default: return(<HomePage/>)
        }
    }
    return(
        <div>
            <div className="w-4/5 max-h-auto bg-slate-50 shadow-2xl ml-[10%] mr-[10%] absolute z-10 rounded mt-2 mb-2">
                <Nav 
                currentPage = {currentPage}
                setCurrentPage = {setCurrentPage}
                />
                {buildPage()}
            </div>
            <div className="overflow-hidden w-full min-h-full max-h-auto fixed">
                <div className="absolute w-[6000px] h-full bg-[size:5%] bg-sliding-pattern opacity-50 animate-slide" id="slider"></div>
                <div className="bg-gradient-to-b from-red-500 to-neutral-900 absolute min-h-full w-full opacity-50"></div>
            </div>
        </div>
    )
}

export default AppLayout;