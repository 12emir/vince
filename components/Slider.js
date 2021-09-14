import React, { useCont, ext, useState, useEffect } from "react";
import Carousel from "nuka-carousel";
import { useMediaQuery } from "react-responsive";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { motion } from "framer-motion";
const Slider = ({ projects }) => {
    const [slideIndex, setSlideIndex] = useState(1);
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 1224px)",
    });
    const isBigScreen = useMediaQuery({ query: "(min-width: 1824px)" });
    const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
    const isPortrait = useMediaQuery({ query: "(orientation: portrait)" });
    const isRetina = useMediaQuery({ query: "(min-resolution: 2dppx)" });

    const NextBtn = () => {
        return (
            <motion.div
                className="p-8 z-30"
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 1.1 }}
                transition={{ type: "spring", bounce: 0.25 }}
            >
                <BsArrowRight className="text-7xl" />
            </motion.div>
        );
    };

    return (
        <>
            {projects && (
                <div className="slider relative">
                    <Carousel
                        speed={700}
                        ease={"easeCubicOut"}
                        wrapAround={true}
                        slidesToShow={1}
                        slideIndex={slideIndex}
                        afterSlide={(slideIndex) => setSlideIndex(slideIndex)}
                        autoGenerateStyleTag={true}
                        defaultControlsConfig={{
                            nextButtonText: <NextBtn />,
                            prevButtonText: <div>PREW</div>,
                            nextButtonStyle: {
                                backgroundColor: "transparent",
                                width: "200px",
                                // width: window.screen.width / 2,
                                height: "700px",
                                outline: "none",
                                color: "black",
                                fontSize: "20px",

                                display: isTabletOrMobile ? "none" : "block",
                            },
                            pagingDotsStyle: {
                                display: "none",
                            },
                            prevButtonStyle: {
                                backgroundColor: "transparent",
                                // width: window.screen.width / 2,
                                width: "200px",
                                height: "700px",
                                outline: "none",
                                color: "black",
                                fontSize: "20px",
                                display: isTabletOrMobile ? "none" : "block",
                            },
                        }}
                    >
                        {projects.map((project) => (
                            <div className="h-screen w-full p-4 flex items-center justify-center bg-gray-100">
                                <img
                                    className="w-auto max-w-7xl"
                                    src={project.acf.image}
                                />
                            </div>
                        ))}
                    </Carousel>
                </div>
            )}
        </>
    );
};

export default Slider;
