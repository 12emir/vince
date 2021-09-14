import React, { useCont, ext, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import useSWR from "swr";
import Link from "next/link";
const Featured = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());

    const { data, error } = useSWR(
        "https://stupefied-antonelli.136-244-69-22.plesk.page/index.php/wp-json/wp/v2/portfolio?per_page=5",
        fetcher,
    );

    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
    const featuredProjects = data.filter((project) => project.acf.featured);

    return (
        <div className="w-full h-screen max-h-screen relative">
            <Carousel
                emulateTouch={true}
                autoPlay={true}
                infiniteLoop={true}
                interval={2500}
                showIndicators={false}
                showStatus={false}
                showIndicators={false}
                dynamicHeight={false}
                className="relative"
            >
                {featuredProjects.map((project) => (
                    <div className="relative w-full h-screen  p-3 md:p-8 lg:p-20 flex items-center justify-center ">
                        <Link href="/">
                            <div
                                className=" w-full h-full"
                                style={{
                                    background: `url(${project.acf.image}) no-repeat`,
                                    backgroundPosition: "center center",
                                    backgroundSize: "100%",
                                }}
                            >
                                {/* <img src={project.acf.image} /> */}
                            </div>
                        </Link>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default Featured;
