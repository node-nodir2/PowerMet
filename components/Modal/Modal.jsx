import React from "react";
import { useEffect } from "react";
import AOS from "aos";

// ------> Css
import "aos/dist/aos.css";

function Modal({ isVisible, onClose, children, change }) {
    // ------> Use aos animation library
    useEffect(() => {
        AOS.init();
    }, []);

    if (!isVisible) return null;

    const handleClick = (e) => {
        if (e.target.id === "wrapper") onClose();
    };

    return (
        <div
            id="wrapper"
            onClick={handleClick}
            className="fixed h-screen border-red-500 inset-0 bg-black bg-opacity-40 backdrop-blur-[2px] flex justify-center items-center z-50 duration-300"
        >
            <div
                data-aos="fade-right"
                data-aos-duration="300"
                className={`${
                    change
                        ? isVisible
                            ? "left-0 w-full h-full absolute bg-white px-5"
                            : "-left-[100%]"
                        : "bg-white rounded-[26px] mx-4"
                } z-50`}
            >
                {children}
            </div>
        </div>
    );
}

export default Modal;
