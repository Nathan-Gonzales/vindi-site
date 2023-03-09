import { useEffect } from "react";


const StartSimulator = () => {

    function initEquipArray(){
        const idList = ['earring', 'head', 'wing', 'weapon', 'chest', 'totem', 'secondary', 'legs', 'hands', 'belt', 'feet', 'brooch', 'ring1', 'artifact', 'ring2', 'bracelet1', 'tail', 'bracelet2'];
        const equipArray = []

        for (let index = 0; index < idList.length; index++) {
            equipArray.push(<div id={idList[index]} className='bg-neutral-600 w-full h-full rounded-md shadow-inner border-2 border-neutral-900'></div>)
        }

        return equipArray
    }

    const stats = Array(18).fill(<div className="">STA: 10</div>)
    const equip = initEquipArray()
    // const gear =  Array(30).fill(<div className="bg-neutral-600 w-full h-full rounded-md">test</div>)

    

    useEffect(() => {

    }, []);


    return(
        <section className="flex flex-col w-full">
            <div className="grid grid-cols-6 text-white">
                <div className="col-span-1 flex flex-col items-center text-center w-full">
                    <h1 className="font-red-rose text-white text-4xl pb-10 px-10">Stats</h1>
                    <div className="grid grid-cols-2 gap-1 bg-gradient-to-b from-black to-neutral-900 p-5 rounded-lg font-red-rose w-full border-neutral-900 border-2">
                        {stats}
                    </div>
                </div>
                <div className="col-span-2 text-center">
                    <h1 className="font-red-rose text-white text-4xl pb-10 px-10">Equip</h1>
                    <div className="flex justify-center w-full py-5 bg-gradient-to-b from-black to-neutral-900 rounded-md border-neutral-900 border-2">
                        <div className="grid grid-cols-[repeat(3,_60px)] grid-rows-[repeat(6,_60px)] gap-1 place-items-center justify-center w-52 py-2 bg-stone-800 rounded-lg font-red-rose border-neutral-900 border-2">
                            {equip}
                        </div>
                    </div>
                    
                </div>
                <div className="col-span-3 text-center w-full">
                    <h1 className="font-red-rose text-white text-4xl pb-10 px-10">Gear</h1>
                    <div className="bg-gradient-to-b from-black to-neutral-900 rounded-md border-neutral-900 border-2">
                        <div id='gearsets'>
                            <div id="astera"></div>
                            <div id='milletian'></div>
                            <div id='ardri'></div>
                        </div>
                        <div id="accessories">
                            <div id=""></div>
                            <div id=""></div>
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