import React from 'react'

import flow from "../../assets/CPCP.png"
import wallet from "../../assets/wallet.jpg";
import logo from "../../assets/electro.jpg";
import { Link } from 'react-router-dom';

const Flow = () => {
  return (
    <>
      
      <div className="flex  items-center justify-center mt-1  ">
        <div className="rounded-lg w-[900px] h-[700px] flex items-center justify-center shadow-2xl ">
          <img className="w-full h-full" src={flow} alt="flowdiagram" />
        </div>
      </div>
    </>
  );
}

export default Flow