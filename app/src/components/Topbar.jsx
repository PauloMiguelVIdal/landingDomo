'use client'
import { ButtonTheme } from "../components/ButtonTheme";
import React from "react";
// import Image from "next/image";

export const Topbar = ()=> {
    return(
    <div className="w-full h-[100px] ml-[50px] fixed top-[50px]">
        <img className="h-full aspect-square" src='./logo.png' alt='logoDomo'/>
<ButtonTheme/>    
    </div>
    );
}

