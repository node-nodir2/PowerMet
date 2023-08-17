const Numbers = ({ language }) => {
    return (
        <section className="bg-white">
            <div className="container sm:!pt-[57px] !py-[20px] sm:!pb-[95px]">
                <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center">
                    {language?.hero_about?.numbers}
                </h2>
                <ul className="flex flex-col sm:flex-row items-center justify-between mt-5">
                    <li className="max-w-[338px] w-full ">
                        <h3 className="font-bold text-[100px] text-[#da291c] text-center leading-[105px] sm:leading-normal">
                            5000
                        </h3>
                        <p className="font-medium text-[18px] text-[#333] text-center opacity-80 mt-4 leading-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc odio in et, lectus sit lorem id integer.
                        </p>
                    </li>
                    <li className="max-w-[338px] w-full ">
                        <h3 className="font-bold text-[100px] text-[#da291c] text-center leading-[105px] sm:leading-normal">
                            14
                        </h3>
                        <p className="font-medium text-[18px] text-[#333] text-center opacity-80 mt-4 leading-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc odio in et, lectus sit lorem id integer.
                        </p>
                    </li>
                    <li className="max-w-[338px] w-full ">
                        <h3 className="font-bold text-[100px] text-[#da291c] text-center leading-[105px] sm:leading-normal">
                            99
                        </h3>
                        <p className="font-medium text-[18px] text-[#333] text-center opacity-80 mt-4 leading-normal">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nunc odio in et, lectus sit lorem id integer.
                        </p>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Numbers;
