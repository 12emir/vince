import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "../components/ThemeContext";
import Link from "next/link";
import Footer from "../components/Footer";

const About = () => {
    const router = useRouter();
    // const { darkTheme } = useTheme();

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -20,
            }}
            animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, ease: "easeOut" },
            }}
            exit={{
                opacity: 0,
                x: -20,
                transition: { duration: 0.4, ease: "easeOut" },
            }}
        >
            <div className="w-full h-screen flex justify-center items-center">
                About
            </div>
            <Footer />
        </motion.div>
    );
};

export default About;
