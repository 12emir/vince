import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useTheme } from "../components/ThemeContext";
import Footer from "../components/Footer";
import useSWR from "swr";

import Slider2 from "../components/Slider2";

const Home = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(true);
    const fetcher = (url) => fetch(url).then((res) => res.json());

    const { data, error } = useSWR(
        "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/pages/2",
        fetcher,
    );
    console.log("data", data);
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";

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
            className="pt-32"
        >
            <h1 className="text-center  font-normal text-4xl mt-10 ">
                {data.acf.main_header}
            </h1>
            <Slider2 />
        </motion.div>
    );
};

export default Home;
