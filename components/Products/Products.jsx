"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

import { baseUrl, motionConfig } from "@/data";
import Modal from "../Modal/Modal";

import Up from "@/public/Images/chevron-right.svg";
import Mark_x from "@/public/Images/x_black.svg";

import "./product.css";

const Product = () => {
  const [drop, setDrop] = useState(false);
  const [drop1, setDrop1] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [productPowerMax, setproductPowerMax] = useState(null);
  const [productPowerMin, setproductPowerMin] = useState(null);
  const [itemProperties, setItemProperties] = useState({});
  const [showModal, setShowModal] = useState(false);
  const powers = [
    { id: 0, kb: "0 - 99", minPower: "0", maxPower: "99" },
    { id: 1, kb: "100 - 199", minPower: "100", maxPower: "199" },
    { id: 2, kb: "200 - 399", minPower: "200", maxPower: "399" },
    { id: 3, kb: "400 - 699", minPower: "400", maxPower: "699" },
    { id: 5, kb: "700 - 999", minPower: "700", maxPower: "999" },
    { id: 6, kb: "1000 - 1999", minPower: "1000", maxPower: "1999" },
    { id: 7, kb: "2000 - 4000", minPower: "2000", maxPower: "4000" },
  ];

  const getProducts = () => {
    const url = new URL(`${baseUrl}/product/all`);
    const headers = { lang: "en" };

    if (activeCategory) url.searchParams.append("categoryId", activeCategory);
    if (productPowerMax) url.searchParams.append("maxPover", productPowerMax);
    if (productPowerMax) url.searchParams.append("minPover", productPowerMin);

    axios
      .get(url.toString(), {
        headers,
      })
      .then((res) => setProducts(res?.data?.data?.result.result))
      .catch(console.log);
  };

  const getAllCategories = () => {
    axios
      .get(`${baseUrl}/category/all`, {
        headers: { lang: "en" },
      })
      .then((res) => setCategories(res?.data?.data?.result))
      .catch(console.log);
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  useEffect(() => {
    getProducts();
  }, [activeCategory, productPowerMax, productPowerMin]); // eslint-disable-line

  return (
    <section>
      <div className="container">
        <h2 className="font-bold text-[40px] sm:text-[48px] text-[#333] text-center mt-5">
          Каталог
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-start lg:justify-between space-y-[40px] lg:space-y-0 lg:space-x-[40px] !py-[20px] lg:!py-[50px]">
          <div className="max-w-[300px] w-full mx-auto lg:mx-0">
            <button
              type="button"
              onClick={() => setDrop(!drop)}
              className="w-full h-[43px] flex items-center justify-between font-medium text-[18px] leading-[27px] text-black px-[15px] uppercase"
            >
              Производители{" "}
              <Image
                className={`${drop ? "rotate-180" : "rotate-0"} duration-300`}
                src={Up}
                width={20}
                height={20}
                alt="arrow"
              />
            </button>
            {drop ? (
              <form className="px-[15px]" autoComplete="off" method="GET">
                {categories.length > 0 &&
                  categories?.map((data) => (
                    <div
                      key={data?._id}
                      className="flex items-center space-x-[10px] py-[5px] bg-white"
                    >
                      <input
                        className="categories_checkbox w-[22px] h-[22px] rounded-[3px] cursor-pointer accent-pink-500"
                        type="checkbox"
                        checked={activeCategory === data?._id}
                        name={data?.name}
                        id={data?.name}
                        onClick={() =>
                          setActiveCategory(
                            activeCategory === data?._id ? null : data?._id
                          )
                        }
                      />
                      <label
                        htmlFor={data?.name}
                        className="font-normal text-[#333] text-[16px] opacity-70 cursor-pointer"
                      >
                        {data?.name}
                      </label>
                    </div>
                  ))}
              </form>
            ) : null}
            <button
              type="button"
              onClick={() => setDrop1(!drop1)}
              className="w-full h-[43px] flex items-center justify-between font-medium text-[18px] leading-[27px] text-black px-[15px]"
            >
              кВа{" "}
              <Image
                className={`${drop1 ? "rotate-180" : "rotate-0"} duration-300`}
                src={Up}
                width={20}
                height={20}
                alt="arrow"
              />
            </button>
            {drop1 ? (
              <form className="px-[15px]" autoComplete="off" method="GET">
                {powers?.map((data) => (
                  <div
                    key={data?.id}
                    className="flex items-center space-x-[10px] py-[5px] bg-white"
                  >
                    <input
                      className="categories_checkbox w-[22px] h-[22px] rounded-[3px] cursor-pointer accent-pink-500"
                      type="checkbox"
                      name={data?.kb}
                      id={data?.kb}
                      checked={productPowerMax === data?.maxPower}
                      onClick={() => {
                        setproductPowerMax(
                          productPowerMax === data?.maxPower
                            ? null
                            : data?.maxPower
                        );
                        setproductPowerMin(
                          productPowerMin === data?.minPower
                            ? null
                            : data?.minPower
                        );
                      }}
                    />
                    <label
                      htmlFor={data?.kb}
                      className="font-normal text-[#333] text-[16px] opacity-70 cursor-pointer"
                    >
                      {data?.kb} кВа
                    </label>
                  </div>
                ))}
              </form>
            ) : null}
          </div>
          <div className="grid grid-cols-1 gap-5 mx-auto sm:grid-cols-3 sm:mx-0">
            <AnimatePresence>
              {products.length ? (
                products?.map((product) => (
                  <motion.div
                    {...motionConfig}
                    key={product?._id}
                    className="max-w-[250px] bg-white rounded-md shadow-card_shadow cursor-pointer pt-4"
                  >
                    <Image
                      className="w-full h-[165px] rounded-md"
                      src={`${baseUrl}/public/uploads/${product?.image}`}
                      alt="generator"
                      width={230}
                      height={161}
                    />
                    <div className="px-[18px] pb-5">
                      <h2 className="font-medium text-[20px] text-black">
                        {product?.CylinderArrangement}
                      </h2>
                      <p className="font-bold text-[#333] opacity-80 mt-[3px]">
                        Тип топлива{" "}
                        <span className="inline-block font-medium text-[#333] opacity-60">
                          - {product?.governorType}
                        </span>
                      </p>
                      <p className="font-bold text-[#333] opacity-80">
                        Модель{" "}
                        <span className="inline-block font-medium text-[#333] opacity-60">
                          - {product?.model}
                        </span>
                      </p>
                      <p className="font-bold text-[#333] opacity-80">
                        Мощность{" "}
                        <span className="inline-block font-medium text-[#333] opacity-60">
                          - {product?.maxPover}
                        </span>
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setShowModal(true);
                          setItemProperties(product);
                        }}
                        className="w-full mx-auto font-medium text-[18px] text-white text-center py-2 bg-[#da291c] rounded-lg mt-[14px]"
                      >
                        Подробно
                      </button>
                    </div>
                  </motion.div>
                ))
              ) : (
                <motion.div {...motionConfig} key={0}>
                  <p>No items found 😥</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Modal
        change={false}
        isVisible={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <div className="flex flex-col sm:flex-row items-center justify-between bg-white max-w-[720px] w-full py-[30px] px-[10px] sm:px-[30px] rounded-[26px] border relative">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="absolute top-[20px] right-[25px] w-[30px] h-[30px]"
          >
            <Image src={Mark_x} width={30} height={30} alt="close" />
          </button>
          <Image
            className="!max-w-[300px] !w-full h-[195px] sm:!mr-10 mt-10 sm:mt-0"
            src={`${baseUrl}/public/uploads/${itemProperties?.image}`}
            width={306}
            height={195}
            alt="product-image"
          />
          <div className="flex flex-col items-center justify-center text-center sm:text-start">
            <h2 className="font-bold text-[20px] leading-[30px] text-text-color mt-5 sm:mt-0">
              Название + кВа
            </h2>
            <ul className="mt-[30px]">
              <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                Модель - кВа
              </li>
              <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                Макс.общая выходная мощность (кВт/л.с.)
              </li>
              <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                Объем цилиндра (л){" "}
              </li>
              <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                Построение цилиндров Диаметр цилиндра x Ход поршня (мм*мм)
              </li>
              <li className="font-bold text-[16px] text-text-color2 leading=[20px]">
                Тип регулятора
              </li>
            </ul>
            <Link
              target="_blank"
              download="Nodirbek's resume.pdf"
              href={`${baseUrl}/public/uploads/${itemProperties?.file}`}
              className="bg-[#da291c] flex items-center justify-center max-w-[270px] w-full h-[41px] mt-[34px] font-semibold text-[18px] text-white rounded-[8px] leading-normal"
            >
              Скачать
            </Link>
          </div>
        </div>
      </Modal>
    </section>
  );
};

export default Product;
