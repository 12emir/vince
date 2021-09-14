import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "../../components/ThemeContext";
import Link from "next/link";
import Footer from "@/components/Footer";
import useSWR from "swr";
// import { VimeoPlayer } from "react-video-players";

import { ImSpinner4 } from "react-icons/im";
import { BsArrowDown } from "react-icons/bs";

const Portfolio = () => {
    const router = useRouter();

    const {
        activeProject,
        setProjects,
        projects,
        categories,
        page,
        setPage,
    } = useTheme();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setProjects([]);
        setLoading(true);
        (async () => {
            const res1 = await fetch(
                `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio/${router.query.id}`,
            );
            const data = await res1.json();

            setProject(data);
            setLoading(false);
            console.log(data);
        })();
    }, []);

    return (
        // <motion.div
        //     style={{ minHeight: "100vh" }}
        //     className="w-full max-w-6xl m-auto h-full flex flex-no-wrap justify-center items-center   "
        //     initial={{
        //         opacity: 0,
        //     }}
        //     animate={{
        //         opacity: 1,
        //         transition: { duration: 0.4, ease: "easeOut", delay: 0.2 },
        //     }}
        //     exit={{
        //         opacity: 0,
        //         transition: { duration: 0.4, ease: "easeOut" },
        //     }}
        // >
        //     <div className="w-4/12  px-4">
        //         {project && (
        //             <>
        //                 <h3 className="text-base uppercase font-semibold tracking-widest mb-4">
        //                     {project.title.rendered}
        //                 </h3>
        //                 <p
        //                     dangerouslySetInnerHTML={{
        //                         __html: project.content.rendered,
        //                     }}
        //                 />
        //             </>
        //         )}
        //     </div>
        //     <div className="w-8/12 flex flex-col items-center justify-center ">
        //         {loading && (
        //             <div className="text-4xl absolute te -translate-x-1/2 -translate-y-1/2 animate-spin">
        //                 <ImSpinner4 />
        //             </div>
        //         )}

        //         {project && (
        //             <Vimeo
        //                 video={project.acf.vimeo}
        //                 autoplay
        //                 onLoaded={() => setLoading(false)}
        //             />
        //         )}
        //         {project && (
        //             <div
        //                 dangerouslySetInnerHTML={{
        //                     __html: project.acf.content2,
        //                 }}
        //             />
        //         )}
        //     </div>
        // </motion.div>
        <>
            <motion.div
                className="content w-full h-screen"
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
                <div className="w-full h-full flex flex-col md:flex-row  max-w-6xl m-auto">
                    <motion.div
                        className="w-full md:w-4/12 px-4 md:px-6 lg:px-10 xl:px-12 h-auto  flex flex-col justify-center  pt-32 md:pt-0 "
                        exit={{
                            opacity: 0,
                            transition: { duration: 0.3, ease: "easeIn" },
                        }}
                    >
                        <h3 className="text-base text-center uppercase font-semibold tracking-widest mb-4">
                            {project && project.title.rendered}
                        </h3>
                        {project && (
                            <div
                                className="hidden md:block"
                                dangerouslySetInnerHTML={{
                                    __html: project.content.rendered,
                                }}
                            />
                        )}
                    </motion.div>
                    <div className="w-full md:w-8/12  flex flex-col justify-start items-center ">
                        {loading && (
                            <div className="text-4xl absolute top-1/2 -translate-x-1/2 -translate-y-1/2 animate-spin">
                                <ImSpinner4 />
                            </div>
                        )}

                        <div className="flex items-center justify-center w-full h-full md:min-h-screen">
                            <iframe
                                src="https://player.vimeo.com/video/552398689"
                                width="640"
                                height="360"
                                frameborder="0"
                                webkitallowfullscreen
                                mozallowfullscreen
                                allowfullscreen
                            ></iframe>

                            {project && project.acf.hasOwnProperty("content2") && (
                                <BsArrowDown
                                    onClick={() => {
                                        window.scrollTo({
                                            top: 750,
                                            behavior: "smooth",
                                        });
                                    }}
                                    className="absolute bottom-0 mb-20 text-4xl border rounded-full border-black p-2 cursor-pointer"
                                />
                            )}
                        </div>
                        <div className="px-4">
                            {project && (
                                <div
                                    className="block md:hidden"
                                    dangerouslySetInnerHTML={{
                                        __html: project.content.rendered,
                                    }}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export const getServerSideProps = async (ctx) => {
    return {
        props: {
            data: null,
        },
    };
};
export default Portfolio;
