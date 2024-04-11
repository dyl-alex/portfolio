import React from "react";
import Nav from "./Components/Nav";

const AppLayout = () => {
    
    return(
        <div>
            <div className="w-4/5 h-screen bg-slate-200 shadow-2xl ml-[10%] mr-[10%] absolute z-10 rounded-sm">
                <Nav/>
            </div>
            <div className="overflow-hidden w-full h-full absolute">
                <div className="absolute w-[6000px] h-full bg-[size:5%] bg-sliding-pattern opacity-50 animate-slide" id="slider"></div>
                <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-40% to-emerald-500 to-90% absolute h-full w-full opacity-50"></div>
            </div>
        </div>
    )
}

export default AppLayout;