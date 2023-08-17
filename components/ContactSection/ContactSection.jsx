import Image from "next/image";

// Images
import Location from "@/public/Images/location.svg";
import Call from "@/public/Images/call_blue.svg";
import Message from "@/public/Images/message.svg";

const ContactSection = ({ language }) => {
    const datas = [
        {
            image: Location,
            id: "1",
            text: language?.hero_contact?.address,
        },
        { id: "2", text: "+998 98 001 3666", image: Call },
        { id: "3", text: "info@company.com", image: Message },
    ];

    return (
        <section className="container">
            <div className="flex flex-col lg:flex-row space-y-[100px] lg:space-y-0 items-center justify-between pt-[124px] pb-[50px]">
                {datas?.map((data) => (
                    <div
                        className="relative max-w-[300px] w-full h-[200px] flex items-center justify-center rounded-[8px] border-[2px] border-[#da291c] px-5 text-center hover:bg-[#da291c] duration-300 cursor-pointer group"
                        key={data?.id}
                    >
                        <div className="absolute flex items-center justify-center max-w-[110px] w-full h-[110px] rounded-full z-20 -top-16 bg-white border-[2px] border-[#da291c]">
                            <Image
                                className="w-auto h-10"
                                src={data?.image}
                                alt="contact-image"
                            />
                        </div>
                        <p className="font-medium text-black text-[18px] group-hover:text-white duration-300">
                            {data?.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ContactSection;
