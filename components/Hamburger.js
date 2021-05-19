import { useState } from "react";
import { useTheme } from "../components/ThemeContext";
import { motion } from "framer-motion";
const Navbar = () => {
    const { menuOpen, setMenuOpen } = useTheme();

    return (
        <motion.div
            className={`text-base z-30 ${
                menuOpen ? "text-white" : "text-black"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
            animate={{ menuOpen }}
        >
            {!menuOpen ? "Menu" : "Close"}
        </motion.div>
    );
};

export default Navbar;
