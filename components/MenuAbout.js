import { useState } from "react";
import { useTheme } from "./ThemeContext";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MenuAbout = () => {
    const links = [
        { name: "home", url: "/" },
        { name: "about", url: "/about" },
        { name: "work", url: "/work" },
    ];
    const { menuOpen, setMenuOpen } = useTheme();

    return (
        <motion.div
            className="max-w-sm "
            initial={{ opacity: 0, y: 30 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                    delay: 0.8,
                    ease: "easeOut",
                },
            }}
            exit={{
                opacity: 0,
                y: -30,
                transition: { duration: 0.3, ease: "easeIn" },
            }}
            key="ma"
        >
            <p className="uppercase tracking-big font-semibold text-sm">
                this is vince
            </p>{" "}
            <p className="text-xxs md:text-sm">
                an award winning creative production company based in London.
            </p>
            <p className="text-xxs md:text-sm">
                Est. in 2011, we're experts in creating TV Commercials, digital
                films, DRTV, idents and brand films through our superb roster of
                directors.
            </p>
        </motion.div>
    );
};

export default MenuAbout;
