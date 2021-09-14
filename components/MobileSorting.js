import { useState } from "react";
import { useTheme } from "./ThemeContext";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { useRouter } from "next/router";

const MobileSorting = () => {
    const {
        activeProject,
        setActiveProject,
        setProjects,
        projects,
        categories,
        setPage,
        setCategories,
    } = useTheme();

    const router = useRouter();

    return (
        <ul className="mobilenav  flex md:hidden  overflow-x-scroll w-full   uppercase tracking-widest text-xxs xl:text-xs font-medium mb-6 pl-5">
            <motion.li
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1 }}
                className={`${
                    !router.query.id && "border-black"
                } py-2 px-4 mr-2 mb-2 rounded-full border  cursor-pointer  `}
                onClick={() => {
                    setProjects([]);
                    setPage(1);
                    router.push(`/portfolio`);
                }}
            >
                <div>ALL</div>
            </motion.li>
            {categories.length > 0 &&
                categories.map((category) => (
                    <motion.li
                        key={category.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 1 }}
                        className={`${
                            router.query.category === category.name &&
                            "border-black"
                        } py-2 px-4 mr-2 mb-2 rounded-full border  cursor-pointer whitespace-nowrap `}
                        onClick={() => {
                            setProjects([]);
                            setPage(1);

                            router.push(
                                `?category=${category.name}&id=${category.id}`,
                            );
                        }}
                    >
                        <div>{category.name}</div>
                    </motion.li>
                ))}
        </ul>
    );
};

export default MobileSorting;
