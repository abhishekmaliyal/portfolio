import React from "react";
import DecryptedText from "./Decrypt";
import ScrollVelocity from "./ScrollText";
import GradientText from "./GradientText";

export default function TechStack() {
    return (
        <div className="flex justify-between h-screen">
            <div className="about w-[60%] p-10">
                <GradientText
                    colors={["#2F4F4F", "#B22222", "#4B0082", "#8B0000"]
                    }
                    animationSpeed={10}
                    showBorder={false}
                    className="custom-class"
                >
                    <DecryptedText
                        text="I create shady and unhinged websites."
                        speed={70}
                        maxIterations={30}
                        characters="ABCDEFGHIJKLMNOPRSTUVWXYZ1234!?"
                        className="revealed"
                        parentClassName="all-letters"
                        encryptedClassName="encrypted"
                    />
                </GradientText>
            </div>
            <div className="w-[40%] flex flex-col place-content-center">
                <ScrollVelocity
                    texts={["HTML * CSS * JavaScript *", "ReactJS *", "NextJS *", "TailwindCSS *"]}
                    velocity={70}
                    className="custom-text py-5"
                    numCopies={6}
                />
            </div>
        </div>
    );
}

//
