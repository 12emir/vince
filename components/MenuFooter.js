import { useState } from "react";
import { useTheme } from "./ThemeContext";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MenuFooter = () => {
    const links = [
        { name: "Facebook", url: "https://www.facebook.com/madebyvince/" },
        { name: "Twitter", url: "https://twitter.com/madebyvince" },
        { name: "Vimeo", url: "/https://vimeo.com/vnce" },
    ];
    const { menuOpen, setMenuOpen } = useTheme();

    return (
        <motion.div
            key="ul2"
            className="flex flex-col-reverse md:flex-row justify-between w-full pb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.7,
                    delay: 0.9,
                    ease: "easeOut",
                },
            }}
            exit={{
                opacity: 0,
                y: 30,
                transition: { duration: 0.4, ease: "easeIn" },
            }}
        >
            <ul className="flex text-white uppercase text-xxs font-light tracking-widest z-30">
                {links.map((link) => (
                    <li className="mr-5 hover:text-gray-300" key={link.name}>
                        <a href={link.url} target="_blank">
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="hidden sm:block text-xs font-light mb-6 md:mb-0">
                To chat, give us a call on 020 7470 9229 or email
                production@vince.co.uk
            </div>
        </motion.div>
    );
};

export default MenuFooter;
