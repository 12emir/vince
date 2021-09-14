import { useState } from "react";
import { useTheme } from "./ThemeContext";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import gsap from "gsap";

const ProjectsFeed = () => {
    const { setActiveProject, projects, setProjects } = useTheme();
    return (
        <motion.div
            className="masonry"
            initial={{
                opacity: 0,
                y: -50,
            }}
            animate={
                projects.length > 0 && {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.6,
                        ease: "easeInOut",
                        delay: 0.2,
                    },
                }
            }
            exit={{
                opacity: 0,
                y: -60,
                transition: { duration: 0.3, ease: "easeIn" },
            }}
        >
            {projects.length > 0 &&
                projects.map((item) => (
                    <Link
                        href={`/portfolio/${item.slug}?id=${item.id}`}
                        scroll={false}
                    >
                        <a>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="item relative"
                                key={item.id}
                            >
                                <button className="hidden md:block watch-button uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none">
                                    see more
                                </button>
                                <img
                                    src={item.acf.image}
                                    className="w-full rounded-sm"
                                    onMouseOver={(e) => {
                                        var tl = gsap.timeline();

                                        tl.to("#portfolioTitle", {
                                            opacity: 0,
                                            x: 10,
                                            duration: 0.2,
                                            onComplete: () =>
                                                setActiveProject(item),
                                        });
                                        tl.to(
                                            "#portfolioContent",
                                            {
                                                x: 10,

                                                opacity: 0,
                                                duration: 0.1,
                                            },
                                            "-=0.2",
                                        );
                                        tl.to("#portfolioTitle", {
                                            opacity: 1,
                                            x: 0,

                                            duration: 0.3,
                                        });
                                        tl.to(
                                            "#portfolioContent",
                                            {
                                                x: 0,

                                                opacity: 1,
                                                duration: 0.3,
                                            },
                                            "-=0.2",
                                        );
                                        if (item.acf.gif) {
                                            e.target.src = item.acf.gif;
                                        }
                                    }}
                                    onMouseOut={(e) => {
                                        e.target.src = item.acf.image;
                                    }}
                                />
                                <h3 className="mobileFeedTitle text-center mb-10 md:mb-0">
                                    {item.title.rendered}
                                </h3>
                            </motion.div>
                        </a>
                    </Link>
                ))}
        </motion.div>
    );
};

export default ProjectsFeed;
