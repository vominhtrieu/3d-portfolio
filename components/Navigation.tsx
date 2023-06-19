"use client";
import { Box, Link } from "@chakra-ui/react";

export default function Navigation() {
    return (
        <Box position="fixed" top={6} right={36} color="white" zIndex={99999} display="flex" gap={5} fontSize={24}>
            <Link className="active navigation-item" href="/">Home</Link>
            <Link className="navigation-item" href="/details">Details</Link>
            <Link className="navigation-item" href="/projects">Projects</Link>
            <Link className="navigation-item" href="/contact">Contact</Link>
        </Box>
    )
}