import React from "react";

const ProjectPage = () => {

    const isMobile = window.screen.width <= 640 

    return(
        <div>
            <div className="w-full align-middle flex-col font-MerriWeather">
            <div className="w-5/6 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] bg-slate-100 m-auto mt-6 rounded-xl shadow-lg mb-6 flex-1">
                <div className="flex-col">
                    <div className="flex flex-1">
                        <div className="flex-1 bg-icon1 w-2/4 lg:max-w-[427px] min-h-[110px] sm:h-[180px] md:h-[270px] lg:h-[400px] m-4 rounded-xl border-solid border-black border-2 bg-[size:115px] sm:bg-[size:200px] md:bg-[size:300px] lg:bg-[size:423px]"></div>
                    
                        <div className="flex-col w-full h-auto flex-1">
                            <div className="flex-1 mr-4 mt-10 sm:mt-14 md:mt-20 text-lg sm:text-xl md:text-[40px]">Caring for Friends</div>
                            <div className="flex-1 mr-4 text-sm md:mt-4 sm:text-xl md:text-[34px]">Flutter/AWS</div>
                            <div className="flex-1 mr-4 text-sm md:mt-4 sm:text-xl md:text-[30px] text-blue-800"><a href="https://github.com/arquisito/Caring-For-Friends-Delivery-App">Github</a></div>
                            <div className="flex-1 invisible lg:visible lg:text-2xl m-0 text-[0px] lg:m-4">Flutter application utilizing AWS services such as DynamoDb, Lambda, and Api Gateway and authenticated through Cognito & Amplify</div>
                        </div>
                    </div>
                    <div className="flex-1 text-sm md:text-lg m-1 lg:invisible">Flutter application utilizing AWS services such as DynamoDb, Lambda, and Api Gateway and authenticated through Cognito & Amplify</div>
                </div>
            </div>
            
            
            <div className="w-5/6 h-[250px] sm:h-[300px] md:h-[400px] lg:h-[450px] bg-slate-100 m-auto mt-6 rounded-xl shadow-lg mb-6 flex-1">
                <div className="flex-col">
                    <div className="flex flex-1">
                        <div className="flex-1 bg-icon2 w-[130px] lg:max-w-[427px] h-[110px] sm:h-[180px] md:h-[270px] lg:h-[400px] m-4 rounded-xl border-solid border-black border-2 bg-[size:115px] sm:bg-[size:200px] md:bg-[size:300px] lg:bg-[size:422px]"></div>
                    
                        <div className="flex-col w-full h-auto flex-1">
                            <div className="flex-1 mr-4 mt-10 sm:mt-14 md:mt-20 text-lg sm:text-xl md:text-[40px]">Nba Compare</div>
                            <div className="flex-1 mr-4 md:mt-4 text-sm sm:text-xl md:text-[34px]">React/d3.js</div>
                            <div className="flex-1 mr-4 md:mt-4 text-sm sm:text-xl md:text-[30px] text-blue-800"><a href="https://github.com/dyl-alex/nba-compare">Github</a></div>
                            <div className="flex-1 invisible lg:visible lg:text-2xl m-0 text-[0px] lg:m-4">Data Analysis application comparing different Nba players. Pulls from open source Nba api, utilizes React as a framework, and compiles the data into insightful and readable graphs</div>
                        </div>
                    </div>
                    <div className="flex-1 text-sm sm:text-md md:text-lg m-1 lg:invisible">Data Analysis application comparing different Nba players. Pulls from open source Nba api, utilizes React as a framework, and compiles the data into insightful and readable graphs</div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProjectPage;