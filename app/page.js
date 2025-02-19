"use client";

import Greetings from "@/components/Greetings";
import TechStack from "@/components/TechStack";
import CircularText from "@/components/Connect";

export default function Home() {
    return (
        <>
            <div className="relative backdrop-blur-2xl overflow-x-hidden h-screen overflow-y-scroll snap-y snap-mandatory">
                <div className=" w-screen h-screen flex items-center justify-center snap-start">
                    <Greetings />
                    <div className="">
                        <div className="flex flex-col h-auto items-center justify-around font-extrabold text-[8rem] tracking-[0.3em]">
                            <p className="name">A B H I </p>
                            <p className="name"> S H E K</p>
                            <p className="name"> M A L I</p>
                            <p className="name">Y A L</p>
                        </div>
                    </div>
                </div>
                <div className="snap-start w-auto h-screen justify-center items-center">
                    <TechStack />
                </div>
            </div>
            <CircularText
                text="CONNECT*WITH*ME*"
                onHover="goBonkers"
                spinDuration={50}
                className="custom-class fixed z-0 bottom-5 right-5 "
            />
        </>
    );
}
