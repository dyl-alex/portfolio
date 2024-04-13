import React from "react";

const ProjectPage = () => {
    return(
        <div>
            <div className="w-full align-middle flex-col">
                <div className="w-5/6 h-[250px] bg-slate-100 m-auto mt-6 rounded-xl shadow-lg mb-6 flex-1">
                    <div className="flex-col">
                        <div className="flex flex-1">
                            <div className="flex-1 bg-icon1 w-2/4 min-h-[130px] m-4 rounded-xl border-solid border-black border-2 bg-[size:100%]"></div>
                        
                            <div className="flex-col w-full h-auto flex-1">
                                <div className="flex-1 mr-4 mt-10 text-lg md:text-2xl">Caring for Friends</div>
                                <div className="flex-1 mr-4 text-sm md:text-xl">Flutter/AWS</div>
                                <div className="flex-1 mr-4 text-sm md:text-xl text-blue-800"><a href="https://github.com/arquisito/Caring-For-Friends-Delivery-App">Github</a></div>
                            </div>
                        </div>
                        <div className="flex-1 text-sm md:text-lg mt-0">Flutter application utilizing AWS services such as DynamoDb, Lambda, and Api Gateway and authenticated through Cognito & Amplify</div>
                    </div>
                </div>
                
                
                <div className="w-5/6 h-[240px] bg-slate-100 m-auto mt-6 rounded-xl shadow-lg mb-6 flex-1">
                    <div className="flex-col">
                        <div className="flex flex-1">
                            <div className="flex-1 bg-icon2 w-[130px] h-[130px] m-4 rounded-xl border-solid border-black border-2 bg-[size:100%]"></div>
                        
                            <div className="flex-col w-full h-auto flex-1">
                                <div className="flex-1 mr-4 mt-10 text-lg md:text-2xl">Nba Compare</div>
                                <div className="flex-1 mr-4 text-sm md:text-xl">React/d3.js</div>
                                <div className="flex-1 mr-4 text-sm md:text-xl text-blue-800"><a href="https://github.com/dyl-alex/nba-compare">Github</a></div>
                            </div>
                        </div>
                        <div className="flex-1 text-sm md:text-lg mt-0">Data Analysis application comparing different Nba players. Pulls from open source Nba api, utilizes React as a framework, and compiles the data into insightful and readable graphs</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectPage;