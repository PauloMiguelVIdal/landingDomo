'use client'
import { Pointer } from "lucide-react";
import { color } from "motion";
import React from "react";







export const CardModel = ({nome,desc,corPrim,corSec2}) => {
    return (
        <div style={{background: `linear-gradient(150deg ,${corPrim} ,${corSec2})`}} className="flex items-center justify-around flex-col border-4 border-[#350973] h-full w-[25%] rounded-3xl min-w-[400px] max-w-[500px] ">
            <div className="h-[25%] w-[80%] text-white text-[20px] text-bold bg-white/20  border-1 border-[#350973]/10 rounded-2xl flex items-center justify-center">{nome}</div>
            <div className="w-[80%] h-[40%] bg-white/20 text-white text-[16px] text-center p-3 border-1 border-[#350973]/10 rounded-2xl flex items-center justify-center">{desc}</div>
            <button style={{fontFamily:'FuturaPt', opacity:'80%', background: `linear-gradient(150deg,${corPrim} ,${corSec2})`}} className="w-[80%] h-[15%] bg-white/20 text-white border-1  border-[#350973]/10 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white">Acessar</button>
           
        </div>
    )
}