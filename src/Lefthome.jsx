import React from "react";
import Main from "./images/image-product-1.jpg"

export default function Lefthome(){
    return(  
            <div className="flex flex-col">
                <div className="size-[31.25rem] mb-4">
                    <img src={Main} className=" rounded-3xl"></img>
                </div>
            </div>  
    ) 
}