"use client";
import Navigation from "@/components/Navigation";
import { ChakraProvider, Box, Text, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import JobTitle from "@/components/JobTitle";
import dynamic from "next/dynamic";
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, Animator, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

export default function Main() {
    return (
        <ChakraProvider>
            <Box zIndex={99999} width="100%" height="100vh">
                {/* <Navigation /> */}
                <ScrollContainer snap="mandatory">
                    <ScrollPage>
                        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                            <Box style={{
                                background: "none",
                                width: "100vw",
                                height: "100vh",
                                position: "relative",
                                zIndex: 99999,
                            }}>
                                <Box width={800} justifyContent="center" alignItems="flex-end" flexDirection="column" position="absolute" height="100vh" right={32} top={0} display="flex">
                                    <Text as="h1" lineHeight={1} fontSize={128} color="white" fontWeight="bold" textShadow="0px 0px 6px #000000">Trieu Vo</Text>
                                    <JobTitle />
                                </Box>
                            </Box>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={ZoomInScrollOut}>
                            <Box style={{
                                background: "none",
                                width: "100vw",
                                height: "100vh",
                                position: "relative",
                                zIndex: 99999,
                            }}>
                                <Box width={800} justifyContent="center" alignItems="flex-start" flexDirection="column" position="absolute" height="100vh" right={32} top={0} display="flex">
                                    <Box as="h2" style={{ fontSize: "72px", fontWeight: "bold", color: "white" }}>A little bit about me👋🏻</Box>
                                    <Box as="h2" style={{ fontSize: "32px", color: "white", textAlign: "left" }}>
                                        I'm studied Software Engineering in <br /><b>Ho Chi Minh University of Science</b> from 2018 to 2022. Currently, I have 2 year of experiences and working as Software Engineer at KiteMetric.
                                    </Box>
                                </Box>
                            </Box>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={ZoomInScrollOut}>
                            <Box style={{
                                background: "none",
                                width: "100vw",
                                height: "100vh",
                                position: "relative",
                                zIndex: 99999,
                            }}>
                                <Box width={800} justifyContent="center" alignItems="flex-start" flexDirection="column" position="absolute" height="100vh" right={32} top={0} display="flex">
                                    <Box as="h2" style={{ fontSize: "72px", fontWeight: "bold", color: "white" }}>Frontend Skills ✨</Box>
                                    <Box as="h2" style={{ fontSize: "32px", color: "white", textAlign: "left" }}>
                                        <ul>
                                            <li>ReactJS</li>
                                            <li>NextJS</li>
                                            <li>HTML</li>
                                            <li>CSS</li>
                                            <li>Javascript</li>
                                            <li>Typescript</li>
                                        </ul>
                                    </Box>
                                </Box>
                            </Box>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={ZoomInScrollOut}>
                            <Box style={{
                                background: "none",
                                width: "100vw",
                                height: "100vh",
                                position: "relative",
                                zIndex: 99999,
                            }}>
                                <Box width={800} justifyContent="center" alignItems="flex-start" flexDirection="column" position="absolute" height="100vh" right={32} top={0} display="flex">
                                    <Box as="h2" style={{ fontSize: "72px", fontWeight: "bold", color: "white" }}>Backend Skills ✨</Box>
                                    <Box as="h2" style={{ fontSize: "32px", color: "white", textAlign: "left" }}>
                                        <ul>
                                            <li>NodeJS</li>
                                            <li>ExpressJS</li>
                                            <li>Python</li>
                                            <li>Django</li>
                                            <li>Golang</li>
                                        </ul>
                                    </Box>
                                </Box>
                            </Box>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={ZoomInScrollOut}>
                            <Box style={{
                                background: "none",
                                width: "100vw",
                                height: "100vh",
                                position: "relative",
                                zIndex: 99999,
                            }}>
                                <Box width={800} justifyContent="center" alignItems="flex-start" flexDirection="column" position="absolute" height="100vh" right={32} top={0} display="flex">
                                    <Box as="h2" style={{ fontSize: "72px", fontWeight: "bold", color: "white" }}>Mobile Skills ✨</Box>
                                    <Box as="h2" style={{ fontSize: "32px", color: "white", textAlign: "left" }}>
                                        <ul>
                                            <li>React Native</li>
                                            <li>Android Studio</li>
                                            <li>Java</li>
                                        </ul>
                                    </Box>
                                </Box>
                            </Box>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={ZoomInScrollOut}>
                            <Box style={{
                                background: "none",
                                width: "100vw",
                                height: "100vh",
                                position: "relative",
                                zIndex: 99999,
                            }}>
                                <Box width={800} justifyContent="center" alignItems="flex-start" flexDirection="column" position="absolute" height="100vh" right={32} top={0} display="flex">
                                    <Box as="h2" style={{ fontSize: "72px", fontWeight: "bold", color: "white" }}>Game Skills ✨</Box>
                                    <Box as="h2" style={{ fontSize: "32px", color: "white", textAlign: "left" }}>
                                        <ul>
                                            <li>Unity</li>
                                            <li>C#</li>
                                        </ul>
                                    </Box>
                                </Box>
                            </Box>
                        </Animator>
                    </ScrollPage>
                    <ScrollPage>
                        <Animator animation={ZoomInScrollOut}>
                            <Box style={{
                                background: "none",
                                width: "100vw",
                                height: "100vh",
                                position: "relative",
                                zIndex: 99999,
                            }}>
                                <Box width={800} justifyContent="center" alignItems="flex-start" flexDirection="column" position="absolute" height="100vh" right={32} top={0} display="flex">
                                    <Box as="h2" style={{ fontSize: "72px", fontWeight: "bold", color: "white" }}>Contact Me 📩</Box>
                                    <Box as="h2" style={{ fontSize: "32px", color: "white", textAlign: "left" }}>
                                        <ul>
                                            <li><b>Email:</b> <a href="mailto://minhtrieuvo600@gmail.com">minhtrieuvo600@gmail.com</a></li>
                                            <li><b>LinkedIn:</b> <a href="https://www.linkedin.com/in/vominhtrieu/">vominhtrieu</a></li>
                                        </ul>
                                    </Box>
                                </Box>
                            </Box>
                        </Animator>
                    </ScrollPage>
                </ScrollContainer>
                <Button className="down-arrow" position="fixed" bottom="30px" left="calc(50vw - 50px)" width="100px" display="flex" flexDirection="column" alignItems="center" background="none" _hover={{
                    background: "none",
                    cursor: "pointer",
                }}>
                    <ChevronDownIcon fontWeight="bold" fontSize={42} color="white" />
                </Button>
            </Box>
        </ChakraProvider>
    )
}