"use client";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

import Loader from "@/public/Images/spinner.svg";

import { baseUrl } from "@/data";

const Services = ({ lang }) => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        axios
            .get(`${baseUrl}/service/all`, {
                headers: {
                    lang: lang,
                },
            })
            .then((res) => setDatas(res.data.data.result))
            .catch(console.log());
    }, []);

    return (
        <section className="container !py-[30px] lg:!py-[42px] space-y-5 lg:space-y-[30px]">
            {datas.length > 0 ? (
                datas?.map((data) => (
                    <div
                        key={data?._id}
                        className={`lg:flex lg:items-srart lg:justify-between border-b-[1px] border-[#333] pb-5 lg:pb-10`}
                    >
                        <div
                            data-aos={`${
                                data?.row ? "fade-up-left" : "fade-up-right"
                            }`}
                            data-aos-duration="500"
                            className="lg:max-w-[430px] w-full"
                        >
                            <h2 className="font-bold text-[24px] sm:text-[30px] text-[#333] leading-8">
                                {data?.name}
                            </h2>
                            <p className="font-medium text-[18px] text-text-color leading-normal mt-2">
                                {data?.description}
                            </p>
                            <Image
                                className="block sm:hidden max-w-[650px] w-full h-[225px] rounded-b-[26px] mt-5 object-cover"
                                src={`${baseUrl}/public/uploads/${data?.image}`}
                                alt="service-image"
                                priority={true}
                                height={1000}
                                width={1000}
                            />
                        </div>
                        <Image
                            data-aos={`${
                                data?.row ? "fade-up-right" : "fade-up-left"
                            }`}
                            data-aos-duration="500"
                            className={`hidden sm:block max-w-[650px] w-full h-[426px] rounded-b-[50px] object-cover lg:ml-5`}
                            src={`${baseUrl}/public/uploads/${data?.image}`}
                            alt="service-image"
                            priority={true}
                            height={1000}
                            width={1000}
                        />
                    </div>
                ))
            ) : (
                <Image
                    className="block mx-auto w-[60px] sm:w-[100px] h-[60px] sm:h-[100px]"
                    src={Loader}
                    alt="loader"
                />
            )}
        </section>
    );
};

export default Services;
