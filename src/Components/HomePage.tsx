import { Accordion, AccordionDetails, AccordionSummary, Button} from "@mui/material";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import React, { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


const HomePage = () => {

    const [isOpen, setisOpen] = useState(false);

    const onOpen = (event: React.SyntheticEvent, expanded: boolean) => {
        setisOpen(!isOpen);
    }

    return(
        <div>
            <div className="sm:flex-col">

            <h1 className="mt-5 w-full text-xl sm:text-2xl font-MerriWeather"> Welcome to my website </h1>
            {
                <div className="sm:hidden m-3">
                <Accordion
                onChange={onOpen}
                >
                    <AccordionSummary
                    expandIcon={<ArrowDropDownIcon/>}
                    ><div className={`${isOpen ? 'opacity-0' : ''}`}>Headshot</div></AccordionSummary>
                </Accordion>
            </div>
            }
            <div className="h-full sm:h-[200px] lg:h-[680px] lg:max-h-[680px] sm:flex md:h-[475px] md:max-h-[800px] w-full font-MerriWeather">
                <div className="bg-[size:20%] sm:bg-[size:100%] md:flex-1 bg-headshot w-[100px] ml-4 mt-[20px] shadow-2xl rounded-lg
                "></div>
                <div className="sm:h-[200px] sm:w-[100px] md:h-[800px] lg:h-auto  md:flex-1 mt-[20px] ml-4 mr-4 bg-slate-100 rounded-lg shadow-2xl">
                    <h1 className="mt-4 text-lg sm:text-2xl">General Information</h1>
                    <h2 className="text-md sm:text-lg"><b>Email:</b> Dyalexander@comcast.net</h2>
                    <h2 className="text-md sm:text-lg"><b>GitHub:</b> <a href="https://github.com/dyl-alex" className="text-blue-800">https://github.com/dyl-alex</a></h2>
                    <h1 className="mt-1 sm:mt-4 text-lg sm:text-2xl">Current Education</h1>
                    <h2 className="sm:text-lg text-sm">Arcadia University</h2>
                    <h2 className="sm:text-md text-sm">August 2020 - May 2024</h2>
                    <div className="flex flex-col align-middle w-full">
                        <div className="w-5/6 mt-1 lg:h-[130px] bg-slate-300 rounded-xl shadow-md m-auto">
                            <div className="text-sm sm:text-lg sm:mt-1 mt-3">Current 3.12 Overall Gpa,</div>
                            <div className="text-sm sm:text-lg m-1">Dean's List Student (Spring 2021),</div>
                            <div className="text-sm sm:text-lg m-1">2021, 2023 MAC Winter Sports Honor Roll,</div>
                            <div className="text-sm sm:text-lg m-1">Member of Arcadia Men's Swimming for 4 years</div>
                        </div>
                    </div>
                    <h1 className="mt-4 text-lg sm:text-2xl">Current Employment</h1>
                    <h2 className="text-lg">Destro Machines</h2>
                    <h2 className="text-md">March 2022 - Current</h2>
                    <div className="flex flex-col align-middle w-full mb-3">
                        <div className="w-5/6 mt-1 h-[220px] sm:h-[130px] lg:h-[155px] bg-slate-300 rounded-xl shadow-md m-auto">
                            <div className="text-sm sm:text-[17px] mt-4 ml-1 mr-1">Develop and manage a full stack application consisting of a React frontend, .Net backend following a Mediator pattern, and a PostgreSQL database built using a code first approach with Entity Framework. Regularly communicate with team members in an Agile workflow environment </div>
                        </div>
                    </div>
                    <div className="flex-1">
                    <a href='Dylan Alexander Resume.pdf' download>
                        <Button component="label" variant="contained" size="large" tabIndex={-1} startIcon={<CloudDownloadIcon/>} style={{marginBottom: '10px'}}>
                                    Download Resume
                        </Button>
                    </a>
                    </div>
                </div>
            </div>
            <h1 className="text-lg m-1 sm:text-2xl sm:mt-2">Website created using React & Tailwindcss with help from MaterialUI</h1>
        </div>
        </div>
    )
}

export default HomePage;