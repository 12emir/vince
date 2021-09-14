import Navbar from "@/components/Navbar";
import Menu from "@/components/Menu";
import { useTheme } from "../components/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const Layout = ({ children }) => {
    const { menuOpen, setMenuOpen } = useTheme();

    return (
        <div className="">
            <Navbar />
            <AnimatePresence exitBeforeEnter>
                {menuOpen && <Menu />}
            </AnimatePresence>

            {children}
        </div>
    );
};

export default Layout;
