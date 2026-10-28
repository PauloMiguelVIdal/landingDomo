'use client'
import { React, useState } from "react";
import { Topbar } from "../components/Topbar";
import { CardModel } from "../components/CardModel";


export const LandingPage = () => {






    const [themeMode, setThemeMode] = useState(false)

    const toggleTheme = () => {
        setThemeMode(!themeMode)
    }


    const ThemeDefine = themeMode === false ? 'light' : 'black'


    const dados = [
        {
            nome: 'Domo',
            desc: 'Simulador de gestão empresarial,variações econômicas, expansão de negócios e gerenciamento de recursos.',
            url: 'link',
            corPrim: '#F27405',
            corSec: '#350973',
        },
        {
            nome: 'Domo Draft',
            desc: 'Simulador de gestão empresarial,variações econômicas, expansão de negócios e gerenciamento de recursos. escolhas através de cartas e turnos com teporizadores',
            url: 'link',
            corPrim: '#6411D9',
            corSec: '#350973',
        },
        {
            nome: 'Domo Profundo',
            desc: 'Simulador de gestão empresarial,variações econômicas, expansão de negócios e gerenciamento de recursos. com possibilidades de gerenciamento ativo de edifícios e criação de cadeias produtivas completas',
            url: 'link',
            corPrim: '#350973',
            corSec: '#000000',
        },
    ]



    const light = { cor1: '#d1b5f8', cor2: '#bd8eff', cor3: '#8F5ADA' }
    const dark = { cor1: '#6411D9', cor2: '350973', cor3: '#000000' }



    return (
        <div style={{ background: `linear-gradient(120deg, ${light.cor1}, ${light.cor2}, ${light.cor3})` }} className="h-screen w-screen flex items-center justify-center flex-col bg-gradient-to-br ">
            <div className='flex justify-between w-full '>

                <Topbar />
            </div>
            <div className="w-[80vw] h-[60vh] flex justify-around">
                {ThemeDefine}
                {dados.map((index) =>

                    <CardModel nome={index.nome} desc={index.desc} corPrim={index.corPrim} corSec2={index.corSec} />
                )}
            </div>
        </div>
    )
}