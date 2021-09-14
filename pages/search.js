import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "../components/ThemeContext";
import { ImSpinner4 } from "react-icons/im";

import SearchForm from "../components/SearchForm";

import Link from "next/link";
const Search = () => {
    const { searchLoading, setSearchLoading } = useTheme();

    const [data, setData] = useState([]);

    const [error, setError] = useState();
    const router = useRouter();
    const skeletonRef = useRef();

    useEffect(() => {
        console.log(router.query.q);
        if (router.query.q) {
            setData([]);
            console.log("run");
            (async () => {
                try {
                    const res = await fetch(
                        `https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio?search=${router.query.q}&per_page=100`,
                    );
                    const data = await res.json();
                    console.log(data);
                    setSearchLoading(false);
                    setData(data);
                } catch (err) {
                    console.log(err);
                    setError(err);
                    setSearchLoading(false);

                    console.log(error);
                }
            })();
        }

        return () => {};
    }, [router.query]);

    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.4,
                },
            }}
        >
            <div className=" w-full h-full min-h-screen flex flex-col justify-center items-center  px-5 pt-32">
                {searchLoading && (
                    <div className="text-4xl absolute top-1/2  -translate-x-1/2 -translate-y-1/2 animate-spin">
                        <ImSpinner4 />
                    </div>
                )}
                {data.length > 0 &&
                    !searchLoading &&
                    data.map((item) => {
                        return (
                            <Link
                                href={`/portfolio/${item.slug}?id=${item.id}`}
                                scroll={false}
                            >
                                <a>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        key={item.id}
                                        className="item mb-16 flex  flex-col items-center relative"
                                        initial={{
                                            opacity: 0,
                                            y: -20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.4,
                                                ease: "easeOut",
                                            },
                                        }}
                                        exit={{
                                            opacity: 0,
                                            y: -20,
                                            transition: {
                                                duration: 0.4,
                                                ease: "easeOut",
                                            },
                                        }}
                                    >
                                        <img
                                            src={item.acf.image}
                                            className="w-full rounded-sm"
                                            onMouseOver={(e) => {
                                                if (item.acf.gif) {
                                                    e.target.src = item.acf.gif;
                                                }
                                            }}
                                            onMouseOut={(e) => {
                                                e.target.src = item.acf.image;
                                            }}
                                        />
                                        <h3 className="">
                                            {item.title.rendered}
                                        </h3>
                                        <button className="watch-button uppercase absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white pointer-events-none">
                                            see more
                                        </button>
                                    </motion.div>
                                </a>
                            </Link>
                        );
                    })}
                {data.length === 0 && !searchLoading && router.query.q && (
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.4,
                                ease: "easeOut",
                                delay: 0.6,
                            },
                        }}
                        className="  flex flex-col justify-center items-center "
                    >
                        <div className="text-lg font-semibold max-w-lg mb-4">
                            No results. Try again
                        </div>
                        <div className="w-56">
                            <SearchForm />
                        </div>{" "}
                    </motion.div>
                )}
            </div>
        </motion.div>
    );
};

export default Search;
