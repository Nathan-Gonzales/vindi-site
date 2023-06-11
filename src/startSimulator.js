import { useEffect, useState } from "react";
import asteraChest from './images/Armors/Male/AsteraChestMale.PNG';
import asteraFeet from './images/Armors/Male/AsteraFeetMale.PNG';
import asteraHands from './images/Armors/Male/AsteraHandsMale.PNG';
import asteraLegs from './images/Armors/Male/AsteraLegsMale.PNG';
import asteraHead from './images/Armors/Male/AsteraHeadMale.PNG';
import asteraWeapon from './images/Weapons/Greatsword-100.PNG';
import milletianChest from './images/Armors/Male/MilletianChestMale.PNG';
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

    const [equipped, setEquipped] = useState({
        1: false,
    });

    const [slots, setSlots] = useState({
        earring: {
            id: null,
            empty: true,
        }, 
        head: {
            id: null,
            empty: true,
        },  
        wing: {
            id: null,
            empty: true,
        }, 
        weapon: {
            id: null,
            empty: true,
        }, 
        chest: {
            id: null,
            empty: true,
        }, 
        totem: {
            id: null,
            empty: true,
        }, 
        secondary: {
            id: null,
            empty: true,
        }, 
        legs: {
            id: null,
            empty: true,
        }, 
        hands: {
            id: null,
            empty: true,
        }, 
        belt: {
            id: null,
            empty: true,
        }, 
        feet: {
            id: null,
            empty: true,
        }, 
        brooch: {
            id: null,
            empty: true,
        }, 
        ring1: {
            id: null,
            empty: true,
        }, 
        artifact: {
            id: null,
            empty: true,
        }, 
        ring2: {
            id: null,
            empty: true,
        }, 
        bracelet1: {
            id: null,
            empty: true,
        }, 
        tail: {
            id: null,
            empty: true,
        }, 
        bracelet2: {
            id: null,
            empty: true,
        },
    });

    const [statsUpdate, setStatsUpdate] = useState({
        stats: {
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
    });

    const idList = ['earring', 'head', 'wing', 'weapon', 'chest', 'totem', 'secondary', 'legs', 'hands', 'belt', 'feet', 'brooch', 'ring1', 'artifact', 'ring2', 'bracelet1', 'tail', 'bracelet2'];
    const statList = ['STR', 'AGI', 'INT', 'WIL', 'LUK', 'MaxHP', 'MaxSTA', 'BAL', 'ATTSPD', 'ATTSurplus', 'ATT', 'DEF', 'Crit', 'CritDam', 'CritRes', 'ADDDam', 'Counter']
    
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

    const pieces = {
        1: {
            name: "AsteraChest",
            type: 'chest',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        2: {
            name: "AsteraWeapon",
            type: 'weapon',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        3: {
            name: "AsteraHead",
            type: 'head',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        4: {
            name: "AsteraLegs",
            type: 'legs',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        5: {
            name: "AsteraHands",
            type: 'hands',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        6: {
            name: "AsteraFeet",
            type: 'feet',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        7: {
            name: "MilletianChest",
            type: 'chest',
            STR: 100,
            AGI: 200,
            INT: 300,
            WIL: 400,
            ATT: 500,
            DEF: 600,
            ATTSurplus: 700,
            img: <img src={milletianChest} alt="" className="w-full h-full"></img>,
        },
        8: {
            name: "MilletianWeapon",
            type: 'weapon',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        9: {
            name: "MilletianHead",
            type: 'head',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        10: {
            name: "MilletianLegs",
            type: 'legs',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        11: {
            name: "MilletianHands",
            type: 'hands',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        12: {
            name: "MilletianFeet",
            type: 'feet',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        13: {
            name: "ArdriChest",
            type: 'chest',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        14: {
            name: "ArdriWeapon",
            type: 'weapon',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        15: {
            name: "ArdriHead",
            type: 'head',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        16: {
            name: "ArdriLegs",
            type: 'legs',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        17: {
            name: "ArdriHands",
            type: 'hands',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
        18: {
            name: "ArdriFeet",
            type: 'feet',
            STR: 10,
            AGI: 20,
            INT: 30,
            WIL: 40,
            ATT: 50,
            DEF: 60,
            ATTSurplus: 70,
            img: <img src={asteraChest} alt="" className="w-full h-full"></img>,
        },
    }
    
    function handleClick(ID){

        if(equipped[ID]){ // if piece (ID) is equipped, unequip it and drop stats
            setEquipped(prev => {
                const update = {
                    ...prev,
                    [ID]: false
                }
                return update
            })
            updateStat(ID, false)
            updateSlots(ID, false)
        }
        else if(isSlotFilled(ID)){ // if piece (ID) is not equipped but another piece is equipped in that slot, unequip it, drop stats, then equip ID piece

            switch(pieces[ID].type){
                case 'chest':
                    setEquipped(prev => {
                        const update = {
                            ...prev,
                            [slots.chest.id]: false
                        }
                        return update
                    })
                    updateStat(slots.chest.id, false)

                    setSlots(prev => {
                        const tempSlots = JSON.parse(JSON.stringify(slots))
                        tempSlots.chest.id = null
                        tempSlots.chest.empty = true
                        const update = {
                            ...prev,
                            chest: tempSlots.chest
                        }
                        return update
                    })
                    break;
                case 'weapon':
                    break;
                case 'head':
                    break;
                case 'legs':
                    break;
                case 'hands':
                    break;
                case 'feet':
                    break;
                default:
                    console.log("error: type not found")
            }
            
            setEquipped(prev => {
                const update = {
                    ...prev,
                    [ID]: true
                }
                return update
            })
            updateStat(ID, true)
            updateSlots(ID, true)
        }
        else {                     // if no piece is equipped in slot, equip piece (ID) and update stats
            setEquipped(prev => {
                const update = {
                    ...prev,
                    [ID]: true
                }
                return update
            })
            updateStat(ID, true)
            updateSlots(ID, true)
        }
    }

    function updateStat(ID, equipping){
        
        if(equipping){
            // switch setStats depending on which piece
            switch(pieces[ID].type){
                case 'chest':
                    setStatsUpdate(prev => {
                        const tempStats = JSON.parse(JSON.stringify(statsUpdate))
                        for(const stat in prev.stats){
                            if(pieces[ID].hasOwnProperty(stat)){
                                tempStats.stats[stat] = prev.stats[stat] + pieces[ID][stat]
                            }
                        }
                        const update = {
                            ...prev,
                            stats: tempStats.stats
                        }
                        return update
                    })
                    break;
                case 'weapon':
                    return !slots.weapon.empty;
                case 'head':
                    return !slots.head.empty;
                case 'legs':
                    return !slots.legs.empty;
                case 'hands':
                    return !slots.hands.empty;
                case 'feet':
                    return !slots.feet.empty;
                default:
                    console.log("error: type not found")
            }
        }
        else{
            switch(pieces[ID].type){
                case 'chest':
                    setStatsUpdate(prev => {
                        const tempStats = JSON.parse(JSON.stringify(statsUpdate))
                        for(const stat in prev.stats){
                            if(pieces[ID].hasOwnProperty(stat)){
                                tempStats.stats[stat] = prev.stats[stat] - pieces[ID][stat]
                            }
                        }
                        const update = {
                            ...prev,
                            stats: tempStats.stats
                        }
                        return update
                    })
                    break;
                case 'weapon':
                    return !slots.weapon.empty;
                case 'head':
                    return !slots.head.empty;
                case 'legs':
                    return !slots.legs.empty;
                case 'hands':
                    return !slots.hands.empty;
                case 'feet':
                    return !slots.feet.empty;
                default:
                    console.log("error: type not found")
            }
        }
    }

    function updateSlots(ID, equipping){
        const tempSlots = JSON.parse(JSON.stringify(slots))

        if(equipping){
            tempSlots[pieces[ID].type].id = ID
            tempSlots[pieces[ID].type].empty = false
            setSlots(prev => {
                const update = {
                    ...prev,
                    [pieces[ID].type]: tempSlots[pieces[ID].type]
                }
                return update
            })
            setSlots(prev => {
                const update = {
                    ...prev,
                    [pieces[ID].type]: tempSlots[pieces[ID].type]
                }
                return update
            })
        }
        else{
            tempSlots[pieces[ID].type].id = null
            tempSlots[pieces[ID].type].empty = true
            setSlots(prev => {
                const update = {
                    ...prev,
                    [pieces[ID].type]: tempSlots[pieces[ID].type]
                }
                return update
            })
        }
    }

    function isSlotFilled(ID){
        switch(pieces[ID].type){
            case 'chest':
                return !slots.chest.empty;
            case 'weapon':
                return !slots.weapon.empty;
            case 'head':
                return !slots.head.empty;
            case 'legs':
                return !slots.legs.empty;
            case 'hands':
                return !slots.hands.empty;
            case 'feet':
                return !slots.feet.empty;
            default:
                console.log("error: type not found")
        }
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
                                    <div key={stat + ' value'}>{statsUpdate.stats[stat]}</div>
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
                                shadow-inner border-2 border-neutral-900 items-center justify-center'>{slots[piece].empty ? icons[idList[index]] : pieces[slots[piece].id].img}</div>
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
                                    <img src={asteraChest} alt="" onClick={() =>{handleClick(1)}} className={ equipped[1] ? "w-full h-full rounded-md brightness-50" : "w-full h-full rounded-md"}/>
                                    <img src={asteraHead} alt="" onClick={() =>{handleClick(3)}} className={ equipped[3] ? "w-full h-full rounded-md brightness-50" : "w-full h-full rounded-md"}/>
                                    <img src={asteraLegs} alt="" onClick={() =>{handleClick(4)}} className={ equipped[4] ? "w-full h-full rounded-md brightness-50" : "w-full h-full rounded-md"}/>
                                    <img src={asteraHands} alt="" onClick={() =>{handleClick(5)}} className={ equipped[5] ? "w-full h-full rounded-md brightness-50" : "w-full h-full rounded-md"}/>
                                    <img src={asteraFeet} alt="" onClick={() =>{handleClick(6)}} className={ equipped[6] ? "w-full h-full rounded-md brightness-50" : "w-full h-full rounded-md"}/>
                                    <img src={asteraWeapon} alt="" onClick={() =>{handleClick(2)}} className={ equipped[2] ? "w-full h-full rounded-md brightness-50" : "w-full h-full rounded-md"}/>
                                    
                                </div>
                            </div>
                            
                            <div id='milletian' className="flex justify-left pl-10 py-2 font-red-rose text-2xl">Milletian</div>
                            <hr className="w-full border-2 border-neutral-800 rounded-md "/>
                            <div className="inline-block py-3 px-3 mt-5 mb-3 bg-stone-800 rounded-lg font-red-rose border-neutral-900 border-2 ">
                                <div className="grid grid-cols-[repeat(6,_60px)] grid-rows-[repeat(1,_60px)] gap-1 place-items-center ">
                                    <img src={milletianChest} alt="" onClick={() =>{handleClick(7)}} className={ equipped[7] ? "w-full h-full rounded-md brightness-50" : "w-full h-full rounded-md"}/>
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