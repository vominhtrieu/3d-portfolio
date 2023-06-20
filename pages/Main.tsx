"use client";
import { Box, Text, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import JobTitle from "@/components/JobTitle";
import { ScrollContainer } from "react-scroll-motion";
import AnimatedPage from "@/components/AnimatedPage";

const TITLE_FONT_SIZE = {
    base: "32px",
    md: "72px",
}
const CONTENT_FONT_SIZE = {
    base: "18px",
    md: "32px",
}
export default function Main() {
    return (
        <Box zIndex={999999} width="100%" height="100vh">
            {/* <Navigation /> */}
            <ScrollContainer snap="mandatory">
                <AnimatedPage>
                    <Text as="h1" lineHeight={1} fontSize={{
                        base: 72,
                        md: 128
                    }} color="white" fontWeight="bold" textShadow="0px 0px 6px #000000">Trieu Vo</Text>
                    <JobTitle />
                </AnimatedPage>
                <AnimatedPage>
                    <Box as="h2" fontSize={TITLE_FONT_SIZE} style={{ fontWeight: "bold", color: "white" }}>A little bit about me👋🏻</Box>
                    <Box as="h2" fontSize={CONTENT_FONT_SIZE} style={{ color: "white", textAlign: "left" }}>
                        I&apos;m studied Software Engineering in <br />
                        <b>Ho Chi Minh University of Science</b> from 2018 to 2022.<br />
                        Currently, I have 2 year of experiences and working as Software Engineer at <b>KiteMetric</b>.
                    </Box>
                </AnimatedPage>
                <AnimatedPage>
                    <Box as="h2" fontSize={TITLE_FONT_SIZE} style={{ fontWeight: "bold", color: "white" }}>Frontend Skills ✨</Box>
                    <Box as="h2" fontSize={CONTENT_FONT_SIZE} style={{ color: "white", textAlign: "left" }}>
                        <ul>
                            <li>ReactJS</li>
                            <li>NextJS</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Typescript</li>
                        </ul>
                    </Box>
                </AnimatedPage>
                <AnimatedPage>
                    <Box as="h2" fontSize={TITLE_FONT_SIZE} style={{ fontWeight: "bold", color: "white" }}>Backend Skills ✨</Box>
                    <Box as="h2" fontSize={CONTENT_FONT_SIZE} style={{ color: "white", textAlign: "left" }}>
                        <ul>
                            <li>NodeJS</li>
                            <li>ExpressJS</li>
                            <li>Python</li>
                            <li>Django</li>
                            <li>Golang</li>
                        </ul>
                    </Box>
                </AnimatedPage>
                <AnimatedPage>
                    <Box as="h2" fontSize={TITLE_FONT_SIZE} style={{ fontWeight: "bold", color: "white" }}>Mobile Skills ✨</Box>
                    <Box as="h2" fontSize={CONTENT_FONT_SIZE} style={{ color: "white", textAlign: "left" }}>
                        <ul>
                            <li>React Native</li>
                            <li>Android Studio</li>
                            <li>Java</li>
                        </ul>
                    </Box>
                </AnimatedPage>
                <AnimatedPage>
                    <Box as="h2" fontSize={TITLE_FONT_SIZE} style={{  fontWeight: "bold", color: "white" }}>Game Skills ✨</Box>
                    <Box as="h2" fontSize={CONTENT_FONT_SIZE} style={{ color: "white", textAlign: "left" }}>
                        <ul>
                            <li>Unity</li>
                            <li>C#</li>
                        </ul>
                    </Box>
                </AnimatedPage>
                <AnimatedPage>
                    <Box as="h2" fontSize={TITLE_FONT_SIZE} style={{ fontWeight: "bold", color: "white" }}>Contact Me 📩</Box>
                    <Box as="h2" fontSize={CONTENT_FONT_SIZE} style={{ color: "white", textAlign: "left" }}>
                        <ul>
                            <li><b>Email:</b> <a href="mailto://minhtrieuvo600@gmail.com">minhtrieuvo600@gmail.com</a></li>
                            <li><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/vominhtrieu/">vominhtrieu</a></li>
                            <li><b>CV:</b> <a href="/TrieuVo.pdf">TrieuVo.pdf</a></li>
                        </ul>
                    </Box>
                </AnimatedPage>
            </ScrollContainer>
            <Button className="down-arrow" position="fixed" bottom="30px" left="calc(50vw - 50px)" width="100px" display="flex" flexDirection="column" alignItems="center" background="none" _hover={{
                background: "none",
                cursor: "pointer",
            }}>
                <ChevronDownIcon fontWeight="bold" fontSize={42} color="white" />
            </Button>
        </Box>
    )
}