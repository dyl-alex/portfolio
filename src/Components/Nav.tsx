import React from "react";

const Nav = ({setCurrentPage, currentPage}) => {

    const navList = [{
        title: "Home",
        index: 0
    },
    {
        title: "About Me",
        index: 1
    },
    {
        title: "Projects",
        index: 2
    }
    ]
    const navItems = navList.map((navItem) => 
    <div
        onClick={() => setCurrentPage(navItem.index)}
        className={`w-1/5 h-full flex-1  hover:bg-slate-300 sm:hover:animate-fadeBig ${navItem.index === 2 ? 'rounded-r-lg' : ''} ${navItem.index === 0 ? 'rounded-l-lg' : ''} ${navItem.index === currentPage ? ' bg-teal-600 animate-fade' : 'bg-white'} overflow-hidden`}>
            <div className="mt-[10px]">{navItem.title}</div>
    </div>
    )
    return(
        <div>
            <div className={`w-4/5 ml-[10%] mr-[10%] h-[50px] mt-3 flex overflow-hidden shadow-2xl font-MerriWeather`}>
                {navItems}
            </div>
        </div>
    )
}

export default Nav;