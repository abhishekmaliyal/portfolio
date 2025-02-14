'use client'

import { useEffect, useState } from "react";

const Greetings = () => {
    const [greeting, setGreeting] = useState("hello");
    useEffect(() => {
        const greetings = [
            "Hello", // English
            "Hola", // Spanish
            "Namaskaar", // Hindi
            "Bonjour", // French
            "Hallo", // German
            "Ciao", // Italian
            "Olá", // Portuguese
            "Привет", // Russian
            "こんにちは", // Japanese (Konnichiwa)
            "안녕하세요", // Korean (Annyeonghaseyo)
            "你好", // Chinese (Nǐ hǎo)
            "Merhaba", // Turkish
            "Hej", // Swedish/Danish
            "Ahoj", // Czech/Slovak
            "Szia", // Hungarian
            "Salut", // Romanian
            "Γεια σας", // Greek (Geia sas)
            "Shalom", // Hebrew
            "Sawubona", // Zulu
            "Selam", // Arabic (Salam)
        ];
        const interval = setInterval(() => {
            setGreeting((prevGreeting) => {
                const currentIndex = greetings.indexOf(prevGreeting);
                const nextIndex = (currentIndex + 1) % greetings.length;
                return greetings[nextIndex];
            });
        }, 2000);

        return () => clearInterval(interval);
    },[]);

    return (
        <div>
            <h6 className="text-8xl text-[#4F1787]">{greeting}</h6>
        </div>
    );
};

export default Greetings;
