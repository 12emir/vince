import { useState } from "react";
import { useTheme } from "./ThemeContext";

import Link from "next/link";
import { motion } from "framer-motion";

const links = [
    { name: "home", url: "/" },
    { name: "about", url: "/about" },
    { name: "work", url: "/work" },
];
const Menu = () => {
    return (
        <motion.nav
            className="fixed top-0 left-0  w-screen h-screen z-10 bg-dark"
            initial={{ y: "-100%" }}
            animate={{
                y: 0,
            }}
            transition={{
                ease: "easeInOut",
                duration: 0.7,
                type: "tween",
            }}
            exit={{ y: "-100%" }}
        >
            <ul className="flex">
                {links.map((link) => (
                    <li className="ml-5 ">
                        <Link href={link.url}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </motion.nav>
    );
};

export default Menu;
