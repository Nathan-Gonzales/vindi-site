import { useEffect, useState } from "react";
import chest from './images/Armors/Male/AsteraChestMale.PNG';
import { GiChestArmor, 
    GiGauntlet, 
    GiElfHelmet, 
    GiCrystalEarrings,
    GiLibertyWing,
    GiWhiteBook,
    GiBroadsword,
    GiArmoredPants,
    GiLegArmor,
    GiBeltArmor,
    GiBigDiamondRing,
    GiVanillaFlower,
    GiPaw,
    GiRing,
    GiFoxTail
} from 'react-icons/gi';



const StartSimulator = () => {
    

    function handleClick(){
        if(equipped){
            setEquipped(false)
        }
        else{
            setEquipped(true)
        }
    }

    const [equipped, setEquipped] = useState(false);
    const idList = ['earring', 'head', 'wing', 'weapon', 'chest', 'totem', 'secondary', 'legs', 'hands', 'belt', 'feet', 'brooch', 'ring1', 'artifact', 'ring2', 'bracelet1', 'tail', 'bracelet2'];
    const statList = ['STR', 'AGI', 'INT', 'WIL', 'LUK', 'MaxHP', 'MaxSTA', 'BAL', 'ATTSPD', 'ATTSurplus', 'ATT', 'DEF', 'Crit', 'CritDam', 'CritRes', 'ADDDam', 'Counter']
    const stats = {
        STR: 0,
        AGI: 0,
        INT: 0,
        WIL: 0,
        LUK: 0,
        MaxHP: 0,
        MaxSTA: 0,
        BAL: 0,
        ATTSPD: 0,
        ATTSurplus: 0,
        ATT: 0,
        DEF: 0,
        Crit: 0,
        CritDam: 0,
        CritRes: 0,
        ADDDam: 0,
        Counter: 0,
    }
    const icons = {
        hands: <GiGauntlet className="w-full h-full text-gray-400" />, 
        chest: <GiChestArmor className="w-full h-full text-gray-400" />,
        head: <GiElfHelmet className="w-full h-full text-gray-400" />,
        earring: <GiCrystalEarrings className="w-full h-full text-gray-400" />,
        wing: <GiLibertyWing className="w-full h-full text-gray-400" />,
        totem: <GiWhiteBook className="w-full h-full text-gray-400" />,
        secondary: "",
        weapon: <GiBroadsword className="w-full h-full text-gray-400" />,
        legs: <GiArmoredPants className="w-full h-full text-gray-400" />,
        feet: <GiLegArmor className="w-full h-full text-gray-400" />,
        belt: <GiBeltArmor className="w-full h-full text-gray-400" />,
        ring1: <GiBigDiamondRing className="w-full h-full text-gray-400" />,
        ring2: <GiBigDiamondRing className="w-full h-full text-gray-400" />,
        brooch: <GiVanillaFlower className="w-full h-full text-gray-400" />,
        artifact: <GiPaw className="w-full h-full text-gray-400" />,
        bracelet1: <GiRing className="w-full h-full text-gray-400" />,
        bracelet2: <GiRing className="w-full h-full text-gray-400" />,
        tail: <GiFoxTail className="w-full h-full text-gray-400" />,
    }
    

    useEffect(() => {

    }, []);


    return(
        <section className="flex flex-col w-full">
            <div className="grid grid-cols-8 text-white">
                <div className="col-span-2 flex flex-col items-center text-center w-full">
                    <h1 className="font-red-rose text-white text-4xl pb-10 px-10">Stats</h1>
                    <div className="bg-gradient-to-b from-black to-neutral-900 p-5 rounded-lg font-red-rose w-full border-neutral-900 border-2 text-left">
                        {statList.map((stat, index) => {
                            return(
                                <div className="flex justify-between">
                                    <div key={stat + ' name'}>{stat}</div>
                                    <div key={stat + ' value'}>{equipped ? stats[stat] = 20 : stats[stat]}</div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
                <div className="col-span-2 text-center">
                    <h1 className="font-red-rose text-white text-4xl pb-10 px-10">Equip</h1>
                    <div className="flex justify-center w-full py-5 bg-gradient-to-b from-black to-neutral-900 rounded-md border-neutral-900 border-2">
                        <div className="grid grid-cols-[repeat(3,_60px)] grid-rows-[repeat(6,_60px)] gap-1 place-items-center justify-center w-52 py-2 bg-stone-800 rounded-lg font-red-rose border-neutral-900 border-2">
                            {idList.map((piece, index) => {
                                return(<div key={idList[index]} className='flex bg-neutral-600 w-full h-full rounded-md 
                                shadow-inner border-2 border-neutral-900 items-center justify-center'>{icons[idList[index]]}</div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="col-span-4 text-center ">
                    <h1 className="font-red-rose text-white text-4xl pb-10 px-10">Gear</h1>
                    <div className="bg-gradient-to-b from-black to-neutral-900 rounded-md border-neutral-900 border-2 text-left px-10 pt-2 h-[444px] overflow-y-scroll scrollbar">
                        <div id='gearsets ' className="text-center">
                            <div id="astera" className="flex justify-left pl-10 py-2 font-red-rose text-2xl">Astera</div>
                            <hr className="w-full border-2 border-neutral-800 rounded-md "/>
                            <div className="inline-block py-3 px-3 mt-5 mb-3 bg-stone-800 rounded-lg font-red-rose border-neutral-900 border-2 ">
                                <div className="grid grid-cols-[repeat(6,_60px)] grid-rows-[repeat(1,_60px)] gap-1 place-items-center ">
                                    <img src={chest} alt="" onClick={handleClick} className={ equipped ? "w-full h-full rounded-md brightness-50" : "w-full h-full rounded-md"}/>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                </div>
                            </div>
                            
                            <div id='milletian' className="flex justify-left pl-10 py-2 font-red-rose text-2xl">Milletian</div>
                            <hr className="w-full border-2 border-neutral-800 rounded-md "/>
                            <div className="inline-block py-3 px-3 mt-5 mb-3 bg-stone-800 rounded-lg font-red-rose border-neutral-900 border-2 ">
                                <div className="grid grid-cols-[repeat(6,_60px)] grid-rows-[repeat(1,_60px)] gap-1 place-items-center ">
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                </div>
                            </div>
                            <div id='ardri' className="flex justify-left pl-10 py-2 font-red-rose text-2xl">Ardri</div>
                            <hr className="w-full border-2 border-neutral-800 rounded-md "/>
                            <div className="inline-block py-3 px-3 mt-5 mb-3 bg-stone-800 rounded-lg font-red-rose border-neutral-900 border-2 ">
                                <div className="grid grid-cols-[repeat(6,_60px)] grid-rows-[repeat(1,_60px)] gap-1 place-items-center ">
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                    <div className="bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900"></div>
                                </div>
                            </div>
                        </div>
                        <div id="accessories">
                            <div id="" className="text-2xl"></div>
                            <div id="" className="text-2xl"></div>
                            <div id=""></div>
                            <div id=""></div>
                            <div id=""></div>
                            <div id=""></div>
                        </div>
                        {/* {gear} */}
                    </div>
                </div>
            </div>        
        </section>
    );
}


export default StartSimulator;