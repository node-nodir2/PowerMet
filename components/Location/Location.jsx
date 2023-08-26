"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { baseUrl } from "@/data";

const Location = ({ language }) => {
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
        <section className="container">
            <Toaster />
            <div className="flex flex-col sm:flex-row items-center justify-between sm:space-x-10 space-y-4 sm:space-y-0 pb-[68px]">
                <iframe
                    className="sm:max-w-[658px] w-full h-[438px] sm:h-[462px] rounded-[10px] border"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4156.354701301804!2d69.27553451997714!3d41.29789867466423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ad04ad60097%3A0x52c7587959cc49d1!2zMzQg0YPQu9C40YbQsCDQotCw0YDQsNGB0LAg0KjQtdCy0YfQtdC90LrQviwg0KLQsNGI0LrQtdC90YIgMTAwMDYwLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1693080053578!5m2!1sru!2s"
                    width="658"
                    height="438"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="max-w-[590px] w-full py-[30px] px-[25px] sm:px-[45px] bg-[#da291c] rounded-[10px]">
                    <h3 className="font-normal text-[24px] text-white text-center leading-9">
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
                            onChange={(e) => setNumber(e.target.value.trim())}
                            placeholder={language?.header?.modal?.placeholder}
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
                            +998 98 001 3 666
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

export default Location;
