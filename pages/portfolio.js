import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "../components/ThemeContext";
import Link from "next/link";
import ProjectsFeed from "../components/ProjectsFeed";
import Sorting from "../components/Sorting";
import MobileSorting from "../components/MobileSorting";
import useSWR from "swr";
import { ImSpinner4 } from "react-icons/im";
const Portfolio = () => {
    const router = useRouter();

    const {
        activeProject,
        setActiveProject,
        setProjects,
        projects,
        categories,
        setCategories,
        page,
        setPage,
    } = useTheme();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(true);
        setActiveProject(null);
        setProjects([]);
        setPage(1);

        (async () => {
            const res2 = await fetch(
                "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/categories",
            );
            const data2 = await res2.json();
            setCategories(data2);
            setLoading(false);
        })();
        return () => setProjects([]);
    }, []);

    useEffect(() => {
        setLoading(true);
        setProjects([]);

        (async () => {
            const res1 = await fetch(
                !router.query.id
                    ? `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio?per_page=10&page=${page}`
                    : `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio?categories=${router.query.id}&per_page=10&page=${page}`,
            );
            const data = await res1.json();

            if (data.length > 0) {
                setProjects(data);
            }
            setLoading(false);
        })();
        return () => setProjects([]);
    }, [router.query.category]);

    useEffect(() => {
        setLoading(true);

        (async () => {
            const res1 = await fetch(
                !router.query.id
                    ? `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio?per_page=10&page=${page}`
                    : `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio?categories=${router.query.id}&per_page=10&page=${page}`,
            );
            const data = await res1.json();

            if (data.length > 0) {
                setProjects([...projects, ...data]);
            }
            setLoading(false);
        })();
    }, [page]);

    // useEffect(() => {
    //     var tl = gsap.timeline();
    //     tl.to("#portfolioTitle", { opacity: 0, duration: 0.2 });
    //     tl.to("#portfolioTitle", { opacity: 1, duration: 0.5 });
    // }, [activeProject]);

    return (
        <motion.div
            className="w-full h-screen pt-32 md:pt-0"
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
                transition: { duration: 0.4, ease: "easeOut" },
            }}
            exit={{
                opacity: 0,
                transition: { duration: 0.1, delay: 0.4, ease: "easeOut" },
            }}
        >
            <MobileSorting categories={categories} />

            {/* <Link href="/">Go to Home</Link> */}
            <div className="w-full h-full flex flex-no-wrap  justify-end   max-w-6xl m-auto">
                <motion.div
                    className="hidden md:flex w-4/12 px-4 md:px-6 lg:px-16 xl:px-24 h-full   flex-col justify-center fixed top-0 left-0"
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.3, ease: "easeIn" },
                    }}
                >
                    <h3
                        id="portfolioTitle"
                        className="text-base uppercase font-semibold tracking-widest mb-4"
                    >
                        {activeProject
                            ? activeProject.title.rendered
                            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit"}
                    </h3>
                    {activeProject ? (
                        <div
                            id="portfolioContent"
                            dangerouslySetInnerHTML={{
                                __html: activeProject.content.rendered,
                            }}
                        />
                    ) : (
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco"
                        </p>
                    )}
                    <Sorting categories={categories} />
                </motion.div>
                <div className="w-full md:w-8/12 px-4 md:px-10  flex flex-col justify-start items-center pb-24 md:pt-32">
                    {loading && (
                        <div className="text-4xl absolute top-1/2  -translate-x-1/2 -translate-y-1/2 animate-spin">
                            <ImSpinner4 />
                        </div>
                    )}
                    <ProjectsFeed />
                    {page && !loading && projects.length > 0 && (
                        <motion.div
                            className="py-10 my-10"
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                                transition: { delay: 0.6 },
                            }}
                        >
                            <div
                                onClick={() => setPage((prev) => prev + 1)}
                                className="border-black py-2 px-4 rounded-full border  cursor-pointer  mt-5"
                            >
                                See more projects
                            </div>
                        </motion.div>
                    )}{" "}
                </div>
            </div>
        </motion.div>
    );
};

export default Portfolio;
