import { useState } from "react";
import { useTheme } from "../components/ThemeContext";
import { motion } from "framer-motion";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
    const {
        menuOpen,
        setMenuOpen,
        activeProject,
        setActiveProject,
    } = useTheme();

    return (
        <motion.div
            className={`absolute top-0 p-6 right-0 text-sm cursor-pointer font-semibold z-30 flex items-center uppercase tracking-widest ${
                menuOpen ? "text-white" : "text-black"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
        >
            {!menuOpen ? "Menu" : "Close"}
            {menuOpen ? (
                <VscChromeClose className="ml-2 text-4xl" />
            ) : (
                <AiOutlineMenu className="ml-2 text-4xl" />
            )}
        </motion.div>
    );
};

export default Navbar;
