import { Box } from "@chakra-ui/react";
import { Animator, Fade, ScrollPage, Sticky, batch, Move } from "react-scroll-motion";

// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

export default function AnimatedPage({ children, align = "flex-start" }: any) {
    return (
        <ScrollPage >
            <Animator style={{
                width: "100%",
                height: "100vh",
            }} animation={FadeUp}>
                <Box style={{
                    background: "none",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    zIndex: 99999,
                }} justifyContent={{
                    base: "center",
                    md: "flex-end",
                }}>
                    <Box width={780} justifyContent={{
                        base: "flex-start",
                        md: "center"
                    }} padding={5} alignItems={align} flexDirection="column" top={0} display="flex">
                        {children}
                    </Box>
                </Box>
            </Animator>
        </ScrollPage>
    );
}