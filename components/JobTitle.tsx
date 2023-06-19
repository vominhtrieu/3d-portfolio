import { Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
const jobTitles = ["SoftwareEngineer", "FrontentEngineer", "BackendEngineer", "GameDeveloper"];

export default function JobTitle() {
    const [text, setText] = useState(jobTitles[0]);
    const [typing, setTyping] = useState(true);
    const [displayedText, setDisplayedText] = useState("");
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        let interval: any = null;
        if (typing) {
            interval = setTimeout(() => {
                if (displayedText.length < text.length) {
                    setDisplayedText(text.slice(0, displayedText.length + 1));
                } else {
                    setTimeout(() => {
                        setTyping(false);
                    }, 2000);
                }
            }, 100);
        } else {
            interval = setTimeout(() => {
                if (displayedText.length > 0) {
                    setDisplayedText(text.slice(0, displayedText.length - 1));
                } else {
                    setTyping(true);
                    let newIndex = currentTextIndex + 1;
                    if (currentTextIndex === jobTitles.length - 1) {
                        newIndex = 0;
                    }
                    setCurrentTextIndex(newIndex);
                    setText(jobTitles[newIndex]);
                }
            }, 50);
        }
        return () => clearTimeout(interval);
    }, [typing, displayedText, text, currentTextIndex]);

    return (
        <Text as="h2" fontSize={42} fontStyle="italic" color="#D2D2D2" fontWeight="thin" textShadow="0px 0px 4px #000000">{`<${displayedText} />`}</Text>
    )
}