import React, { useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import logo from "../assets/electro.jpg";
import wallet from "../assets/wallet.jpg";
import { Stacked, Pie, Button, LineChart, SparkLine } from "../components";
import {
  earningData,
  medicalproBranding,
  recentTransactions,
  weeklyStats,
  dropdownData,
  SparklineAreaData,
  ecomPieChartData,
} from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";
import product9 from "../data/product9.jpg";
import { Link } from "react-router-dom";
import Announcment from "./Announcements/Announcment";


const Ecommerce = () => {
  const [basePrice, setBasePrice] = useState(0);
  const [wet, setWet] = useState(0);
  const [dry, setDry] = useState(0);
  const [surgeMultiplication, setSurgeMultiplication] = useState(3);
  const [weight, setWeight] = useState(0);

  const [morebasePrice, setmoreBasePrice] = useState(0);
  const [morewet, setmoreWet] = useState(0);
  const [moredry, setmoreDry] = useState(0);
  const [moresurgeMultiplication, setmoreSurgeMultiplication] = useState(1);
  const [moreweight, setmoreWeight] = useState(0);

  const calculatePrice = () => {
    const totalCost = basePrice + wet + dry;
    const totalPrice = totalCost * surgeMultiplication;
    return totalPrice.toFixed(2); // To display only two decimal places
  };

  const calculatemorePrice = () => {
    const moretotalCost = morebasePrice + morewet + moredry;
    const moretotalPrice = moretotalCost * moresurgeMultiplication;
    return moretotalPrice.toFixed(2); // To display only two decimal places
  };

  return (
    <>
      <div>
        <button className="rounded-md shadow-lg mr-[20px]   text-xl font-semibold">
          <img
            className="w-[30px] rounded-full shadow-xl hover:translate-y-[-5px] h-[30px]"
            src={wallet}
            alt="wallet"
          />
        </button>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white shadow-lg dark:text-gray-200 dark:bg-secondary-dark-bg h-[200px] rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-400">Total Coins DIstributed</p>
              <p className="text-2xl">300,448.78</p>
            </div>
            <button
              type="button"
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              ₹
            </button>
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div
              key={item.title}
              className="bg-white h-[200px] shadow-lg dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl "
            >
              <button
                type="button"
                style={{
                  color: item.iconColor,
                  backgroundColor: item.iconBg,
                }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex w-full flex-col gap-[20px]">
        <h1 className="text-3xl font-bold px-[20px]">
          Waste Management Surge Price Calculator
        </h1>
        <div className="flex   px-[20px] items-center justify-between">
          <div className="w-1/2 rounded-md shadow-lg h-[300px] px-[10px] py-[10px] items-center">
            <h2 className="text-3xl font-semibold underline leading-wide mb-[10px]">
              Less Traffic Area
            </h2>
            <form className="w-full px-[20px] py-[30px]">
              <div>
                <input
                  value={basePrice}
                  onChange={(e) => setBasePrice(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-gray-300 font-semibold">
                  Enter base price
                </label>
              </div>
              <div>
                <input
                  value={wet}
                  onChange={(e) => setWet(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-gray-300 font-semibold">
                  Enter wet waste cost per kg
                </label>
              </div>
              <div>
                <input
                  value={dry}
                  onChange={(e) => setDry(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-gray-300 font-semibold">
                  Enter dry waste cost per kg
                </label>
              </div>
              <div>
                <input
                  value={surgeMultiplication}
                  onChange={(e) =>
                    setSurgeMultiplication(parseFloat(e.target.value))
                  }
                  type="number"
                />
                <label className="text-xl text-gray-300 font-semibold">
                  Enter surge multiplication
                </label>
              </div>
              <div>
                <input
                  value={weight}
                  onChange={(e) => setWeight(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-gray-300 font-semibold">
                  Enter weight (kg)
                </label>
              </div>
            </form>
            <p className="text-xl text-gray-300 font-semibold">
              Total Price: ${calculatePrice()}
            </p>
          </div>
          <div className="w-1/2 rounded-md shadow-lg h-[300px] px-[10px] py-[10px] items-center">
            <h2 className="text-3xl font-semibold underline leading-wide mb-[10px]">
              More Traffic Area
            </h2>
            <form className="w-full px-[20px] py-[30px]">
              <div>
                <input
                  value={morebasePrice}
                  onChange={(e) => setmoreBasePrice(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-gray-300 font-semibold">
                  Enter base price
                </label>
              </div>
              <div>
                <input
                  value={morewet}
                  onChange={(e) => setmoreWet(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-gray-300 font-semibold">
                  Enter wet waste cost per kg
                </label>
              </div>
              <div>
                <input
                  value={moredry}
                  onChange={(e) => setmoreDry(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-gray-300 font-semibold">
                  Enter dry waste cost per kg
                </label>
              </div>
              <div>
                <input
                  value={moresurgeMultiplication}
                  onChange={(e) =>
                    setmoreSurgeMultiplication(parseFloat(e.target.value))
                  }
                  type="number"
                />
                <label className="text-xl text-gray-300 font-semibold">
                  Enter surge multiplication
                </label>
              </div>
              <div>
                <input
                  value={moreweight}
                  onChange={(e) => setmoreWeight(parseFloat(e.target.value))}
                  type="number"
                />
                <label className="text-xl text-gray-300 font-semibold">
                  Enter weight (kg)
                </label>
              </div>
            </form>
            <p className="text-xl text-gray-300 font-semibold">
              Total Price: Rs{calculatemorePrice()}
            </p>
          </div>
        </div>
        <div className="flex ">
          <div className="w-full rounded-md shadow-lg items-center justify-center ">
            <div className="w-full px-[200px] ">
              <h1 className="text-3xl ">Announcements</h1>
              <Announcment />
            </div>
          </div>
        </div>
      </div>
      <form className="flex mt-[20px] flex-col w-full px-[200px] py-[10px]">
        <div className="flex flex-col">
          <input type="string" placeholder="Address" />
          <label>Address</label>
        </div>
        <div className="flex flex-col">
          <input type="number" placeholder="Coin" />
          <label>Coin</label>
        </div>
        <div className="flex flex-col">
          <input type="number" placeholder="Waste Weight" />
          <label>Waste Weight</label>
        </div>
        <button className="bg-black rounded-md text-white text-xl ">
          Submit
        </button>
      </form>
    </>
  );
};

export default Ecommerce;
