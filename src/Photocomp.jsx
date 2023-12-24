import React from "react";

export default function Photocomp(props){
        return(
            <img onClick={props.onClick} className="mr-4 size-28 rounded-xl hover:border-orange-600 hover:border-4 hover:brightness-50" src={props.img} />
        )
}