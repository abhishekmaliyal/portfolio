import Greetings from "@/components/Greetings";
import TechStack from "@/components/TechStack";

export default function Home() {
    return (
        <>
            <div className="relative pointer-events-none">
                <div className=" w-full h-auto text-3xl bg-transparent text-black py-20 px-10 justify-center items-center">
                    <div className="hello w-[800px]">
                        <Greetings />
                    </div>
                    <div className="intro w-[800px]">
                        <h3 className="font-bold text-3xl ">
                            I Am Abhishek Maliyal, A Front-End Web Developer
                        </h3>
                    </div>
                </div>
                <div className="w-full h-auto text-3xl text-black py-20 px-10 justify-center items-center">
                    <TechStack />
                </div>
            </div>
        </>
    );
}
