import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "../components/ThemeContext";
import Footer from "../components/Footer";
import Link from "next/link";
// import Pageable from "pageable";
import ReactFullpage from "@fullpage/react-fullpage";

const Home = () => {
    const router = useRouter();
    const [projects, setProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [active, setActive] = useState(0);
    // const { darkTheme } = useTheme();

    const onLeave = (origin, destination, direction) => {
        console.log("onLeave", { origin, destination, direction });
        setActive(destination.index);
    };

    useEffect(() => {
        setLoading(true);

        (async () => {
            const res = await fetch(
                "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio?per_page=5",
            );
            const data = await res.json();
            setProjects(data);
            setLoading(false);
        })();
        return () => setProjects([]);
    }, []);
    return (
        <motion.div
            initial={{
                opacity: 0,
                x: -20,
            }}
            animate={{
                opacity: 1,
                x: 0,
                transition: { duration: 0.4, ease: "easeOut" },
            }}
            exit={{
                opacity: 0,
                x: -20,
                transition: { duration: 0.4, ease: "easeOut" },
            }}
        >
            {projects && (
                <ReactFullpage
                    navigation
                    // afterLoad={afterLoad}
                    onLeave={onLeave}
                    scrollingSpeed={1000}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                {projects.map((project, i) => (
                                    <div className="section" key={project.id}>
                                        <div className="flex justify-center items-center ">
                                            <Link
                                                href={`/portfolio/${project.slug}?id=${project.id}`}
                                                scroll={false}
                                            >
                                                <a>
                                                    <div
                                                        className=" relative group z-20 px-12 md:px-0"
                                                        key={project.id}
                                                    >
                                                        <motion.img
                                                            animate={
                                                                active === i
                                                                    ? {
                                                                          opacity: 1,
                                                                          scale: 1,

                                                                          transition:
                                                                              {
                                                                                  delay: 0.4,
                                                                                  duration: 0.5,
                                                                                  ease: "easeOut",
                                                                              },
                                                                      }
                                                                    : {
                                                                          opacity: 0,
                                                                          scale: 0.6,

                                                                          transition:
                                                                              {
                                                                                  duration: 0.3,
                                                                              },
                                                                      }
                                                            }
                                                            src={
                                                                project.acf
                                                                    .image
                                                            }
                                                            className="w-5xl rounded-sm"
                                                            onMouseOver={(
                                                                e,
                                                            ) => {
                                                                if (
                                                                    project.acf
                                                                        .gif
                                                                ) {
                                                                    e.target.src =
                                                                        project.acf.gif;
                                                                }
                                                            }}
                                                            onMouseOut={(e) => {
                                                                e.target.src =
                                                                    project.acf.image;
                                                            }}
                                                        />
                                                        <div className="home-title-absolute">
                                                            <motion.h3
                                                                animate={
                                                                    active === i
                                                                        ? {
                                                                              opacity: 1,
                                                                              y: 0,

                                                                              transition:
                                                                                  {
                                                                                      delay: 0.55,
                                                                                      duration: 0.6,
                                                                                      ease: "easeOut",
                                                                                  },
                                                                          }
                                                                        : {
                                                                              opacity: 0,
                                                                              y: 50,
                                                                              transition:
                                                                                  {
                                                                                      duration: 0.3,
                                                                                  },
                                                                          }
                                                                }
                                                                className="home-title"
                                                                style={{
                                                                    originX: 0.5,
                                                                }}
                                                            >
                                                                {
                                                                    project
                                                                        .title
                                                                        .rendered
                                                                }
                                                            </motion.h3>
                                                        </div>
                                                    </div>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            )}
            <div className=" fixed bottom-0 left-0 mb-6 hidden md:block">
                {projects &&
                    projects.map((project, i) => (
                        <motion.div
                            className="flex mb-2"
                            key={project.id}
                            style={{ originX: 0 }}
                        >
                            <div
                                className={`${
                                    active === i
                                        ? "bg-white text-black"
                                        : "bg-transparent text-gray-400"
                                } mr-5 w-5 pl-10 pr-2 flex  justify-end`}
                            >
                                {i + 1}
                            </div>
                            <motion.div
                                animate={
                                    active === i
                                        ? { opacity: 1, scale: 1.1, x: 0 }
                                        : { opacity: 0, scale: 1, x: 20 }
                                }
                                // className={`${
                                //     active === i ? "text-black" : "opacity-0"
                                // } `}
                            >
                                {project.title.rendered}
                            </motion.div>
                        </motion.div>
                    ))}
            </div>
            <div
                style={{ zIndex: "-10" }}
                className="bg-gray-100 fixed bottom-0 left-0 h-1/2 w-full z-0"
            ></div>
        </motion.div>
    );
};

export default Home;
