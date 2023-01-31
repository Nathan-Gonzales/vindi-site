import imgBanner from './images/Only_Heroes.jpg';

const Community = () => {
    return(
        <main className='bg-[url("./images/Colhen.png")] bg-fixed'>
            <section className='min-h-screen'>
                <section className='flex items-center justify-center'>
                    <div className='bg-neutral-900/[.75] flex flex-col h-full justify-between max-w-screen-xl px-3 border-neutral-900 border-x-2'>
                        <img className='border-neutral-900 border-x-2 border-b-2 mb-10 max-h-60' src={imgBanner} alt="" />
                        <div className='flex flex-col items-center'>
                            <h1 className='bg-gradient-to-b from-black/[.65] to-neutral-900/[.65] font-red-rose py-10 w-4/5 text-center text-neutral-200 text-5xl border-neutral-900 border-2 rounded-sm'>
                                Community</h1>
                            <p className='bg-gradient-to-b from-black to-neutral-900 font-red-rose p-10 w-full text-center text-neutral-200 text-3xl  rounded-sm my-10 border-neutral-900 border-2'>
                                Since Vindi has a small player base here in NA, we need to stick together. 
                                This will serve as a place for the existing players to meet each other and also
                                for new players to find us.
                            </p>
                            <h1 className='text-neutral-200 text-4xl text-center w-full font-red-rose'>Most Active Guilds in Game</h1>
                        </div>
                        <section className=''>
                            <ul>
                                <li>Angelz</li>
                                <li></li>
                                <li></li>
                            </ul>
                        </section>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Community;