import imgBanner from './images/FerghusHimself.png';
import React, { useState } from 'react';
import StartSimulator from './startSimulator.js';


const GearSimulator = () => {

    const [preStart, setPreStart] = useState(true);

    const handleClick = () => {
        setPreStart(false);
    }

    return (
        <main className='bg-[url("./images/TheForge.jpg")] bg-fixed'>
            <section className='min-h-screen'>
                <section className='flex items-center justify-center'>
                    <div className='bg-neutral-900/[.75] flex flex-col h-full justify-between max-w-screen-xl md:px-3 lg:px-3 border-neutral-900 border-x-2'>
                        <img className='border-neutral-900 border-x-2 border-b-2 w-[1280px] mb-10 max-h-60' src={imgBanner} alt="" />
                        <div className='flex flex-col items-center'>
                            {preStart && (
                            <h1 className='bg-gradient-to-b from-black/[.65] to-neutral-900/[.65] font-red-rose py-10 w-full lg:w-4/5 text-center text-neutral-200 text-5xl border-neutral-900 border-2 rounded-sm'>
                                Gear Simulator</h1>)
                            }
                            {/* {preStart && (
                            <p className='bg-gradient-to-b from-black to-neutral-900 font-red-rose p-10 w-full text-center text-neutral-200 text-3xl  rounded-sm my-10 border-neutral-900 border-2'>
                                This system is meant to simulate the in game armor/equipment system. You can see what stats you would obtain
                                for equipping new gear. For example maybe you need a little more defense and you're wondering how much 
                                defense you could get from upgrading from Milletian armor to Ardri.
                            </p>)
                            } */}
                            {preStart && (
                            <button className='bg-gradient-to-b from-black to-neutral-900 border-neutral-900 font-red-rose mt-10 py-10 w-full lg:w-1/2 text-center text-neutral-200 text-5xl border-2 rounded-lg underline' 
                            onClick={handleClick}>START
                            </button>)
                            }
                            {!preStart && (
                                <StartSimulator />
                            )}
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default GearSimulator;