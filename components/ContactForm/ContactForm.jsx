"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { baseUrl } from "@/data";
import toast from "react-hot-toast";

import Mark_x from "@/public/Images/x.svg";

const ContactForm = ({ language, modal, closeModal }) => {
    const [number, setNumber] = useState("");

    const notifySuccess = () => toast.success(language?.toast?.success);
    const notifyError = () => toast.error(language?.toast?.error);

    const PostNumber = (e) => {
        e.preventDefault();
        axios
            .post(`${baseUrl}/contact`, {
                phoneNumber: number,
            })
            .then((res) => {
                if (res.status === 200) {
                    notifySuccess();
                    e.target.reset();
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
        <>
            <div className="max-w-[590px] w-full pt-[50px] pb-[30px] px-[45px] bg-[#da291c] rounded-[10px]">
                {modal ? (
                    <button
                        type="button"
                        onClick={closeModal}
                        className="absolute top-[20px] right-[25px] w-[30px] h-[30px]"
                    >
                        <Image
                            width={30}
                            height={30}
                            alt="close"
                            src={Mark_x}
                            priority={true}
                        />
                    </button>
                ) : null}
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
                        aria-label={language?.header?.modal?.placeholder}
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
                        aria-label="To fill form of consultation"
                    >
                        +998 98 001 3 666
                    </Link>
                </div>
                <p className="max-w-[312px] w-full mx-auto text-white text-[16px] opacity-80 text-center">
                    {language?.header?.modal?.text}
                </p>
            </div>
        </>
    );
};

export default ContactForm;
