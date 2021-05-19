import { useState } from "react";
import { useTheme } from "../components/ThemeContext";

import Link from "next/link";

import Hamburger from "./Hamburger";

const Navbar = () => {
    return (
        <div className="w-full flex justify-between p-6 bg-gray-100">
            <h1>LOGO</h1>
            <Hamburger />
        </div>
    );
};

export default Navbar;
