"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { baseUrl } from "@/data";

const FormContact = ({ language }) => {
    const [number, setNumber] = useState("");

    const notifySuccess = () => toast.success("Successfully!");
    const notifyError = () => toast.error("Network Error");

    const PostNumber = (e) => {
        e.preventDefault();
        axios
            .post(`${baseUrl}/contact`, {
                phoneNumber: number,
            })
            .then((res) => {
                if (res.status === 200) {
                    notifySuccess();
                }
            })
            .catch(() => {
                notifyError();
            })
            .finally(() => {
                e.target.reset();
            });
    };

    return (
        <section className="bg-contact-pattern bg-no-repeat bg-cover bg-fixed pt-[90px] sm:pt-[120px] pb-[90px] mt-[30px] sm:mt-[57px]">
            <Toaster />
            <div className="container flex items-center justify-between">
                <p></p>
                <div
                    data-aos="fade-left"
                    data-aos-duration="600"
                    className="max-w-[590px] w-full py-[30px] px-[45px] bg-[#da291c] rounded-[10px]"
                >
                    <h3 className="font-normal text-[30px] text-white text-center leading-9">
                        {language?.header?.modal?.title}
                    </h3>
                    <form
                        autoComplete="off"
                        onSubmit={PostNumber}
                        className="space-y-[20px] mt-[30px]"
                    >
                        <input
                            type="text"
                            required
                            placeholder={language?.header?.modal?.placeholder}
                            onChange={(e) => setNumber(e.target.value.trim())}
                            className="w-full h-[45px] sm:h-[54px] font-normal border-[1.5px] border-white bg-input-bg-contact rounded-lg outline-none text-[16px] text-white placeholder-white px-[25px]"
                        />
                        <button
                            className="w-full h-[45px] sm:h-[54px] font-bold text-[18px] text-[#da291c] text-center bg-[#fff] rounded-lg"
                            type="submit"
                        >
                            {language?.header?.modal?.send}
                        </button>
                    </form>
                    <div className="my-5">
                        <p className="font-normal text-[26px] text-white text-center">
                            {language?.header?.modal?.call}
                        </p>
                        <Link
                            href="tel:+998980013666"
                            className="block font-normal text-[30px] text-white text-center leading-8"
                        >
                            {" "}
                            +998 98 001 3666
                        </Link>
                    </div>
                    <p className="max-w-[312px] w-full mx-auto text-white text-[16px] opacity-80 text-center">
                        {language?.header?.modal?.text}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default FormContact;
