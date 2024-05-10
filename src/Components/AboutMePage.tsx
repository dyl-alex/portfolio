import React from "react";

const AboutMePage = () => {
    return(
        <div>
            <div className="w-full align-middle flex-col">
                <div className="w-5/6 h-[240px] bg-slate-100 m-auto mt-6 rounded-xl shadow-lg mb-6 flex-1">
                    <div className="flex-col">
                        <div className="text-lg mt-4 sm:text-2xl font-MerriWeather">Bio</div>
                        <div className="text-sm m-2 md:m-5 sm:text-lg font-MerriWeather">I grew up in Skippack, Pennsylvania and attended Perkiomen Valley High School. I am currently attending Arcadia Unviversity in persuit of my Bachelors in Computer Science. I am a member of the Arcadia Swim Team and was captain of both the Swim and Water Polo teams at Perkiomen Valley. I am set to graduate from Arcadia May 17th, 2024</div>
                    </div>
                </div>
                <div className="w-5/6 h-[240px] bg-slate-100 m-auto mt-6 rounded-xl shadow-lg mb-6 flex-1 flex-col">
                    <div className="flex-1 text-lg m-4 sm:text-2xl font-MerriWeather">Technologies</div>
                    <div className="flex-1 text-sm m-2 md:m-5 sm:text-lg font-MerriWeather">I have experience in the languages Python, Java, Javascript/Typescript, SQL, and C#, while utilziing Entity Framework, React, .Net, Docker, and many other technologies</div>
                </div>
                <div className="w-5/6 h-[240px] bg-slate-100 m-auto mt-6 rounded-xl shadow-lg mb-6 flex-1 flex-col">
                    <div className="text-lg sm:text-2xl font-MerriWeather">Hobbies</div>
                    <div className="flex-1 text-sm m-2 md:m-5 sm:text-lg font-MerriWeather">I enjoy fishing and exploring the outdoors in my freetime. While I'm inside, I enjoy watching cinema and engaging with friends on different video games. Fitness is a huge part of my life, and I am at the gym multiple times a week ontop of running and swimming outside</div>
                </div>
            </div>
        </div>
    )
}

export default AboutMePage;