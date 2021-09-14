import React, { useContext, useState, useEffect } from "react";

const Cursor = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    if (typeof window !== "undefined") {
        let cursor = document.querySelector(".cursor");
        var x_center = cursor.offsetWidth / 2;
        var y_center = cursor.offsetHeight / 2;
        document.body.addEventListener("mousemove", (e) => {
            cursor.style.left = `${e.x - x_center}px`;
            cursor.style.top = `${e.y - y_center}px`;
            console.log("windowndunnerewiht", window.screen.width / 0);
            console.log(
                "cursor.style.left",
                parseInt(cursor.style.left.replace("px", "")),
            );

            if (
                parseInt(cursor.style.left.replace("px", "")) >
                window.screen.width / 2
            ) {
                console.log("more");
                const deg = 0;
                cursor.style.webkitTransform = "rotate(" + deg + "deg)";
                cursor.style.mozTransform = "rotate(" + deg + "deg)";
                cursor.style.msTransform = "rotate(" + deg + "deg)";
                cursor.style.oTransform = "rotate(" + deg + "deg)";
                cursor.style.transform = "rotate(" + deg + "deg)";
            }

            if (
                parseInt(cursor.style.left.replace("px", "")) <
                window.screen.width / 2
            ) {
                const deg = 180;
                cursor.style.webkitTransform = "rotate(" + deg + "deg)";
                cursor.style.mozTransform = "rotate(" + deg + "deg)";
                cursor.style.msTransform = "rotate(" + deg + "deg)";
                cursor.style.oTransform = "rotate(" + deg + "deg)";
                cursor.style.transform = "rotate(" + deg + "deg)";
                console.log("less");
            }
        });
    }

    useEffect(() => {
        console.log(slideIndex);
    }, [slideIndex]);
    return <div class="cursor"></div>;
};

export default Cursor;
