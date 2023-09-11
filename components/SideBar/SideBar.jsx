import Image from "next/image";
import Link from "next/link";

import Logo from "../../public/Images/logoWhite.png";

const SideBar = ({ lang, language, setShowModal, showModal }) => {
    return (
        <>
            <div className="flex items-center justify-between py-[18px]">
                <div
                    onClick={setShowModal}
                    className="flex items-center justify-between"
                >
                    <Link className="flex items-center" href={`/${lang}`}>
                        <Image
                            className="w-[135px] h-[40px]"
                            src={Logo}
                            width={500}
                            height={500}
                            alt="site-logo"
                        />
                    </Link>
                </div>
                <button
                    className="flex flex-col justify-between w-[26px] h-5"
                    onClick={() => {
                        setShowModal(!showModal);
                    }}
                >
                    <span
                        className={`${
                            showModal ? "-rotate-45 translate-y-[8.8px]" : ""
                        } inline-block w-full border border-black opacity-50 duration-300`}
                    ></span>
                    <span
                        className={`${
                            showModal ? "hidden" : ""
                        } inline-block w-[60%] border border-black opacity-50`}
                    ></span>
                    <span
                        className={`${
                            showModal ? "rotate-45 -translate-y-[8.8px]" : ""
                        } inline-block w-full border border-black opacity-50 duration-300`}
                    ></span>
                </button>
            </div>
            <nav className="mt-[30px]">
                <ul className="flex flex-col items-center space-y-5 text-center">
                    <li
                        onClick={setShowModal}
                        className="font-medium text-base text-[#333] hover:text-[#da291c] transition ease-in-out duration-200 uppercase"
                    >
                        <Link href={`/${lang}/catalog`}>
                            {language?.header?.catalog}
                        </Link>
                    </li>
                    <li
                        onClick={setShowModal}
                        className="font-medium text-base text-[#333] hover:text-[#da291c] transition ease-in-out duration-200 uppercase"
                    >
                        <Link href={`/${lang}/service`}>
                            {language?.header?.service}
                        </Link>
                    </li>
                    <li
                        onClick={setShowModal}
                        className="font-medium text-base text-[#333] hover:text-[#da291c] transition ease-in-out duration-200 uppercase"
                    >
                        <Link href={`/${lang}/about`}>
                            {language?.header?.about}
                        </Link>
                    </li>
                    <li
                        onClick={setShowModal}
                        className="font-medium text-base text-[#333] hover:text-[#da291c] transition ease-in-out duration-200 uppercase"
                    >
                        <Link href={`/${lang}/partner`}>
                            {language?.header?.partner}
                        </Link>
                    </li>
                    <li
                        onClick={setShowModal}
                        className="font-medium text-base text-[#333] hover:text-[#da291c] transition ease-in-out duration-200 uppercase"
                    >
                        <Link href={`/${lang}/contact`}>
                            {language?.header?.contact}
                        </Link>
                    </li>
                </ul>
            </nav>
            <ul className="flex flex-col items-center mt-5 space-y-5 text-center">
                <li className="font-medium text-base text-[#333] hover:text-[#da291c] transition ease-in-out duration-200 uppercase">
                    24/7
                </li>
                <li className="font-medium text-base text-[#333]  uppercase">
                    <Link
                        href={`tel:+998980013666`}
                        className="flex items-center"
                        aria-label="+998 98 001 3 666"
                    >
                        <p className="font-medium text-base text-[#333] hover:text-[#da291c] transition ease-in-out duration-200">
                            +998 98 001 3 666
                        </p>
                    </Link>
                </li>
            </ul>
        </>
    );
};
export default SideBar;
