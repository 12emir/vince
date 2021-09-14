import { useState } from "react";
import { useTheme } from "./ThemeContext";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Logo = () => {
    const { menuOpen, setMenuOpen } = useTheme();

    return (
        <div className=" z-30 ">
            <Link href="/" scroll={false}>
                <a>
                    {menuOpen ? (
                        <img
                            src={`/vince-logo-white.svg`}
                            className="w-40 z-30"
                        />
                    ) : (
                        <img
                            src={`/vince-logo-blck.svg`}
                            className="w-40 z-30"
                        />
                    )}
                </a>
            </Link>
        </div>
    );
};

export default Logo;
