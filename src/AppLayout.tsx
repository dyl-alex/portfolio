import React from "react";

const AppLayout = () => {
    
    return(
        <div>
            <div className="w-4/5 h-screen bg-slate-200 shadow-2xl ml-[10%] overflow-hidden absolute z-10 rounded-sm">

            </div>
            <div className="overflow-hidden">
                <div className="w-full h-full bg-sliding-pattern absolute opacity-30" id="sliding-pattern"></div>
                <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-40% to-emerald-500 to-90% absolute h-full w-full opacity-50"></div>
            </div>
        </div>
    )
}

export default AppLayout;