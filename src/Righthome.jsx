import React from "react";

export default function Righthome(){
    return(
        <div className=" w-[31.25rem] pt-28 flex flex-col mr-12">
                <div className="flex flex-col">
                <p className=" text-orange-400 font-semibold mb-4">SNEAKER COMPANY</p>
                <p className=" font-extrabold text-5xl mb-8">Fall Limited Edition Sneakers</p>
                <p className=" text-gray-400 mb-4">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                </div>
                <div className="flex flex-row justify-center mb-6 items-center">
                    <p className="text-3xl mr-6">$125.00</p>
                    <span className="text-md bg-orange-200 rounded-lg text-orange-400 items-center leading-8  h-fit"> 50% </span>
                </div>
                <div className="flex flex-row  justify-normal pb-8">
                <div className="flex flex-row justify-between ml-8 rounded-xl text-xl font-extrabold bg-gray-200 p-4 mr-2 ">
                    <button className="text-orange-400 mr-10">-</button>
                    <p className="mr-10">0</p>
                    <button className="text-orange-400">+</button>
                </div>
                <div className="flex flex-row mr-8 bg-orange-400 text-white  w-2/3 items-center text-xl justify-center rounded-xl hover:bg-[#69707D] hover:text-orange-400">
                    <svg className="mr-10" width="22" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fill="#69707D" fill-rule="nonzero"/></svg>
                    <p className="transition-transform duration-100 ease-in-out hover:translate-x-[-25px]">Add to cart</p>
                </div>
                </div>
            </div>
    )
}