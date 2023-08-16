"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { baseUrl } from "@/data";

const Location = () => {
    const [number, setNumber] = useState("");

    const notifySuccess = () => toast.success("Successfully!");
    const notifyError = () => toast.error("Error");

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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2676.875255329319!2d69.34865828342976!3d41.32849897948923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef4431777da7b%3A0x289db26806f061e!2z0JzQuNGA0LfQvi3Qo9C70YPQs9Cx0LXQutGB0LrQuNC5INGA0LDQudC-0L0sINCi0LDRiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1689498949606!5m2!1sru!2s"
                    width="658"
                    height="438"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="max-w-[590px] w-full py-[30px] px-[25px] sm:px-[45px] bg-[#da291c] rounded-[10px]">
                    <h3 className="font-normal text-[24px] text-white text-center leading-9">
                        Хотите получить бесплатную консультацию?
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
                            placeholder="Номер телефона"
                            className="w-full h-[45px] sm:h-[54px] font-normal border-[1.5px] border-white bg-input-bg-contact rounded-lg outline-none text-[16px] text-white placeholder-white px-[25px]"
                        />
                        <button
                            className="w-full h-[45px] sm:h-[54px] font-bold text-[18px] text-[#da291c] text-center bg-[#fff] rounded-lg"
                            type="submit"
                        >
                            Отправить
                        </button>
                    </form>
                    <div className="my-5">
                        <p className="font-normal text-[26px] text-white text-center">
                            или позвоните на номер
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
                        После получения заявки наш специалист свяжется с вами
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Location;
