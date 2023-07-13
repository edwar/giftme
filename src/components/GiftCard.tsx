import { ShoppingIcon, convertHexToRgba } from "@/utils";
import Image from "next/image";

interface Props {
  color: string;
  img: string;
  pay: string;
  price: string;
  currency: string;
  id: string;
  owner?: boolean;
}

export default function Card({
  color,
  img,
  currency,
  pay,
  price,
  id,
  owner = false,
}: Props) {
  const rgba = convertHexToRgba({ hexColor: color, opacity: 100 });
  const rgbao = convertHexToRgba({ hexColor: color, opacity: 50 });
  return (
    <div className="flex justify-center w-full">
      <div className="group h-[324px] w-[204px] [perspective:1000px]">
        <div className={`relative w-full h-full transition-all duration-500 ${owner && '[transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'}`}>
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <div className="relative w-full h-full bg-white shadow-sm rounded-md overflow-hidden">
              <div className="absolute w-full h-full z-10">
                <div className="flex flex-col justify-around items-center h-full px-4 text-justify">
                  <div className="flex justify-center h-20 w-full"></div>
                  <div className="font-poppins text-transparent text-center text-3xl font-bold bg-clip-text bg-gradient-to-t from-slate-500 via-white to-white">
                    ${pay}
                  </div>
                  {owner ? (
                    <div></div>
                  ) : (
                    <button
                      type="button"
                      className={`text-white font-poppins tracking-wider shadow-lg bg-[${color}]/80 hover:bg-[${color}]/50 focus:outline-none border-[0.5px] border-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 mr-2 mb-2`}
                    >
                      Agregar
                      <ShoppingIcon />
                    </button>
                  )}
                </div>
              </div>
              <div className="flex justify-center absolute z-10 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  alt={`logo-${img}`}
                  src={img}
                  width={102}
                  height={80}
                  className="mt-10"
                />
              </div>
              <div className="absolute right-2 top-6 font-poppins text-gray-400 text-xs">
                {currency} ${price}
              </div>
              <div className="absolute w-full bottom-0 z-0">
                <svg
                  id="wave"
                  viewBox="0 0 1440 1800"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id={`sw-gradient-${id}`}
                      x1="0"
                      x2="0"
                      y1="1"
                      y2="0"
                    >
                      <stop stopColor={rgba} offset="0%"></stop>
                      <stop stopColor={rgbao} offset="100%"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill={`url(#sw-gradient-${id})`}
                    d="M0,245L60,204.2C120,163,240,82,360,114.3C480,147,600,294,720,343C840,392,960,343,1080,269.5C1200,196,1320,98,1440,65.3C1560,33,1680,65,1800,98C1920,131,2040,163,2160,179.7C2280,196,2400,196,2520,228.7C2640,261,2760,327,2880,359.3C3000,392,3120,392,3240,383.8C3360,376,3480,359,3600,326.7C3720,294,3840,245,3960,204.2C4080,163,4200,131,4320,130.7C4440,131,4560,163,4680,155.2C4800,147,4920,98,5040,89.8C5160,82,5280,114,5400,163.3C5520,212,5640,278,5760,318.5C5880,359,6000,376,6120,383.8C6240,392,6360,392,6480,351.2C6600,310,6720,229,6840,171.5C6960,114,7080,82,7200,65.3C7320,49,7440,49,7560,114.3C7680,180,7800,310,7920,343C8040,376,8160,310,8280,245C8400,180,8520,114,8580,81.7L8640,49L8640,1800L8580,1800C8520,1800,8400,1800,8280,1800C8160,1800,8040,1800,7920,1800C7800,1800,7680,1800,7560,1800C7440,1800,7320,1800,7200,1800C7080,1800,6960,1800,6840,1800C6720,1800,6600,1800,6480,1800C6360,1800,6240,1800,6120,1800C6000,1800,5880,1800,5760,1800C5640,1800,5520,1800,5400,1800C5280,1800,5160,1800,5040,1800C4920,1800,4800,1800,4680,1800C4560,1800,4440,1800,4320,1800C4200,1800,4080,1800,3960,1800C3840,1800,3720,1800,3600,1800C3480,1800,3360,1800,3240,1800C3120,1800,3000,1800,2880,1800C2760,1800,2640,1800,2520,1800C2400,1800,2280,1800,2160,1800C2040,1800,1920,1800,1800,1800C1680,1800,1560,1800,1440,1800C1320,1800,1200,1800,1080,1800C960,1800,840,1800,720,1800C600,1800,480,1800,360,1800C240,1800,120,1800,60,1800L0,1800Z"
                  ></path>
                </svg>
              </div>
              <div className="absolute inset-x-0 shadow-xl w-3 h-3 rounded-full  bg-gray-100 mx-auto mt-2 z-0" />
              <div className="absolute inset-x-0 shadow-xl w-1/3 h-2 rounded-full  bg-gray-100 mx-auto mt-3 z-0" />
            </div>
          </div>
          <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="relative w-full h-full bg-white shadow-sm rounded-md overflow-hidden">
            <div className="absolute inset-x-0 shadow-xl w-3 h-3 rounded-full  bg-gray-100 mx-auto mt-2 z-0" />
              <div className="absolute inset-x-0 shadow-xl w-1/3 h-2 rounded-full  bg-gray-100 mx-auto mt-3 z-0" />
              <div className="flex justify-center absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Image
                  alt={`logo-${img}`}
                  src={img}
                  width={102}
                  height={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
