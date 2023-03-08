import { useEffect } from "react";


const StartSimulator = () => {

    const stats = Array(18).fill(<div className="">STA: 10</div>)
    const slots = Array(18).fill(<div className="bg-neutral-600 w-full h-full rounded-md">test</div>)
    const gear =  Array(30).fill(<div className="bg-neutral-600 w-full h-full rounded-md">test</div>)

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
                <div className="col-span-2 text-center w-full">
                    <h1 className="font-red-rose text-white text-4xl pb-10 px-10">Slots</h1>
                    <div className="grid grid-cols-[repeat(3,_60px)] grid-rows-[repeat(6,_60px)] gap-1 place-items-center justify-center py-5 bg-gradient-to-b from-black to-neutral-900 rounded-lg font-red-rose w-full border-neutral-900 border-2">
                        {slots}
                    </div>
                </div>
                <div className="col-span-3 text-center w-full">
                    <h1 className="font-red-rose text-white text-4xl pb-10 px-10">Equip</h1>
                    <div className="grid grid-cols-[repeat(5,_60px)] grid-rows-[repeat(6,_60px)] gap-1 place-items-center justify-center py-5 bg-gradient-to-b from-black to-neutral-900 rounded-lg font-red-rose w-full border-neutral-900 border-2">
                        {gear}
                    </div>
                </div>
            </div>        
        </section>
    );
}


export default StartSimulator;